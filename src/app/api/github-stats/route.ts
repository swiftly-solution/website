import { NextResponse } from 'next/server';

// ==============================
// Revalidation Time
// ------------------------------
// The revalidate variable tells Next.js to revalidate the cache
// every 3600 seconds (1 hour) for this API route.
// ==============================
export const revalidate = 3600; // Revalidate every hour

// ==============================
// Type Definitions
// ------------------------------
// Contributor - Describes a single GitHub contributor with their
// name, username, avatar URL, and profile URL.
// GitHubStats - Full response structure including
// repository and contributor statistics.
// ==============================
interface Contributor {
  name: string;
  username: string;
  avatar: string;
  profileUrl: string;
}

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
  releases: number;
  commits: number;
  contributorList: Contributor[];
}

// ==============================
// Main GET Handler
// ------------------------------
// Handles GET requests, scrapes GitHub data,
// parses statistics and contributor info,
// and returns the stats as JSON.
// ==============================
export async function GET() {
  try {
    // ---------------------------------------
    // 1. Fetch the main GitHub repository page
    // ---------------------------------------
    const response = await fetch('https://github.com/swiftly-solution/swiftlys2', {
      headers: {
        // Some GitHub pages may restrict non-browser requests, so set a UA
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub page');
    }

    const html = await response.text();
    
    // ======================
    // Statistics Extraction
    // ======================
    // ---- Stars ----
    // Try to extract number of stars using a couple different patterns.
    const starsMatch = html.match(/(\d+)\s+stars/i) ||
                       html.match(/aria-label="(\d+)\s+users starred this repository"/i);
    const stars = starsMatch ? parseInt(starsMatch[1]) : 45;

    // ---- Forks ----
    // Try to extract number of forks using two possible patterns.
    const forksMatch = html.match(/(\d+)\s+forks/i) ||
                       html.match(/aria-label="(\d+)\s+users forked this repository"/i);
    const forks = forksMatch ? parseInt(forksMatch[1]) : 17;

    // ---- Contributors ----
    // Search for a "Contributors" section and try to extract the count.
    const contributorsMatch = html.match(/Contributors[\s\S]*?(\d+)\s+contributors/i) ||
                             html.match(/(\d+)\s+contributors/i);
    const contributors = contributorsMatch ? parseInt(contributorsMatch[1]) : 13;

    // ---- Releases ----
    // Sometimes releases appear in different forms based on the page style.
    const releasesMatch =
      html.match(/Releases(\d+)/i) ||
      html.match(/Releases[\s\S]*?(\d+)/i) ||
      html.match(/(\d+)\s+releases/i) ||
      html.match(/Release v[\s\S]*?(\d+)\s+releases/i);
    const releases = releasesMatch ? parseInt(releasesMatch[1]) : 472;

    // ---- Commits ----
    // For now, we hardcode the number of commits.
    const commits = 1158;

    // ===========================
    // Parse Contributors Listing
    // ===========================
    // We'll follow up by scraping the /graphs/contributors 
    // page for a quick recent list of contributors.
    const contributorList: Contributor[] = [];
    
    try {
      // Second fetch to contributors page
      const contributorsResponse = await fetch('https://github.com/swiftly-solution/swiftlys2/graphs/contributors', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (contributorsResponse.ok) {
        const contributorsHtml = await contributorsResponse.text();
        
        // Parse contributor avatars and usernames from the contributors page
        // Each contributor shows up with a link and avatar img.
        const contributorMatches = contributorsHtml.matchAll(
          /<a[^>]*href="\/([\w-]+)"[^>]*>[\s\S]*?<img[^>]*src="(https:\/\/avatars\.githubusercontent\.com\/[^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi
        );
        
        // We use a set to prevent duplicate contributors, and filter out junk usernames
        const seenUsernames = new Set<string>();
        for (const match of contributorMatches) {
          const username = match[1];
          const avatar = match[2];
          const name = match[3] || username;
          
          if (
            username &&
            !seenUsernames.has(username) &&
            username !== 'swiftly-solution' &&
            !['sponsors', 'settings', 'pulls', 'issues', 'blob', 'tree', 'commits'].includes(username)
          ) {
            seenUsernames.add(username);
            
            contributorList.push({
              // Remove "@" at the front of username if present, and trim extra space.
              name: name.replace(/@/, '').trim() || username,
              username: username,
              // Downscale avatar size in URL for speed if possible.
              avatar: avatar.replace(/\?v=\d+/, '?s=64'),
              profileUrl: `https://github.com/${username}`,
            });
            
            // Stop after 20 contributors for brevity and bandwidth.
            if (contributorList.length >= 20) break;
          }
        }
      }
    } catch (error) {
      // Log error to server console. 
      // If failure here, the response still succeeds with empty contributor list.
      console.error('Error fetching contributors:', error);
    }

    // ================================
    // Compose and Return API Response
    // ================================
    const stats: GitHubStats = {
      stars,
      forks,
      contributors,
      releases,
      commits,
      // Take a max of 20 contributors.
      contributorList: contributorList.slice(0, 20),
    };

    // Return computed stats as JSON response.
    return NextResponse.json(stats);

  } catch (error) {
    // If ANY failure occurs (scrape, parse, fetch, etc),
    // log it and return fallback stats.
    console.error('Error fetching GitHub stats:', error);
    
    // Return fallback values if parsing fails
    return NextResponse.json({
      stars: 45,
      forks: 17,
      contributors: 13,
      releases: 472,
      commits: 1158,
      contributorList: [],
    });
  }
}


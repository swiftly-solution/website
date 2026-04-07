"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import {
  LuGithub, LuGitCommitVertical, LuUsers,
  LuRocket, LuCode, LuServer, LuZap, LuTrendingUp,
  LuPackage, LuShare2, LuClock, LuMessageSquare,
  LuChevronDown, LuTerminal, LuStar, LuHistory,
  LuCpu, LuBinary, LuLayers
} from 'react-icons/lu';
import { BsDiscord } from 'react-icons/bs';
import { SiLua } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';

function Reveal({
  children,
  className,
  delay = 0,
  duration = 1000,
  direction = 'up',
  threshold = 0.1
}: {
  children: React.ReactNode,
  className?: string,
  delay?: number,
  duration?: number,
  direction?: 'up' | 'down' | 'left' | 'right' | 'none',
  threshold?: number
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isBelow = rect.top > window.innerHeight;

        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenSeen(true);
        } else if (isBelow && hasBeenSeen) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasBeenSeen, threshold]);

  const transforms = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: ''
  };

  const initialTransform = transforms[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[transform,opacity]",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initialTransform}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ end, suffix = '', duration = 2000, delay = 0 }: { end: number, suffix?: string, duration?: number, delay?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isBelow = rect.top > window.innerHeight;

        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setHasBeenSeen(true);
          setCount(0);

          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(end * easeOutQuart));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          setTimeout(() => requestAnimationFrame(animate), delay);
        } else if (isBelow && hasBeenSeen) {
          setHasStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasStarted, hasBeenSeen]);

  return <span ref={ref} className="tabular-nums tracking-tight">{count.toLocaleString('en-US')}{suffix}</span>;
}

function ParticleBackground({ color = "#00FEED" }: { color?: string }) {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() => Array.from({ length: 40 }), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-0 animate-float"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            opacity: 0.1 + Math.random() * 0.3
          }}
        />
      ))}
    </div>
  );
}

function TimelineItem({ year, event, description, icon: Icon }: { year: string, event: string, description: string, icon: any }) {
  return (
    <div className="relative pl-12 pb-16 border-l border-white/10 last:border-l-0">
      <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-black border-2 border-[#0070FF] flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
      </div>
      <Reveal direction="left">
        <div className="text-[#0070FF] font-mono text-sm font-bold mb-1">{year}</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="text-2xl font-black text-white">{event}</h3>
        </div>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      </Reveal>
    </div>
  );
}

export default function V1MemorialPage() {
  const [githubStats, setGithubStats] = useState({
    commits: 850,
    stars: 32,
    forks: 11,
    contributors: 13,
    contributorList: [] as any[]
  });

  useEffect(() => {
    fetch('/api/github-stats?repo=swiftly')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          commits: data.commits || 850,
          stars: data.stars || 32,
          forks: data.forks || 11,
          contributors: data.contributors || 13,
          contributorList: data.contributorList || []
        });
      })
      .catch(console.error);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#0070FF] selection:text-white overflow-x-hidden">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,255,0.15),transparent_60%)] z-0" />
        <ParticleBackground color="#0070FF" />
        <Reveal duration={1500} className="z-10 text-center px-4">
          <div className="mb-4 text-[#0070FF] font-mono text-sm tracking-[1em] uppercase opacity-80">
            V1 MEMORIAL
          </div>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-gray-600">
            SWIFTLY<span className="text-[#0070FF]">.LUA</span>
          </h1>
          <div className="text-xl md:text-3xl font-light tracking-widest mt-8 text-gray-400 max-w-2xl mx-auto">
            Today, after a 6-month extension, we say our <span className="text-[#0070FF] font-semibold">final goodbye</span> to the Lua legacy. 2023-2026.
          </div>
        </Reveal>
        <div className="absolute bottom-10 animate-bounce text-[#0070FF]">
          <LuChevronDown className="w-8 h-8 opacity-50" />
        </div>
      </section>

      <section className="min-h-[50vh] flex items-center justify-center px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-2xl md:text-4xl font-light leading-tight text-gray-200">
              Before the <span className="text-[#00FEED] font-bold">C# revolution</span>, there was a dream built on the simplicity of <span className="text-[#0070FF] font-bold italic underline underline-offset-8 decoration-[#0070FF]/50">Lua</span>.
              <br className="hidden md:block" />
              Swiftly V1 was our proof of concept, proving that Source 2 scripting could be <span className="text-[#0070FF] font-bold">fast, accessible, and community-driven</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0070FF]/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              Simple. <br />
              <span className="text-[#0070FF]">Powerful.</span> <br />
              Legacy.
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Designed for ease of entry, the Lua implementation allowed server owners to customize their CS2 environments with just a few lines of code. It wasn't just a framework; it was an invitation to build.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <LuZap className="w-8 h-8 text-[#0070FF] mb-4" />
                <h4 className="font-bold text-white mb-2">Fast Load</h4>
                <p className="text-sm text-gray-500">Script execution in milliseconds.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <LuCode className="w-8 h-8 text-[#0070FF] mb-4" />
                <h4 className="font-bold text-white mb-2">Plain Lua</h4>
                <p className="text-sm text-gray-500">No complex boilerplate required.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} direction="left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0070FF]/50 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">plugin.lua</div>
                </div>
                <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">01</span>
                    <span><span className="text-[#0070FF]">function</span> <span className="text-yellow-400">GetPluginAuthor</span>()</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">02</span>
                    <span className="pl-6"><span className="text-[#0070FF]">return</span> <span className="text-green-400">"criskkky"</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">03</span>
                    <span><span className="text-[#0070FF]">end</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">04</span>
                    <span className="opacity-0">.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">05</span>
                    <span><span className="text-[#0070FF]">function</span> <span className="text-yellow-400">GetPluginVersion</span>()</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">06</span>
                    <span className="pl-6"><span className="text-[#0070FF]">return</span> <span className="text-green-400">"v1.0.5"</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">07</span>
                    <span><span className="text-[#0070FF]">end</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">08</span>
                    <span className="opacity-0">.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">09</span>
                    <span><span className="text-[#0070FF]">function</span> <span className="text-yellow-400">GetPluginName</span>()</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">10</span>
                    <span className="pl-6"><span className="text-[#0070FF]">return</span> <span className="text-green-400">"Admins - Super Commands"</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">11</span>
                    <span><span className="text-[#0070FF]">end</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">12</span>
                    <span className="opacity-0">.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">13</span>
                    <span><span className="text-[#0070FF]">function</span> <span className="text-yellow-400">GetPluginWebsite</span>()</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">14</span>
                    <span className="pl-6"><span className="text-[#0070FF]">return</span> <span className="text-green-400">"https://github.com/criskkky/sw-supercommands"</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 select-none">15</span>
                    <span><span className="text-[#0070FF]">end</span></span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4">By The Numbers</h2>
            <p className="text-gray-400 font-mono tracking-widest uppercase text-sm">The Lua Chapter Impact</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100} className="p-12 rounded-[2rem] bg-neutral-900/50 border border-white/5 hover:border-[#0070FF]/30 transition-all text-center">
              <div className="text-[#0070FF] flex justify-center mb-6">
                <LuHistory className="w-12 h-12" />
              </div>
              <div className="text-6xl font-black mb-2">
                <AnimatedCounter end={24} suffix=" Mo" />
              </div>
              <div className="text-gray-400 font-medium">Of History</div>
            </Reveal>
            <Reveal delay={200} className="p-12 rounded-[2rem] bg-neutral-900/50 border border-white/5 hover:border-[#0070FF]/30 transition-all text-center">
              <div className="text-[#0070FF] flex justify-center mb-6">
                <LuBinary className="w-12 h-12" />
              </div>
              <div className="text-6xl font-black mb-2">
                <AnimatedCounter end={githubStats.stars} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium">Original Stars</div>
            </Reveal>
            <Reveal delay={300} className="p-12 rounded-[2rem] bg-neutral-900/50 border border-white/5 hover:border-[#0070FF]/30 transition-all text-center">
              <div className="text-[#0070FF] flex justify-center mb-6">
                <LuGitCommitVertical className="w-12 h-12" />
              </div>
              <div className="text-6xl font-black mb-2">
                <AnimatedCounter end={githubStats.commits} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium">Lua GitHub Commits</div>
            </Reveal>
          </div>
        </div>
      </section>

      {githubStats.contributorList.length > 0 && (
        <section className="py-20 px-4 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">Contributors of Swiftly V1</h2>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto pb-4">
                {githubStats.contributorList.map((c, i) => (
                  <Reveal
                    key={i}
                    delay={100 + (i * 50)}
                    direction="none"
                    duration={800}
                  >
                    <a
                      href={c.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#0070FF] transition-all duration-300 transform group-hover:scale-110 mb-2">
                        <Image
                          src={c.avatar}
                          alt={c.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-white transition-colors text-center max-w-[80px] truncate">
                        {c.name}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-32 px-4 bg-neutral-950 relative">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Journey <br /><span className="text-[#0070FF]">Timeline</span></h2>
          </Reveal>

          <div className="space-y-4">
            <TimelineItem
              year="SEPTEMBER 2023"
              event="The First Spark"
              description="Swiftly was initially announced as a C++ framework. The vision was to create a high-performance alternative to existing server modifications for the new CS2 engine."
              icon={LuMessageSquare}
            />
            <TimelineItem
              year="JANUARY 17, 2024"
              event="Lua Support Released"
              description="The Lua era officially began. Support for Lua scripts was added to the documentation, making plugin development accessible to everyone."
              icon={LuBinary}
            />
            <TimelineItem
              year="MAY 26, 2024"
              event="The Core Rewrite"
              description="Reaching v0.1.0, the team announced a massive core rewrite. C++ plugins were dropped in favor of a optimized, Lua-first architecture to better support the CS2 SDK."
              icon={LuRocket}
            />
            <TimelineItem
              year="JULY 10, 2024"
              event="The V1 Era Launch"
              description="The rewrite was completed and released. This marked the official start of the Swiftly V1 ecosystem, focused on stability and developer experience."
              icon={LuZap}
            />
            <TimelineItem
              year="OCTOBER 13, 2024"
              event="1 Year Anniversary"
              description="A year of growth. Swiftly celebrated its anniversary with the introduction of standard menus, automated SDK generation, and a growing community of 250+ members."
              icon={LuStar}
            />
            <TimelineItem
              year="DECEMBER 13, 2024"
              event="The Extension Era (v1.4.0)"
              description="The introduction of the Extension system, allowing developers to create C++ addons for Swiftly and breaking the limits of pure scripting."
              icon={LuPackage}
            />
            <TimelineItem
              year="MARCH 1, 2025"
              event="The JS/TS Experiment"
              description="Universal scripting arrived with v1.5.0, adding experimental support for JavaScript and TypeScript alongside Lua."
              icon={LuCode}
            />
            <TimelineItem
              year="AUGUST 10, 2025"
              event="The C# Revolution (v2.0.0)"
              description="A massive leap in performance. C# support was released and JavaScript support concluded as we moved towards a professional .NET ecosystem."
              icon={LuCpu}
            />
            <TimelineItem
              year="APRIL 7, 2026"
              event="Final Sunset"
              description="The 6-month legacy transition period ends today. Swiftly V1 (Lua) is officially memorialized as we look forward to the future of C#."
              icon={LuHistory}
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,255,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic">
              Evolution <span className="text-gray-500">is</span> mandatory.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We didn't leave Lua because it failed; we left it because we wanted to <span className="text-white font-bold">give you more</span>.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal direction="right" className="bg-neutral-900/40 backdrop-blur-md rounded-[3rem] p-12 border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <SiLua className="w-12 h-12 text-[#0070FF]" />
                <div>
                  <h3 className="text-2xl font-bold">V1 Lua</h3>
                  <p className="text-sm text-gray-500 font-mono">2024 - 2026</p>
                </div>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-1">✕</div>
                  <p className="text-gray-300">Limited access to deep game memory and structures.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-1">✕</div>
                  <p className="text-gray-300">Harder to maintain Type Safety in complex plugins.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-1">✕</div>
                  <p className="text-gray-300">Performance bottlenecks at extreme scale.</p>
                </li>
              </ul>
            </Reveal>

            <Reveal direction="left" delay={200} className="bg-gradient-to-br from-[#00FEED]/10 to-transparent backdrop-blur-md rounded-[3rem] p-12 border border-[#00FEED]/20">
              <div className="flex items-center gap-4 mb-8">
                <TbBrandCSharp className="w-12 h-12 text-[#00FEED]" />
                <div>
                  <h3 className="text-2xl font-bold">V2 C# (.NET)</h3>
                  <p className="text-sm text-[#00FEED]/70 font-mono">2025 - Future</p>
                </div>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00FEED]/20 text-[#00FEED] flex items-center justify-center shrink-0 mt-1">✓</div>
                  <p className="text-gray-300">Direct memory access and native-level performance.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00FEED]/20 text-[#00FEED] flex items-center justify-center shrink-0 mt-1">✓</div>
                  <p className="text-gray-300">Full Type Safety and modern IDE support (VS, Rider).</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00FEED]/20 text-[#00FEED] flex items-center justify-center shrink-0 mt-1">✓</div>
                  <p className="text-gray-300">Massive ecosystem of C# libraries and NuGet packages.</p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-40 px-4 bg-neutral-950 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <LuHistory className="w-20 h-20 text-[#0070FF] mx-auto mb-10 opacity-50" />
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              Thank You <br /> <span className="text-[#0070FF]">Lua Pioneers</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
              To every developer who wrote a plugin in Lua, every server owner who took a chance on V1, and everyone who helped us shape the vision. You are the foundation Swiftly is built upon.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-gray-600 font-mono text-xs uppercase tracking-widest">
        Swiftly Legacy Documentation • 2023-2026 • End of an Era
      </footer>
    </main>
  );
}

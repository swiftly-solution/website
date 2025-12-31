"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import { 
  LuGithub, LuGitCommitVertical, LuUsers, 
  LuRocket, LuCode, LuServer, LuZap, LuTrendingUp, 
  LuPackage, LuShare2, LuClock, LuMessageSquare, 
  LuChevronDown, LuTerminal, LuStar
} from 'react-icons/lu';
import { BsDiscord } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';

import img104531589 from './contribuitors/104531589.jpg';
import img116096829 from './contribuitors/116096829.png';
import img168598779 from './contribuitors/168598779.jpg';
import img26303007 from './contribuitors/26303007.png';
import img29248751 from './contribuitors/29248751.png';
import img29358982 from './contribuitors/29358982.jpg';
import img60744529 from './contribuitors/60744529.png';
import img61626661 from './contribuitors/61626661.png';
import img68955649 from './contribuitors/68955649.jpg';
import img73272097 from './contribuitors/73272097.png';
import img79680886 from './contribuitors/79680886.jpg';
import img9393126 from './contribuitors/9393126.jpg';
import img98771679 from './contribuitors/98771679.png';

const contributorData: Record<string, string> = {
  '104531589': 'K4ryuu',
  '116096829': 'PlaneJelly',
  '168598779': 'T3Marius',
  '26303007': 'chenbuyi2019',
  '29248751': 'oscar-wos',
  '29358982': 'agasking1337',
  '60744529': 'samyycX',
  '61626661': 'skuzzis',
  '68955649': 'BenGorrr',
  '73272097': 'blu1337',
  '79680886': 'ELDment',
  '9393126': 'himenekocn',
  '98771679': 'm3ntorsky',
};

const imageMap: Record<string, typeof img104531589> = {
  '104531589': img104531589,
  '116096829': img116096829,
  '168598779': img168598779,
  '26303007': img26303007,
  '29248751': img29248751,
  '29358982': img29358982,
  '60744529': img60744529,
  '61626661': img61626661,
  '68955649': img68955649,
  '73272097': img73272097,
  '79680886': img79680886,
  '9393126': img9393126,
  '98771679': img98771679,
};

const contributors = Object.entries(contributorData).map(([id, username]) => ({
  image: imageMap[id],
  username,
  profileUrl: `https://github.com/${username}`,
}));

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

function ParticleBackground() {
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
          className="absolute w-1 h-1 bg-[#00FEED] rounded-full opacity-0 animate-float"
          style={{
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

function MigrationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(#00FEED 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full relative">
          <div className="grid md:grid-cols-2 min-h-screen relative">
            <div className={cn(
              "relative flex flex-col items-center justify-center p-8 md:p-16",
              "transition-all duration-[3000ms] ease-out"
            )}>
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent",
                "transition-opacity duration-[3000ms]",
                isVisible ? "opacity-30" : "opacity-100"
              )} />
              <div className={cn(
                "relative z-10 text-center transition-all duration-[3000ms]",
                isVisible ? "opacity-40 scale-95" : "opacity-100 scale-100"
              )}>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-md text-gray-300 text-xs font-bold uppercase tracking-widest border border-gray-700/50 mb-8">
                    The Past
                  </div>
                </div>
                <div>
                  <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-gray-400 mb-4">
                    Goodbye
                  </h2>
                </div>
                <div>
                  <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-gray-500">
                    Lua
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
                    Support removed to focus on what matters
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(
              "absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00FEED] to-transparent",
              "transition-all duration-[3000ms] ease-out z-20",
              isVisible ? "left-full -translate-x-full" : "left-1/2 -translate-x-1/2"
            )}>
              <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00FEED]",
                "transition-all duration-[3000ms]",
                isVisible ? "scale-200 opacity-0" : "scale-100 opacity-100"
              )}>
                <div className="absolute inset-0 bg-[#00FEED] rounded-full animate-ping opacity-75" />
                <div className="absolute inset-0 bg-[#00FEED] rounded-full blur-md" />
              </div>
            </div>
            <div className={cn(
              "relative flex flex-col items-center justify-center p-8 md:p-16"
            )}>
              <div className={cn(
                "absolute inset-0 bg-gradient-to-l from-[#00FEED]/10 to-transparent",
                "transition-opacity duration-[3000ms]",
                isVisible ? "opacity-100" : "opacity-30"
              )} />
              <div className={cn(
                "relative z-10 text-center transition-all duration-[3000ms]",
                isVisible ? "opacity-100 scale-100" : "opacity-40 scale-95"
              )}>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#00FEED]/20 backdrop-blur-md text-[#00FEED] text-xs font-bold uppercase tracking-widest border border-[#00FEED]/30 mb-8">
                    The Future
                  </div>
                </div>
                <div>
                  <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white mb-4">
                    Hello
                  </h2>
                </div>
                <div>
                  <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-[#00FEED] drop-shadow-[0_0_40px_rgba(0,254,237,0.4)]">
                    C#.
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
                    Rewritten in full C# for better performance and stability
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(
            "absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black via-black/80 to-transparent",
            "transition-all duration-1000 delay-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We decided to focus exclusively on C# and removed Lua support. Swiftly was <span className="text-[#00FEED] font-semibold">completely rewritten</span> in full C# for <span className="text-[#00FEED] font-semibold">better performance</span> and <span className="text-[#00FEED] font-semibold">stability</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Rewind2025Page() {
  const [githubStats, setGithubStats] = useState({
    commits: 1158,
    releases: 472,
    stars: 45,
    forks: 17,
  });

  useEffect(() => {
    fetch('/api/github-stats')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          commits: data.commits || 1158,
          releases: data.releases || 472,
          stars: data.stars || 45,
          forks: data.forks || 17,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#00FEED] selection:text-black overflow-x-hidden">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,254,237,0.15),transparent_60%)] z-0" />
        <ParticleBackground />
        <Reveal duration={1500} className="z-10 text-center">
          <div className="mb-4 text-[#00FEED] font-mono text-sm tracking-[0.5em] uppercase opacity-80">
            SwiftlyS2 Presents
          </div>
          <h1 className="text-[15vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
            2025
          </h1>
          <div className="text-2xl md:text-4xl font-light tracking-widest mt-4 text-gray-400">
            YEAR IN <span className="text-[#00FEED] font-semibold">REWIND</span>
          </div>
        </Reveal>
        <div className="absolute bottom-10 animate-bounce text-[#00FEED]">
          <LuChevronDown className="w-8 h-8 opacity-50" />
        </div>
      </section>
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-200">
              A year of <span className="text-[#00FEED] font-bold">transformation</span>.
              <br />
              We rebuilt the foundation, empowered the community, and redefined what's possible for Source 2 servers.
            </p>
          </Reveal>
        </div>
      </section>
      <MigrationSection />
      <section className="py-32 px-4 relative bg-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black,transparent_20%,transparent_80%,black)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24 text-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              Open Source <span className="text-[#00FEED]">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built by the community, for the community. The numbers speak for themselves.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            <Reveal delay={100} className="lg:col-span-8 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 h-full">
                <div>
                  <div className="flex items-center gap-3 text-[#00FEED] mb-4">
                    <LuGitCommitVertical className="w-6 h-6" />
                    <span className="font-mono text-sm tracking-wider uppercase">Commits</span>
                  </div>
                  <div className="text-7xl md:text-9xl font-black text-white leading-none">
                    <AnimatedCounter end={githubStats.commits} />
                  </div>
                </div>
                <div className="text-right text-gray-400 max-w-xs">
                  Lines of code pushed, bugs squashed, and features shipped across 12 months.
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-4 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 text-[#00FEED] mb-8">
                <LuRocket className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Releases</span>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-black text-white mb-2">
                  <AnimatedCounter end={472} />
                </div>
                <div className="text-sm text-gray-500">
                  That's ~<span className="text-[#00FEED]">39 releases</span> per month.
                </div>
              </div>
            </Reveal>
            <Reveal delay={300} className="lg:col-span-6 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 text-[#00FEED] mb-8">
                <LuStar className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Stars</span>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-black text-white mb-2">
                  <AnimatedCounter end={githubStats.stars} />
                </div>
                <div className="text-sm text-gray-500">
                  GitHub stars from the <span className="text-[#00FEED]">community</span>.
                </div>
              </div>
            </Reveal>
            <Reveal delay={400} className="lg:col-span-6 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 text-[#00FEED] mb-8">
                <LuGithub className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Forks</span>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-black text-white mb-2">
                  <AnimatedCounter end={githubStats.forks} />
                </div>
                <div className="text-sm text-gray-500">
                  Repository <span className="text-[#00FEED]">forks</span>.
                </div>
              </div>
            </Reveal>
            <Reveal delay={500} className="lg:col-span-12 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FEED]/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                   <div className="flex items-center gap-3 text-[#00FEED] mb-4">
                     <LuCode className="w-6 h-6" />
                     <span className="font-mono text-sm tracking-wider uppercase">Codebase</span>
                   </div>
                   <div className="text-6xl md:text-8xl font-black text-white mb-6">
                     <AnimatedCounter end={527533} />
                   </div>
                   <p className="text-gray-300 text-lg">
                     Lines of modern, type-safe C# code. A completely new architecture designed for stability and performance.
                   </p>
                 </div>
                 <div className="relative h-64 bg-black/50 rounded-xl border border-white/10 p-6 font-mono text-xs text-gray-400 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="space-y-1 opacity-70">
                      <div className="flex"><span className="text-[#00FEED] mr-2">using</span> Microsoft.Extensions.DependencyInjection;</div>
                      <div className="flex"><span className="text-[#00FEED] mr-2">using</span> SwiftlyS2.Shared.Plugins;</div>
                      <div className="flex"><span className="text-[#00FEED] mr-2">using</span> SwiftlyS2.Shared;</div>
                      <div className="flex"></div>
                      <div className="flex"><span className="text-[#00FEED] mr-2">namespace</span> PluginId;</div>
                      <div className="flex"></div>
                      <div className="flex">[<span className="text-yellow-300">PluginMetadata</span>(Id = <span className="text-green-400">"PluginId"</span>, Version = <span className="text-green-400">"PluginVersion"</span>, ...)]</div>
                      <div className="flex pl-4"><span className="text-purple-400 mr-2">public partial class</span> <span className="text-yellow-300">PluginId</span> : <span className="text-green-400">BasePlugin</span> {`{`}</div>
                      <div className="flex pl-8"><span className="text-purple-400 mr-2">public</span> PluginId(<span className="text-green-400">ISwiftlyCore</span> core) : <span className="text-[#00FEED]">base</span>(core)</div>
                      <div className="flex pl-8">{`{`}</div>
                      <div className="flex pl-8">{`}`}</div>
                      <div className="flex pl-8"><span className="text-purple-400 mr-2">public override void</span> Load(<span className="text-purple-400">bool</span> hotReload)</div>
                      <div className="flex pl-8">{`{`}</div>
                      <div className="flex pl-12"><span className="text-gray-500">// The future is here</span></div>
                      <div className="flex pl-8">{`}`}</div>
                      <div className="flex pl-4">{`}`}</div>
                    </div>
                 </div>
               </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-32 px-4 relative bg-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black,transparent_20%,transparent_80%,black)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24 text-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              Community <span className="text-[#00FEED]">Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A thriving Discord community where developers share knowledge, report bugs, and build together.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            <Reveal delay={100} className="lg:col-span-8 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 h-full">
                <div>
                  <div className="flex items-center gap-3 text-[#00FEED] mb-4">
                    <BsDiscord className="w-6 h-6" />
                    <span className="font-mono text-sm tracking-wider uppercase">Members</span>
                  </div>
                  <div className="text-7xl md:text-9xl font-black text-white leading-none">
                    <AnimatedCounter end={309} />
                  </div>
                </div>
                <div className="text-right text-gray-400 max-w-xs">
                  Gained in just <span className="text-[#00FEED]">3 months</span>. Growing 3.35x faster than the old Discord server.
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-4 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#00FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 text-[#00FEED] mb-8">
                <LuMessageSquare className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Messages</span>
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-black text-white mb-2">
                  <AnimatedCounter end={7770} />
                </div>
                <div className="text-sm text-gray-500">
                  Knowledge shared, bugs reported, and <span className="text-[#00FEED]">friendships made</span>.
                </div>
              </div>
            </Reveal>
            <Reveal delay={300} className="lg:col-span-12 bg-neutral-900/50 border border-white/5 p-10 rounded-3xl hover:border-[#00FEED]/30 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FEED]/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                   <div className="flex items-center gap-3 text-[#00FEED] mb-4">
                     <LuTrendingUp className="w-6 h-6" />
                     <span className="font-mono text-sm tracking-wider uppercase">Growth Rate</span>
                   </div>
                   <div className="text-6xl md:text-8xl font-black text-white mb-6">
                     3.35x
                   </div>
                   <p className="text-gray-300 text-lg">
                     In almost <span className="text-[#00FEED] font-semibold">3 months</span>, we reached <span className="text-[#00FEED] font-semibold">83.5%</span> of what the old Discord server achieved in <span className="text-[#00FEED] font-semibold">1 year</span>.
                   </p>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#00FEED]/10 backdrop-blur-md p-6 rounded-2xl border border-[#00FEED]/20 text-center">
                      <div className="text-3xl font-black text-[#00FEED] mb-2">309</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">New Discord Server</div>
                      <div className="text-xs text-gray-500 mt-1">(3 months)</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                      <div className="text-3xl font-black text-gray-400 mb-2">370</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">Old Discord Server</div>
                      <div className="text-xs text-gray-600 mt-1">(12 months)</div>
                    </div>
                    <div className="col-span-2 bg-neutral-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
                      <div className="text-lg font-bold text-white mb-1">103 members/month</div>
                      <div className="text-xs text-gray-400">vs ~31 members/month</div>
                    </div>
                 </div>
               </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-32 px-4 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-12 border-l-4 border-[#00FEED] pl-6">
              Plugin <span className="text-gray-500">Ecosystem</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-900 border border-white/5 p-8 rounded-3xl hover:bg-neutral-800 transition-colors">
                 <LuPackage className="w-10 h-10 text-[#00FEED] mb-6" />
                 <div className="text-5xl font-black mb-2"><AnimatedCounter end={66} /></div>
                 <div className="text-gray-400 font-medium">New Plugins</div>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-8 rounded-3xl hover:bg-neutral-800 transition-colors">
                 <LuClock className="w-10 h-10 text-[#00FEED] mb-6" />
                 <div className="text-5xl font-black mb-2"><AnimatedCounter end={2} /></div>
                 <div className="text-gray-400 font-medium">Pending Approval</div>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-8 rounded-3xl hover:bg-neutral-800 transition-colors">
                 <LuShare2 className="w-10 h-10 text-[#00FEED] mb-6" />
                 <div className="text-5xl font-black mb-2"><AnimatedCounter end={3} /></div>
                 <div className="text-gray-400 font-medium">Other Shared Plugins</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative">
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FEED] to-transparent opacity-50" />
               <div className="relative z-10">
                 <h3 className="text-3xl md:text-5xl font-black mb-10">
                   <AnimatedCounter end={contributors.length} /> <span className="text-gray-500">Contributors</span>
                 </h3>
                 <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto pb-4">
                    {contributors.map((c, i) => (
                      <Reveal 
                        key={i} 
                        delay={300 + (i * 100)} 
                        direction="left"
                        duration={800}
                      >
                        <a 
                          href={c.profileUrl} 
                          target="_blank" 
                          rel="noopener"
                          className="group flex flex-col items-center"
                        >
                           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#00FEED] transition-all duration-300 transform group-hover:scale-110 mb-2">
                             <Image 
                               src={c.image} 
                               alt={c.username} 
                               width={64} 
                               height={64} 
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <span className="text-xs text-gray-400 group-hover:text-[#00FEED] transition-colors mt-1 text-center max-w-[80px] truncate">
                             {c.username}
                           </span>
                        </a>
                      </Reveal>
                    ))}
                 </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-32 px-4 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              2025 <span className="text-[#00FEED]">Highlights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The milestones that defined our journey from beta to release
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal direction="right" className="space-y-6">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuRocket className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Full Release</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                November 15, 2025
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                After months of beta testing and hard work, SwiftlyS2 officially released, marking the end of beta status and the beginning of a new era.
              </p>
            </Reveal>
            <Reveal delay={200} direction="left" className="relative">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="text-center space-y-4">
                  <LuRocket className="w-16 h-16 text-[#00FEED] mx-auto animate-pulse" />
                  <div className="text-4xl font-black text-[#00FEED]">Released</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">Beta Status Removed</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal delay={200} direction="left" className="relative order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="text-center space-y-4">
                  <LuTerminal className="w-16 h-16 text-[#00FEED] mx-auto" />
                  <div className="text-3xl font-black text-[#00FEED]">Unprecedented</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">Customization</div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuTerminal className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Menu API</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Modern Menu API
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                A revolutionary menu system with customization never-seen before in a framework, giving developers unprecedented control over in-game UIs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal direction="right" className="space-y-6">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuCode className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Technology</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                .NET 10 Upgrade
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Upgraded to .NET 10 for plugins and SwiftlyS2 Managed, maintaining compatibility with .NET 8 plugins while bringing the latest performance improvements.
              </p>
            </Reveal>
            <Reveal delay={200} direction="left" className="relative">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="text-center space-y-4">
                  <LuCode className="w-16 h-16 text-[#00FEED] mx-auto" />
                  <div className="text-5xl font-black text-[#00FEED]">.NET 10</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">Latest Technology</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal delay={200} direction="left" className="relative order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="text-center space-y-4">
                  <LuServer className="w-16 h-16 text-[#00FEED] mx-auto" />
                  <div className="text-3xl font-black text-[#00FEED]">Optimized</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">Minimal Overhead</div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuServer className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Performance</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Stabilized Native Code
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Optimized native code for minimal overhead and maximum performance, ensuring SwiftlyS2 has the smallest possible impact on server resources.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal direction="right" className="space-y-6">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuZap className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Independence</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                SwiftlyS2-Loader
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Developed our own loader, eliminating the dependency on Metamod:Source and allowing SwiftlyS2 to load even when Metamod isn't working.
              </p>
            </Reveal>
            <Reveal delay={200} direction="left" className="relative">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="text-center space-y-4">
                  <LuZap className="w-16 h-16 text-[#00FEED] mx-auto animate-pulse" />
                  <div className="text-3xl font-black text-[#00FEED]">Standalone</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">No Dependencies</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal delay={200} direction="left" className="relative order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-[#00FEED]/30 p-12 rounded-3xl">
                <div className="space-y-4">
                  <div className="bg-[#00FEED]/10 backdrop-blur-md p-4 rounded-xl border border-[#00FEED]/20 text-center">
                    <div className="text-lg font-bold text-[#00FEED]">CounterStrikeSharp</div>
                  </div>
                  <div className="bg-[#00FEED]/10 backdrop-blur-md p-4 rounded-xl border border-[#00FEED]/20 text-center">
                    <div className="text-lg font-bold text-[#00FEED]">CS2Fixes</div>
                  </div>
                  <div className="bg-[#00FEED]/10 backdrop-blur-md p-4 rounded-xl border border-[#00FEED]/20 text-center">
                    <div className="text-lg font-bold text-[#00FEED]">MultiAddonManager</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3 text-[#00FEED]">
                <LuTrendingUp className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Compatibility</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Framework Compatibility
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Tested and verified compatibility with CounterStrikeSharp, CS2Fixes, and MultiAddonManager, enabling seamless transitions for developers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-40 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={200}>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              See you in <span className="text-[#00FEED]">2026</span>
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Thank you for being part of this incredible <span className="text-[#00FEED] font-semibold">2025 journey</span>. Your feedback, bug reports, and support made all the difference.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                In 2026, we'll continue building a better framework for <span className="text-[#00FEED] font-semibold">CS2 server owners</span>, <span className="text-[#00FEED] font-semibold">developers</span>, and <span className="text-[#00FEED] font-semibold">players</span>. The best is yet to come.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import { useRef, useState, useEffect } from "react";

interface StatItem {
  target: number;
  suffix: string;
  isCustom?: boolean;
  customText?: string;
  label: string;
}

const STATS_CONFIG: StatItem[] = [
  {
    target: 10,
    suffix: "+",
    label: "Years of excellence",
  },
  {
    target: 500,
    suffix: "+",
    label: "Brands & sites launched",
  },
  {
    target: 99,
    suffix: "%",
    label: "Client satisfaction rate",
  },
  {
    target: 24,
    suffix: "/7",
    isCustom: true,
    customText: "24/7",
    label: "Dedicated support & uptime",
  },
];

function AnimatedCounter({ target, suffix, isCustom, customText, duration = 2000, trigger }: { target: number; suffix: string; isCustom?: boolean; customText?: string; duration?: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, trigger]);

  if (isCustom && customText) {
    return (
      <span className="inline-flex items-center">
        <span>{count}{suffix}</span>
      </span>
    );
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function InteractiveWorldLeaderStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#030712] text-white py-14 md:py-18 overflow-hidden select-none font-sans w-full shadow-2xl border-y border-[#00b4d8]/30"
    >
      {/* Cyan Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_75%)] blur-[120px] pointer-events-none" />

      {/* Cyan Dot matrix texture matching user shared dark image */}
      <div 
        className="absolute inset-0 opacity-35 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `30px 30px`
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 z-10 space-y-10">
        {/* ELEGANT SECTION HEADER */}
        <div className="text-center space-y-3">
          <h2 className="font-serif text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Proven track record. Scalable results. Zero compromises.
          </h2>
        </div>

        {/* 4 ANIMATED STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-0 md:divide-y-0 md:divide-x divide-[#00b4d8]/30 pt-2">
          {STATS_CONFIG.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center p-4 md:px-6 space-y-2 group hover:scale-105 transition-transform duration-300 ${
                i > 0 ? "md:pl-8" : ""
              }`}
            >
              <div className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,180,216,0.3)] leading-none">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isCustom={stat.isCustom}
                  customText={stat.customText}
                  duration={2200}
                  trigger={isVisible}
                />
              </div>
              <div className="text-xs sm:text-sm md:text-base font-mono font-extrabold uppercase tracking-widest text-[#00b4d8] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

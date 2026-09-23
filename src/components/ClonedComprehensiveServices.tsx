import { useState, useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface ServiceTile {
  id: string;
  title: string;
  link: string;
  gradient: string;
  icon: ReactNode;
}


/* 12 Core Author Services */
const PLAYFUL_12_SERVICES: ServiceTile[] = [
  {
    id: "01",
    title: "Book Planning",
    link: "/process",
    gradient: "from-[#e0f2fe]/80 via-[#dbeafe]/80 to-[#bae6fd]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="12" width="30" height="40" rx="0" strokeWidth="2.5" />
        <rect x="12" y="18" width="30" height="40" rx="0" strokeDasharray="4 3" />
        <line x1="24" y1="24" x2="40" y2="24" />
        <line x1="24" y1="32" x2="40" y2="32" />
        <line x1="24" y1="40" x2="34" y2="40" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Ghostwriting",
    link: "/ghostwriting",
    gradient: "from-[#eef9ff]/80 via-[#e0f2fe]/80 to-[#c7e9fe]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="20" strokeDasharray="4 3" />
        <path d="M20 44 L44 20 L48 24 L24 48 Z" strokeWidth="2.5" />
        <path d="M16 48 L22 48 L22 42 Z" fill="currentColor" fillOpacity="0.3" />
        <line x1="26" y1="26" x2="38" y2="38" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Editing",
    link: "/editing",
    gradient: "from-[#dbeafe]/80 via-[#c0e6ff]/80 to-[#99d6ff]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 12 C16 12, 28 12, 38 12 C44 12, 48 16, 48 22 V46 C48 50, 44 54, 38 54 H18 C14 54, 12 50, 12 44 V16 C12 12, 16 12, 16 12 Z" strokeWidth="2.5" />
        <line x1="20" y1="22" x2="38" y2="22" />
        <line x1="20" y1="30" x2="40" y2="30" />
        <line x1="20" y1="38" x2="32" y2="38" />
        <path d="M42 34 L48 48 L34 42 Z" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Book Proposals and Queries",
    link: "/process",
    gradient: "from-[#eef9ff]/80 via-[#d6edfd]/80 to-[#b3e0fc]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="10" width="36" height="44" rx="0" strokeWidth="2.5" />
        <line x1="22" y1="20" x2="42" y2="20" />
        <line x1="22" y1="28" x2="42" y2="28" />
        <line x1="22" y1="36" x2="34" y2="36" />
        <path d="M22 44 C26 40, 34 48, 42 42" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Publishing Navigation",
    link: "/service/self-publishing",
    gradient: "from-[#e0f2fe]/80 via-[#cbeafb]/80 to-[#a3daf8]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20 C20 15, 32 15, 32 24 V52 C32 43, 20 43, 10 48 Z" strokeWidth="2.5" />
        <path d="M54 20 C44 15, 32 15, 32 24 V52 C32 43, 44 43, 54 48 Z" strokeWidth="2.5" />
        <line x1="32" y1="24" x2="32" y2="52" strokeWidth="2.5" />
        <line x1="16" y1="28" x2="26" y2="28" />
        <line x1="16" y1="34" x2="26" y2="34" />
        <line x1="38" y1="28" x2="48" y2="28" />
        <line x1="38" y1="34" x2="48" y2="34" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Bestseller List Targeting",
    link: "/marketing",
    gradient: "from-[#eef9ff]/80 via-[#e0f2fe]/80 to-[#bde4fd]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="12" width="28" height="40" rx="0" strokeWidth="2.5" />
        <circle cx="32" cy="28" r="9" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <polygon points="32 21 34.5 26 40 27 36 30.5 37.5 36 32 33 26.5 36 28 30.5 24 27 29.5 26" strokeWidth="1.8" fill="currentColor" fillOpacity="0.4" />
        <line x1="24" y1="44" x2="40" y2="44" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Beta Reader Testing",
    link: "/process",
    gradient: "from-[#e0f2fe]/80 via-[#d6edfd]/80 to-[#aee1fc]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="18" r="8" strokeWidth="2.5" />
        <path d="M16 50 C16 38, 24 32, 32 32 C40 32, 48 38, 48 50" strokeWidth="2.5" />
        <path d="M20 40 C 26 36, 32 40, 32 40 C 32 40, 38 36, 44 40" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Book Coaching",
    link: "/process",
    gradient: "from-[#eef9ff]/80 via-[#e2f3fe]/80 to-[#c5e6fe]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="10" width="36" height="24" rx="0" strokeWidth="2.5" />
        <line x1="32" y1="34" x2="32" y2="52" strokeWidth="2.5" />
        <line x1="20" y1="52" x2="44" y2="52" strokeWidth="2.5" />
        <circle cx="22" cy="44" r="3" fill="currentColor" />
        <circle cx="32" cy="44" r="3" fill="currentColor" />
        <circle cx="42" cy="44" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "09",
    title: "Writers Retreats",
    link: "/process",
    gradient: "from-[#dbeafe]/80 via-[#c3e7ff]/80 to-[#9cd7ff]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 46 C 18 36, 22 22, 32 14 C 42 22, 46 36, 42 46 Z" strokeWidth="2.5" />
        <path d="M26 34 C 32 26, 38 34, 38 34" strokeWidth="2" />
        <circle cx="32" cy="22" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "10",
    title: "Agent Introductions",
    link: "/process",
    gradient: "from-[#eef9ff]/80 via-[#e0f2fe]/80 to-[#b3e0fc]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 36 L24 24 L36 32 L44 24 L52 32" strokeWidth="2.5" />
        <path d="M24 36 L32 44 L40 36" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="4" strokeWidth="2" />
        <circle cx="46" cy="18" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "11",
    title: "Direct Submissions to Publishers",
    link: "/process",
    gradient: "from-[#e0f2fe]/80 via-[#d6edfd]/80 to-[#b1e0fc]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18 C24 14, 32 14, 32 22 V48 C32 40, 24 40, 14 44 Z" strokeWidth="2.5" />
        <path d="M50 18 C40 14, 32 14, 32 22 V48 C32 40, 40 40, 50 44 Z" strokeWidth="2.5" />
        <path d="M24 46 L32 52 L40 46" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: "12",
    title: "Cultural Accuracy Editing",
    link: "/editing",
    gradient: "from-[#eef9ff]/80 via-[#e2f3fe]/80 to-[#c7e9fe]/80",
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-[#00b4d8]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="18" r="7" strokeWidth="2.5" />
        <path d="M14 48 C14 38, 20 32, 28 32 C36 32, 42 38, 42 48" strokeWidth="2.5" />
        <circle cx="46" cy="22" r="7" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <polyline points="42 22 45 25 50 19" strokeWidth="2.2" />
      </svg>
    ),
  },
];

export default function ClonedComprehensiveServices() {
  const [animatingIndex, setAnimatingIndex] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Cycle the active border 1-by-1 sequentially across tiles (tile 0 -> 1 -> 2 -> ... -> 11)
  useEffect(() => {
    if (hoveredIdx !== null) return;

    const interval = setInterval(() => {
      setAnimatingIndex((prev) => (prev + 1) % PLAYFUL_12_SERVICES.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [hoveredIdx]);

  return (
    <section id="services" className="relative bg-gradient-to-br from-[#d9f5fb] via-[#e6f9fc] to-[#ccf2f9] text-slate-900 py-16 md:py-24 select-none w-full border-t border-b border-[#00b4d8]/20 font-sans overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center">
      
      {/* Sharp Rectangular Marching Border Animation */}
      <style>{`
        @keyframes sharpRectMarch {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 40; }
        }
        .sharp-active-border {
          stroke-dasharray: 12, 12;
          animation: sharpRectMarch 1.6s linear infinite;
        }
      `}</style>

      {/* Hero Dot Matrix Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Soft Cyan Radial Highlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[radial-gradient(circle,rgba(0,180,216,0.2)_0%,transparent_75%)] blur-[130px]" />
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-16 space-y-12 z-10">
        
        {/* Full Screen Section Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#00b4d8]/25">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0c2340] tracking-tight leading-none">
              Bespoke Solutions &amp; Publishing Capabilities
            </h2>
          </div>

          <div className="shrink-0 text-[#00b4d8] font-mono text-xs uppercase tracking-widest flex items-center gap-2 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] animate-pulse" />
            <span>FULL END-TO-END PUBLISHING MATRIX</span>
          </div>
        </div>

        {/* COMBINED SHARP RECTANGULAR GRID MATRIX TABLE (NO CIRCULAR / ROUNDED BORDERS) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-2 border-[#00b4d8]/40 bg-white/50 backdrop-blur-md shadow-2xl overflow-hidden rounded-none divide-x divide-y divide-[#00b4d8]/30">
          {PLAYFUL_12_SERVICES.map((service, i) => {
            const isHovered = hoveredIdx === i;
            const isAnimating = (hoveredIdx !== null ? isHovered : animatingIndex === i);

            return (
              <Link
                key={service.id}
                to={service.link}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative p-6 md:p-8 flex flex-col items-center justify-between text-center space-y-5 rounded-none transition-all duration-300 bg-gradient-to-br ${service.gradient} ${
                  isHovered
                    ? "bg-white shadow-[inset_0_0_35px_rgba(0,180,216,0.3)] z-20"
                    : isAnimating
                    ? "bg-[#e0f2fe]/90 z-10"
                    : "hover:bg-white/90"
                }`}
              >
                {/* SVG Sharp Straight Rectangular Border Frame for Active Tile */}
                {isAnimating && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-none overflow-hidden" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="0"
                      fill="none"
                      stroke="#00b4d8"
                      strokeWidth="3.5"
                      className="sharp-active-border"
                    />
                  </svg>
                )}

                {/* Number Watermark Badge */}
                <div className="w-full flex items-center justify-between text-xs font-mono font-bold text-[#00b4d8]/60 pb-1">
                  <span>SERVICE</span>
                  <span>{service.id}</span>
                </div>

                {/* Centered Brand Cyan Vector Icon */}
                <div className={`p-3.5 md:p-4 rounded-none bg-white shadow-sm border border-[#00b4d8]/40 group-hover:scale-110 group-hover:border-[#00b4d8] group-hover:shadow-[0_8px_20px_rgba(0,180,216,0.3)] transition-all duration-300 z-10 ${
                  isAnimating ? "border-[#00b4d8] scale-105" : ""
                }`}>
                  {service.icon}
                </div>

                {/* Centered Dark Navy Title */}
                <h3 className={`font-serif text-base md:text-lg font-bold leading-snug transition-colors z-10 ${
                  isAnimating ? "text-[#00b4d8]" : "text-[#0c2340]"
                }`}>
                  {service.title}
                </h3>

                {/* LEARN MORE CTA BUTTON — SHARP RECTANGULAR STYLE ON HOVER */}
                <div className={`w-full pt-2 flex items-center justify-center transition-all duration-300 z-10 ${
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none font-mono text-[11px] font-bold uppercase tracking-wider bg-[#00b4d8] text-white shadow-md">
                    <span>LEARN MORE</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

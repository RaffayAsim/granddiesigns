import { useEffect, useRef } from "react";

const COL1 = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5] as const;
const COL2 = [2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1] as const;
const COL3 = [4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3] as const;
const COL4 = [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0] as const;

function PortfolioCard({ id }: { id: number }) {
  switch (id) {
    case 0:
      // Dr. Ziauddin Hospital Slate Crest Card
      return (
        <div className="book-cover-item bg-[#121314] flex flex-col justify-between p-4 border border-white/5 text-left">
          <div className="flex justify-between items-center text-[7px] font-mono tracking-widest text-white/40">
            <span>KHI - PK</span>
            <span>ESTD 1957</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6 flex-1">
            <div className="w-14 h-14 rounded-full border border-[#eae5d6]/30 flex items-center justify-center mb-3">
              <div className="w-11 h-11 rounded-full border border-dashed border-[#eae5d6]/20 flex items-center justify-center">
                <span className="text-[#eae5d6]/70 font-serif text-sm">Z</span>
              </div>
            </div>
            <h4 className="text-[#eae5d6] font-serif text-[11px] uppercase tracking-[0.25em] text-center leading-relaxed max-w-[120px]">
              Dr. Ziauddin Hospital
            </h4>
          </div>
          <div className="border-t border-white/5 pt-2 text-[6px] font-mono text-center text-white/30 uppercase tracking-wider">
            ✶ identity design system
          </div>
        </div>
      );

    case 1:
      // Recover, Rebuild, Renew Cream Brochure
      return (
        <div className="book-cover-item bg-[#fcfaf5] flex flex-col justify-between p-4 border border-black/5 text-[#991b1b] text-left">
          <div className="text-[7px] font-mono tracking-widest text-[#991b1b]/60 uppercase">
            ✶ rehab service offer
          </div>
          <div className="flex flex-col justify-center flex-1 py-4">
            <h3 className="font-serif text-[1.2rem] font-bold leading-[1] tracking-tight uppercase text-[#991b1b]">
              RECOVER,<br />REBUILD,<br />RENEW.
            </h3>
            <div className="w-full h-[0.5px] bg-[#991b1b]/20 my-2" />
            <p className="text-[7px] text-[#475569]/80 font-mono uppercase tracking-wider leading-relaxed">
              Expert physiotherapy and personalized care to help you regain strength and independence.
            </p>
          </div>
          {/* Simple heart rate line SVG */}
          <div className="w-full h-5 flex items-center">
            <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#991b1b]/40 fill-none stroke-[0.8px]">
              <path d="M0,10 L30,10 L35,3 L40,17 L45,10 L55,10 L60,0 L65,20 L70,10 L100,10" />
            </svg>
          </div>
        </div>
      );

    case 2:
      // Your Liver Works Blue Poster
      return (
        <div className="book-cover-item bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex flex-col justify-between p-4 border border-white/10 text-white text-left">
          <div className="text-[7px] font-mono tracking-widest text-white/70 uppercase">
            ✶ health awareness
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-2">
            {/* Cute cartoon liver organs vector SVG */}
            <svg viewBox="0 0 60 40" className="w-16 h-10 fill-white/90">
              <path d="M10,25 C10,15 25,5 35,5 C45,5 50,15 50,22 C50,30 38,35 25,35 C15,35 10,30 10,25 Z" />
              <circle cx="28" cy="18" r="1.5" fill="#0ea5e9" />
              <circle cx="34" cy="18" r="1.5" fill="#0ea5e9" />
              <path d="M29,22 Q31,24 33,22" stroke="#0ea5e9" strokeWidth="0.8" fill="none" />
            </svg>
            <h4 className="font-sans font-black text-[10px] tracking-tight uppercase text-center text-white mt-2 leading-none">
              YOUR LIVER WORKS
            </h4>
            <span className="text-[7px] font-mono tracking-widest text-[#000]/30 uppercase text-center mt-1">
              to keep you healthy
            </span>
          </div>
          <div className="text-[6px] font-mono text-center text-white/80 uppercase tracking-wider">
            ✶ NOW IT'S YOUR TURN TO CARE
          </div>
        </div>
      );

    case 3:
      // Nipah Virus Dark Alert Poster
      return (
        <div className="book-cover-item bg-[#0a0a0c] flex flex-col justify-between p-4 border border-red-950 text-left text-white">
          <div className="text-[7px] font-mono text-red-500 uppercase tracking-widest flex justify-between">
            <span>ALERT</span>
            <span>✶ DR. ZIAUDDIN HOSPITAL</span>
          </div>
          <div className="flex-1 flex flex-col justify-center py-4">
            <span className="bg-red-600 text-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider w-max mb-1">
              NIPAH
            </span>
            <h3 className="font-serif text-[1rem] uppercase tracking-wide leading-none text-red-500">
              VIRUS INFECTION
            </h3>
            <div className="w-full h-px bg-red-950 my-2" />
            <ul className="text-[5.5px] font-mono text-white/50 uppercase tracking-wider space-y-1">
              <li>• Avoid raw date palm sap</li>
              <li>• Keep pigs & bats away</li>
              <li>• Wash fruits thoroughly</li>
            </ul>
          </div>
          <div className="text-[6px] font-mono text-red-500/70 tracking-widest uppercase">
            ✶ PUBLIC MEDICAL REPORT
          </div>
        </div>
      );

    case 4:
      // Designer at work Grid Sheet
      return (
        <div className="book-cover-item bg-[#faf9f4] flex flex-col justify-between p-4 border border-black/5 text-slate-800 text-left">
          <div className="text-[7px] font-mono text-slate-400 tracking-wider">
            JOURNAL / ISSUE 26
          </div>
          <div className="flex-1 flex flex-col justify-center py-4">
            <span className="text-xs text-[#a3e635] font-serif italic mb-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
              — designer at work,
            </span>
            <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-slate-800 leading-tight">
              The Portfolio Layout
            </h3>
            <div className="border-t border-dashed border-slate-200 my-2" />
            <div className="space-y-1.5">
              <div className="h-1 bg-slate-200 w-full" />
              <div className="h-1 bg-slate-200 w-5/6" />
              <div className="h-1 bg-slate-200 w-4/5" />
            </div>
          </div>
          <div className="text-[6px] font-mono text-slate-400 text-center uppercase tracking-widest">
            ✶ typographic grid specimen
          </div>
        </div>
      );

    case 5:
      // Digital App UI Violet Mockup
      return (
        <div className="book-cover-item bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] flex flex-col justify-between p-4 border border-white/10 text-white text-left">
          <div className="text-[7px] font-mono text-white/70 tracking-widest uppercase flex justify-between">
            <span>APP PREVIEW</span>
            <span>✶ IOS COMPLIANT</span>
          </div>
          <div className="flex-1 flex items-center justify-center py-2">
            {/* Minimal Smartphone Screen Mockup */}
            <div className="w-[84px] h-[120px] rounded-lg border border-white/20 bg-black/40 p-1 flex flex-col justify-between">
              <div className="w-10 h-1 bg-white/20 rounded-full mx-auto" />
              <div className="flex-1 flex flex-col justify-center items-center my-1 bg-white/5 rounded p-1">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-red-500 animate-pulse">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-1 w-8 bg-white/20 rounded-full mt-1.5" />
                <div className="h-1 w-6 bg-white/10 rounded-full mt-1" />
              </div>
              <div className="w-4 h-4 rounded-full border border-white/20 mx-auto" />
            </div>
          </div>
          <div className="text-[6px] font-mono text-white/80 uppercase tracking-widest text-center">
            ✶ healthcare application UI
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function PremiumStoryCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#030303] overflow-hidden select-none">
      <style>{`
        /* 3D Wall Perspective Grid */
        .book-wall-perspective {
          position: absolute;
          inset: -15% -5%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          transform: perspective(1200px) rotateX(var(--rx, 14deg)) rotateY(var(--ry, -20deg)) rotateZ(8deg) scale(1.08);
          transition: transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1);
          transform-style: preserve-3d;
          z-index: 2;
        }

        @media (min-width: 640px) {
          .book-wall-perspective {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 768px) {
          .book-wall-perspective {
            grid-template-columns: repeat(4, 1fr);
            gap: 2.5rem;
          }
        }

        /* Marquee Columns */
        .marquee-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: max-content;
          transform-style: preserve-3d;
        }

        @media (min-width: 640px) {
          .marquee-col {
            gap: 2rem;
          }
        }

        /* Infinite Scrolling Keyframes */
        .scroll-up-animation {
          animation: scrollUp 36s linear infinite;
        }
        .scroll-down-animation {
          animation: scrollDown 36s linear infinite;
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        /* Pause all columns on container hover */
        .book-wall-perspective:hover .marquee-col {
          animation-play-state: paused;
        }

        /* Book Cover / Portfolio Mockup Plates */
        .book-cover-item {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
          border-radius: 6px 10px 10px 6px;
          box-shadow: 
            0 12px 24px -10px rgba(0, 0, 0, 0.4),
            0 4px 8px -4px rgba(0, 0, 0, 0.2);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          transform: translateZ(0px);
          opacity: 0.38;
          filter: grayscale(20%) brightness(95%);
        }

        /* Soft physical hardcover spine hinge fold */
        .book-cover-item::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(90deg, rgba(0,0,0,0.25), rgba(255,255,255,0.06), rgba(0,0,0,0.25));
          z-index: 10;
        }

        /* Dynamic lighting specular sweep */
        .book-cover-item::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 6px 10px 10px 6px;
          background: linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%);
          pointer-events: none;
          z-index: 5;
        }

        /* Cover interactive hover lifting */
        .book-cover-item:hover {
          transform: translateZ(60px) scale(1.08);
          opacity: 1.0;
          filter: grayscale(0%) brightness(100%);
          box-shadow: 
            0 35px 65px -15px rgba(0, 0, 0, 0.7),
            0 0 0 1.5px rgba(163, 230, 53, 0.5);
          z-index: 50;
        }

        /* Radial gradient overlay mask for legibility - dark theme */
        .editorial-mask {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, oklch(0.08 0.01 260 / 0.75) 20%, oklch(0.08 0.01 260 / 0.96) 80%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      {/* Grid columns of Book Covers / Portfolio Mockups */}
      <div className="book-wall-perspective">
        {/* Column 1: Scrolls Up */}
        <div className="marquee-col scroll-up-animation">
          {COL1.map((id, idx) => (
            <PortfolioCard key={idx} id={id} />
          ))}
        </div>

        {/* Column 2: Scrolls Down */}
        <div className="marquee-col scroll-down-animation">
          {COL2.map((id, idx) => (
            <PortfolioCard key={idx} id={id} />
          ))}
        </div>

        {/* Column 3: Scrolls Up */}
        <div className="marquee-col scroll-up-animation hidden sm:flex">
          {COL3.map((id, idx) => (
            <PortfolioCard key={idx} id={id} />
          ))}
        </div>

        {/* Column 4: Scrolls Down */}
        <div className="marquee-col scroll-down-animation hidden md:flex">
          {COL4.map((id, idx) => (
            <PortfolioCard key={idx} id={id} />
          ))}
        </div>
      </div>

      {/* Mask Overlay ensuring readable text */}
      <div className="editorial-mask" />
    </div>
  );
}
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";

interface Book {
  id: number;
  cover: string;
  title: string;
  author: string;
  genre: string;
  badge: string;
  quote: string;
  link: string;
}

const mockBooks: Book[] = [
  {
    id: 1,
    cover: portfolio1,
    title: "Artisan Analytics",
    author: "Brand Identity Design",
    genre: "Logo & Stationery",
    badge: "Featured",
    quote: "A sleek geometric monogram with gold and navy blue — premium brand identity for a tech analytics firm.",
    link: "#"
  },
  {
    id: 2,
    cover: portfolio2,
    title: "NexusFlow AI",
    author: "Website Design",
    genre: "SaaS Landing Page",
    badge: "Award Winner",
    quote: "Dark-themed SaaS landing page with gradient hero, feature cards, and seamless user flow.",
    link: "#"
  },
  {
    id: 3,
    cover: portfolio3,
    title: "Aurora Ecosystem",
    author: "Brand Identity Design",
    genre: "Logo & Packaging",
    badge: "Client Favorite",
    quote: "Luxurious coral and charcoal brand identity with wax seals, envelopes, and premium packaging.",
    link: "#"
  },
  {
    id: 4,
    cover: portfolio4,
    title: "AURA Fashion",
    author: "Website Design",
    genre: "E-Commerce Layout",
    badge: "Top Rated",
    quote: "Clean, elegant e-commerce fashion layout with sage green palette and stunning product grid.",
    link: "#"
  },
  {
    id: 5,
    cover: portfolio5,
    title: "Veridian Tech",
    author: "Brand Identity Design",
    genre: "Logo & Branding",
    badge: "Bestseller",
    quote: "Modern teal-to-emerald geometric leaf icon — sophisticated minimal branding for a tech startup.",
    link: "#"
  },
  {
    id: 6,
    cover: portfolio6,
    title: "Orange Theory Agency",
    author: "Website Design",
    genre: "Creative Portfolio",
    badge: "Editor's Pick",
    quote: "Bold black and electric orange creative agency site with asymmetric grid and portfolio gallery.",
    link: "#"
  },
  {
    id: 7,
    cover: portfolio7,
    title: "Aurora Estates",
    author: "Brand Identity Design",
    genre: "Luxury Branding",
    badge: "Premium",
    quote: "Elegant serif wordmark with gold foil stamping — opulent branding for luxury real estate.",
    link: "#"
  },
  {
    id: 8,
    cover: portfolio8,
    title: "Aether Fintech",
    author: "Website Design",
    genre: "Dashboard UI",
    badge: "Innovation Award",
    quote: "Sophisticated dark navy fintech dashboard with glassmorphism cards and real-time analytics.",
    link: "#"
  },
  {
    id: 9,
    cover: portfolio9,
    title: "The Oak & Hearth",
    author: "Website Design",
    genre: "Restaurant Website",
    badge: "Client Choice",
    quote: "Warm, earthy restaurant site with fullscreen food photography and seamless reservation flow.",
    link: "#"
  }
];

// Duplicating the lists to guarantee gapless scrolling loops
const COL1_BOOKS = [...mockBooks, ...mockBooks];
const COL2_BOOKS = [...mockBooks.slice().reverse(), ...mockBooks.slice().reverse()];
const COL3_BOOKS = [...mockBooks.slice(3), ...mockBooks.slice(0, 3), ...mockBooks.slice(3), ...mockBooks.slice(0, 3)];

function BookFlipCard({ book }: { book: Book }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate dynamic 3D tilt angles based on cursor offset
    const rY = (mouseX / (width / 2)) * 16;
    const rX = -(mouseY / (height / 2)) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Staggered default tilts to give a natural, organic bookshelf appearance
  const defaultTilt = ((book.id % 3) - 1) * 1.5; // yields -1.5, 0, or 1.5 degrees
  const bobClass = book.id % 3 === 0 ? "bob-1" : book.id % 3 === 1 ? "bob-2" : "bob-3";

  // Combine default bookshelf tilt with live mouse tilt tracking
  const transformStyle = isHovered
    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    : `perspective(1000px) rotate(${defaultTilt}deg)`;

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`book-card-3d group w-full aspect-[2/3] relative select-none ${bobClass}`} 
      style={{ 
        perspective: "1000px",
        transform: transformStyle,
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out"
      }}
    >
      <div className="book-card-inner w-full h-full relative transition-transform duration-700 ease-out cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Front Face: Book Cover */}
        <div 
          className="book-card-front absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-lg border border-black/5 bg-[#eae5d6]" 
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" loading="lazy" />
          {/* Shiny Gloss Sweep on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-12 transition-transform duration-[1100ms] group-hover:translate-x-[150%] pointer-events-none z-10" />
        </div>

        {/* Back Face: Testimonial & Details */}
        <div 
          className="book-card-back absolute inset-0 w-full h-full rounded-lg bg-stone-900 text-stone-100 p-4 flex flex-col justify-between border border-white/10 shadow-2xl" 
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="space-y-1.5 text-left">
            <span className="inline-block bg-primary/20 text-primary-foreground border border-primary/30 rounded px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-widest">
              {book.badge}
            </span>
            <h4 className="font-serif text-xs font-bold text-white leading-tight line-clamp-2">
              {book.title}
            </h4>
            <p className="text-[9px] text-stone-400 font-mono">
              By {book.author}
            </p>
            <div className="w-6 h-[0.5px] bg-stone-700 my-1" />
            <p className="text-[10px] italic text-stone-300 leading-relaxed line-clamp-4">
              "{book.quote}"
            </p>
          </div>
          <a 
            href={book.link} 
            className="text-[9px] font-mono text-[#a3e635] hover:text-white uppercase tracking-widest inline-flex items-center gap-1 mt-1.5 pointer-events-auto"
          >
            View Project →
          </a>
        </div>

      </div>
    </div>
  );
}

export default function HeroKineticRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-[#f2fcfe] text-stone-900 pt-28 pb-16 md:py-28 overflow-hidden min-h-[85vh] flex items-center justify-center border-b border-stone-200">
      
      {/* Background Floating Ambient Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#0ea5e9]/8 to-[#22d3ee]/8 blur-[100px] pointer-events-none animate-orb-float-1 z-0" />
      <div className="absolute bottom-[8%] right-[8%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#f472b6]/8 to-[#fcd34d]/8 blur-[120px] pointer-events-none animate-orb-float-2 z-0" />

      {/* Interactive Floating Sparkles / Dust Motes */}
      <div className="absolute top-[22%] left-[3%] w-2 h-2 rounded-full bg-[#22d3ee]/40 animate-sparkle-float [animation-delay:0s] z-0" />
      <div className="absolute top-[48%] left-[45%] w-3 h-3 rounded-full bg-[#f472b6]/30 animate-sparkle-float [animation-delay:1.5s] z-0" />
      <div className="absolute bottom-[28%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#fcd34d]/40 animate-sparkle-float [animation-delay:3s] z-0" />
      <div className="absolute top-[15%] left-[55%] w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/35 animate-sparkle-float [animation-delay:4.5s] z-0" />

      <style>{`
        /* 3D card hover flip style (dynamic tilt on wrapper, flip on inner) */
        .book-card-3d:hover .book-card-inner {
          transform: rotateY(180deg);
        }

        /* Continuous scrolling loops */
        .scroll-up-loop {
          animation: scrollUpMarquee 38s linear infinite;
        }
        .scroll-down-loop {
          animation: scrollDownMarquee 38s linear infinite;
        }
        .horizontal-scroll-loop {
          animation: scrollHorizontalMarquee 26s linear infinite;
        }

        @keyframes scrollUpMarquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDownMarquee {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes scrollHorizontalMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Hover play state deceleration */
        .kinetic-ribbon-container:hover .marquee-col {
          animation-play-state: paused;
        }

        /* Button metallic shimmer sweep */
        @keyframes shimmerSweep {
          0% { transform: translateX(-150%) skewX(-15deg); }
          40% { transform: translateX(150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        .btn-shimmer-sweep {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-shimmer-sweep::after {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-15deg);
          animation: shimmerSweep 4.5s infinite ease-in-out;
        }
        .btn-shimmer-sweep:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(12, 30, 54, 0.3);
        }

        /* Ambient Orbs keyframe floating loops */
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.92); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.12); }
        }
        .animate-orb-float-1 {
          animation: floatOrb1 24s infinite ease-in-out;
        }
        .animate-orb-float-2 {
          animation: floatOrb2 28s infinite ease-in-out;
        }

        /* Sparkles floating motion */
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(15px) scale(1.3); opacity: 0.8; }
        }
        .animate-sparkle-float {
          animation: sparkleFloat 8s infinite ease-in-out;
        }

        /* Gentle card bobbing floating loops */
        @keyframes gentleBob1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes gentleBob2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @keyframes gentleBob3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .bob-1 { animation: gentleBob1 6s infinite ease-in-out; }
        .bob-2 { animation: gentleBob2 5.5s infinite ease-in-out; }
        .bob-3 { animation: gentleBob3 7s infinite ease-in-out; }

        /* SVG swoosh drawing animation */
        @keyframes drawSwoosh {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-swoosh {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawSwoosh 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 800ms;
        }

        /* Staggered entrance animations */
        @keyframes titleRise {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-title-rise {
          animation: titleRise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-slide-down {
          animation: slideDownFade 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Support prefers-reduced-motion: reduced speed / static layout */
        @media (prefers-reduced-motion: reduce) {
          .scroll-up-loop,
          .scroll-down-loop,
          .horizontal-scroll-loop {
            animation: none !important;
          }
          .marquee-col {
            overflow: visible !important;
          }
          .kinetic-ribbon-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
            height: auto !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (60% width on Desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left space-y-6 md:space-y-8 z-10 font-sans">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 px-4 py-1.5 text-[9px] font-bold tracking-widest text-[#0ea5e9] uppercase animate-slide-down">
            ✶ PUBLISHING ENGINE - EST. 2026
          </div>

          {/* Headline */}
          <h1 className="font-sans text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.08] tracking-tight font-extrabold text-[#0c1e36] animate-title-rise [animation-delay:150ms]">
            The World Is <br className="hidden md:inline" />
            Waiting for <span className="relative inline-block text-[#0ea5e9] whitespace-nowrap">
              Your Book
              {/* Hand-drawn SVG swoosh highlight */}
              <svg className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#22d3ee] overflow-visible pointer-events-none" viewBox="0 0 200 15" fill="none" preserveAspectRatio="none">
                <path 
                  d="M5,10 C40,4 80,2 195,8 C140,9 90,10 25,12" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-swoosh"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl animate-fade-up [animation-delay:300ms]">
            We <span className="font-extrabold text-[#0f172a]">empower authors</span> through book writing, ghostwriting, editing, and publishing navigation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-up [animation-delay:450ms]">
            <a 
              href="#cta" 
              className="btn-shimmer-sweep inline-flex items-center justify-center bg-[#0c1e36] text-white px-9 py-4 font-extrabold text-xs tracking-widest uppercase rounded-none shadow-lg"
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>

          {/* Mobile Condensed Ribbon (horizontal scroll below CTAs) */}
          <div className="w-full overflow-hidden relative block lg:hidden py-4 border-y border-stone-200 animate-fade-up [animation-delay:600ms]">
            <div 
              className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f2fcfe] to-transparent z-10 pointer-events-none" 
            />
            <div 
              className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f2fcfe] to-transparent z-10 pointer-events-none" 
            />
            <div className="horizontal-scroll-loop flex gap-4 w-max pointer-events-auto">
              {COL1_BOOKS.slice(0, 12).map((book, idx) => (
                <div key={idx} className="w-24 shrink-0">
                  <div className="aspect-[2/3] rounded-md overflow-hidden shadow border border-black/5">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (40% width on Desktop, hidden on Mobile) */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-start gap-4 relative h-[650px] w-full animate-fade-up [animation-delay:400ms]">
          {/* Vertical Mask Gradients */}
          <div 
            ref={containerRef} 
            className="kinetic-ribbon-container grid grid-cols-2 md:grid-cols-3 gap-6 h-[580px] w-full pointer-events-auto"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)"
            }}
          >
            
            {/* Column 1: Scrolls Up */}
            <div className="marquee-col scroll-up-loop flex flex-col gap-6">
              {COL1_BOOKS.map((book, idx) => (
                <BookFlipCard key={`col1-${idx}`} book={book} />
              ))}
            </div>

            {/* Column 2: Scrolls Down */}
            <div className="marquee-col scroll-down-loop flex flex-col gap-6">
              {COL2_BOOKS.map((book, idx) => (
                <BookFlipCard key={`col2-${idx}`} book={book} />
              ))}
            </div>

            {/* Column 3: Scrolls Up (Hidden on Tablet, shown on Desktop) */}
            <div className="marquee-col scroll-up-loop hidden md:flex flex-col gap-6">
              {COL3_BOOKS.map((book, idx) => (
                <BookFlipCard key={`col3-${idx}`} book={book} />
              ))}
            </div>

          </div>

          {/* Titles indicator label matching the reference screenshot */}
          <div className="flex items-center gap-2 text-slate-800 font-extrabold text-[11px] font-sans tracking-wide uppercase mt-2 select-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Logos, websites, and brands designed by our team</span>
          </div>

        </div>

      </div>
    </section>
  );
}

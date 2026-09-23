import { useRef, useState, useEffect } from "react";
import SharedHeroInlineForm from "@/components/SharedHeroInlineForm";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";

/* ─── Real Logo Designs (from Assets/Logo's) ─── */
import logoBrightNest from "@/assets/real-logos/logo0.png";
import logoHearthHand from "@/assets/real-logos/logo1.png";
import logoOliveBranch from "@/assets/real-logos/logo2.png";
import logoBrightNestCleaning from "@/assets/real-logos/logo3.png";
import logoPurePath from "@/assets/real-logos/logo4.png";
import logoRidgeCraft from "@/assets/real-logos/logo5.png";
import logoSummitShield from "@/assets/real-logos/logo6.png";
import logoLedgerLane from "@/assets/real-logos/logo7.png";
import logoClarityCFO from "@/assets/real-logos/logo8.png";
import logoHearthHandMascot from "@/assets/real-logos/logo9.png";
import logoRidgeCraftMascot from "@/assets/real-logos/logo11.png";
import logoLedgerLaneMascot from "@/assets/real-logos/logo12.png";
import logoPhilly from "@/assets/real-logos/dawe.png";
import logoKokkopi from "@/assets/real-logos/ead.webp";
import logoAnderson from "@/assets/real-logos/ls.jpg";
import logoTheLocal from "@/assets/real-logos/sasda.png";

/* ─── Real Website Layout Designs (from Assets/weblayout) ─── */
import webAuthorCharles from "@/assets/real-weblayouts/author-charles.jpg";
import webAuthorGresh from "@/assets/real-weblayouts/author-gresh.jpg";
import webAuthorRichard from "@/assets/real-weblayouts/author-richard.jpg";
import webGarageDoor from "@/assets/real-weblayouts/web-garage-door.png";
import webPropertyMgmt from "@/assets/real-weblayouts/web-property-mgmt.png";
import webCleaners from "@/assets/real-weblayouts/web-cleaners.png";
import webLawns from "@/assets/real-weblayouts/web-lawns.png";
import webGrooming from "@/assets/real-weblayouts/web-grooming.png";
import webMechanic from "@/assets/real-weblayouts/web-mechanic.png";
import webTicketingPortal from "@/assets/real-weblayouts/web-image76.png";



interface PortfolioItem {
  id: number;
  cover: string;
  title: string;
  category: string;
  type: "logo" | "website";
}

/* ─── Column 1: Mix of logos + website layouts ─── */
const COL1_UNIQUE: PortfolioItem[] = [
  { id: 1, cover: logoBrightNest, title: "BrightNest", category: "Cleaning Business", type: "logo" },
  { id: 2, cover: webAuthorCharles, title: "Charles Ray Ford Sr.", category: "Author Website", type: "website" },
  { id: 3, cover: logoRidgeCraft, title: "RidgeCraft Roofing", category: "Roofing Business", type: "logo" },
  { id: 4, cover: webGarageDoor, title: "Garage Door Doctor", category: "Home Repair Website", type: "website" },
  { id: 5, cover: logoLedgerLane, title: "Ledger Lane Accountants", category: "Finance Business", type: "logo" },
  { id: 6, cover: webLawns, title: "Just Right Lawns", category: "Lawn Service Website", type: "website" },
  { id: 7, cover: logoPhilly, title: "Philly Cheese Steak", category: "Restaurant Business", type: "logo" },
  { id: 8, cover: logoAnderson, title: "Anderson Real Estate", category: "Real Estate Business", type: "logo" },
  { id: 9, cover: webGrooming, title: "Lilly's Mobile Grooming", category: "Pet Grooming Website", type: "website" },
];

/* ─── Column 2: Mix of logos + website layouts ─── */
const COL2_UNIQUE: PortfolioItem[] = [
  { id: 10, cover: logoHearthHand, title: "Hearth & Hand", category: "Restaurant Business", type: "logo" },
  { id: 11, cover: webAuthorGresh, title: "Gresh Harbuck", category: "Author Website", type: "website" },
  { id: 12, cover: logoPurePath, title: "PurePath Cleaning Co.", category: "Cleaning Business", type: "logo" },
  { id: 13, cover: webPropertyMgmt, title: "Houston Property Mgmt", category: "Real Estate Website", type: "website" },
  { id: 14, cover: logoClarityCFO, title: "Clarity CFO", category: "Finance & Advisory", type: "logo" },
  { id: 15, cover: webMechanic, title: "Mobile Mechanic Houston", category: "Auto Repair Website", type: "website" },
  { id: 16, cover: logoRidgeCraftMascot, title: "RidgeCraft", category: "Roofing Business", type: "logo" },
  { id: 17, cover: logoKokkopi, title: "Kokkōpi", category: "Restaurant Business", type: "logo" },
  { id: 26, cover: webTicketingPortal, title: "QHQ Ticketing Portal", category: "Event Platform Website", type: "website" },
];

/* ─── Column 3: Mix of logos + website layouts ─── */
const COL3_UNIQUE: PortfolioItem[] = [
  { id: 18, cover: logoOliveBranch, title: "Olive Branch Kitchen", category: "Restaurant Business", type: "logo" },
  { id: 19, cover: webAuthorRichard, title: "Richard Morrell", category: "Author Website", type: "website" },
  { id: 20, cover: logoSummitShield, title: "Summit Shield Roofing", category: "Roofing Business", type: "logo" },
  { id: 21, cover: webCleaners, title: "Huntington Cleaners", category: "Cleaning Website", type: "website" },
  { id: 22, cover: logoLedgerLaneMascot, title: "Ledger Lane", category: "Finance Business", type: "logo" },
  { id: 23, cover: logoBrightNestCleaning, title: "BrightNest Cleaning", category: "Cleaning Business", type: "logo" },
  { id: 24, cover: logoTheLocal, title: "The Local Real Estate", category: "Real Estate Business", type: "logo" },
  { id: 25, cover: logoHearthHandMascot, title: "Hearth & Hand", category: "Restaurant Business", type: "logo" },
];

const COL1_BOOKS = [...COL1_UNIQUE, ...COL1_UNIQUE, ...COL1_UNIQUE];
const COL2_BOOKS = [...COL2_UNIQUE, ...COL2_UNIQUE, ...COL2_UNIQUE];
const COL3_BOOKS = [...COL3_UNIQUE, ...COL3_UNIQUE, ...COL3_UNIQUE];

/* Typing Effect for Headline Blue Words (Alphabet-by-Alphabet Typewriter) */
function TypewriterText() {
  const words = [
    "an iconic brand identity.",
    "a high-converting website.",
    "a dominant digital presence.",
    "an intelligent AI system.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === fullWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? fullWord.substring(0, prev.length - 1)
            : fullWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <span className="inline-block relative text-[#00b4d8] font-serif font-extrabold italic border-b-4 border-[#00b4d8]/40 pb-1">
      {displayedText}
      <span className="inline-block w-1 h-8 md:h-12 bg-[#00b4d8] ml-1 animate-pulse align-middle" />
    </span>
  );
}

interface HeroKineticProps {
  onSelectBook?: (title: string) => void;
}

/* Home Page Hero Portfolio Card — Clean Design, No Book Cover Mockup */
function BookCard({ book, onSelectBook }: { book: PortfolioItem; onSelectBook?: (title: string) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    const rotY = (mouseX / (rect.width / 2)) * 8;
    const rotX = -(mouseY / (rect.height / 2)) * 8;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  };

  const handleBookClick = () => {
    if (onSelectBook) {
      onSelectBook(book.title);
    }
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleBookClick}
      className={`book-card-item group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out bg-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.22)] hover:shadow-2xl will-change-transform w-full border border-white/10 hover:border-[#00b4d8]/60 ${
        book.type === "website" ? "aspect-[3/4]" : "aspect-[4/3] sm:aspect-square"
      }`}
      style={{
        transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
      }}
    >
      {/* Full-bleed image for both logos and website layouts */}
      <img
        src={book.cover}
        alt={book.title}
        style={{
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className={`w-full h-full ${
          book.type === "website" ? "object-cover object-top" : "object-cover object-center"
        } transition-transform duration-500 group-hover:scale-105`}
      />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category badge - top left */}
      <div className="absolute top-2.5 left-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-1 rounded-md bg-black/60 text-white/90 backdrop-blur-sm border border-white/20">
          {book.type === "logo" ? "Logo Design" : "Website"}
        </span>
      </div>

      {/* Info bar at bottom — ON HOVER ONLY */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#fcfbf9]/95 backdrop-blur-md border-t border-slate-200/90 select-none text-left opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-2xl">
        <h4 className="font-serif text-xs md:text-sm font-bold text-[#0c2340] truncate leading-tight group-hover:text-[#00b4d8] transition-colors">
          {book.title}
        </h4>
        <p className="text-[10px] md:text-[11px] text-slate-600 font-mono mt-0.5 truncate">
          {book.category}
        </p>
      </div>
    </div>
  );
}


export default function HeroKineticCinematic({ onSelectBook }: HeroKineticProps) {
  return (
    <section className="hero-sparkle-section relative flex flex-col pt-16 md:pt-20 pb-0 overflow-hidden bg-gradient-to-br from-[#d9f5fb] via-[#e6f9fc] to-[#ccf2f9] font-sans select-none">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .col-scroll-up {
          animation: scrollUp 36s linear infinite;
        }
        .col-scroll-down {
          animation: scrollDown 42s linear infinite;
        }
        .col-scroll-fast {
          animation: scrollUp 28s linear infinite;
        }
        .hero-grid-container:has(.book-card-item:hover) .col-scroll-up,
        .hero-grid-container:has(.book-card-item:hover) .col-scroll-down,
        .hero-grid-container:has(.book-card-item:hover) .col-scroll-fast {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Radial Cyan Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      {/* Dot Matrix Background Grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `28px 28px`
        }}
      />

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-10 items-center pt-4 pb-8 md:pt-6 md:pb-10 relative z-10">
        
        {/* LEFT COLUMN: HIGH-IMPACT PUBLISHING HERO HEADLINE & INLINE QUERY FORM */}
        <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">

          <h1 className="font-serif text-3xl sm:text-4xl md:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.15] text-[#0c2340] max-w-4xl">
            Transform your vision <br className="hidden sm:block" />
            into <TypewriterText />
          </h1>

          <p className="text-slate-700 font-sans text-base md:text-xl font-light leading-relaxed max-w-2xl">
            Award-winning logo design, high-performance website design &amp; development, data-driven digital marketing, and cutting-edge AI automation engineered to scale your business.
          </p>

          {/* 3-Button Interactive Form Bar matching subpages */}
          <div className="pt-2">
            <SharedHeroInlineForm isHomePage={true} />
          </div>

        </div>

        {/* RIGHT COLUMN: KINETIC BOOK MASONRY GRID (REDUCED HEIGHT & 2 COLUMNS ON MOBILE) */}
        <div className="lg:col-span-5 h-[240px] sm:h-[320px] lg:h-[700px] overflow-hidden relative hero-grid-container opacity-90 transition-opacity">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
            
            {/* Column 1 */}
            <div className="relative h-full overflow-hidden">
              <div className="space-y-4 col-scroll-up">
                {COL1_BOOKS.map((b, i) => (
                  <BookCard key={`col1-${b.id}-${i}`} book={b} onSelectBook={onSelectBook} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative h-full overflow-hidden">
              <div className="space-y-4 col-scroll-down">
                {COL2_BOOKS.map((b, i) => (
                  <BookCard key={`col2-${b.id}-${i}`} book={b} onSelectBook={onSelectBook} />
                ))}
              </div>
            </div>

            {/* Column 3 (Hidden on smallest screens for clean mobile layout) */}
            <div className="hidden sm:block relative h-full overflow-hidden">
              <div className="space-y-4 col-scroll-fast">
                {COL3_BOOKS.map((b, i) => (
                  <BookCard key={`col3-${b.id}-${i}`} book={b} onSelectBook={onSelectBook} />
                ))}
              </div>
            </div>

          </div>

          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#e6f9fc] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#ccf2f9] to-transparent pointer-events-none z-10" />

        </div>

      </div>

      {/* Publisher Ticker Marquee Strip */}
      <CompanyLogosMarquee className="py-4 border-t border-[#00b4d8]/30 bg-white/80 backdrop-blur-md shadow-xs relative z-30" />
    </section>
  );
}

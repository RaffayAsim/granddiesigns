import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroKineticCinematic from "@/components/HeroKineticCinematic";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
const PremiumStoryCanvas = lazy(() => import("@/components/PremiumStoryCanvas"));
import InteractiveWorldLeaderStats from "@/components/InteractiveWorldLeaderStats";
import BentoArchitecturalServices from "@/components/BentoArchitecturalServices";
import PortraitVideoTestimonial from "@/components/PortraitVideoTestimonial";
import SharedExclusiveAuthorsProgram from "@/components/SharedExclusiveAuthorsProgram";
import GlobalPromoPopup from "@/components/GlobalPromoPopup";

/* ─── Real Logos ─── */
import logoBrightNest from "@/assets/real-logos/logo0.png";
import logoHearthHand from "@/assets/real-logos/logo1.png";
import logoOliveBranch from "@/assets/real-logos/logo2.png";
import logoBrightNestCleaning from "@/assets/real-logos/logo3.png";
import logoPurePath from "@/assets/real-logos/logo4.png";
import logoRidgeCraft from "@/assets/real-logos/logo5.png";
import logoSummitShield from "@/assets/real-logos/logo6.png";
import logoLedgerLane from "@/assets/real-logos/logo7.png";
import logoClarityCFO from "@/assets/real-logos/logo8.png";
import logoPhilly from "@/assets/real-logos/dawe.png";
import logoAnderson from "@/assets/real-logos/ls.jpg";
import logoTheLocal from "@/assets/real-logos/sasda.png";

/* ─── Real Website Layouts ─── */
import webGarageDoor from "@/assets/real-weblayouts/web-garage-door.png";
import webPropertyMgmt from "@/assets/real-weblayouts/web-property-mgmt.png";
import webCleaners from "@/assets/real-weblayouts/web-cleaners.png";
import webLawns from "@/assets/real-weblayouts/web-lawns.png";
import webGrooming from "@/assets/real-weblayouts/web-grooming.png";
import webMechanic from "@/assets/real-weblayouts/web-mechanic.png";
import webTicketingPortal from "@/assets/real-weblayouts/web-image76.png";
import webAuthorCharles from "@/assets/real-weblayouts/author-charles.jpg";
import webAuthorGresh from "@/assets/real-weblayouts/author-gresh.jpg";
import webAuthorRichard from "@/assets/real-weblayouts/author-richard.jpg";

interface WorkShowcaseItem {
  id: string;
  title: string;
  category: string;
  type: "logo" | "website";
  image: string;
}

const SELECTED_WORKS: WorkShowcaseItem[] = [
  { id: "w-1", title: "BrightNest", category: "Cleaning Business", type: "logo", image: logoBrightNest },
  { id: "w-2", title: "Garage Door Doctor", category: "Home Repair Website", type: "website", image: webGarageDoor },
  { id: "w-3", title: "Hearth & Hand", category: "Restaurant Business", type: "logo", image: logoHearthHand },
  { id: "w-4", title: "Huntington Cleaners", category: "Commercial Cleaners", type: "website", image: webCleaners },
  { id: "w-5", title: "RidgeCraft Roofing", category: "Roofing Business", type: "logo", image: logoRidgeCraft },
  { id: "w-6", title: "Houston Property Mgmt", category: "Real Estate Website", type: "website", image: webPropertyMgmt },
  { id: "w-7", title: "Ledger Lane", category: "Finance & Accounting", type: "logo", image: logoLedgerLane },
  { id: "w-8", title: "QHQ Ticketing Portal", category: "Event Platform Website", type: "website", image: webTicketingPortal },
  { id: "w-9", title: "The Local Real Estate", category: "Real Estate Group", type: "logo", image: logoTheLocal },
  { id: "w-10", title: "Just Right Lawns", category: "Lawn & Garden Website", type: "website", image: webLawns },
  { id: "w-11", title: "Summit Shield", category: "Roofing & Construction", type: "logo", image: logoSummitShield },
  { id: "w-12", title: "Mobile Mechanic Houston", category: "Auto Repair Website", type: "website", image: webMechanic },
  { id: "w-13", title: "Clarity CFO", category: "Finance Advisory", type: "logo", image: logoClarityCFO },
  { id: "w-14", title: "Lilly's Mobile Grooming", category: "Pet Services Website", type: "website", image: webGrooming },
  { id: "w-15", title: "Philly Cheese Steak", category: "Food & Beverage", type: "logo", image: logoPhilly },
  { id: "w-16", title: "Charles Ray Ford Sr.", category: "Executive Platform", type: "website", image: webAuthorCharles },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grand Designs — Logo Design, Web Dev, Marketing & AI Automation" },
      { name: "description", content: "Grand Designs is an end-to-end digital studio: custom logo design, high-converting website development, digital marketing, and intelligent AI automation." },
      { property: "og:title", content: "Grand Designs — Logo Design, Web Dev, Marketing & AI Automation" },
      { property: "og:description", content: "Grand Designs — Custom logo design, website development, digital marketing campaigns, and AI workflow automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* Wall of Love Testimonial Reviews Data (Row 1 & Row 2) */
const REVIEWS_ROW_1 = [
  {
    initials: "DC",
    name: "David Chen",
    role: "Founder, FinTech SaaS",
    quote: "The full visual identity and logo design they built completely changed how investors perceive our company. Sleek, authoritative, and truly world-class.",
    stars: 5,
  },
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "CEO, PropTech Realty",
    quote: "Our new website launched in under 3 weeks. Conversion rates increased by 140% in month one, and the mobile performance is blazing fast.",
    stars: 5,
  },
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Director of Growth",
    quote: "Their digital marketing team scaled our qualified leads through targeted Google and Meta ads with an exceptional 4.2x ROAS.",
    stars: 5,
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "COO, Logistics Network",
    quote: "The custom AI automation workflows they integrated with our CRM eliminated 20+ hours of manual data entry every single week.",
    stars: 5,
  },
  {
    initials: "CM",
    name: "Carlos Mendoza",
    role: "Hospitality & Restaurant Group",
    quote: "The brand identity, signage design, and modern mobile menu elevated our venue into a premier regional destination.",
    stars: 5,
  },
];

const REVIEWS_ROW_2 = [
  {
    initials: "AB",
    name: "Amanda Brooks",
    role: "E-Commerce Founder",
    quote: "From vector logo design to an ultra-responsive storefront, their creative team delivered flawless execution on every single milestone.",
    stars: 5,
  },
  {
    initials: "MR",
    name: "Maya Rodriguez",
    role: "Head of Marketing",
    quote: "Search rankings shot to page 1 for our highest-value commercial keywords within 60 days of their technical SEO audit and content sprints.",
    stars: 5,
  },
  {
    initials: "TW",
    name: "Tom Wakefield",
    role: "VP of Operations",
    quote: "Their AI customer lead triage agent answers website inquiries in 5 seconds and books discovery appointments on autopilot. Game changer.",
    stars: 5,
  },
  {
    initials: "FT",
    name: "Fumiko Tanaka",
    role: "Creative Director",
    quote: "Remarkable attention to typography, interaction design, and micro-animations. It's rare to find a studio that masters design and code equally well.",
    stars: 5,
  },
  {
    initials: "RB",
    name: "Rachel Bloom",
    role: "Commercial Real Estate",
    quote: "Our firm needed an elite, high-trust digital presence. The website layout and branding exceeded our expectations completely.",
    stars: 5,
  },
];

function Index() {
  useReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [selectedBookTitle, setSelectedBookTitle] = useState<string | null>(null);

  const handleHeroSelectBook = (title: string) => {
    setSelectedBookTitle(title);
    
    // Smooth scroll page to #work
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }

    // Auto-scroll selected card to center view
    setTimeout(() => {
      const activeCard = document.querySelector("[data-selected-book='true']");
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, 350);
  };

  useEffect(() => {
    if (selectedBookTitle) {
      const timer = setTimeout(() => {
        const activeCard = document.querySelector("[data-selected-book='true']");
        if (activeCard) {
          activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [selectedBookTitle]);

  const faqs = [
    {
      q: "What deliverables are included with the logo design package?",
      a: "Every custom logo identity package includes primary and secondary vector source files (.AI, .SVG, .EPS), high-resolution web and print formats (PNG, JPG, WebP), monochrome variants, brand color palettes (HEX, RGB, CMYK), typography pairing guides, and a comprehensive Brand Identity Guidelines handbook.",
    },
    {
      q: "How long does a custom website design & development project take?",
      a: "Bespoke marketing websites and high-converting landing pages are typically designed, coded, and launched in 2 to 4 weeks. Full-scale web applications or custom platforms with database integrations typically take 4 to 8 weeks, complete with milestone staging previews.",
    },
    {
      q: "How do your digital marketing and SEO campaigns operate?",
      a: "We deploy full-funnel digital marketing strategies including technical SEO audits, high-intent keyword optimization, and targeted paid campaigns across Google and Meta. You receive transparent weekly analytics dashboards with clear conversion attribution and direct return on ad spend (ROAS).",
    },
    {
      q: "How can AI automation streamline our company workflows?",
      a: "We architect intelligent automated pipelines that connect your website, CRM, communication channels, and databases. From AI customer service agents that answer inquiries 24/7 to automated lead triage and automated client onboarding, we eliminate manual bottlenecks.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f8f6f0] text-foreground selection:bg-[#00b4d8]/20 font-sans overflow-x-hidden">
      
      {/* Sticky Premium Navigation Header */}
      <MegaNavbar />

      {/* 1. HERO SECTION */}
      <HeroKineticCinematic onSelectBook={handleHeroSelectBook} />

      {/* 2. CORE DIGITAL PERFORMANCE & STATS SECTION */}
      <InteractiveWorldLeaderStats />

      {/* 3. MINIMIZED SERVICES SECTION (4 Compact Cards + Redirect to /services) */}
      <BentoArchitecturalServices isCompact={true} />

      {/* 4. SELECTED WORK SECTION — Real Logos & Website Layouts Carousel */}
      <section id="work" className="relative py-16 md:py-20 bg-[#f8f6f0] border-y border-slate-200 overflow-hidden">
        <style>{`
          @keyframes horizontalCoverScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .horizontal-cover-marquee {
            display: flex;
            width: max-content;
            animation: horizontalCoverScroll 38s linear infinite;
          }
          .horizontal-cover-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-12">
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-slate-300/80">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-[#06b6d4]">Selected work</div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.04] text-[#0f172a] tracking-tight">
                Brands &amp; experiences built to <em className="italic text-[#06b6d4]">stand out.</em>
              </h2>
            </div>
            <a 
              href="/work" 
              className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#0f172a] hover:text-[#06b6d4] transition-colors border-b-2 border-[#0f172a] hover:border-[#06b6d4] pb-1 cursor-pointer"
            >
              Explore full portfolio →
            </a>
          </div>
        </div>

        {/* AUTO MOVING HORIZONTAL MARQUEE CAROUSEL WITH REAL LOGOS & WEBLAYOUTS */}
        <div className="w-full overflow-hidden py-4 select-none">
          <div className="horizontal-cover-marquee gap-6 md:gap-8 px-4 items-center">
            
            {/* Loop original SELECTED_WORKS twice for seamless 60fps infinite loop */}
            {[...SELECTED_WORKS, ...SELECTED_WORKS].map((item, i) => {
              const isSelected = selectedBookTitle && (
                item.title.toLowerCase().includes(selectedBookTitle.toLowerCase()) ||
                selectedBookTitle.toLowerCase().includes(item.title.toLowerCase())
              );

              return (
                <div
                  key={`${item.id}-${i}`}
                  data-selected-book={isSelected ? "true" : undefined}
                  className={`group relative flex-shrink-0 cursor-pointer transition-all duration-300 block text-left ${
                    item.type === "website"
                      ? "w-[280px] sm:w-[320px] md:w-[350px]"
                      : "w-[220px] sm:w-[260px] md:w-[280px]"
                  } ${isSelected ? "scale-105 z-30 animate-pulse" : "hover:-translate-y-2"}`}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-slate-300/70 group-hover:border-[#00b4d8] group-hover:shadow-[0_15px_35px_rgba(0,180,216,0.3)] transition-all duration-500 ${
                      item.type === "website" ? "aspect-[3/4]" : "aspect-[4/3] sm:aspect-square"
                    } ${
                      isSelected
                        ? "border-4 border-[#00b4d8] shadow-[0_0_50px_rgba(0,180,216,0.9)] ring-4 ring-[#00b4d8]"
                        : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full ${
                        item.type === "website" ? "object-cover object-top" : "object-cover object-center"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                    
                    {/* Top-left pill badge */}
                    <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/70 text-white/90 backdrop-blur-xs border border-white/20 z-20">
                      {item.type === "logo" ? "Logo Design" : "Website Design"}
                    </span>

                    {/* Selected Active Pulsing Badge */}
                    {isSelected && (
                      <span className="absolute top-3 right-3 text-[9px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#00b4d8] text-white shadow-lg animate-pulse z-20">
                        FEATURED ✦
                      </span>
                    )}

                    {/* Hover Reveal Details Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white leading-tight mt-1">
                        {item.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-[#00b4d8]">
                        <span>View Project</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>

                  {/* Card bottom text label */}
                  <div className="mt-3 flex items-start justify-between border-t border-slate-300/60 pt-2 px-1">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#0f172a] leading-snug group-hover:text-[#00b4d8] transition-colors truncate max-w-[220px]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 truncate">{item.category}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 uppercase shrink-0">
                      {item.type}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 5. EXCLUSIVE STRATEGY & INQUIRY PROGRAM */}
      <SharedExclusiveAuthorsProgram
        customTitle={
          <>
            Ready to <span className="underline decoration-[#00b4d8] decoration-4 underline-offset-8">scale</span> your brand, website &amp; automation?
          </>
        }
        customBody="Work directly with our senior creative directors and technical architects. Tell us your goals and we'll deliver a tailored strategy and fixed roadmap within 48 hours."
      />

      {/* 6. TESTIMONIAL SECTION (Client Reviews) */}
      <PortraitVideoTestimonial />

      {/* 7. FAQ SECTION */}
      <section id="faq" className="relative py-16 md:py-24 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="text-center space-y-4 mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#06b6d4]">Frequently asked</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.03] text-[#0f172a]">
              Answers, without the <em className="italic text-[#06b6d4]">fine print.</em>
            </h2>
          </div>

          <ul className="border-t border-slate-200">
            {faqs.map((f, i) => {
              const open = faqOpen === i;
              return (
                <li key={f.q} className="border-b border-slate-200">
                  <button
                    onClick={() => setFaqOpen(open ? null : i)}
                    className="w-full flex items-center justify-between py-7 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-xs text-slate-400 font-bold w-6">0{i + 1}</span>
                      <span className="font-serif text-xl md:text-2xl text-[#0f172a] group-hover:text-[#06b6d4] transition-colors">{f.q}</span>
                    </div>
                    <span className={`text-[#06b6d4] text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <div className="pb-7 pl-12 pr-6 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                      {f.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

        </div>
      </section>

      {/* 9. BEFORE FOOTER: STRATEGY CALL CARD */}
      <SharedExclusiveAuthorsProgram
        scheduleCallOnly={true}
        customTitle={
          <>
            Ready to build your <span className="underline decoration-[#00b4d8] decoration-4 underline-offset-8">next market-leading</span> digital presence?
          </>
        }
        customBody="Partner with award-winning brand strategists, full-stack engineers, and AI architects. From iconic logo identity to custom web platforms and automated workflows, let's build something exceptional."
      />

      <SiteFooter />
      <GlobalCanvasCursor />
    </div>
  );
}

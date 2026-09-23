import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


// Real client logos from user's Assets/Logo's folder
import logo0 from "@/assets/real-logos/logo0.png";
import logo1 from "@/assets/real-logos/logo1.png";
import logo2 from "@/assets/real-logos/logo2.png";
import logo3 from "@/assets/real-logos/logo3.png";
import logo4 from "@/assets/real-logos/logo4.png";
import logo5 from "@/assets/real-logos/logo5.png";
import logo6 from "@/assets/real-logos/logo6.png";
import logo7 from "@/assets/real-logos/logo7.png";
import logo8 from "@/assets/real-logos/logo8.png";
import logo9 from "@/assets/real-logos/logo9.png";
import logo11 from "@/assets/real-logos/logo11.png";
import logo12 from "@/assets/real-logos/logo12.png";
import logoDawe from "@/assets/real-logos/dawe.png";
import logoEad from "@/assets/real-logos/ead.webp";
import logoLs from "@/assets/real-logos/ls.jpg";
import logoSasda from "@/assets/real-logos/sasda.png";

export const Route = createFileRoute("/logo-design")({
  component: LogoDesignPage,
  head: () => ({
    meta: [
      { title: "Custom Logo Design & Brand Identity Studio — Award-Winning Agency" },
      {
        name: "description",
        content:
          "Custom vector logo design, brand style guides, and complete visual identity systems crafted to position your business as a category leader.",
      },
    ],
  }),
});

interface LogoItem {
  id: string;
  name: string;
  category: string;
  img: string;
  description: string;
}

const REAL_LOGOS: LogoItem[] = [
  { id: "1", name: "Apex Property & Roofing", category: "Construction & Real Estate", img: logo0, description: "Minimalist geometric emblem with high-contrast typography" },
  { id: "2", name: "Elevate Financial Group", category: "Finance & Accounting", img: logo1, description: "Premium corporate emblem engineered for trust and clarity" },
  { id: "3", name: "Signature Living Real Estate", category: "Real Estate", img: logo2, description: "Architectural vector monogram tailored for luxury brokerage" },
  { id: "4", name: "PurePro Cleaning Solutions", category: "Service Business", img: logo3, description: "Dynamic brand mark blending motion with pristine geometry" },
  { id: "5", name: "Vanguard Home Services", category: "Home Repair & Trades", img: logo4, description: "Modernized crest mark built for commercial vehicle fleet wrapping" },
  { id: "6", name: "Summit Financial Advisory", category: "Finance & Accounting", img: logo5, description: "Precision line-art monogram conveying institutional authority" },
  { id: "7", name: "Kinetics Creative Media", category: "Corporate", img: logo6, description: "Multi-layered chromatic mark with modern bespoke glyphs" },
  { id: "8", name: "Heritage Law & Advisory", category: "Legal & Professional", img: logo7, description: "Refined timeless seal with bespoke serif typography" },
  { id: "9", name: "NextWave Tech Solutions", category: "Corporate & Tech", img: logo8, description: "Fluid kinetic gradient mark representing forward velocity" },
  { id: "10", name: "Prime Builders Construction", category: "Construction & Real Estate", img: logo9, description: "Bold industrial geometric identity with high recognition" },
  { id: "11", name: "Lumina Dental & Aesthetics", category: "Healthcare & Wellness", img: logo11, description: "Harmonious curved aesthetic emblem with soft gradients" },
  { id: "12", name: "Starlight Hospitality Group", category: "Hospitality & Corporate", img: logo12, description: "Opulent metallic vector crest for luxury hotel brand" },
  { id: "13", name: "Dawe Architectural", category: "Architecture & Design", img: logoDawe, description: "Sharp structural lettering with minimalist icon" },
  { id: "14", name: "EAD Global Logistics", category: "Logistics & Corporate", img: logoEad, description: "Streamlined aerodynamic vector emblem for transport" },
  { id: "15", name: "LS Engineering Studio", category: "Engineering & Trades", img: logoLs, description: "Industrial precision badge built for technical applications" },
  { id: "16", name: "SASDA International", category: "Corporate", img: logoSasda, description: "Global stylized ligature mark with high visual impact" },
];

function LogoDesignPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Real Estate", "Finance & Accounting", "Home Repair & Trades", "Service Business", "Corporate"];

  const filteredLogos =
    selectedCategory === "ALL"
      ? REAL_LOGOS
      : REAL_LOGOS.filter((item) =>
          item.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#030812] text-white font-sans selection:bg-[#00b4d8] selection:text-white overflow-x-hidden">
      <GlobalCanvasCursor />
      <MegaNavbar />

      <main className="pt-24 md:pt-28">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030812] py-20 md:py-28 border-b border-[#00b4d8]/20 select-none">
          {/* 6 Vertical Animated Kinetic Scrolling Columns of Real Logos & Websites */}
          <SubpageHeroKineticCanvas />

          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
              <span>CUSTOM BRAND IDENTITY &amp; VECTOR LOGO DESIGN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Logos That Command Authority &amp; Build <span className="text-[#00b4d8]">Iconic Brands.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              We design distinctive, vector-engineered logos and cohesive brand identities that separate you from competitors, captivate dream clients, and scale effortlessly across any medium.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.45)] hover:scale-105"
              >
                Explore Real Logo Portfolio ↓
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
              >
                Book Brand Consultation →
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                { title: "100% Vector Ownership", desc: "AI, EPS, SVG, PNG & PDF formats" },
                { title: "Unlimited Revisions", desc: "Until you are 100% in love" },
                { title: "Full Copyright Transfer", desc: "Trademark-ready commercial rights" },
                { title: "48-72h Initial Delivery", desc: "Fast, meticulous concept sprints" },
              ].map((badge, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                  <div className="text-xs font-mono font-bold text-[#00b4d8]">{badge.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <CompanyLogosMarquee />

        {/* REAL LOGO SHOWCASE GRID */}
        <section id="portfolio" className="relative py-20 px-6 md:px-12 max-w-[1700px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
              REAL CLIENT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
              Crafted With Geometry, Precision &amp; Soul.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Explore authentic logos crafted for real estate brokers, home services, financial advisers, tech ventures, and modern enterprises.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#00b4d8] text-white shadow-[0_0_15px_rgba(0,180,216,0.5)]"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-[#00b4d8]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Logo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLogos.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#00b4d8]/60 overflow-hidden shadow-xl hover:shadow-[0_15px_35px_rgba(0,180,216,0.2)] transition-all duration-300 flex flex-col"
              >
                {/* Logo Canvas Container */}
                <div className="relative aspect-[4/3] w-full p-8 flex items-center justify-center bg-gradient-to-b from-slate-950/80 to-slate-900/60 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-32 max-w-[85%] object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/40 text-[#00b4d8] text-[9px] font-mono font-black uppercase">
                    Vector
                  </div>
                </div>

                {/* Info Footer */}
                <div className="p-5 border-t border-slate-800/80 flex-1 flex flex-col justify-between space-y-2 bg-slate-900/40">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-sans font-bold text-white group-hover:text-[#00b4d8] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT'S INCLUDED IN BRAND IDENTITY SECTION */}
        <section className="py-20 px-6 md:px-12 bg-slate-950/80 border-y border-slate-800">
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
                COMPLETE DELIVERABLES
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
                Everything Your Brand Needs to Win.
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                We deliver comprehensive design assets ready for production, signage, digital apps, vehicle wraps, and global trademark registration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💎",
                  title: "Master Vector Logo System",
                  features: [
                    "Primary landscape & portrait orientations",
                    "Monochrome, black, white & color variations",
                    "Print-ready CMYK + screen-optimized RGB & HEX",
                    "Scalable SVG, EPS, PDF, high-res PNG & AI master",
                  ],
                },
                {
                  icon: "📐",
                  title: "Brand Style Guide & Specs",
                  features: [
                    "Clear spacing rules & minimum sizing specs",
                    "Curated font pairing typography hierarchy",
                    "Exact color harmony formulas & usage rules",
                    "Do's and Don'ts brand integrity guidelines",
                  ],
                },
                {
                  icon: "🚀",
                  title: "Stationery & Marketing Collateral",
                  features: [
                    "Luxury business card design templates",
                    "Letterhead & digital invoice branding",
                    "Social media avatars, banners & story covers",
                    "Favicon pack & app launcher icons",
                  ],
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-[#00b4d8]/50 transition-all space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="text-4xl">{card.icon}</div>
                    <h3 className="text-xl font-sans font-bold text-white">{card.title}</h3>
                    <ul className="space-y-2.5">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#00b4d8] hover:text-white border border-white/20 text-white font-mono text-xs font-extrabold uppercase tracking-wider text-center transition-all block"
                  >
                    Request Brand Kit →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% OFF BRAND IDENTITY"
          title="Ready to Build an Iconic Brand Identity?"
          description="Schedule a 20-minute brand strategy consultation. Receive a tailored identity concept roadmap, timeline, and upfront fixed pricing within 24 hours."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

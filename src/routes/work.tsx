import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


// Real client logos from user's Assets/Logo's
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

// Real client website layouts from user's Assets/weblayout
import webMechanic from "@/assets/real-weblayouts/web-mechanic.png";
import webTicketing from "@/assets/real-weblayouts/web-image76.png";
import webGarageDoor from "@/assets/real-weblayouts/web-garage-door.png";
import webCleaners from "@/assets/real-weblayouts/web-cleaners.png";
import webPropertyMgmt from "@/assets/real-weblayouts/web-property-mgmt.png";
import webGrooming from "@/assets/real-weblayouts/web-grooming.png";
import webLawns from "@/assets/real-weblayouts/web-lawns.png";
import webCharles from "@/assets/real-weblayouts/author-charles.jpg";
import webGresh from "@/assets/real-weblayouts/author-gresh.jpg";
import webRichard from "@/assets/real-weblayouts/author-richard.jpg";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Selected Work & Portfolio — Real Logos & Web Layouts" },
      {
        name: "description",
        content:
          "Explore our portfolio of real client logos, high-converting websites, digital marketing campaigns, and AI automation systems.",
      },
    ],
  }),
});

interface PortfolioItem {
  id: string;
  title: string;
  category: "LOGO DESIGN" | "WEBSITE DESIGN" | "AI & MARKETING";
  subCategory: string;
  image: string;
  description: string;
  aspect: "square" | "wide";
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Real Websites
  {
    id: "web-1",
    title: "Apex Auto Care Portal",
    category: "WEBSITE DESIGN",
    subCategory: "Service & Automotive Web App",
    image: webMechanic,
    description: "Automated booking system, live repair estimates, and local SEO engine.",
    aspect: "wide",
  },
  {
    id: "web-2",
    title: "OHO Live Concerts & Ticketing",
    category: "WEBSITE DESIGN",
    subCategory: "SaaS & Ticketing Platform",
    image: webTicketing,
    description: "High-capacity event ticket checkout with seat selection and dynamic pricing.",
    aspect: "wide",
  },
  {
    id: "web-3",
    title: "Overhead Elite Garage Repair",
    category: "WEBSITE DESIGN",
    subCategory: "Lead Gen & Emergency Dispatch",
    image: webGarageDoor,
    description: "Built for instant mobile conversions, click-to-call, and local service ads.",
    aspect: "wide",
  },
  {
    id: "web-4",
    title: "Pristine Maids Commercial Cleaning",
    category: "WEBSITE DESIGN",
    subCategory: "Subscription E-Commerce",
    image: webCleaners,
    description: "Square footage pricing calculator and recurring commercial contract booking.",
    aspect: "wide",
  },
  {
    id: "web-5",
    title: "Signature Asset Property Group",
    category: "WEBSITE DESIGN",
    subCategory: "Real Estate & Tenant Portal",
    image: webPropertyMgmt,
    description: "Bespoke luxury MLS search, applicant portal, and maintenance dispatch.",
    aspect: "wide",
  },
  {
    id: "web-6",
    title: "Bark & Paws Mobile Care",
    category: "WEBSITE DESIGN",
    subCategory: "Mobile Booking Service",
    image: webGrooming,
    description: "Dynamic van dispatch schedule and automated SMS customer reminders.",
    aspect: "wide",
  },
  {
    id: "web-7",
    title: "Evergreen Premier Landscaping",
    category: "WEBSITE DESIGN",
    subCategory: "Home Repair & Trades",
    image: webLawns,
    description: "Project visual gallery with instant residential quote estimator.",
    aspect: "wide",
  },
  {
    id: "web-8",
    title: "Executive Thought Leader Platform",
    category: "WEBSITE DESIGN",
    subCategory: "Personal Brand & Media Hub",
    image: webCharles,
    description: "Speaking engagement booking flow, podcast embed, and digital products.",
    aspect: "wide",
  },
  {
    id: "web-9",
    title: "Global Keynote Speaker Portal",
    category: "WEBSITE DESIGN",
    subCategory: "Personal Brand & Media",
    image: webGresh,
    description: "Full-bleed video showreel and corporate event keynote booking system.",
    aspect: "wide",
  },
  {
    id: "web-10",
    title: "Executive Mentor & Advisory Portal",
    category: "WEBSITE DESIGN",
    subCategory: "High-Ticket Advisory",
    image: webRichard,
    description: "Executive advisory funnel, masterclass registration, and private client portal.",
    aspect: "wide",
  },

  // Real Logos
  {
    id: "logo-1",
    title: "Apex Property & Roofing",
    category: "LOGO DESIGN",
    subCategory: "Real Estate & Construction",
    image: logo0,
    description: "High-contrast architectural mark engineered for signage and vehicle wraps.",
    aspect: "square",
  },
  {
    id: "logo-2",
    title: "Elevate Financial Group",
    category: "LOGO DESIGN",
    subCategory: "Finance & Accounting",
    image: logo1,
    description: "Corporate crest symbolizing institutional stability and geometric balance.",
    aspect: "square",
  },
  {
    id: "logo-3",
    title: "Signature Living Brokerage",
    category: "LOGO DESIGN",
    subCategory: "Real Estate Luxury",
    image: logo2,
    description: "Tailored luxury monogram for high-end residential real estate brokers.",
    aspect: "square",
  },
  {
    id: "logo-4",
    title: "PurePro Cleaning Solutions",
    category: "LOGO DESIGN",
    subCategory: "Service Business",
    image: logo3,
    description: "Aerodynamic vector emblem communicating freshness, speed, and reliability.",
    aspect: "square",
  },
  {
    id: "logo-5",
    title: "Vanguard Home Services",
    category: "LOGO DESIGN",
    subCategory: "Home Repair & Trades",
    image: logo4,
    description: "Industrial grade emblem built for bold visibility on uniform and fleet assets.",
    aspect: "square",
  },
  {
    id: "logo-6",
    title: "Summit Advisory Group",
    category: "LOGO DESIGN",
    subCategory: "Finance & Advisory",
    image: logo5,
    description: "Minimalist geometric emblem conveying fiduciary clarity.",
    aspect: "square",
  },
  {
    id: "logo-7",
    title: "Kinetics Creative Studio",
    category: "LOGO DESIGN",
    subCategory: "Corporate & Tech",
    image: logo6,
    description: "Chromatic layered vector icon crafted for digital software ecosystems.",
    aspect: "square",
  },
  {
    id: "logo-8",
    title: "Heritage Law Advisory",
    category: "LOGO DESIGN",
    subCategory: "Legal & Corporate",
    image: logo7,
    description: "Classic typography with modern precision balance.",
    aspect: "square",
  },
  {
    id: "logo-9",
    title: "NextWave Tech Solutions",
    category: "LOGO DESIGN",
    subCategory: "Tech & SaaS",
    image: logo8,
    description: "Forward kinetic wave mark tailored for high-growth tech ventures.",
    aspect: "square",
  },
  {
    id: "logo-10",
    title: "Prime Builders Construction",
    category: "LOGO DESIGN",
    subCategory: "Commercial Construction",
    image: logo9,
    description: "Solid, unshakeable industrial identity for general contracting enterprise.",
    aspect: "square",
  },
  {
    id: "logo-11",
    title: "Lumina Dental & Aesthetics",
    category: "LOGO DESIGN",
    subCategory: "Healthcare & Wellness",
    image: logo11,
    description: "Curved organic crest for modern medical practice.",
    aspect: "square",
  },
  {
    id: "logo-12",
    title: "Starlight Hospitality Group",
    category: "LOGO DESIGN",
    subCategory: "Hospitality & Dining",
    image: logo12,
    description: "Opulent metallic vector crest for boutique hotels and luxury venues.",
    aspect: "square",
  },
];

function WorkPage() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const tabs = ["ALL", "WEBSITE DESIGN", "LOGO DESIGN"];

  const filteredItems =
    activeTab === "ALL"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#030812] text-white font-sans selection:bg-[#00b4d8] selection:text-white overflow-x-hidden">
      <GlobalCanvasCursor />
      <MegaNavbar />

      <main className="pt-24 md:pt-28">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030812] py-20 md:py-24 border-b border-[#00b4d8]/20 select-none">
          {/* 6 Vertical Animated Kinetic Scrolling Columns of Real Logos & Websites */}
          <SubpageHeroKineticCanvas />

          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
              <span>SELECTED WORK &amp; PRODUCTION ARCHIVE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Brands &amp; Experiences <br />
              <span className="text-[#00b4d8]">Built to Stand Out.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              Explore authentic vector logos, high-performing websites, and full digital platforms crafted for ambitious business owners worldwide.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#00b4d8] text-white shadow-[0_0_20px_rgba(0,180,216,0.5)]"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-[#00b4d8]/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <CompanyLogosMarquee />

        {/* PORTFOLIO GRID */}
        <section className="py-20 px-6 md:px-12 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setModalItem(item)}
                className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#00b4d8]/60 overflow-hidden shadow-2xl hover:shadow-[0_15px_40px_rgba(0,180,216,0.22)] transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Media Container */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-950 flex items-center justify-center ${
                    item.aspect === "square" ? "aspect-[4/3] p-8" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      item.aspect === "square"
                        ? "max-h-36 max-w-[85%] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                        : "w-full h-full object-cover object-top"
                    }`}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-[#00b4d8] text-[9px] font-mono font-bold uppercase">
                    {item.category}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2 bg-slate-900/50 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider block">
                      {item.subCategory}
                    </span>
                    <h3 className="text-lg font-sans font-bold text-white group-hover:text-[#00b4d8] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL EXPANDED PREVIEW */}
        {modalItem && (
          <div
            onClick={() => setModalItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border-2 border-[#00b4d8] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-white"
            >
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-bold text-base text-white">{modalItem.title}</h3>
                  <span className="text-xs font-mono text-[#00b4d8]">{modalItem.subCategory}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalItem(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-y-auto p-4 flex-1 flex items-center justify-center bg-slate-950">
                <img
                  src={modalItem.image}
                  alt={modalItem.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl border border-slate-800"
                />
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-400">{modalItem.description}</p>
                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#00b4d8] text-white font-mono text-xs font-extrabold uppercase tracking-wider shrink-0"
                >
                  Build a Project Like This →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% PORTFOLIO PRICING"
          title="Inspired by Our Work? Let's Build Yours."
          description="Every great brand begins with a vision. Tell us about your goals, and we'll engineer a tailored blueprint with transparent pricing and milestone delivery."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

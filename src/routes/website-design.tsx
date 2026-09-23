import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


// Real client website layouts from user's Assets/weblayout folder
import webCleaners from "@/assets/real-weblayouts/web-cleaners.png";
import webGarageDoor from "@/assets/real-weblayouts/web-garage-door.png";
import webGrooming from "@/assets/real-weblayouts/web-grooming.png";
import webTicketing from "@/assets/real-weblayouts/web-image76.png";
import webLawns from "@/assets/real-weblayouts/web-lawns.png";
import webMechanic from "@/assets/real-weblayouts/web-mechanic.png";
import webPropertyMgmt from "@/assets/real-weblayouts/web-property-mgmt.png";
import webCharles from "@/assets/real-weblayouts/author-charles.jpg";
import webGresh from "@/assets/real-weblayouts/author-gresh.jpg";
import webRichard from "@/assets/real-weblayouts/author-richard.jpg";

export const Route = createFileRoute("/website-design")({
  component: WebsiteDesignPage,
  head: () => ({
    meta: [
      { title: "Custom Website Design & Web App Development — High Performance Agency" },
      {
        name: "description",
        content:
          "High-converting bespoke websites, Next.js web applications, e-commerce storefronts, and conversion-optimized landing pages engineered for speed and revenue.",
      },
    ],
  }),
});

interface WebItem {
  id: string;
  name: string;
  category: string;
  img: string;
  description: string;
  tags: string[];
}

const REAL_WEBSITES: WebItem[] = [
  {
    id: "1",
    name: "Apex Auto & Fleet Repair Portal",
    category: "Service & Automotive",
    img: webMechanic,
    description: "High-conversion auto repair scheduling hub with dynamic service booking, instant quotes, and local SEO architecture.",
    tags: ["Next.js", "Booking Engine", "Local SEO"],
  },
  {
    id: "2",
    name: "OHO Live Concerts & Ticketing Portal",
    category: "Entertainment & SaaS",
    img: webTicketing,
    description: "Dark-mode event discovery and VIP ticket reservation web app with interactive seating maps and instant checkout.",
    tags: ["React Web App", "Payment Gateway", "Dark UI"],
  },
  {
    id: "3",
    name: "Overhead Elite Garage Doors",
    category: "Home Repair & Trades",
    img: webGarageDoor,
    description: "Lead-generation machine for residential & commercial garage repairs featuring sticky click-to-call and dispatch tracking.",
    tags: ["Lead Gen Lander", "Emergency Dispatch", "CRO"],
  },
  {
    id: "4",
    name: "Pristine Maids Commercial Cleaning",
    category: "Service Business",
    img: webCleaners,
    description: "Clean, trustworthy corporate website with square-footage pricing calculator and recurring subscription checkout.",
    tags: ["Subscription UI", "Pricing Calculator", "Clean UI"],
  },
  {
    id: "5",
    name: "Signature Asset & Property Management",
    category: "Real Estate",
    img: webPropertyMgmt,
    description: "Luxury real estate property portal with tenant screening flows, owner portals, and interactive MLS property search.",
    tags: ["Real Estate MLS", "Tenant Portal", "Figma UI/UX"],
  },
  {
    id: "6",
    name: "Bark & Paws Mobile Pet Grooming",
    category: "Service Business",
    img: webGrooming,
    description: "Vibrant, friendly mobile pet care booking platform with breed selection, slot reservations, and automated SMS reminders.",
    tags: ["Mobile First", "SMS Integration", "Booking"],
  },
  {
    id: "7",
    name: "Evergreen Premier Lawn & Landscapes",
    category: "Home Repair & Trades",
    img: webLawns,
    description: "Commercial landscaping and seasonal maintenance portfolio with fast quote estimation and project photo galleries.",
    tags: ["Portfolio Gallery", "Quote Estimator", "Speed Tuned"],
  },
  {
    id: "8",
    name: "Executive Thought Leader Platform",
    category: "Personal Brand & Media",
    img: webCharles,
    description: "Authority-building personal website with keynote speaking booking, podcast player, and newsletter capture funnels.",
    tags: ["Personal Brand", "Keynote Speaker", "Media Kit"],
  },
  {
    id: "9",
    name: "Global Keynote Speaker & Media Hub",
    category: "Personal Brand & Media",
    img: webGresh,
    description: "Bespoke media portal for international keynote speakers with video showreel integration and corporate speaking kits.",
    tags: ["Video Showreel", "Speaker Press Kit", "Fast CDN"],
  },
  {
    id: "10",
    name: "Executive Mentor & Masterclass Platform",
    category: "Personal Brand & Media",
    img: webRichard,
    description: "Elegant executive education platform built for high-ticket advisory, masterminds, and corporate leadership workshops.",
    tags: ["Advisory Funnel", "Masterclass", "E-Commerce"],
  },
];

function WebsiteDesignPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activePreview, setActivePreview] = useState<WebItem | null>(null);

  const filters = ["ALL", "Service & Automotive", "Entertainment & SaaS", "Home Repair & Trades", "Real Estate", "Personal Brand & Media"];

  const filteredWebsites =
    selectedFilter === "ALL"
      ? REAL_WEBSITES
      : REAL_WEBSITES.filter((item) =>
          item.category.toLowerCase().includes(selectedFilter.toLowerCase())
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
              <span>CUSTOM WEB DESIGN &amp; FULL-STACK DEVELOPMENT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Websites That Convert Visitors Into <span className="text-[#00b4d8]">High-Value Clients.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              We design and engineer lightning-fast, high-converting websites and modern web applications built on Next.js, React, and Tailwind CSS. No clunky templates. Zero bloat. Just pure speed and conversion.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#layouts"
                className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.45)] hover:scale-105"
              >
                View Real Web Layouts ↓
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
              >
                Request Custom Web Quote →
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                { title: "99+ PageSpeed Score", desc: "Optimized Core Web Vitals" },
                { title: "100% Mobile Responsive", desc: "Pixel-perfect on all screen sizes" },
                { title: "Conversion Engineered", desc: "Funnels, sticky CTAs, fast forms" },
                { title: "Full Code Ownership", desc: "You own 100% of your source code" },
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

        {/* REAL WEBSITES SHOWCASE */}
        <section id="layouts" className="relative py-20 px-6 md:px-12 max-w-[1700px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
              PRODUCTION CLIENT LAYOUTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
              Bespoke Architecture Engineered to Perform.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Click any project layout below to view full details and architectural specifications.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {filters.map((flt) => (
                <button
                  key={flt}
                  onClick={() => setSelectedFilter(flt)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === flt
                      ? "bg-[#00b4d8] text-white shadow-[0_0_15px_rgba(0,180,216,0.5)]"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-[#00b4d8]/40"
                  }`}
                >
                  {flt}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Web Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePreview(item)}
                className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#00b4d8]/60 overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(0,180,216,0.25)] transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Browser Frame Header */}
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                    https://{item.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                  </div>
                  <div className="text-[10px] font-mono text-[#00b4d8] font-bold">LIVE</div>
                </div>

                {/* Website Mockup Preview Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                  {/* Hover Overlay CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-xs">
                    <span className="px-5 py-2 rounded-full bg-[#00b4d8] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                      View Full Layout Details ↗
                    </span>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-slate-900/60 border-t border-slate-800">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-sans font-bold text-white group-hover:text-[#00b4d8] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL POPUP FOR EXPANDED LAYOUT PREVIEW */}
        {activePreview && (
          <div
            onClick={() => setActivePreview(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border-2 border-[#00b4d8] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-white"
            >
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-bold text-base text-white">{activePreview.name}</h3>
                  <span className="text-xs font-mono text-[#00b4d8]">{activePreview.category}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-y-auto p-4 flex-1">
                <img
                  src={activePreview.img}
                  alt={activePreview.name}
                  className="w-full h-auto rounded-xl border border-slate-800"
                />
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-400">{activePreview.description}</p>
                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#00b4d8] text-white font-mono text-xs font-extrabold uppercase tracking-wider shrink-0"
                >
                  Build a Site Like This →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TECH STACK & ARCHITECTURE SECTION */}
        <section className="py-20 px-6 md:px-12 bg-slate-950/80 border-y border-slate-800">
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
                MODERN ENGINEERING STACK
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
                Built for High Conversion &amp; Zero Downtime.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "High-Speed Frameworks",
                  desc: "Next.js 15, React 19, TypeScript, and Tailwind CSS for instant page transitions and maximum security.",
                },
                {
                  icon: "🎯",
                  title: "Conversion Architecture",
                  desc: "Engineered user journey flows, sticky mobile navigation, instant quote calculators, and zero-friction lead forms.",
                },
                {
                  icon: "🔍",
                  title: "Enterprise SEO Foundation",
                  desc: "Structured schema markup, semantic HTML5, XML sitemaps, OpenGraph cards, and Core Web Vitals tuning.",
                },
                {
                  icon: "🛡️",
                  title: "Global Edge Infrastructure",
                  desc: "Worldwide CDN edge delivery, automated SSL certificates, automated DDoS protection, and 99.99% uptime SLA.",
                },
              ].map((col, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-[#00b4d8]/40 transition-all space-y-3"
                >
                  <div className="text-3xl">{col.icon}</div>
                  <h3 className="text-lg font-sans font-bold text-white">{col.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% OFF WEB DEVELOPMENT"
          title="Ready to Launch a High-Converting Website?"
          description="Schedule a 20-minute architecture discovery call. We'll evaluate your requirements, design system, and tech stack to deliver a tailored scope and fixed quote within 24 hours."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

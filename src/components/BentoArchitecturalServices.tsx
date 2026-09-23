import React from "react";
import { Link } from "@tanstack/react-router";

interface ServiceBento {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gridSpan: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const BENTO_SERVICES: ServiceBento[] = [
  {
    id: "logo-design",
    number: "01",
    title: "Logo Design",
    subtitle: "Brand Identity & Systems",
    gridSpan: "col-span-12 lg:col-span-6",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    description:
      "Memorable, distinctive logo marks, cohesive typography, palette systems, and complete brand identity packages that position your business ahead of the competition.",
    features: [
      "Custom Vector Logo Marks",
      "Color & Typography Systems",
      "Brand Guidelines & Manuals",
      "Print & Social Asset Kits",
    ],
    ctaText: "Explore Logo Design",
    ctaLink: "/work",
  },
  {
    id: "website-design",
    number: "02",
    title: "Website Design & Dev",
    subtitle: "High-Performance Modern Web",
    gridSpan: "col-span-12 lg:col-span-6",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="2" y1="8" x2="22" y2="8" />
      </svg>
    ),
    description:
      "Custom-crafted, mobile-first web applications and conversion-engineered landing pages built with cutting-edge frameworks, ultra-fast speeds, and sleek interactive UI.",
    features: [
      "Responsive UI/UX Design",
      "Modern React / Next.js Stacks",
      "Ultra-Fast Page Load Speed",
      "Conversion Funnel Architecture",
    ],
    ctaText: "Explore Web Design",
    ctaLink: "/work",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    subtitle: "Data-Driven Growth Engines",
    gridSpan: "col-span-12 lg:col-span-6",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    description:
      "High-impact digital marketing campaigns designed to capture customer intent, dominate Google search rankings, and deliver measurable revenue growth.",
    features: [
      "Search Engine Optimization (SEO)",
      "Targeted Meta & Google Ads",
      "Content Strategy & Copywriting",
      "Conversion Rate Optimization",
    ],
    ctaText: "Launch Campaigns",
    ctaLink: "/marketing",
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI Automation",
    subtitle: "Intelligent Systems & Workflows",
    gridSpan: "col-span-12 lg:col-span-6",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    description:
      "Transformative AI automation and intelligent workflow architectures that automate manual operations, qualify leads, and scale your organization around the clock.",
    features: [
      "Custom AI Agents & Chatbots",
      "CRM & Pipeline Automations",
      "API & Zapier/Make Integrations",
      "Automated Client Communications",
    ],
    ctaText: "Automate Workflows",
    ctaLink: "/services",
  },
];interface BentoServicesProps {
  isCompact?: boolean;
}

export default function BentoArchitecturalServices({ isCompact = false }: BentoServicesProps) {
  // If isCompact is true (home page), show 4 minimized compact cards
  const servicesToDisplay = isCompact ? BENTO_SERVICES.slice(0, 4) : BENTO_SERVICES;

  return (
    <section id="featured-services" className="relative bg-gradient-to-r from-[#00b4d8] via-[#0284c7] to-[#0369a1] text-white py-12 md:py-16 select-none w-full border-t border-b border-white/20 font-sans overflow-hidden flex flex-col justify-center">
      
      {/* Dot Matrix Overlay Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: `36px 36px`
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 space-y-10 z-10">
        
        {/* LEFT-ALIGNED HEADLINE & METADATA */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/25">
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono font-extrabold uppercase tracking-[0.3em] text-[#e0f2fe] block">
              Core Digital &amp; Creative Services
            </span>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.85rem] font-black tracking-tight text-white leading-tight whitespace-normal lg:whitespace-nowrap">
              Branded, Engineered, Marketed &amp; Automated to Scale.
            </h2>
          </div>
        </div>

        {/* MINIMIZED CARDS GRID FOR HOME PAGE OR FULL BENTO GRID */}
        {isCompact ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {servicesToDisplay.map((service) => (
              <div
                key={service.id}
                className="group relative p-6 md:p-7 rounded-2xl border-2 border-white/40 bg-white/95 text-[#0c2340] backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-2 hover:border-white hover:shadow-2xl"
              >
                {/* Top Row: Badge & Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-[#00b4d8]">
                    {service.number} · {service.subtitle}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
                </div>

                {/* Icon & Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#f0f9ff] border border-[#00b4d8]/40 group-hover:scale-110 transition-transform shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-extrabold text-[#0c2340] leading-snug group-hover:text-[#00b4d8] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-wider">
                    SPEC READY
                  </span>
                  <Link
                    to={service.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider text-[#0c2340] group-hover:text-[#00b4d8] transition-colors"
                  >
                    <span>View details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="col-span-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <span className="text-sm sm:text-base font-sans font-bold text-white">
                Looking for a unified brand identity, custom website, and AI automation package?
              </span>
              <Link
                to="/services"
                className="px-6 py-3 rounded-xl bg-white text-[#0c2340] hover:bg-sky-50 font-mono text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all shrink-0"
              >
                EXPLORE ALL SERVICES →
              </Link>
            </div>
          </div>
        ) : (
          /* FULL BENTO GRID ON DEDICATED SERVICES PAGE */
          <div className="w-full grid grid-cols-12 gap-6 md:gap-8 items-stretch">
            {BENTO_SERVICES.map((service) => (
              <div
                key={service.id}
                className={`${service.gridSpan} group relative p-8 md:p-10 rounded-3xl border-2 border-white/40 bg-white/95 text-[#0c2340] backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 hover:border-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]`}
              >
                {/* Top Row: Badge & Number */}
                <div className="flex items-center justify-between pb-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/40">
                    <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
                    <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00b4d8]">
                      {service.subtitle}
                    </span>
                  </div>

                  <span className="font-mono text-sm font-extrabold text-slate-400 group-hover:text-[#00b4d8] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Sized Serif Typography */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[#f0f9ff] border border-[#00b4d8]/40 group-hover:scale-110 group-hover:border-[#00b4d8] group-hover:shadow-md transition-all duration-300 shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight leading-tight group-hover:text-[#00b4d8] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-medium pt-2">
                    {service.description}
                  </p>
                </div>

                {/* 4 Feature Deliverables Grid */}
                <div className="pt-2">
                  <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00b4d8] mb-3">
                    INCLUDED DELIVERABLES:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2.5 p-3 rounded-xl border border-[#00b4d8]/30 bg-[#f0f9ff] text-[#0c2340] font-sans text-xs md:text-sm font-bold shadow-xs"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#00b4d8] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 shadow-sm">
                          ✓
                        </span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar & Dark Navy CTA */}
                <div className="pt-4 border-t border-[#00b4d8]/20 space-y-4">
                  <div className="w-full h-1 bg-[#00b4d8]/20 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#00b4d8] rounded-full shadow-[0_0_10px_#00b4d8]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                      <span>FIXED QUOTE</span>
                      <span className="text-[#00b4d8]">48 HOURS</span>
                    </div>

                    <Link
                      to={service.ctaLink}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0c2340] hover:bg-[#00b4d8] text-white font-mono text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>{service.ctaText}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

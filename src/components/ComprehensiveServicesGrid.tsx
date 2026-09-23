import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  link?: string;
  icon: ReactNode;
  tag: string;
}


const SERVICES_12: ServiceItem[] = [
  {
    id: "01",
    title: "Book Planning",
    desc: "Market positioning, chapter outlines, audience mapping, and concept validation.",
    link: "/process",
    tag: "STRATEGY",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Ghostwriting",
    desc: "Bestselling ghostwriters translate your vision into memoir, business, or fiction.",
    link: "/ghostwriting",
    tag: "CRAFT",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Editing",
    desc: "Developmental, line, copy editing, and plagiarism reports.",
    link: "/editing",
    tag: "REFINEMENT",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Book Proposals & Queries",
    desc: "Executive agent pitch packages and proposal decks built for Big-5 interest.",
    link: "/process",
    tag: "PUBLISHING",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Publishing Navigation",
    desc: "End-to-end KDP, IngramSpark, print-on-demand, and global distribution.",
    link: "/service/self-publishing",
    tag: "DISTRIBUTION",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Bestseller List Targeting",
    desc: "Data-driven Amazon Ads, social campaigns, and NYT list strategy.",
    link: "/marketing",
    tag: "MARKETING",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Beta Reader Testing",
    desc: "Target demographic feedback, pacing analysis, and readers' focus group.",
    link: "/process",
    tag: "AUDIENCE",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Book Coaching",
    desc: "1-on-1 author guidance, manuscript critiques, and milestone accountability.",
    link: "/process",
    tag: "MENTORSHIP",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    id: "09",
    title: "Cover & Interior Design",
    desc: "Print-ready hardcover, paperback formatting, and custom KDP cover art.",
    link: "/cover-design",
    tag: "DESIGN",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      </svg>
    ),
  },
  {
    id: "10",
    title: "Agent Introductions",
    desc: "Direct referrals and pitch introductions to top literary agents.",
    link: "/process",
    tag: "CONNECTIONS",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    id: "11",
    title: "Direct Submissions to Publishers",
    desc: "Traditional pitch routing to Big-5 acquiring editors and indie presses.",
    link: "/process",
    tag: "SUBMISSIONS",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    id: "12",
    title: "Audiobook Production",
    desc: "Studio narration, ACX compliance, and Audible distribution.",
    link: "/audiobook",
    tag: "AUDIO",
    icon: (
      <svg className="w-9 h-9 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    ),
  },
];

export default function ComprehensiveServicesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-[#f8fafc] text-slate-900 py-20 md:py-28 overflow-hidden select-none w-full">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] blur-[90px]" />
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-16 z-10 space-y-12">
        
        {/* Full-Width Section Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2 max-w-4xl">

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">
              Our Comprehensive Book-Writing Services Include
            </h2>
          </div>

          <p className="text-sm text-slate-600 font-sans max-w-md">
            From initial concept strategy to global KDP distribution and bestseller marketing — every service under one roof.
          </p>
        </div>

        {/* 100% Full-Width Edge-to-Edge Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-200/60">
          {SERVICES_12.map((service, i) => {
            const row = Math.floor(i / 6);
            const col = i % 6;
            const isLightCyan = (row + col) % 2 === 0;

            return (
              <Link
                key={service.id}
                to={service.link || "/process"}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative p-7 flex flex-col justify-between space-y-6 transition-all duration-300 min-h-[220px] ${
                  isLightCyan
                    ? "bg-[#eef9ff] hover:bg-[#e0f2fe]"
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                {/* Top Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white shadow-sm border border-[#00b4d8]/20 group-hover:scale-110 group-hover:border-[#00b4d8]/60 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#00b4d8] uppercase">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#00b4d8] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Arrow Link */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#00b4d8] transition-colors">
                  <span>LEARN MORE</span>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

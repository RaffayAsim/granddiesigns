import { useState } from "react";
import { Link } from "@tanstack/react-router";

import editingDesk from "@/assets/editing-desk.jpg";
import formatsMockup from "@/assets/formats-mockup.jpg";
import trioHardcovers from "@/assets/trio-hardcovers.jpg";
import heroPen from "@/assets/hero-pen.jpg";
import openBook from "@/assets/open-book.jpg";
import shelfLineup from "@/assets/shelf-lineup.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

interface ServiceDetail {
  id: string;
  num: string;
  title: string;
  category: "CRAFT" | "PUBLISHING" | "DESIGN" | "MARKETING";
  shortDesc: string;
  fullDesc: string;
  link: string;
  image: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "book-planning",
    num: "01",
    title: "Book Planning & Architecture",
    category: "CRAFT",
    shortDesc: "Market positioning, chapter outlines, audience mapping, and concept validation.",
    fullDesc: "Before writing a single word, our senior publishing strategists analyze your target market, outline every chapter, and map out your core thesis for maximum impact.",
    link: "/process",
    image: openBook,
    deliverables: ["Market Positioning Analysis", "30-Page Chapter Architecture", "Target Audience Dossier", "Reader Hook Validation"],
    metric: "100%",
    metricLabel: "CONCEPT VALIDATION",
  },
  {
    id: "ghostwriting",
    num: "02",
    title: "Ghostwriting & Manuscript Craft",
    category: "CRAFT",
    shortDesc: "Bestselling ghostwriters translate your vision into memoir, business, or fiction.",
    fullDesc: "Work 1-on-1 with #1 New York Times-bestselling writers. We capture your authentic voice and craft a polished, publication-ready manuscript with bi-weekly chapter reviews.",
    link: "/ghostwriting",
    image: heroPen,
    deliverables: ["Dedicated Senior Ghostwriter", "Weekly Draft Reviews", "Originality & Style Guarantee", "Full Intellectual Property Transfer"],
    metric: "100%",
    metricLabel: "AUTHOR IP RETENTION",
  },
  {
    id: "editing",
    num: "03",
    title: "Developmental & Line Editing",
    category: "CRAFT",
    shortDesc: "Multi-layered developmental editing, copyediting, and plagiarism reports.",
    fullDesc: "Our Big-5 editorial team performs surgical developmental edits, tone consistency polishes, line editing, and a comprehensive plagiarism report.",
    link: "/editing",
    image: editingDesk,
    deliverables: ["Developmental Structural Edit", "Line & Copy Editing Pass", "Chicago Manual Style Alignment", "Turnitin Plagiarism Certificate"],
    metric: "3-Pass",
    metricLabel: "EDITORIAL PRECISION",
  },
  {
    id: "proposals",
    num: "04",
    title: "Book Proposals & Query Packages",
    category: "PUBLISHING",
    shortDesc: "Executive agent pitch packages and proposal decks built for Big-5 interest.",
    fullDesc: "Acquiring editors and top agents demand rigorous proposals. We craft executive 40-page proposal decks including competitive analysis, sample chapters, and marketing plans.",
    link: "/process",
    image: story1,
    deliverables: ["40-Page Proposal Deck", "Executive Query Letter", "Comparative Title Matrix", "Platform & Bio Positioning"],
    metric: "Big-5",
    metricLabel: "PROPOSAL STANDARDS",
  },
  {
    id: "publishing-nav",
    num: "05",
    title: "Publishing Navigation & KDP",
    category: "PUBLISHING",
    shortDesc: "End-to-end KDP, IngramSpark, print-on-demand, and global distribution.",
    fullDesc: "We manage the entire technical publishing stack — ISBN assignment, copyright registration, metadata optimization, and global distribution across 40,000+ bookstores.",
    link: "/service/self-publishing",
    image: shelfLineup,
    deliverables: ["KDP & IngramSpark Direct Setup", "ISBN & Library of Congress Control", "Global Metadata & Category Tuning", "100% Royalty Account Setup"],
    metric: "100%",
    metricLabel: "ROYALTY KEEP RATE",
  },
  {
    id: "bestseller-targeting",
    num: "06",
    title: "Bestseller List Campaigning",
    category: "MARKETING",
    shortDesc: "Data-driven Amazon Ads, social campaigns, and NYT list strategy.",
    fullDesc: "Transforming your book into a commercial powerhouse. We run targeted keyword campaigns, Amazon PPC, newsletter features, and press outreach to drive rank spikes.",
    link: "/marketing",
    image: story2,
    deliverables: ["Amazon PPC Ad Optimization", "Press Outreach & Podcast Booking", "Launch Week Rank Spikes", "Author Website & Sales Funnel"],
    metric: "#1",
    metricLabel: "CHART TARGETING",
  },
  {
    id: "beta-testing",
    num: "07",
    title: "Beta Reader & Demographic Testing",
    category: "CRAFT",
    shortDesc: "Target demographic feedback, pacing analysis, and readers' focus group.",
    fullDesc: "Test your manuscript before public release with curated focus groups in your genre to identify pacing lulls, character arcs, and emotional resonance.",
    link: "/process",
    image: story3,
    deliverables: ["50+ Reader Focus Group", "Pacing & Reader Heatmaps", "Comprehensive Feedback Report", "Chapter-by-Chapter Scoring"],
    metric: "50+",
    metricLabel: "TESTED READERS",
  },
  {
    id: "book-coaching",
    num: "08",
    title: "1-on-1 Author Coaching",
    category: "MARKETING",
    shortDesc: "Author guidance, manuscript critiques, and milestone accountability.",
    fullDesc: "For authors who write their own manuscripts, our senior executive editors provide 1-on-1 weekly coaching, chapter critiques, and writer's block resolution.",
    link: "/process",
    image: openBook,
    deliverables: ["Weekly 1-on-1 Video Consults", "Chapter-by-Chapter Feedback", "Writing Discipline Framework", "Direct Line to Senior Editor"],
    metric: "Weekly",
    metricLabel: "EXECUTIVE ACCESS",
  },
  {
    id: "cover-design",
    num: "09",
    title: "Cover & Interior Typesetting",
    category: "DESIGN",
    shortDesc: "Print-ready hardcover, paperback formatting, and custom KDP cover art.",
    fullDesc: "Books are judged by their covers. Our award-winning art directors design custom typography, foil-stamped dust jackets, and interior typesetting.",
    link: "/cover-design",
    image: trioHardcovers,
    deliverables: ["Print-Ready PDF & Dust Jacket", "Custom 3D Book Mockups", "Interior Typesetting & Drop Caps", "Audiobook Square Cover Art"],
    metric: "KDP",
    metricLabel: "PRINT-READY SPECS",
  },
  {
    id: "agent-introductions",
    num: "10",
    title: "Literary Agent Introductions",
    category: "PUBLISHING",
    shortDesc: "Direct referrals and pitch introductions to top literary agents.",
    fullDesc: "Bypass the slush pile. We leverage our network of Big-5 literary agents to provide warm introductions for high-potential manuscripts.",
    link: "/process",
    image: story1,
    deliverables: ["Warm Agent Pitch Submissions", "Agent Pitch Coaching", "Contract Review Guidance", "Representation Strategy"],
    metric: "Direct",
    metricLabel: "SLUSH PILE BYPASS",
  },
  {
    id: "direct-submissions",
    num: "11",
    title: "Direct Submissions to Publishers",
    category: "PUBLISHING",
    shortDesc: "Traditional pitch routing to Big-5 acquiring editors and indie presses.",
    fullDesc: "Direct pitch routing to senior acquiring editors at major publishing houses and premier independent literary presses.",
    link: "/process",
    image: story2,
    deliverables: ["Acquiring Editor Pitch Decks", "Independent Press Submissions", "Publishing Option Negotiations", "Rights & Licensing Advice"],
    metric: "Big-5",
    metricLabel: "EDITOR DIRECT PITCH",
  },
  {
    id: "audiobook",
    num: "12",
    title: "Audiobook Production & Mastering",
    category: "DESIGN",
    shortDesc: "Studio narration, ACX compliance, and Audible distribution.",
    fullDesc: "Turn your book into a immersive listening experience. Professional SAG voice actors, studio mixing, sound design, and ACX/Audible distribution.",
    link: "/audiobook",
    image: formatsMockup,
    deliverables: ["SAG-AFTRA Voice Narrators", "Studio Mixing & Mastering", "ACX / Audible Technical Audit", "Whispersync E-Book Pairing"],
    metric: "ACX",
    metricLabel: "AUDIBLE COMPLIANT",
  },
];

export default function SplitScreenEditorialServices() {
  const [activeId, setActiveId] = useState<string>("ghostwriting");

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[1];

  return (
    <section id="services" className="relative bg-[#030812] text-white py-20 md:py-28 overflow-hidden select-none w-full border-t border-b border-[#00b4d8]/20 font-sans">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_75%)] blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
            backgroundSize: `40px 40px`
          }}
        />
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-16 z-10 space-y-12">
        
        {/* Full-Width Section Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2 max-w-4xl">

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Our Comprehensive Book-Writing Services Include
            </h2>
          </div>

          <div className="shrink-0 text-slate-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
            <span>12 END-TO-END SERVICES</span>
          </div>
        </div>

        {/* SPLIT-SCREEN LAYOUT: LEFT STICKY STAGE (5 cols) | RIGHT EDITORIAL ACCORDION (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT STICKY 3D VISUAL MOCKUP STAGE */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#00b4d8]/40 bg-[#071325] shadow-[0_25px_60px_-15px_rgba(6,182,212,0.3)] group">
              
              {/* Dynamic Image Display with Smooth Fade Effect */}
              <div className="relative h-[340px] md:h-[400px] w-full overflow-hidden">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-[#030812]/40 to-transparent" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase text-[#00b4d8] bg-[#030812]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#00b4d8]/40">
                    SERVICE {activeService.num} OF 12
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {activeService.category}
                  </span>
                </div>

                {/* Bottom Floating Metric Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10">
                  <div>
                    <div className="text-3xl font-mono font-black text-[#00b4d8] leading-none">
                      {activeService.metric}
                    </div>
                    <div className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider mt-1">
                      {activeService.metricLabel}
                    </div>
                  </div>

                  <Link
                    to={activeService.link}
                    className="inline-flex items-center gap-2 bg-[#00b4d8] hover:bg-[#0077b6] text-white px-5 py-2.5 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-[0_4px_16px_rgba(0,180,216,0.4)]"
                  >
                    <span>EXPLORE</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Deliverables Checklist Grid */}
              <div className="p-6 md:p-8 space-y-4 bg-[#071325]/90 backdrop-blur-xl border-t border-white/10">
                <div className="text-xs font-mono font-bold text-[#00b4d8] uppercase tracking-widest flex items-center gap-2">
                  <span>✦ KEY DELIVERABLES & SPECS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT INTERACTIVE ACCORDION LIST */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeId;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-[#00b4d8] bg-white/[0.08] shadow-[0_10px_30px_rgba(6,182,212,0.18)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-mono font-bold transition-colors ${isActive ? "text-[#00b4d8]" : "text-slate-500"}`}>
                        {service.num}
                      </span>
                      <h3 className={`font-serif text-xl font-normal transition-colors ${isActive ? "text-white font-medium" : "text-slate-300 group-hover:text-white"}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded ${isActive ? "bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/40" : "bg-white/5 text-slate-400"}`}>
                        {service.category}
                      </span>
                      <span className={`text-lg transition-transform duration-300 ${isActive ? "rotate-90 text-[#00b4d8]" : "text-slate-500"}`}>
                        →
                      </span>
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isActive && (
                    <div className="px-6 pb-6 pt-0 space-y-3 border-t border-white/5 mt-1 text-sm text-slate-300 font-sans leading-relaxed animate-fadeIn">
                      <p className="pt-3">{service.fullDesc}</p>
                      <div className="pt-2 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#00b4d8]">★ Full End-to-End Service Package</span>
                        <Link to={service.link} className="text-white hover:underline flex items-center gap-1">
                          <span>View Full Service Page</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

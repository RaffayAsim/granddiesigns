import { useState } from "react";
import { Link } from "@tanstack/react-router";

interface TreasureWaypoint {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  descPara1: string;
  descPara2: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  // Coordinates on the map canvas (percentage-based)
  x: number; // % from left
  y: number; // % from top
}

const TREASURE_WAYPOINTS: TreasureWaypoint[] = [
  {
    id: "ebook-writing",
    stepNumber: "01",
    title: "Ebook Writing",
    subtitle: "Capture Your Unique Author Voice",
    icon: "📜",
    badge: "WAYPOINT 01 · GHOSTWRITING",
    descPara1:
      "Our professional ebook writing services are designed for authors who have a vision but need a skilled wordsmith to bring it to life. We specialize in various genres, including business guides, self-help books, historical fiction, and captivating memoirs. Our team of expert ghostwriters works closely with you to capture your unique voice, ensuring that every chapter resonates with your target audience.",
    descPara2:
      "Beyond just writing, we focus on structural integrity and reader engagement. We conduct in-depth research to ensure your content is authoritative and compelling. Whether you are looking to establish yourself as a thought leader or want to tell a story that stays with readers forever, our ebook writing process ensures a high-quality, market-ready final script.",
    features: [
      "Custom Plot Development",
      "Genre-Specific Research",
      "Engaging Chapter Outline",
      "Final Script Formatting",
    ],
    ctaText: "Start Writing My Ebook",
    ctaLink: "/ghostwriting",
    x: 12,
    y: 20,
  },
  {
    id: "editing-proofreading",
    stepNumber: "02",
    title: "Book Editing & Proofreading",
    subtitle: "Multi-Layered Precision & Clarity",
    icon: "🔍",
    badge: "WAYPOINT 02 · EDITORIAL CRAFT",
    descPara1:
      "Precision is the key to a successful book. Our book editing services go beyond simple spell-checks; we dive deep into the narrative flow, tone consistency, and structural clarity of your manuscript. A single typo can break a reader’s immersion, which is why our multi-layered proofreading process is essential for any serious author.",
    descPara2:
      "We offer comprehensive line editing and developmental feedback to ensure your message is clear and impactful. By choosing our manuscript editing team, you are guaranteed a polished, professional version of your work that stands up to the scrutiny of critics and readers alike. We also provide a detailed plagiarism report to ensure your content is 100% original and unique.",
    features: [
      "Comprehensive Line Editing",
      "Grammar & Spell Check",
      "Tone & Style Consistency",
      "Plagiarism Report Included",
    ],
    ctaText: "Get My Manuscript Edited",
    ctaLink: "/editing",
    x: 28,
    y: 65,
  },
  {
    id: "cover-design",
    stepNumber: "03",
    title: "Book Cover Design",
    subtitle: "High-Impact Artwork & 3D Mockups",
    icon: "🎨",
    badge: "WAYPOINT 03 · VISUAL BRANDING",
    descPara1:
      "They say don’t judge a book by its cover, but readers do it every day. Our book cover design service ensures your book makes a powerful first impression on Amazon and in bookstores. We combine premium custom artwork with industry-standard typography to create eye-catching designs that reflect your book’s soul.",
    descPara2:
      "All our designs meet Amazon KDP size standards and include high-resolution 3D mockups and print-ready PDF files for a seamless publishing experience.",
    features: [
      "Premium Custom Artwork",
      "Amazon KDP Size Standards",
      "High-Resolution 3D Mockups",
      "Print-Ready PDF Files",
    ],
    ctaText: "Design My Book Cover",
    ctaLink: "/cover-design",
    x: 48,
    y: 25,
  },
  {
    id: "audiobook-narration",
    stepNumber: "04",
    title: "Audiobook Narration",
    subtitle: "Studio Recording & Voice Artistry",
    icon: "🎙️",
    badge: "WAYPOINT 04 · AUDIO PRODUCTION",
    descPara1:
      "Expand your reach by turning your book into a high-quality audiobook. Our narration services connect you with professional voice artists who bring your characters and message to life with the right emotion and pacing.",
    descPara2:
      "We handle the entire production process, including studio-quality recording, background sound effects, and mastering to meet ACX and Audible standards. Make your story accessible to millions of listeners who prefer to consume content on the go.",
    features: [
      "Professional Voice Artists",
      "Studio-Quality Recording",
      "ACX & Audible Standards",
      "Background Sound Effects",
    ],
    ctaText: "Narrate My Audiobook",
    ctaLink: "/audiobook",
    x: 64,
    y: 72,
  },
  {
    id: "self-publishing",
    stepNumber: "05",
    title: "Self Publishing",
    subtitle: "Global Amazon KDP & Distribution Setup",
    icon: "🌍",
    badge: "WAYPOINT 05 · GLOBAL RELEASE",
    descPara1:
      "Navigating the world of self-publishing can be complex, but we make it easy. We handle the entire technical process of publishing your book on Amazon KDP and other global distribution platforms.",
    descPara2:
      "From ISBN assignment and metadata optimization to global distribution layout and royalties management setup, our team ensures your book is properly indexed and available for purchase worldwide. We take the stress out of the ‘Submit’ button.",
    features: [
      "Amazon KDP Account Setup",
      "ISBN & Metadata Optimization",
      "Global Distribution Layout",
      "Royalties Management Setup",
    ],
    ctaText: "Publish My Book Now",
    ctaLink: "/self-publishing",
    x: 80,
    y: 30,
  },
  {
    id: "book-marketing",
    stepNumber: "06",
    title: "Book Marketing",
    subtitle: "Targeted Campaigns & Bestseller Elevation",
    icon: "🏆",
    badge: "WAYPOINT 06 · BESTSELLER PEAK (X MARKS THE SPOT)",
    descPara1:
      "Publishing your book is only the first step; getting it into the hands of readers is where the real work begins. Our strategic book marketing plans are tailored to increase your book’s visibility and sales.",
    descPara2:
      "We manage everything from Amazon Ads and social media promotion to setting up professional author websites and distributing press releases. Our goal is to build your author brand and ensure your book reaches the top of the bestseller charts.",
    features: [
      "Social Media Promotion",
      "Amazon Ads Management",
      "Author Website Setup",
      "Press Release Distribution",
    ],
    ctaText: "Promote My Book",
    ctaLink: "/marketing",
    x: 92,
    y: 75,
  },
];

export default function PublishingTreasureMapServices() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeWaypoint = TREASURE_WAYPOINTS[activeIdx];

  return (
    <section id="publishing-map" className="relative bg-gradient-to-br from-[#d9f5fb] via-[#e6f9fc] to-[#ccf2f9] text-slate-900 py-20 md:py-32 select-none w-full border-t border-b border-[#00b4d8]/20 font-sans overflow-hidden">
      
      {/* Animated Dash Path CSS */}
      <style>{`
        @keyframes marchMapTrail {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 48; }
        }
        .map-dashed-trail {
          stroke-dasharray: 12, 10;
          animation: marchMapTrail 3s linear infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .ping-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Dot Matrix Background Grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 space-y-12 z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0c2340] tracking-tight leading-none">
            6 Waypoints to Your Bestseller Treasure
          </h2>
          <p className="text-slate-600 font-sans text-base md:text-lg max-w-2xl mx-auto font-light">
            Click any Waypoint pin along the winding trail to reveal its in-depth manuscript deliverables &amp; roadmap.
          </p>
        </div>

        {/* ILLUSTRATED MAP CANVAS CONTAINER */}
        <div className="w-full relative rounded-3xl border-2 border-[#00b4d8]/40 bg-white/60 backdrop-blur-xl shadow-2xl p-6 md:p-10 overflow-hidden min-h-[420px] md:min-h-[480px]">
          
          {/* Compass Rose Watermark */}
          <div className="absolute top-6 right-8 text-[#00b4d8]/20 font-serif font-black text-7xl md:text-9xl pointer-events-none select-none">
            🧭 N
          </div>

          {/* Map Grid Lines */}
          <div className="absolute inset-0 pointer-events-none border border-dashed border-[#00b4d8]/20 m-6 rounded-2xl" />

          {/* SVG ORGANIC WINDING DASHED TREASURE TRAIL */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
            <path
              d="M 120 100 C 240 320, 320 320, 480 120 C 600 -40, 720 380, 840 140 C 960 -60, 1100 360, 1260 180 C 1380 40, 1500 340, 1620 340"
              fill="none"
              stroke="#00b4d8"
              strokeWidth="4"
              strokeLinecap="round"
              className="map-dashed-trail"
            />
          </svg>

          {/* 6 INTERACTIVE MAP WAYPOINT NODES */}
          <div className="relative w-full h-[360px] md:h-[400px] z-20">
            {TREASURE_WAYPOINTS.map((wp, i) => {
              const isActive = activeIdx === i;

              return (
                <div
                  key={wp.id}
                  style={{ left: `${wp.x}%`, top: `${wp.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  onClick={() => setActiveIdx(i)}
                >
                  {/* Waypoint Pin Button */}
                  <div className={`relative flex flex-col items-center transition-all duration-300 ${
                    isActive ? "scale-125 z-30" : "hover:scale-110 z-20"
                  }`}>
                    
                    {/* Ping Ring for Active Pin */}
                    {isActive && (
                      <div className="absolute -inset-3 rounded-full bg-[#00b4d8]/30 ping-glow" />
                    )}

                    {/* Pin Circle Icon */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-xl transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-[#00b4d8] text-white border-white shadow-[0_0_30px_rgba(0,180,216,0.6)]"
                        : "bg-white text-[#00b4d8] border-[#00b4d8]/50 hover:border-[#00b4d8]"
                    }`}>
                      <span>{wp.icon}</span>
                    </div>

                    {/* Waypoint Label Box */}
                    <div className={`mt-2 px-3 py-1 rounded-xl text-center shadow-md backdrop-blur-md transition-all duration-300 border ${
                      isActive
                        ? "bg-[#0c2340] text-white border-[#00b4d8]"
                        : "bg-white/90 text-[#0c2340] border-slate-200 group-hover:border-[#00b4d8]"
                    }`}>
                      <div className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#00b4d8]">
                        WAYPOINT 0{i + 1}
                      </div>
                      <div className="font-serif text-xs font-bold whitespace-nowrap">
                        {wp.title}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-6 flex items-center gap-4 text-xs font-mono font-bold text-slate-500 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#00b4d8]/30">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8]" /> ACTIVE WAYPOINT</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300" /> PUBLISHING ROUTE</span>
          </div>
        </div>

        {/* ACTIVE WAYPOINT TREASURE LOGBOOK SPEC SHEET */}
        <div className="w-full rounded-3xl border-2 border-[#00b4d8]/40 bg-white shadow-2xl p-8 md:p-12 space-y-8 relative">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-dashed border-[#00b4d8]/30">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] font-mono text-xs font-extrabold uppercase tracking-widest">
              <span>{activeWaypoint.badge}</span>
            </div>
            <div className="font-mono text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              LOGBOOK ENTRY 0{activeIdx + 1} / 06
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight leading-tight">
              {activeWaypoint.title}
            </h3>
            <p className="font-mono text-sm font-bold text-[#00b4d8]">
              ✦ {activeWaypoint.subtitle}
            </p>
          </div>

          {/* 2 Paragraph Narrative Content */}
          <div className="grid lg:grid-cols-2 gap-6 text-slate-600 font-sans text-sm md:text-base leading-relaxed">
            <p className="bg-[#f0f9ff]/50 p-5 rounded-2xl border border-[#00b4d8]/20">{activeWaypoint.descPara1}</p>
            <p className="bg-[#f0f9ff]/50 p-5 rounded-2xl border border-[#00b4d8]/20">{activeWaypoint.descPara2}</p>
          </div>

          {/* 4 Deliverable Checkmarks */}
          <div className="pt-2">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0c2340] mb-4">
              WAYPOINT DELIVERABLES &amp; INCLUDED SPECS:
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeWaypoint.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#00b4d8]/30 bg-[#f0f9ff] text-slate-800 font-sans text-xs md:text-sm font-bold shadow-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-[#00b4d8] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation & CTA */}
          <div className="pt-6 border-t border-[#00b4d8]/25 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(prev - 1, 0))}
                className="px-4 py-2 rounded-xl border border-slate-300 font-mono text-xs font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#00b4d8] transition-colors"
              >
                ← PREVIOUS WAYPOINT
              </button>
              <button
                disabled={activeIdx === TREASURE_WAYPOINTS.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(prev + 1, TREASURE_WAYPOINTS.length - 1))}
                className="px-4 py-2 rounded-xl border border-slate-300 font-mono text-xs font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#00b4d8] transition-colors"
              >
                NEXT WAYPOINT →
              </button>
            </div>

            <Link
              to={activeWaypoint.ctaLink}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#00b4d8] hover:bg-[#0284c7] text-white font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>{activeWaypoint.ctaText}</span>
              <span className="text-base">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

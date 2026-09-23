import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


export const Route = createFileRoute("/marketing")({
  component: MarketingPage,
  head: () => ({
    meta: [
      { title: "Performance Digital Marketing & SEO Agency — High ROI Growth" },
      {
        name: "description",
        content:
          "Performance-driven Google Ads, Meta Ads, SEO engineering, and CRO funnels designed to scale qualified leads, revenue, and market share.",
      },
    ],
  }),
});

function MarketingTypewriterText() {
  const words = [
    "predictable revenue.",
    "top-tier Google rankings.",
    "profitable paid ads.",
    "exponential lead growth.",
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
      }, 2200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullWord.substring(0, displayedText.length - 1)
            : fullWord.substring(0, displayedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words]);

  return (
    <span className="italic font-normal text-[#00b4d8] relative inline-block transition-all">
      <span className="inline-block border-r-2 border-[#00b4d8] pr-0.5 animate-pulse">
        {displayedText}
      </span>
    </span>
  );
}

const MARKETING_PILLARS = [
  {
    icon: "📈",
    title: "Google Search & Performance Max",
    desc: "Capture high-intent prospects precisely when they are searching to buy. We engineer negative keyword matrices, high-converting ad copy, and smart bidding algorithms.",
    metrics: "Average 4.8x Return on Ad Spend (ROAS)",
    tactics: ["Search & Shopping campaigns", "Negative keyword daily tuning", "Granular geotargeting & device bidding", "Conversion tracking with GA4 & server GTM"],
  },
  {
    icon: "📱",
    title: "Meta (Facebook & Instagram) Growth Ads",
    desc: "Scale brand awareness and customer acquisition with scroll-stopping video creatives, dynamic lookalike audiences, and full-funnel retargeting campaigns.",
    metrics: "62% Lower Cost-Per-Acquisition",
    tactics: ["High-converting UGC & video ads", "Dynamic multi-tier retargeting", "Custom CBO & ABO budget optimization", "Conversions API (CAPI) server sync"],
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate high-value organic search terms. We build authoritative editorial backlink profiles, technical schema markup, and content clusters that compound for years.",
    metrics: "+340% Average Organic Traffic Lift",
    tactics: ["Core technical SEO & crawl budget", "Semantic topical authority clusters", "White-hat high-DA digital PR links", "Google Business Profile local map pack"],
  },
  {
    icon: "🎯",
    title: "Conversion Rate Optimization (CRO)",
    desc: "Turn your existing web traffic into paying customers. We conduct multivariate A/B testing, heatmap analysis, friction audits, and psychological copywriting overhauls.",
    metrics: "+42% Lift in Lead Form Submissions",
    tactics: ["Heatmap & session recording audits", "Frictionless form flow optimization", "Social proof & urgency architecture", "Continuous statistical A/B tests"],
  },
];

function MarketingPage() {
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
              <span>PERFORMANCE DIGITAL MARKETING &amp; SEO ENGINE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Data-Driven Marketing Engineered for <br />
              <MarketingTypewriterText />
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              We eliminate wasted ad spend and vanity metrics. Our multi-channel campaigns combine algorithmic media buying, technical SEO, and conversion science to scale your bottom-line profit.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#pillars"
                className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.45)] hover:scale-105"
              >
                Explore Growth Engines ↓
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
              >
                Claim Free Marketing Audit →
              </a>
            </div>

            {/* Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                { title: "$12M+ Managed Spend", desc: "Proven track record in competitive niches" },
                { title: "Real-Time BI Dashboards", desc: "Transparent live conversion attribution" },
                { title: "No Long-Term Lock-Ins", desc: "Performance speaks for itself" },
                { title: "Google & Meta Certified", desc: "Direct platform partner support" },
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

        {/* MARKETING PILLARS */}
        <section id="pillars" className="py-20 px-6 md:px-12 max-w-[1700px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
              OUR GROWTH ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
              Four Pillars of Predictable Customer Acquisition.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Synchronized campaigns that turn cold prospects into repeat, high-LTV customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MARKETING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#00b4d8]/60 transition-all space-y-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{pillar.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-[10px] font-mono font-extrabold uppercase">
                      {pillar.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl font-sans font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                      Execution Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.tactics.map((tac, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]" />
                          <span>{tac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#00b4d8] hover:text-white border border-white/20 text-white font-mono text-xs font-extrabold uppercase tracking-wider text-center transition-all block"
                  >
                    Scale With This Channel →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% OFF AD MANAGEMENT"
          title="Ready to Scale Your Customer Acquisition?"
          description="Book a performance growth audit. We'll examine your current ad campaigns, funnel conversion rates, and SEO visibility to unlock exponential revenue."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

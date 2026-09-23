import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


// Real client logos
import logo0 from "@/assets/real-logos/logo0.png";
import logo1 from "@/assets/real-logos/logo1.png";
import logo2 from "@/assets/real-logos/logo2.png";
import logo3 from "@/assets/real-logos/logo3.png";
import logo4 from "@/assets/real-logos/logo4.png";
import logo5 from "@/assets/real-logos/logo5.png";
import logo6 from "@/assets/real-logos/logo6.png";
import logo7 from "@/assets/real-logos/logo7.png";

export const Route = createFileRoute("/about")({
  component: AboutStoryPage,
  head: () => ({
    meta: [
      { title: "Our Story & Manifesto — Digital Studio & Engineering Lab" },
      {
        name: "description",
        content:
          "The story behind our studio — dismantling slow, bloated agencies to engineer iconic logos, lightning-fast web applications, and autonomous AI automation.",
      },
    ],
  }),
});

function AboutStoryTypewriterText() {
  const words = [
    "iconic brand identities.",
    "high-speed web platforms.",
    "autonomous AI automation.",
    "exponential customer growth.",
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
      <svg
        className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#00b4d8]/70 pointer-events-none"
        viewBox="0 0 200 12"
        fill="none"
      >
        <path d="M4 8 C 50 2, 150 2, 196 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

const STUDIO_LOGOS = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7];

function AboutStoryPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#00b4d8]/20 font-sans antialiased">
      <GlobalCanvasCursor />
      <MegaNavbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-28 md:py-36 bg-[#030712] text-white border-b border-[#00b4d8]/30 overflow-hidden select-none">
        {/* 6 Vertical Animated Kinetic Scrolling Columns of Real Logos & Websites */}
        <SubpageHeroKineticCanvas />

        {/* HERO CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center space-y-8 z-20">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
            <span>OUR STORY &amp; ETHOS</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-white">
            The story behind <br />
            <AboutStoryTypewriterText />
          </h1>

          <p className="text-slate-300 font-sans text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            We founded this studio on a single premise: ambitious businesses deserve world-class brand identity, modern high-speed engineering, and cutting-edge AI automation without the bureaucracy, delays, and bloat of legacy agencies.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#manifesto"
              className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.45)] hover:scale-105"
            >
              Read Our Manifesto ↓
            </a>
            <Link
              to="/work"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
            >
              Explore Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <CompanyLogosMarquee />

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="relative py-20 md:py-32 bg-[#f8fafc] text-[#0c2340] border-y border-slate-200 select-none">
        <div className="relative w-full max-w-[1500px] mx-auto px-6 md:px-16 z-10 space-y-16">
          <div className="space-y-6 border-b border-slate-300/80 pb-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-extrabold uppercase tracking-widest text-[#00b4d8]">
              <span>STUDIO MANIFESTO</span>
              <span>•</span>
              <span>HOUSTON HQ &amp; GLOBAL DESKS</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-[#0c2340] tracking-tight leading-[1.08]">
              Why We Rejected the Legacy Agency Model
            </h2>

            <p className="text-slate-600 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
              Traditional marketing agencies built business models on six-month retainers, slow WordPress themes, junior account managers, and endless billing hours with zero accountability. We dismantled all of it.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start font-sans">
            <div className="lg:col-span-8 space-y-8 text-base md:text-lg text-slate-800 leading-relaxed">
              <p>
                When you partner with us, you work directly with veteran art directors, senior software engineers, performance media buyers, and AI automation architects. No middlemen. No junior delegates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="font-mono text-xs font-bold text-[#00b4d8] uppercase">01 · Craft Over Commodity</span>
                  <h4 className="font-bold text-lg text-slate-900">Vector-Grade Identity</h4>
                  <p className="text-sm text-slate-600">Every logo is mathematically balanced, geometry-tested, and delivered with full commercial trademark copyright rights.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="font-mono text-xs font-bold text-[#00b4d8] uppercase">02 · Speed Is Revenue</span>
                  <h4 className="font-bold text-lg text-slate-900">Next.js &amp; Modern Web</h4>
                  <p className="text-sm text-slate-600">We engineer sub-second page loads, conversion-optimized checkout funnels, and zero-downtime edge architecture.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="font-mono text-xs font-bold text-[#00b4d8] uppercase">03 · Measurable ROI</span>
                  <h4 className="font-bold text-lg text-slate-900">Performance Growth</h4>
                  <p className="text-sm text-slate-600">We hold marketing campaigns accountable to actual revenue and customer acquisition cost, not vanity impressions.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <span className="font-mono text-xs font-bold text-[#00b4d8] uppercase">04 · Autonomous Scale</span>
                  <h4 className="font-bold text-lg text-slate-900">AI &amp; Workflow Systems</h4>
                  <p className="text-sm text-slate-600">We automate lead routing, 24/7 customer support chatbots, and operations so you scale without adding overhead.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-slate-900 text-white space-y-6">
              <h3 className="font-serif text-2xl font-bold">Studio Principles</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#00b4d8] font-bold">✓</span>
                  <span>100% intellectual property and vector source code ownership transferred to client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00b4d8] font-bold">✓</span>
                  <span>Zero hidden markups, transparent milestones, and sprint-based deliveries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00b4d8] font-bold">✓</span>
                  <span>Direct hotline to executive leadership and lead engineers.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-[#00b4d8] hover:bg-[#0284c7] text-white font-mono text-xs font-extrabold uppercase tracking-wider text-center block transition-all"
                >
                  Schedule Executive Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT REAL LOGO STRIP */}
      <section className="py-16 px-6 max-w-[1500px] mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-[#00b4d8] uppercase tracking-widest">
            AUTHENTIC RECENT MARKS
          </span>
          <h3 className="text-2xl font-bold text-white">Selected Brand Identities</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STUDIO_LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center aspect-[4/3]"
            >
              <img src={logo} alt="Client Logo" className="max-h-20 max-w-[80%] object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <SubpageBottomCta
        badge="LIMITED-TIME 50% OFF"
        title="Partner With Our Engineering & Design Studio"
        description="From strategic brand positioning to custom software and high-scale marketing, our senior team is ready to help you win. Get in touch today."
      />

      <SiteFooter />
    </div>
  );
}

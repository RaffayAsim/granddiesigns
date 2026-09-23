import { memo } from "react";
import SharedHeroInlineForm from "./SharedHeroInlineForm";

interface SubpageBottomCtaProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
}

const SubpageBottomCta = memo(function SubpageBottomCta({
  badge = "HOUSTON HQ & GLOBAL DESKS",
  title = "Ready to Build Your Next High-Impact Digital Presence?",
  description = "Schedule a 20-minute strategy call with our senior architects or visit our Texas headquarters for an executive consultation. We deliver fixed scopes and tailored blueprints within 24 hours.",
}: SubpageBottomCtaProps) {
  return (
    <section className="relative py-16 md:py-24 bg-[#030812] border-t border-[#00b4d8]/25 overflow-hidden text-white font-sans select-none">
      {/* Background Subtle Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `28px 28px`,
        }}
      />
      {/* Radial soft cyan glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Headings, Value Proposition & Trust Badges */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/40 text-[#00b4d8] text-xs font-mono font-extrabold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
              <span>{badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              {title}
            </h2>

            <p className="text-slate-300 font-sans text-base md:text-lg leading-relaxed max-w-xl font-light">
              {description}
            </p>

            {/* Left Column Trust Points */}
            <div className="pt-2 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/40 flex items-center justify-center font-bold text-xs">✓</span>
                <span>100% Confidential NDA &amp; Full Intellectual Property Rights</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/40 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Direct Access to Senior Designers, Full-Stack Engineers &amp; AI Leads</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/40 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Guaranteed 24-Hour Scope, Architecture &amp; Fixed-Cost Turnaround</span>
              </div>
            </div>

            {/* Direct Phone Assistance Banner */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Executive hotline active 24/7</span>
              </span>
              <a href="tel:+18334922918" className="text-white hover:text-[#00b4d8] font-bold underline decoration-[#00b4d8]/40 underline-offset-4">
                Call +1 (833) 492-2918
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Inquiry Card */}
          <div className="lg:col-span-6 text-left">
            <div className="bg-[#07172b]/95 border-2 border-[#00b4d8]/60 p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,180,216,0.25)] backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between gap-2 border-b border-[#00b4d8]/20 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#00b4d8] block">
                    STEP-BY-STEP PROJECT LAUNCH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                    Request Project Proposal
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-[10px] font-black uppercase tracking-wider shrink-0 shadow-sm">
                  ⚡ 50% OFF
                </span>
              </div>

              {/* The Form */}
              <div className="w-full">
                <SharedHeroInlineForm showPromoBadge={false} />
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="text-slate-400">
                  Prefer online consultation? <a href="/contact" className="text-[#00b4d8] hover:underline font-bold">Schedule Consultation →</a>
                </span>
                <span className="text-slate-500">
                  No obligation · Free discovery
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default SubpageBottomCta;


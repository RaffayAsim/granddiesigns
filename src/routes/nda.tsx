import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import PolicySidebarCards from "@/components/PolicySidebarCards";

export const Route = createFileRoute("/nda")({
  component: NDAPolicyPage,
  head: () => ({
    meta: [
      { title: "Confidentiality & Non-Disclosure (NDA) — Digital Agency" },
      { name: "description", content: "Automatic binding non-disclosure (NDA) terms safeguarding your brand assets, codebase, strategic briefs, and proprietary technology." },
    ],
  }),
});

function NDAPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#00b4d8]/20 font-sans antialiased">
      <MegaNavbar />

      {/* EDITORIAL HERO HEADER */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0c2340] text-white border-b border-[#00b4d8]/30 overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

        <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-extrabold uppercase tracking-widest text-[#00b4d8]">
            <span>LEGAL &amp; GOVERNANCE</span>
            <span>•</span>
            <span>CONFIDENTIALITY &amp; NDA</span>
            <span>•</span>
            <span>EFFECTIVE JAN 5, 2026 · LAST UPDATED JUL 7, 2026</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl">
            Confidentiality &amp; Non-Disclosure (NDA)
          </h1>

          <p className="text-slate-300 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
            Grand Diesigns · Mutual NDA &amp; IP Protection Agreement
          </p>
        </div>
      </section>

      {/* EDITORIAL ARTICLE BODY & SIDEBAR */}
      <section className="relative py-16 md:py-24 bg-[#f8fafc] text-[#0c2340] border-y border-slate-200 select-none">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(#00b4d8 1.2px, transparent 1.2px)`,
            backgroundSize: `28px 28px`
          }}
        />

        <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 z-10 space-y-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start font-sans">
            
            {/* Main Article Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8 text-base md:text-lg text-slate-800 leading-relaxed font-normal bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              
              <div className="border-b border-slate-200 pb-6">
                <span className="font-mono text-xs font-bold text-[#00b4d8] uppercase tracking-widest block mb-1">
                  AUTOMATIC BINDING NON-DISCLOSURE
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0c2340]">
                  Confidentiality &amp; NDA Terms
                </h2>
                <p className="text-sm font-mono text-slate-500 mt-2">
                  Effective: January 5, 2026 · Last updated: July 7, 2026
                </p>
              </div>

              {/* 1. Built Into Every Engagement */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">1. Built Into Every Engagement</h3>
                <p>
                  Confidentiality is built into every project. This Confidentiality/NDA applies automatically — with no separate signature needed — as soon as you place an order, share creative briefs or codebase credentials with us, or begin discussing a prospective project, whichever comes first. If you'd prefer a separately signed custom enterprise NDA, we're happy to execute one. These terms are mutual: they protect both you and us.
                </p>
              </div>

              {/* 2. What's Confidential */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">2. What's Confidential</h3>
                <p>
                  "Confidential Information" means any non-public information one party shares with the other, in any form, that is marked confidential or that a reasonable person would understand to be confidential. For you, this expressly includes your unreleased brand assets, trademark applications, design systems, software codebases, database schematics, API keys, customer lists, and financial or marketing data. For us, it includes our non-public methods, engineering architectures, pricing calculators, and proprietary agency workflows.
                </p>
              </div>

              {/* 3. How We Handle It */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">3. How We Handle It</h3>
                <p>
                  Each party agrees to: use the other's Confidential Information only to discuss and carry out the work; protect it with at least reasonable care; and not disclose it to anyone except employees, freelancers, subcontractors, or advisors who need it for the project and who are bound by confidentiality obligations at least as protective as these. We won't use your Confidential Information to compete with you or against your interests.
                </p>
              </div>

              {/* 4. What's Not Covered */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">4. What's Not Covered</h3>
                <p>
                  These obligations don't apply to information that is or becomes public through no fault of the receiving party; was already lawfully known without a duty of confidentiality; is independently developed without using the Confidential Information; or is lawfully received from a third party without restriction.
                </p>
              </div>

              {/* 5. If Disclosure Is Legally Required */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">5. If Disclosure Is Legally Required</h3>
                <p>
                  A party may disclose Confidential Information if required by law or valid legal process, but — where legally allowed — will give the other party prompt notice and reasonable cooperation to seek protection, and will disclose only what's required.
                </p>
              </div>

              {/* 6. Ownership */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">6. Ownership</h3>
                <p>
                  Confidential Information stays the property of the party that shared it. This NDA grants no rights or licenses except as needed to carry out the work. Ownership of your finished deliverables is covered by our Terms of Service and Royalty &amp; Ownership Policy.
                </p>
              </div>

              {/* 7. How Long It Lasts */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">7. How Long It Lasts</h3>
                <p>
                  These obligations apply to information shared before, during, and after a project. They continue for as long as the information stays confidential — and for trade secrets, for as long as they remain trade secrets under the law. For other Confidential Information, the obligations last at least five (5) years after the last disclosure.
                </p>
              </div>

              {/* 8. Return or Destruction */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">8. Return or Destruction</h3>
                <p>
                  On written request or when the project ends, each party will return or securely destroy the other's Confidential Information, except for copies required by law or kept in routine backups, which stay subject to this NDA.
                </p>
              </div>

              {/* 9. Remedies */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">9. Remedies</h3>
                <p>
                  Both parties agree that unauthorized use or disclosure of Confidential Information can cause serious harm that money alone can't fix, so the affected party may seek injunctive or other equitable relief in addition to any other remedy available.
                </p>
              </div>

              {/* 10. Contact */}
              <div className="space-y-3 pt-6 border-t-2 border-[#00b4d8]/40 bg-slate-50 p-6 rounded-2xl">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">10. Contact</h3>
                <p className="font-mono text-sm text-slate-700 leading-relaxed">
                  <strong>Grand Diesigns</strong> · Houston, Texas, USA · Executive Support: <a href="/contact" className="text-[#0c2340] font-bold hover:text-[#00b4d8]">Online Inquiry Desk</a>
                </p>
              </div>

            </div>

            {/* Sidebar Sticky Legal Navigation (4 cols) */}
            <div className="lg:col-span-4">
              <PolicySidebarCards currentPath="/nda" />
            </div>

          </div>

        </div>
      </section>

      <SubpageBottomCta />
      <SiteFooter />
      <GlobalCanvasCursor />
    </div>
  );
}

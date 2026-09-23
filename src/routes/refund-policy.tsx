import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import PolicySidebarCards from "@/components/PolicySidebarCards";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
  head: () => ({
    meta: [
      { title: "Refund Policy — 100% Satisfaction Guarantee | Digital Agency" },
      { name: "description", content: "Official satisfaction guarantee terms, revision policy, and clear milestone refund rules." },
    ],
  }),
});

function RefundPolicyPage() {
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
            <span>REFUND POLICY</span>
            <span>•</span>
            <span>EFFECTIVE JAN 5, 2026 · LAST UPDATED JUL 7, 2026</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl">
            Refund Policy
          </h1>

          <p className="text-slate-300 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
            Digital Creative &amp; Engineering Agency · Refund &amp; Milestone Policy
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
                  100% MONEY-BACK GUARANTEE TERMS
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0c2340]">
                  Refund Policy &amp; Conditions
                </h2>
                <p className="text-sm font-mono text-slate-500 mt-2">
                  Effective: January 5, 2026 · Last updated: July 7, 2026
                </p>
              </div>

              {/* 1. Our 100% Money-Back Guarantee (Net of Fees) */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">1. Our 100% Money-Back Guarantee (Net of Fees)</h3>
                <p>
                  We stand behind our work with a 100% money-back guarantee, subject to the conditions below. Where a refund qualifies, we refund 100% of the fees you paid for the affected service, less non-refundable bank, card, payment-processor, transaction, and currency-conversion fees. Those charges are taken by financial institutions and processors, are outside our control, and are not returned to us, so they can't be included in any refund.
                </p>
              </div>

              {/* 2. The 24-Hour Window (Strict Condition) */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">2. The 24-Hour Window (Strict Condition)</h3>
                <p>
                  A refund request must be submitted in writing, with a reason, within twenty-four (24) hours of the qualifying event. This window is strict and non-extendable — requests after 24 hours are not eligible, regardless of reason. Unless your order states otherwise, the 24 hours run from the earlier of (a) the time of your payment or (b) the time we deliver the relevant deliverable or milestone for your review.
                </p>
              </div>

              {/* 3. A Valid Reason Is Required — No "Change of Mind" */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">3. A Valid Reason Is Required — No "Change of Mind"</h3>
                <p>
                  Refunds are available only where you give a genuine, qualifying reason within the 24-hour window. A change of mind is not accepted and does not qualify — this includes deciding you no longer want the deliverable or service, changing your creative direction after sprint work has begun, buyer's remorse, finding another provider, or personal, financial, or scheduling changes unrelated to the quality of our work. Qualifying reasons generally relate to our inability or failure to provide the service ordered. We may ask for reasonable details to review the request.
                </p>
              </div>

              {/* 4. Non-Refundable Items */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">4. Non-Refundable Items</h3>
                <p>Even within the 24-hour window, the following are non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Bank, card, payment-processor, transaction, and currency-conversion fees;</li>
                  <li>Third-party costs already incurred on your behalf (domain names, hosting, stock media, cloud compute, API usage, ad spend);</li>
                  <li>Services already fully performed and delivered, and sprint milestones you've approved;</li>
                  <li>Rush or expedited services once started; and</li>
                  <li>Any service where you've already received, downloaded, deployed, or used the final code, vector designs, or deliverables.</li>
                </ul>
              </div>

              {/* 5. Work Already Performed */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">5. Work Already Performed</h3>
                <p>
                  Where part of the work has been completed at the time of a qualifying request, we may, at our discretion, refund the portion of fees for work not yet performed (net of the non-refundable fees and costs above) rather than the full amount. We aim to be fair and transparent about the value of work already done.
                </p>
              </div>

              {/* 6. How to Request a Refund */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">6. How to Request a Refund</h3>
                <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Submit a written ticket via our <a href="/contact" className="text-[#00b4d8] font-bold hover:underline">Executive Support Desk</a> within the 24-hour window.</li>
                  <li>Include your name, order/invoice number, the service purchased, the date and time of payment or delivery, and a clear statement of your reason.</li>
                  <li>We'll acknowledge your request and may ask for more information.</li>
                  <li>If approved, we'll refund your original payment method, net of the non-refundable fees above, within 5–7 business days (subject to your bank's or processor's timelines).</li>
                </ol>
              </div>

              {/* 7. Chargebacks */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">7. Chargebacks</h3>
                <p>
                  Please contact us first — most issues are resolved quickly. Filing a chargeback instead of following this policy, especially for services already performed or delivered, may be treated as a breach of our Terms. We reserve the right to contest improper chargebacks with your order, delivery records, and communications, and to suspend services and recover related costs.
                </p>
              </div>

              {/* 8. Your Statutory Rights */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">8. Your Statutory Rights</h3>
                <p>
                  Nothing in this policy limits any non-waivable rights you may have under applicable law. Where mandatory consumer-protection law gives you greater rights, those apply.
                </p>
              </div>

              {/* 9. Contact */}
              <div className="space-y-3 pt-6 border-t-2 border-[#00b4d8]/40 bg-slate-50 p-6 rounded-2xl">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">9. Contact</h3>
                <p className="font-mono text-sm text-slate-700 leading-relaxed">
                  <strong>Digital Creative &amp; Engineering Agency</strong> · Houston, Texas, USA · Executive Support: <a href="/contact" className="text-[#0c2340] font-bold hover:text-[#00b4d8]">Online Inquiry Desk</a>
                </p>
              </div>

            </div>

            {/* Sidebar Sticky Legal Navigation (4 cols) */}
            <div className="lg:col-span-4">
              <PolicySidebarCards currentPath="/refund-policy" />
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

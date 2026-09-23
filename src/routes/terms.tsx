import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import PolicySidebarCards from "@/components/PolicySidebarCards";

export const Route = createFileRoute("/terms")({
  component: TermsOfServicePage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Grand Diesigns" },
      { name: "description", content: "Master Terms of Service governing brand identity design, custom web engineering, performance digital marketing, and AI automation by Grand Diesigns." },
    ],
  }),
});

function TermsOfServicePage() {
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
            <span>TERMS OF SERVICE</span>
            <span>•</span>
            <span>EFFECTIVE JAN 5, 2026 · LAST UPDATED JUL 7, 2026</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl">
            Terms of Service
          </h1>

          <p className="text-slate-300 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
            Grand Diesigns · Terms of Service &amp; Project Standards
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
                  MASTER SERVICE AGREEMENT
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0c2340]">
                  Terms of Service Agreement
                </h2>
                <p className="text-sm font-mono text-slate-500 mt-2">
                  Effective: January 5, 2026 · Last updated: July 7, 2026
                </p>
              </div>

              {/* 1. Who We Are */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">1. Who We Are</h3>
                <p>
                  Grand Diesigns ("we," "us," "our") is a full-service creative technology provider based in Houston, Texas, USA. We provide bespoke brand identity &amp; logo design, custom web application engineering, performance digital marketing, and autonomous AI automation services to businesses, startups, and enterprises ("you," the "Client").
                </p>
              </div>

              {/* 2. Acceptance */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">2. Acceptance</h3>
                <p>
                  By placing an order, paying an invoice or deposit, signing a proposal, clicking "I agree," or otherwise using our services or website, you agree to these Terms, our Privacy Policy, Refund Policy, IP &amp; Ownership Policy, and our Confidentiality/NDA terms. If you agree on behalf of a company, you confirm you're authorized to bind it. Electronic acceptance and email confirmations are valid and binding.
                </p>
              </div>

              {/* 3. Orders & Scope */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">3. Orders &amp; Scope</h3>
                <p>
                  The specific services, deliverables, revision rounds, price, and timeline for each engagement are set out in your order, proposal, or statement of work. Anything not expressly listed is out of scope and may require a separate quote. Delivery timelines are good-faith estimates, not guarantees, unless a signed order states otherwise.
                </p>
              </div>

              {/* 4. Payment in Advance */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">4. Payment in Advance</h3>
                <p>
                  All fees are payable in advance or per agreed sprint milestones. Unless your order states otherwise, we require payment before work begins on each deliverable phase. All fees are in U.S. Dollars. You're responsible for applicable taxes and any bank, card, or transaction fees. Third-party costs you authorize (domain registration, hosting, stock assets, fonts, paid ad spend, API usage) are billed to you and are non-refundable once incurred.
                </p>
              </div>

              {/* 5. Revisions & Approval */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">5. Revisions &amp; Approval</h3>
                <p>
                  Your order states the included revision rounds. Revisions must be reasonable and within the original creative brief; extra scope or extra rounds are billable. You're responsible for reviewing and approving staging environments and vector proofs before production deployment. Once you approve a deliverable or launch into production, later corrections are treated as new billable sprint work.
                </p>
              </div>

              {/* 6. Ownership & Intellectual Property */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">6. Ownership &amp; Intellectual Property</h3>
                <p>
                  Subject to full payment, you own the final custom deliverables (source code, vector logos, design files, web assets) and retain 100% of your copyright, trademarks, and intellectual property. We claim no ongoing royalties or equity. We retain our own pre-existing developer tools, utility libraries, and agency know-how. Third-party assets (stock images, licensed fonts, open-source libraries) remain subject to their respective licenses.
                </p>
              </div>

              {/* 7. Your Responsibilities & Warranties */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">7. Your Responsibilities &amp; Warranties</h3>
                <p>
                  You confirm that you own or have all rights to the content, media, and materials you provide us, that they don't infringe anyone's rights and aren't unlawful or defamatory, and that you'll obtain any needed permissions. You agree to provide feedback, content, and approvals promptly; delays extend project timelines.
                </p>
              </div>

              {/* 8. No Guarantee of Results */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">8. No Guarantee of Results</h3>
                <p>
                  We provide professional creative engineering and strategic services. While we build according to modern industry standards, we do not guarantee specific sales revenues, conversion numbers, ad ROI, organic search ranking spots, or third-party platform algorithm performance. Case studies and past client results are illustrative, not guarantees.
                </p>
              </div>

              {/* 9. Confidentiality */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">9. Confidentiality</h3>
                <p>
                  We treat your trade secrets, business concepts, technical architecture, and proprietary information as strictly confidential under our automatic NDA terms, which apply to every engagement.
                </p>
              </div>

              {/* 10. Disclaimers & Limitation of Liability */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">10. Disclaimers &amp; Limitation of Liability</h3>
                <p>
                  Services and the website are provided "as is" and "as available," without implied warranties to the fullest extent permitted by law. We are not liable for indirect, incidental, or consequential damages, or for lost revenue, data, or profits. Our total aggregate liability for any order will not exceed the fees you actually paid us for that specific order.
                </p>
              </div>

              {/* 11. Indemnification */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">11. Indemnification</h3>
                <p>
                  You agree to defend and hold us harmless from claims arising out of your content, your use of the deliverables, your breach of these Terms, or your violation of any law or third-party right.
                </p>
              </div>

              {/* 12. Termination */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">12. Termination</h3>
                <p>
                  Either party may end an order for uncured material breach after 10 days' written notice. We may suspend or terminate immediately for non-payment or unlawful/abusive conduct. On termination, you pay for work performed to date; fees are non-refundable except as stated in our Refund Policy; completed, paid deliverables will be delivered.
                </p>
              </div>

              {/* 13. Governing Law & Dispute Resolution */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">13. Governing Law &amp; Dispute Resolution</h3>
                <p>
                  These Terms are governed by Texas law. The parties will first try to resolve disputes informally. If unresolved within 30 days, disputes (except small-claims and IP/confidentiality injunctions) will be settled by binding arbitration (AAA Commercial Rules) in Harris County, Texas, on an individual basis only — no class actions. Courts in Harris County, Texas have exclusive jurisdiction for any matter not arbitrated.
                </p>
              </div>

              {/* 14. Changes & Miscellaneous */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">14. Changes &amp; Miscellaneous</h3>
                <p>
                  We may update these Terms by posting a revised version with a new "Last updated" date; continued use means acceptance. These Terms plus your order are the entire agreement. If any provision is unenforceable, the rest stands. We may use qualified subcontractors. Notices to us: <a href="/contact" className="text-[#00b4d8] font-bold hover:underline">Houston Headquarters &amp; Support Desk</a>.
                </p>
              </div>

              {/* 15. Contact */}
              <div className="space-y-3 pt-6 border-t-2 border-[#00b4d8]/40 bg-slate-50 p-6 rounded-2xl">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">15. Contact</h3>
                <p className="font-mono text-sm text-slate-700 leading-relaxed">
                  <strong>Grand Diesigns</strong> · Houston, Texas, USA · Executive Support: <a href="/contact" className="text-[#0c2340] font-bold hover:text-[#00b4d8]">Online Inquiry Desk</a>
                </p>
              </div>

            </div>

            {/* Sidebar Sticky Legal Navigation (4 cols) */}
            <div className="lg:col-span-4">
              <PolicySidebarCards currentPath="/terms" />
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

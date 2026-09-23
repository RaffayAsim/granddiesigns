import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import PolicySidebarCards from "@/components/PolicySidebarCards";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Grand Diesigns" },
      { name: "description", content: "Understanding how Grand Diesigns protects your personal data, intellectual property, project briefs, and proprietary technology." },
      { property: "og:title", content: "Privacy Policy — Grand Diesigns" },
      { property: "og:description", content: "Understanding how Grand Diesigns protects your personal data, intellectual property, project briefs, and proprietary technology." },
    ],
  }),
});

function PrivacyPolicyPage() {
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
            <span>PRIVACY POLICY</span>
            <span>•</span>
            <span>EFFECTIVE JAN 5, 2026 · LAST UPDATED JUL 7, 2026</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl">
            Privacy Policy
          </h1>

          <p className="text-slate-300 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
            Grand Diesigns · Privacy &amp; Data Security Policy
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
                  OFFICIAL PRIVACY POLICY
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0c2340]">
                  Privacy Policy Overview
                </h2>
                <p className="text-sm font-mono text-slate-500 mt-2">
                  Effective: January 5, 2026 · Last updated: July 7, 2026
                </p>
              </div>

              {/* 1. Overview */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">1. Overview</h3>
                <p>
                  Grand Diesigns ("we," "us," "our") respects your privacy. This policy explains what information we collect through our website and in the course of providing our brand identity, web engineering, digital marketing, and AI automation services, how we use and share it, and your choices. It applies to clients, prospective partners, and website visitors.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">2. Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Information you give us:</strong> name, business email, phone, billing details, company name; your project brief, brand specifications, API credentials, and other project materials; correspondence; and reviews or testimonials.</li>
                  <li><strong>Payment information:</strong> processed securely by our certified third-party payment processors — we do not store full card numbers or sensitive banking data.</li>
                  <li><strong>Automatic information:</strong> IP address, browser and device type, pages viewed, referring pages, and timestamps, collected via cookies and performance analytics.</li>
                  <li><strong>From third parties:</strong> information from payment gateways, analytics providers, and advertising platforms (Google Ads, Meta) you ask us to integrate.</li>
                </ul>
              </div>

              {/* 3. How We Use Your Information */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">3. How We Use Your Information</h3>
                <p>
                  We use your information to provide and deliver our digital services and fulfill project scopes; process payments and prevent fraud; communicate with you and provide engineering support; operate, secure, and improve our web infrastructure and services; send administrative project notifications; comply with legal obligations; and, with your explicit permission, showcase deployed websites or brand designs in our portfolio.
                </p>
              </div>

              {/* 4. How We Share Information */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">4. How We Share Information</h3>
                <p>
                  We do not sell your personal or corporate information. We share it only with: vetted infrastructure providers (cloud hosting, database providers, payment gateways, and verified developers who assist in delivering your project); advertising platforms you direct us to configure; authorities where required by law; and a successor in the event of a merger or corporate acquisition. We never disclose your unreleased brand assets, source code, or proprietary business concepts.
                </p>
              </div>

              {/* 5. Cookies */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">5. Cookies</h3>
                <p>
                  We use cookies to operate the site, remember preferences, measure traffic, and (where permitted) support advertising. You can manage cookies through your browser settings and any cookie banner we display. Blocking some cookies may affect how the site works.
                </p>
              </div>

              {/* 6. Data Retention & Security */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">6. Data Retention &amp; Security</h3>
                <p>
                  We keep personal information only as long as needed to provide our services and meet legal, tax, and accounting obligations, then delete or anonymize it. We use reasonable safeguards to protect your information, but no method of transmission or storage is fully secure. You're responsible for keeping any account credentials confidential.
                </p>
              </div>

              {/* 7. Your Privacy Rights */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">7. Your Privacy Rights</h3>
                <p>
                  <strong>Texas residents (Texas Data Privacy and Security Act):</strong> subject to the TDPSA, you may confirm and access the personal data we hold about you, correct inaccuracies, request deletion, obtain a portable copy, and opt out of targeted advertising, any "sale" of personal data, or certain profiling — and appeal if we decline a request. Residents of other states or countries may have similar rights. To exercise any right, contact our team via <a href="/contact" className="text-[#00b4d8] font-bold hover:underline">Executive Support</a>; we'll verify and respond within the time the law requires. We won't discriminate against you for exercising these rights.
                </p>
              </div>

              {/* 8. Marketing Choices */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">8. Marketing Choices</h3>
                <p>
                  You can opt out of marketing emails anytime via the unsubscribe link or by emailing us; we'll still send necessary transactional messages about your orders. If we send text messages, we do so only with the consent the law requires, and you can reply STOP to opt out.
                </p>
              </div>

              {/* 9. Children's Privacy */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">9. Children's Privacy</h3>
                <p>
                  Our website and services are for adults and not directed to children under 13, and we don't knowingly collect their information. If you believe a child provided us information, contact us and we'll delete it.
                </p>
              </div>

              {/* 10. International Users */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">10. International Users</h3>
                <p>
                  We're based in the United States, and your information is processed here and in other countries that may have different data-protection laws than yours. Where additional regional requirements apply, we'll honor them.
                </p>
              </div>

              {/* 11. Changes */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">11. Changes</h3>
                <p>
                  We may update this policy from time to time and will post the revised version with a new "Last updated" date.
                </p>
              </div>

              {/* 12. Contact */}
              <div className="space-y-3 pt-6 border-t-2 border-[#00b4d8]/40 bg-slate-50 p-6 rounded-2xl">
                <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">12. Contact</h3>
                <p className="font-mono text-sm text-slate-700 leading-relaxed">
                  <strong>Grand Diesigns</strong> · Houston, Texas, USA · Executive Support: <a href="/contact" className="text-[#0c2340] font-bold hover:text-[#00b4d8]">Online Inquiry Desk</a>
                </p>
              </div>

            </div>

            {/* Sidebar Sticky Legal Navigation (4 cols) */}
            <div className="lg:col-span-4">
              <PolicySidebarCards currentPath="/privacy" />
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

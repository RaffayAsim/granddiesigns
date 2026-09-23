import { createFileRoute, Link } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import BentoArchitecturalServices from "@/components/BentoArchitecturalServices";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Core Digital Services — Logo Design, Web Dev, Marketing & AI Automation" },
      {
        name: "description",
        content:
          "Explore our 4 core pillars: bespoke logo design & brand identity, custom website design & dev, performance digital marketing, and autonomous AI automation.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#030812] text-white font-sans overflow-x-hidden selection:bg-[#00b4d8] selection:text-white">
      <GlobalCanvasCursor />
      <MegaNavbar />

      <main className="pt-24 md:pt-28">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030812] py-20 md:py-24 border-b border-[#00b4d8]/20 select-none">
          {/* 6 Vertical Animated Kinetic Scrolling Columns of Real Logos & Websites */}
          <SubpageHeroKineticCanvas />


          {/* Centered Content */}
          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
              <span>COMPREHENSIVE DIGITAL STUDIO CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Branded, Engineered, Marketed <br />
              <span className="text-[#00b4d8]">&amp; Automated to Scale.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              We replace fragmented freelancers with an elite, end-to-end digital powerhouse. From vector identity to high-speed web apps, customer acquisition, and 24/7 AI workflow automation.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#catalog"
                className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.4)] hover:scale-105"
              >
                Browse All 4 Pillars ↓
              </a>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
              >
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <CompanyLogosMarquee />

        {/* BENTO ARCHITECTURAL SERVICES GRID (UPDATED TO 4 PILLARS) */}
        <div id="catalog">
          <BentoArchitecturalServices />
        </div>

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% LAUNCH INCENTIVE"
          title="Transform Your Entire Digital Footprint"
          description="Speak with our strategy directors today. We'll design a comprehensive proposal covering your branding, custom web application, marketing, and automation stack."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

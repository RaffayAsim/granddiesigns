import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SharedHeroInlineForm from "@/components/SharedHeroInlineForm";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageBottomCta from "@/components/SubpageBottomCta";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Our 4-Phase Delivery Process — Digital Engineering & Brand Studio" },
      {
        name: "description",
        content:
          "Four rigorous phases from Discovery & Strategic Architecture to Brand Design, Full-Stack Engineering, and Autonomous Launch.",
      },
    ],
  }),
});

function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#030812] text-white font-sans antialiased selection:bg-[#00b4d8] selection:text-white">
      <MegaNavbar />

      {/* Hero Section with Kinetic Canvas */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-28 md:py-36 overflow-hidden select-none border-b border-[#00b4d8]/20">
        <SubpageHeroKineticCanvas />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase">
            <span>● 4-PHASE RIGOROUS DELIVERY FRAMEWORK</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight">
            From initial concept to <em className="italic text-[#00b4d8]">market-leading</em> execution.
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            Weekly sprint demos, real-time staging environments, dedicated Slack/portal access, and 100% intellectual property ownership.
          </p>

          {/* 3-Button Hero Section Form */}
          <div className="pt-4 max-w-4xl mx-auto">
            <SharedHeroInlineForm />
          </div>
        </div>
      </section>

      {/* VERIFIED PARTNERS MARQUEE WITH WHITE BACKGROUND */}
      <CompanyLogosMarquee />

      {/* Process Deep Dive */}
      <section className="py-24 bg-white text-[#0f172a] border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#0284c7] uppercase tracking-[0.25em] block">
              TRANSPARENT SPRINT LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight">
              Predictable Timelines. Zero Surprises.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Every deliverable undergoes rigorous QA benchmarks and collaborative sprint reviews before deployment.
            </p>
          </div>

          {[
            {
              step: "Phase 01",
              title: "Discovery, Strategy & Architectural Blueprint",
              timing: "Weeks 1–2",
              desc: "Deep-dive brand positioning workshops, competitive landscape analysis, technical stack architecture, user journey maps, and high-level wireframe sign-off.",
            },
            {
              step: "Phase 02",
              title: "Brand Identity, Art Direction & Interactive UI/UX",
              timing: "Weeks 3–5",
              desc: "Vector logo suites, scalable Figma design systems, interactive web prototypes, and responsive component libraries reviewed in weekly collaborative demo sessions.",
            },
            {
              step: "Phase 03",
              title: "Full-Stack Development & AI Integration",
              timing: "Weeks 6–9",
              desc: "Clean Next.js / TypeScript codebases, REST/GraphQL API integration, CMS configuration, autonomous AI agents, and webhook pipeline orchestration.",
            },
            {
              step: "Phase 04",
              title: "QA, Performance Benchmarking & Global Launch",
              timing: "Weeks 10–12",
              desc: "Cross-browser testing, Core Web Vitals 95+ score optimization, technical SEO audit, DNS configuration, and seamless production deployment with ongoing maintenance.",
            },
          ].map((p) => (
            <div
              key={p.step}
              className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-8 md:p-10 flex flex-col md:flex-row items-start justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                  {p.step} · {p.timing}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-3 text-slate-900">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subpage Bottom CTA */}
      <SubpageBottomCta
        badge="GET STARTED WITH 50% OFF"
        title="Ready to Build Your Digital Product?"
        description="Book a 20-minute strategic scoping session. Receive an architectural roadmap, sprint timeline, and fixed-cost proposal within 24 hours."
      />

      <SiteFooter />
      <GlobalCanvasCursor />
    </div>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";


export const Route = createFileRoute("/ai-automation")({
  component: AIAutomationPage,
  head: () => ({
    meta: [
      { title: "Enterprise AI Automation & Intelligent Agents — AI Studio" },
      {
        name: "description",
        content:
          "Custom autonomous AI agents, CRM lead routing automation, Zapier/Make workflow systems, and 24/7 intelligent chatbots engineered to scale operations.",
      },
    ],
  }),
});

const AI_SOLUTIONS = [
  {
    icon: "🤖",
    title: "24/7 Autonomous AI Voice & Chat Agents",
    desc: "Trained on your exact business knowledge base to qualify inbound leads, schedule calendar appointments, handle customer support tickets, and answer complex questions instantly.",
    metrics: "90% First-Response Automation · <2s Reply Time",
    features: ["Custom RAG Vector Embeddings", "Multi-turn natural conversation", "Direct Google Calendar booking", "CRM sync in real-time"],
  },
  {
    icon: "⚡",
    title: "End-to-End Workflow Pipelines (Zapier & Make)",
    desc: "Connect your entire tech stack seamlessly. When a lead enters from any source, automatically verify data, route to sales reps, generate contracts, and trigger personalized onboarding sequences.",
    metrics: "Eliminates 20+ Hours Manual Entry / Week",
    features: ["Zero-data-loss webhook pipelines", "Error handling & instant fallback alerts", "Stripe & billing synchronization", "Slack & Discord team notifications"],
  },
  {
    icon: "🎯",
    title: "CRM Lead Routing & Pipeline Automations",
    desc: "Integrate HubSpot, GoHighLevel, Salesforce, or custom databases with intelligent lead scoring, dynamic follow-up cadences, and automated pipeline status updates.",
    metrics: "3.2x Faster Lead Contact Speed",
    features: ["Dynamic lead enrichment via Clearbit", "Automated SMS & WhatsApp follow-ups", "Multi-stage deal stage progressions", "Executive revenue reporting dashboards"],
  },
  {
    icon: "🧠",
    title: "Proprietary LLM Fine-Tuning & Custom APIs",
    desc: "Custom AI solutions built on OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and open-source models with dedicated API wrappers for enterprise confidentiality and data privacy.",
    metrics: "100% Data Confidentiality & SOC-2 Compliance",
    features: ["Private vector databases (Pinecone / Qdrant)", "Custom system prompting & safety guardrails", "Document parsing & automated summaries", "Custom REST & GraphQL endpoints"],
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Process Discovery & Friction Audit",
    desc: "We analyze your existing operations, toolsets, and repetitive manual tasks to pinpoint high-ROI automation opportunities.",
  },
  {
    step: "02",
    title: "AI Architecture & Prototype",
    desc: "We engineer custom prompt trees, connect APIs, configure vector databases, and build rapid functional prototypes in 5–7 days.",
  },
  {
    step: "03",
    title: "Sandbox Rigorous Stress Testing",
    desc: "Every automated pipeline undergoes automated edge-case testing to guarantee 99.9% reliability before production release.",
  },
  {
    step: "04",
    title: "Deployment & Team Handover",
    desc: "Full production deployment with real-time monitoring, documentation, video walkthroughs, and proactive maintenance.",
  },
];

function AIAutomationPage() {
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
              <span>ENTERPRISE AI AUTOMATION &amp; WORKFLOW SYSTEMS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
              Automate Repetitive Work. <span className="text-[#00b4d8]">Scale Without Hiring.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              We engineer custom autonomous AI agents, lead nurturing pipelines, and multi-app automations that work 24/7/365 to capture leads, close deals, and cut operational costs by up to 70%.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#solutions"
                className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase font-extrabold tracking-widest transition-all shadow-[0_4px_25px_rgba(0,180,216,0.45)] hover:scale-105"
              >
                Explore AI Solutions ↓
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-xs uppercase font-extrabold tracking-widest transition-all backdrop-blur-md"
              >
                Schedule AI Architecture Audit →
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                { title: "24/7/365 Lead Response", desc: "Never miss another inbound inquiry" },
                { title: "Zero Data Leakage", desc: "SOC-2 & GDPR compliant privacy" },
                { title: "99.9% Pipeline Uptime", desc: "Automated retries & error healing" },
                { title: "Fast 14-Day Deploy", desc: "Production-ready automation sprints" },
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

        {/* SOLUTIONS SECTION */}
        <section id="solutions" className="py-20 px-6 md:px-12 max-w-[1700px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
              ENGINEERED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
              High-ROI AI Systems Built for Real Growth.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Replace brittle manual processes with self-healing, intelligent automation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AI_SOLUTIONS.map((sol, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#00b4d8]/60 transition-all space-y-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{sol.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-[10px] font-mono font-extrabold uppercase">
                      {sol.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl font-sans font-bold text-white">{sol.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{sol.desc}</p>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                      Key Technical Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]" />
                          <span>{feat}</span>
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
                    Deploy This System →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-PHASE AUTOMATION WORKFLOW */}
        <section className="py-20 px-6 md:px-12 bg-slate-950/80 border-y border-slate-800">
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-[0.25em] block">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
                How We Take You From Manual to Automated in 14 Days.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW_STEPS.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-[#00b4d8]/40 transition-all space-y-3"
                >
                  <div className="font-mono text-3xl font-black text-[#00b4d8]">{st.step}</div>
                  <h3 className="text-lg font-sans font-bold text-white">{st.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="LIMITED-TIME 50% OFF AI INTEGRATION"
          title="Ready to Automate Your Business Operations?"
          description="Schedule a 20-minute AI roadmap session. Our engineers will audit your manual bottlenecks and present an autonomous architecture blueprint in 24 hours."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

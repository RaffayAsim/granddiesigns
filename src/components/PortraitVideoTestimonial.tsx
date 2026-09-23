interface Review {
  initials: string;
  name: string;
  role: string;
  service: string;
  quote: string;
  stars: number;
}

const REVIEWS_COL_1: Review[] = [
  {
    initials: "DT",
    name: "David Thomsen",
    role: "Founder, FinTech Horizon",
    service: "Logo Design",
    quote: "The brand identity and vector logo package exceeded all expectations. Our corporate identity now looks on par with top Silicon Valley firms.",
    stars: 5,
  },
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "Managing Director, Hearth & Hand",
    service: "Brand Identity",
    quote: "From our exterior signage to menus and digital identity, the creative direction was pure perfection. Customers notice and comment on our branding daily.",
    stars: 5,
  },
  {
    initials: "KL",
    name: "Kevin Larson",
    role: "Principal, RidgeCraft Roofing",
    service: "Logo & Brand Kit",
    quote: "Clean, authoritative, and instantly recognizable. The new logo mark elevated our commercial bidding win rate immediately.",
    stars: 5,
  },
  {
    initials: "PB",
    name: "Paul Buntyn",
    role: "CEO, Ledger Lane Accounting",
    service: "Brand System",
    quote: "Professional, timely, and responsive. They provided full typography guidelines, color palettes, and print kits ready for execution.",
    stars: 5,
  },
];

const REVIEWS_COL_2: Review[] = [
  {
    initials: "JJ",
    name: "Jeff Jefferson",
    role: "Owner, Garage Door Doctor",
    service: "Website Dev",
    quote: "Our new website loads in under a second and converted 120+ inbound service calls in our first three weeks after going live.",
    stars: 5,
  },
  {
    initials: "RK",
    name: "Rachel Knight",
    role: "VP, Houston Property Mgmt",
    service: "Custom Web App",
    quote: "The responsive mobile experience and tenant portal are seamless. Our bounce rate dropped by 45% within a month of launching.",
    stars: 5,
  },
  {
    initials: "JM",
    name: "Jennifer Miller",
    role: "Operations Lead, Huntington Cleaners",
    service: "Web Platform",
    quote: "A modern, trustworthy website that clearly explains our commercial delivery routes. Customer inquiries have never been higher.",
    stars: 5,
  },
  {
    initials: "JL",
    name: "Dr. Javaid Laghari",
    role: "Founder, QHQ Events",
    service: "Full-Stack Portal",
    quote: "They developed our interactive ticketing portal from scratch. Fast, secure checkout and rock-solid performance under heavy peak traffic.",
    stars: 5,
  },
];

const REVIEWS_COL_3: Review[] = [
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Head of Growth, ScaleLabs",
    service: "Digital Marketing",
    quote: "Their targeted Meta and Google Ads campaign generated a 4.2x ROAS in month two. Unmatched transparency and weekly reporting.",
    stars: 5,
  },
  {
    initials: "MR",
    name: "Maya Rodriguez",
    role: "Marketing Director",
    service: "SEO & Search",
    quote: "Rankings jumped to position #1 for our top commercial service keywords in under 60 days. Our organic inbound leads doubled.",
    stars: 5,
  },
  {
    initials: "FT",
    name: "Fumiko Tanaka",
    role: "E-Commerce Director",
    service: "Paid Acquisition",
    quote: "They completely revamped our conversion funnels and ad creatives. Customer acquisition costs decreased by 38% while revenue scaled.",
    stars: 5,
  },
  {
    initials: "RB",
    name: "Rachel Bloom",
    role: "Realtor Partner, The Local",
    service: "Local Growth SEO",
    quote: "Dominating local Google Map Pack rankings has driven constant qualified luxury real estate buyers to our advisory team.",
    stars: 5,
  },
];

const REVIEWS_COL_4: Review[] = [
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "COO, Nexus Freight",
    service: "AI Automation",
    quote: "The automated CRM pipeline and AI lead intake workflows they built save our team over 25 hours of repetitive manual data entry each week.",
    stars: 5,
  },
  {
    initials: "TW",
    name: "Tom Wakefield",
    role: "VP Operations, Urban Fleet",
    service: "AI Chat Assistant",
    quote: "Their 24/7 intelligent customer triage agent answers client requests within 5 seconds and automatically schedules service dispatches.",
    stars: 5,
  },
  {
    initials: "CM",
    name: "Carlos Mendoza",
    role: "CEO, Prime Services",
    service: "Pipeline Workflows",
    quote: "Automated invoice reminders, CRM sync, and SMS follow-ups running seamlessly via Zapier and API webhooks. Truly game changing.",
    stars: 5,
  },
  {
    initials: "AB",
    name: "Amanda Brooks",
    role: "Founder, Bloom Studio",
    service: "AI Email Nurture",
    quote: "Our automated AI lead nurture sequences revived over $80,000 in dormant pipeline opportunities without a single salesperson manual touch.",
    stars: 5,
  },
];

export default function PortraitVideoTestimonial() {
  return (
    <section id="voices" className="relative py-14 md:py-20 bg-gradient-to-br from-[#d9f5fb] via-[#e6f9fc] to-[#ccf2f9] text-slate-900 border-y border-[#00b4d8]/20 select-none overflow-hidden font-sans w-full">
      <style>{`
        @keyframes vertScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes vertScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .vert-scroll-up {
          animation: vertScrollUp 32s linear infinite;
        }
        .vert-scroll-down {
          animation: vertScrollDown 36s linear infinite;
        }
        .vert-marquee-wrapper:hover .vert-scroll-up,
        .vert-marquee-wrapper:hover .vert-scroll-down {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,216,0.2)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      {/* Dot Matrix Background Grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `28px 28px`
        }}
      />

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#00b4d8] block">
            VERIFIED CLIENT REVIEWS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#0c2340] tracking-tight leading-tight">
            Clients <span className="italic text-[#00b4d8]">love</span> our work.
          </h2>

          <p className="text-slate-600 font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Real companies, real growth. Hear how our brand identities, custom web development, high-ROI marketing, and AI workflows transformed their business.
          </p>
        </div>

        {/* FULL SCREEN WIDTH 4-COLUMN KINETIC REVIEWS MARQUEE CONTAINER */}
        <div className="relative h-[520px] sm:h-[560px] overflow-hidden rounded-3xl border-2 border-[#00b4d8]/30 bg-white/75 backdrop-blur-xl p-4 md:p-6 shadow-2xl w-full">
          
          {/* Top & Bottom Smooth Infinity Fading Gradients */}
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#e6f9fc] via-[#e6f9fc]/85 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#ccf2f9] via-[#ccf2f9]/85 to-transparent z-20 pointer-events-none" />

          <div className="vert-marquee-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 h-full select-none overflow-hidden relative">
            
            {/* Column 1: Logo Design (Scrolls UP) */}
            <div className="relative overflow-hidden h-full">
              <div className="space-y-4 vert-scroll-up">
                {[...REVIEWS_COL_1, ...REVIEWS_COL_1].map((r, i) => (
                  <div
                    key={`col1-${i}`}
                    className="p-5 rounded-2xl bg-white border border-[#00b4d8]/30 shadow-xs flex flex-col justify-between space-y-3 transition-all duration-300 hover:shadow-lg hover:border-[#00b4d8] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {"★".repeat(r.stars)}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#00b4d8] bg-[#00b4d8]/10 px-2 py-0.5 rounded-full">
                        {r.service}
                      </span>
                    </div>
                    <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                      "{r.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0284c7] text-white font-mono text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {r.initials}
                      </div>
                      <div className="truncate">
                        <div className="font-serif text-xs font-bold text-[#0c2340] truncate">{r.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Website Dev (Scrolls DOWN) */}
            <div className="relative overflow-hidden h-full hidden sm:block">
              <div className="space-y-4 vert-scroll-down">
                {[...REVIEWS_COL_2, ...REVIEWS_COL_2].map((r, i) => (
                  <div
                    key={`col2-${i}`}
                    className="p-5 rounded-2xl bg-white border border-[#00b4d8]/30 shadow-xs flex flex-col justify-between space-y-3 transition-all duration-300 hover:shadow-lg hover:border-[#00b4d8] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {"★".repeat(r.stars)}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#00b4d8] bg-[#00b4d8]/10 px-2 py-0.5 rounded-full">
                        {r.service}
                      </span>
                    </div>
                    <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                      "{r.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0284c7] text-white font-mono text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {r.initials}
                      </div>
                      <div className="truncate">
                        <div className="font-serif text-xs font-bold text-[#0c2340] truncate">{r.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Digital Marketing (Scrolls UP) */}
            <div className="relative overflow-hidden h-full hidden lg:block">
              <div className="space-y-4 vert-scroll-up">
                {[...REVIEWS_COL_3, ...REVIEWS_COL_3].map((r, i) => (
                  <div
                    key={`col3-${i}`}
                    className="p-5 rounded-2xl bg-white border border-[#00b4d8]/30 shadow-xs flex flex-col justify-between space-y-3 transition-all duration-300 hover:shadow-lg hover:border-[#00b4d8] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {"★".repeat(r.stars)}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#00b4d8] bg-[#00b4d8]/10 px-2 py-0.5 rounded-full">
                        {r.service}
                      </span>
                    </div>
                    <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                      "{r.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0284c7] text-white font-mono text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {r.initials}
                      </div>
                      <div className="truncate">
                        <div className="font-serif text-xs font-bold text-[#0c2340] truncate">{r.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: AI Automation (Scrolls DOWN) */}
            <div className="relative overflow-hidden h-full hidden lg:block">
              <div className="space-y-4 vert-scroll-down">
                {[...REVIEWS_COL_4, ...REVIEWS_COL_4].map((r, i) => (
                  <div
                    key={`col4-${i}`}
                    className="p-5 rounded-2xl bg-white border border-[#00b4d8]/30 shadow-xs flex flex-col justify-between space-y-3 transition-all duration-300 hover:shadow-lg hover:border-[#00b4d8] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {"★".repeat(r.stars)}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#00b4d8] bg-[#00b4d8]/10 px-2 py-0.5 rounded-full">
                        {r.service}
                      </span>
                    </div>
                    <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                      "{r.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0284c7] text-white font-mono text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {r.initials}
                      </div>
                      <div className="truncate">
                        <div className="font-serif text-xs font-bold text-[#0c2340] truncate">{r.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

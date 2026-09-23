import { Link } from "@tanstack/react-router";

interface PolicySidebarCardsProps {
  currentPath?: string;
}

export const LEGAL_POLICIES = [
  {
    num: "01",
    tag: "DATA PROTECTION",
    title: "Privacy Policy",
    desc: "How our digital studio collects, uses, and secures client materials, project specifications, and proprietary data.",
    link: "/privacy",
  },
  {
    num: "02",
    tag: "SERVICE AGREEMENT",
    title: "Terms of Service",
    desc: "Governing terms for brand identity design, custom web engineering, performance digital marketing, and AI automation.",
    link: "/terms",
  },
  {
    num: "03",
    tag: "SATISFACTION GUARANTEE",
    title: "Refund Policy",
    desc: "Clear milestone delivery terms, revision cycles, and fair commercial protection across all project engagements.",
    link: "/refund-policy",
  },
  {
    num: "04",
    tag: "100% IP OWNERSHIP",
    title: "IP & Ownership Policy",
    desc: "You retain 100% ownership of your vector logos, custom Next.js/React codebases, database schematics, and design assets.",
    link: "/royalty-policy",
  },
  {
    num: "05",
    tag: "CONFIDENTIALITY (NDA)",
    title: "Confidentiality & NDA",
    desc: "Automatic binding non-disclosure protection safeguarding your brand assets, codebase, strategic briefs, and proprietary technology.",
    link: "/nda",
  },
];

export default function PolicySidebarCards({ currentPath }: PolicySidebarCardsProps) {
  return (
    <div className="space-y-6 sticky top-28">
      <div className="p-4 rounded-2xl bg-[#0c2340] text-white border border-[#00b4d8]/40 shadow-lg space-y-1">
        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#00b4d8] block">
          GOVERNANCE &amp; LEGAL POLICIES
        </span>
        <h4 className="font-serif text-lg font-extrabold">Explore Our Core Guarantees</h4>
      </div>

      {LEGAL_POLICIES.map((p) => {
        const isActive = currentPath === p.link;
        return (
          <div
            key={p.link}
            className={`p-6 rounded-2xl bg-white border-2 transition-all duration-300 shadow-sm space-y-3 ${
              isActive
                ? "border-[#00b4d8] shadow-[0_10px_25px_rgba(0,180,216,0.15)] ring-2 ring-[#00b4d8]/30"
                : "border-slate-200/80 hover:border-[#00b4d8]/60 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-extrabold text-[#00b4d8] uppercase tracking-wider">
                {p.num} · {p.tag}
              </span>
              {isActive && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#00b4d8]/15 text-[#00b4d8] text-[10px] font-mono font-bold uppercase">
                  ACTIVE PAGE
                </span>
              )}
            </div>

            <h4 className="font-serif text-xl font-bold text-[#0c2340]">{p.title}</h4>

            <p className="text-sm text-slate-600 font-light leading-relaxed">{p.desc}</p>

            <div className="pt-1">
              <Link
                to={p.link}
                className={`inline-flex items-center gap-1.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#00b4d8] pointer-events-none"
                    : "text-[#0c2340] hover:text-[#00b4d8]"
                }`}
              >
                <span>{isActive ? "Viewing Current Policy" : "Read Full Policy"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

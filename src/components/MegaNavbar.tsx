import { useState, useEffect, useRef } from "react";
import logoLightBg from "@/assets/brand/logo_light_bg.png";

export interface NavSubItem {
  name: string;
  href: string;
}

export interface NavGroup {
  groupName: string;
  items: NavSubItem[];
}

export interface NavCategory {
  title: string;
  href: string;
  items?: NavSubItem[];
  groups?: NavGroup[];
}

export const NAV_STRUCTURE: NavCategory[] = [
  {
    title: "ABOUT",
    href: "/about",
    items: [
      { name: "Studio Overview & Ethos", href: "/about" },
      { name: "Transparent 4-Phase Process", href: "/process" },
      { name: "Selected Work & Portfolio", href: "/work" },
      { name: "Houston HQ & Global Desks", href: "/location" },
      { name: "Direct Contact & Audit", href: "/contact" },
    ],
  },
  {
    title: "LOGO DESIGN",
    href: "/logo-design",
    items: [
      { name: "Custom Vector Logo Design", href: "/logo-design" },
      { name: "Brand Identity & Style Guides", href: "/logo-design" },
      { name: "3D & Minimalist Marks", href: "/logo-design" },
      { name: "Corporate Rebranding", href: "/logo-design" },
      { name: "Stationery & Brand Collateral", href: "/logo-design" },
    ],
  },
  {
    title: "WEB DESIGN & DEV",
    href: "/website-design",
    items: [
      { name: "Custom Web Applications", href: "/website-design" },
      { name: "High-Converting Landing Pages", href: "/website-design" },
      { name: "E-Commerce & Shopify Stores", href: "/website-design" },
      { name: "UI/UX Design Systems & Figma", href: "/website-design" },
      { name: "Performance & Core Web Vitals", href: "/website-design" },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    href: "/marketing",
    groups: [
      {
        groupName: "PAID MEDIA & ADS",
        items: [
          { name: "Google Performance Max & Search", href: "/marketing" },
          { name: "Meta & Instagram Growth Ads", href: "/marketing" },
          { name: "Retargeting & Funnel Strategy", href: "/marketing" },
        ],
      },
      {
        groupName: "ORGANIC & REPUTATION",
        items: [
          { name: "Search Engine Optimization (SEO)", href: "/marketing" },
          { name: "Conversion Rate Optimization (CRO)", href: "/marketing" },
          { name: "High-Authority Press & PR", href: "/marketing" },
        ],
      },
    ],
  },
  {
    title: "AI AUTOMATION",
    href: "/ai-automation",
    items: [
      { name: "Autonomous AI Agents & Chatbots", href: "/ai-automation" },
      { name: "Zapier & Make Workflow Pipelines", href: "/ai-automation" },
      { name: "CRM & Lead Routing Automation", href: "/ai-automation" },
      { name: "AI Content & Operations Systems", href: "/ai-automation" },
      { name: "Enterprise API Integrations", href: "/ai-automation" },
    ],
  },
  {
    title: "PACKAGES",
    href: "/packages",
    items: [
      { name: "All Service Packages", href: "/packages" },
      { name: "Logo Design Packages", href: "/packages" },
      { name: "Website Design Packages", href: "/packages" },
      { name: "E-Commerce Packages", href: "/packages" },
      { name: "Custom AI & Marketing Scope", href: "/packages#custom-quote" },
    ],
  },
];


export default function MegaNavbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveTab(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileTab = (title: string) => {
    setExpandedMobileTab((prev) => (prev === title ? null : title));
  };

  const handleTabToggle = (catTitle: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab((prev) => (prev === catTitle ? null : catTitle));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-auto ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#00b4d8]/30 shadow-md py-3"
          : "bg-white/90 backdrop-blur-md border-b border-[#00b4d8]/20 shadow-xs py-3.5"
      }`}
    >
      <div className="max-w-[1800px] mx-auto w-full px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group py-0.5 shrink-0">
          <img
            src={logoLightBg}
            alt="Grand Designs Official Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-all"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_STRUCTURE.map((cat) => {
            const isActive = activeTab === cat.title;

            return (
              <div key={cat.title} className="relative py-2">
                <button
                  type="button"
                  onClick={(e) => handleTabToggle(cat.title, e)}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-sans font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "text-[#00b4d8] bg-[#e0f2fe]"
                      : "text-[#0c2340] hover:text-[#00b4d8] hover:bg-slate-100"
                  }`}
                >
                  <span>{cat.title}</span>
                  {(cat.items || cat.groups) && (
                    <span className={`text-[9px] transform transition-transform duration-200 ${isActive ? "rotate-180 text-[#00b4d8]" : "text-slate-400"}`}>
                      ▼
                    </span>
                  )}
                </button>

                {(cat.items || cat.groups) && isActive && (
                  <div className="absolute top-[100%] left-0 pt-2 min-w-[260px] xl:min-w-[300px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white text-[#0c2340] rounded-2xl shadow-[0_20px_50px_rgba(0,180,216,0.25)] border-2 border-[#00b4d8]/40 p-4 space-y-3">
                      
                      {/* Main Category Overview Link */}
                      <a
                        href={cat.href}
                        onClick={() => setActiveTab(null)}
                        className="text-xs font-mono font-black uppercase tracking-widest text-[#00b4d8] hover:underline block pb-2 border-b border-slate-100 flex items-center justify-between"
                      >
                        <span>View {cat.title} Overview</span>
                        <span>→</span>
                      </a>

                      {/* Simple Items List */}
                      {cat.items && (
                        <div className="space-y-1">
                          {cat.items.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setActiveTab(null)}
                              className="text-xs font-sans font-bold text-slate-800 hover:text-[#00b4d8] transition-all duration-200 py-2 px-3 rounded-xl hover:bg-[#e0f2fe] flex items-center gap-2 group/sub truncate"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#00b4d8] opacity-0 group-hover/sub:opacity-100 transition-opacity shrink-0" />
                              <span className="truncate">{sub.name}</span>
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Grouped Items List */}
                      {cat.groups && (
                        <div className="space-y-3">
                          {cat.groups.map((grp) => (
                            <div key={grp.groupName} className="space-y-1">
                              <span className="text-[10px] font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest px-3 block">
                                {grp.groupName}
                              </span>
                              {grp.items.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setActiveTab(null)}
                                  className="text-xs font-sans font-bold text-slate-800 hover:text-[#00b4d8] transition-all duration-200 py-1.5 px-3 rounded-xl hover:bg-[#e0f2fe] flex items-center gap-2 group/sub truncate"
                                >
                                  <span className="w-2 h-2 rounded-full bg-[#00b4d8] opacity-0 group-hover/sub:opacity-100 transition-opacity shrink-0" />
                                  <span className="truncate">{sub.name}</span>
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18334922918"
            className="bg-[#00b4d8] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-full font-sans text-xs xl:text-sm uppercase font-extrabold tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(0,180,216,0.4)] hover:shadow-[0_6px_22px_rgba(0,180,216,0.6)] hover:scale-105 flex items-center gap-2"
          >
            <span>Hire an expert →</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-2xl transition-colors text-[#0c2340] hover:bg-slate-200/60"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Slide-Over Dropdown Drawer — White Theme */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-[64px] bg-white/98 backdrop-blur-2xl border-b-4 border-[#00b4d8] shadow-[0_25px_60px_rgba(0,180,216,0.25)] px-6 py-6 space-y-3 max-h-[82vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 z-50 text-slate-900">
          <div className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#00b4d8] pb-2 border-b border-slate-200 flex items-center justify-between">
            <span>EXPLORE DIGITAL STUDIO SERVICES</span>
            <span>SELECT A CATEGORY ▼</span>
          </div>


          {NAV_STRUCTURE.map((cat) => {
            const isExpanded = expandedMobileTab === cat.title;
            return (
              <div key={cat.title} className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/80 shadow-xs transition-all">
                <button
                  type="button"
                  onClick={() => toggleMobileTab(cat.title)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left font-sans text-xs font-black uppercase tracking-wider text-[#0c2340] hover:text-[#00b4d8] hover:bg-sky-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
                    <span>{cat.title}</span>
                  </span>
                  <span className={`transform transition-transform duration-200 text-sm ${isExpanded ? "rotate-180 text-[#00b4d8]" : "text-slate-400"}`}>
                    ▼
                  </span>
                </button>

                {/* Expandable Accordion Sub-Menu Dropdown */}
                {isExpanded && (
                  <div className="p-4 bg-white border-t border-slate-200 space-y-3 animate-in fade-in duration-200">
                    <a
                      href={cat.href}
                      className="text-xs font-mono font-black uppercase tracking-widest text-[#00b4d8] hover:underline block pb-2 border-b border-slate-100"
                    >
                      View Main {cat.title} Page →
                    </a>

                    {cat.items && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {cat.items.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="text-xs font-bold text-slate-800 hover:text-[#00b4d8] hover:bg-sky-50 py-2.5 px-3 rounded-xl transition-colors block"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {cat.groups && (
                      <div className="space-y-3 pt-1">
                        {cat.groups.map((group) => (
                          <div key={group.groupName} className="space-y-1.5">
                            <span className="text-[10px] font-mono text-slate-500 font-extrabold uppercase tracking-wider block">
                              {group.groupName}
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {group.items.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  className="text-xs font-bold text-slate-800 hover:text-[#00b4d8] hover:bg-sky-50 py-2.5 px-3 rounded-xl transition-colors block"
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Direct Call Button in White Mobile Slider Drawer */}
          <div className="pt-3">
            <a
              href="tel:+18334922918"
              className="w-full bg-[#00b4d8] hover:bg-[#0284c7] text-white py-3.5 rounded-2xl font-mono text-xs uppercase font-extrabold tracking-widest text-center block shadow-[0_4px_20px_rgba(0,180,216,0.4)] hover:scale-105 transition-all"
            >
              📞 CALL +1 (833) 492-2918 NOW →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

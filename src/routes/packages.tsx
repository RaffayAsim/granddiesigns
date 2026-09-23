import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptchaConfig";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";
import { formatUSPhoneNumber, validateFullName, validateStrictEmail, validateUSPhoneNumber } from "@/lib/usFormValidation";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Service Packages & Fixed Pricing — Logo, Website, E-Commerce & AI" },
      {
        name: "description",
        content:
          "Transparent, one-time fixed pricing packages for custom logo design, responsive websites, e-commerce stores, and custom AI & marketing quotes.",
      },
    ],
  }),
});

interface PackageItem {
  id: string;
  category: "logo" | "website" | "ecommerce" | "custom";
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  originalPrice: string;
  promoPrice: string;
  billingText: string;
  popular?: boolean;
  features: string[];
  ctaLabel?: string;
}

const PACKAGES_DATA: PackageItem[] = [
  // 1. LOGO DESIGN PACKAGES
  {
    id: "logo-basic",
    category: "logo",
    badge: "Simple",
    title: "Basic Logo Package",
    subtitle: "2 concepts, fast delivery.",
    originalPrice: "$199",
    promoPrice: "$99",
    billingText: "one-time",
    features: [
      "2 logo concepts",
      "2 revisions",
      "PNG + JPEG delivery",
      "48 hours delivery",
      "Full ownership rights",
    ],
  },
  {
    id: "logo-startup",
    category: "logo",
    badge: "Brand Popular",
    badgeColor: "bg-emerald-500",
    popular: true,
    title: "Startup Logo Pack",
    subtitle: "5 concepts, full files.",
    originalPrice: "$499",
    promoPrice: "$249",
    billingText: "one-time",
    features: [
      "5 logo concepts",
      "Unlimited revisions",
      "AI + PSD + Vector master files",
      "Stationery mockup preview",
      "Social media profile exports",
      "100% money back guarantee",
    ],
  },
  {
    id: "logo-pro",
    category: "logo",
    badge: "Pro",
    title: "Professional Brand",
    subtitle: "Brand guide + master files.",
    originalPrice: "$899",
    promoPrice: "$499",
    billingText: "one-time",
    features: [
      "10+ logo concepts",
      "Comprehensive brand guidelines",
      "All vector & raster files (AI, EPS, SVG, PNG, PDF)",
      "Dedicated senior designer",
      "Color palette & typography hierarchy",
      "Do's and don'ts usage manual",
    ],
  },

  // 2. WEBSITE DESIGN PACKAGES
  {
    id: "web-startup",
    category: "website",
    badge: "Best Value",
    badgeColor: "bg-amber-400 text-slate-950 font-black",
    title: "Startup Website Package",
    subtitle: "Fast-loading authority presence for new businesses.",
    originalPrice: "$400 ONLY",
    promoPrice: "$299.00",
    billingText: "one-time",
    features: [
      "1 to 3 Pages Website Design",
      "2 Stock Images Included",
      "Interactive Contact Forms",
      "5 Revisions",
      "Sliding Dynamic Banner",
      "Portfolio & Pricing Section & Page",
      "Lifetime Technical Support",
      "Complete Production Deployment",
      "Social Media Integration",
      "Complete Source Files Included",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "NO MONTHLY OR ANY HIDDEN FEE",
    ],
  },
  {
    id: "web-pro",
    category: "website",
    badge: "Popular",
    badgeColor: "bg-[#00b4d8] text-slate-950 font-black",
    popular: true,
    title: "Professional Website Package",
    subtitle: "Comprehensive online platform engineered to scale conversions.",
    originalPrice: "$1000 ONLY",
    promoPrice: "$699.00",
    billingText: "one-time",
    features: [
      "5 to 8 Pages Website Design",
      "5 Stock Images Included",
      "Interactive Contact Forms",
      "10 Revisions",
      "Sliding Dynamic Banner",
      "Portfolio & Pricing Section & Page",
      "Lifetime Technical Support",
      "Complete Production Deployment",
      "Social Media Integration",
      "Dedicated Project Manager",
      "Complete Source Files Included",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "NO MONTHLY OR ANY HIDDEN FEE",
    ],
  },
  {
    id: "web-advanced",
    category: "website",
    badge: "Pro Enterprise",
    title: "Professional Web Design",
    subtitle: "Custom design, advanced features, priority support.",
    originalPrice: "$2999",
    promoPrice: "$1499",
    billingText: "one-time",
    features: [
      "Custom UX/UI bespoke design in Figma",
      "Unlimited pages & advanced headless CMS",
      "eCommerce / Multilingual capability",
      "Performance & security hardening (95+ score)",
      "Integration with 3rd-party APIs & webhooks",
      "1 year premium hosting & VIP support",
      "Branding & conversion funnel guidance",
      "100% Source code repository transfer",
    ],
  },

  // 3. E-COMMERCE WEBSITE PACKAGES
  {
    id: "ecom-elite",
    category: "ecommerce",
    badge: "Starter",
    badgeColor: "bg-indigo-500",
    title: "Elite Website Package",
    subtitle: "Multi-page dynamic corporate platform with e-commerce capability.",
    originalPrice: "$1600 ONLY",
    promoPrice: "$459.00",
    billingText: "one-time",
    features: [
      "10 to 15 Pages Website Design",
      "5 Stock Images Included",
      "Custom Dynamic Lead Forms",
      "10 Revisions",
      "Sliding Promotional Banner",
      "Portfolio & Pricing Section & Page",
      "Lifetime Technical Support",
      "Complete Cloud Deployment",
      "Social Media Integration",
      "Dedicated Project Manager",
      "100% Mobile Responsive",
      "Complete Source File Transfer",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "NO MONTHLY OR ANY HIDDEN FEE",
    ],
  },
  {
    id: "ecom-startup-store",
    category: "ecommerce",
    badge: "Scale",
    badgeColor: "bg-rose-500",
    popular: true,
    title: "Startup E-Store",
    subtitle: "Up to 100 products, SEO & marketing ready.",
    originalPrice: "$1598",
    promoPrice: "$799",
    billingText: "one-time",
    features: [
      "Up to 100 products catalog setup",
      "Advanced live search & category filters",
      "Coupons, discounts & promotional codes",
      "Multiple payment gateways (Stripe, PayPal, Apple Pay)",
      "Google Analytics & pixel integration",
      "Automated order confirmation emails",
      "Inventory & stock tracking dashboard",
      "6 months dedicated maintenance support",
    ],
  },
  {
    id: "ecom-pro-store",
    category: "ecommerce",
    badge: "Enterprise",
    badgeColor: "bg-purple-600",
    title: "Professional E-Store",
    subtitle: "Large catalog, advanced features & automation.",
    originalPrice: "$2798",
    promoPrice: "$1399",
    billingText: "one-time",
    features: [
      "Up to 500+ products catalog setup",
      "Full shopping cart & automated inventory sync",
      "Customer product reviews & star ratings",
      "Automated abandoned-cart emails & order flows",
      "Full performance & security audit package",
      "Priority VIP developer support",
      "Wholesale / tiered customer pricing rules",
      "Full store ownership & no vendor lock-in",
    ],
  },
];

function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "logo" | "website" | "ecommerce" | "custom">("all");
  const [selectedPackageForForm, setSelectedPackageForForm] = useState<string>("");
  
  // Custom Quote Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const quoteFormRef = useRef<HTMLDivElement>(null);

  const handleOrderClick = (pkgTitle: string) => {
    setSelectedPackageForForm(pkgTitle);
    if (quoteFormRef.current) {
      quoteFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredPackages = selectedCategory === "all" 
    ? PACKAGES_DATA 
    : PACKAGES_DATA.filter((p) => p.category === selectedCategory);

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = phoneVal;

    const nameCheck = validateFullName(fullName);
    if (!nameCheck.isValid) {
      setFormError(nameCheck.message!);
      return;
    }

    const phoneCheck = validateUSPhoneNumber(phone);
    if (!phoneCheck.isValid) {
      setFormError(phoneCheck.message!);
      return;
    }

    const emailCheck = validateStrictEmail(email);
    if (!emailCheck.isValid) {
      setFormError(emailCheck.message!);
      return;
    }

    if (!recaptchaToken) {
      setFormError("Please complete the Google reCAPTCHA verification checkbox below.");
      return;
    }

    setFormSubmitting(true);

    const verifyRes = await verifyRecaptchaToken(recaptchaToken);
    if (!verifyRes.success) {
      setFormSubmitting(false);
      setFormError(verifyRes.message || "reCAPTCHA verification failed. Please try again.");
      return;
    }

    try {
      formData.append("access_key", "a02c3a24-0150-4b1a-b0be-b2bdd36576fc");
      formData.append("phone", phone);
      formData.append("g-recaptcha-response", recaptchaToken);
      formData.append("subject", `[Package Order & Quote] ${formData.get("service_package") || "Custom Scope"} from ${fullName}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030812] text-white font-sans overflow-x-hidden selection:bg-[#00b4d8] selection:text-white">
      <GlobalCanvasCursor />
      <MegaNavbar />

      <main className="pt-24 md:pt-28">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#030812] py-20 md:py-28 border-b border-[#00b4d8]/20 select-none">
          <SubpageHeroKineticCanvas />

          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
              <span>TRANSPARENT FIXED SCOPE · NO HIDDEN FEES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              Studio Service <span className="underline decoration-[#00b4d8] decoration-4 underline-offset-8">Packages</span>
            </h1>

            <p className="text-slate-300 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Choose from our curated design, web development, and e-commerce launch bundles with one-time transparent pricing, 100% intellectual property ownership, and lifetime support.
            </p>

            {/* Quick Guarantees Pill Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#00b4d8]">✓</span> 100% Money Back Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#00b4d8]">✓</span> 100% Ownership & Source Files
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#00b4d8]">✓</span> No Recurring Monthly Retainers
              </span>
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <CompanyLogosMarquee />

        {/* INTERACTIVE CATEGORY FILTER TABS */}
        <section className="sticky top-20 z-30 py-4 bg-[#030812]/95 backdrop-blur-md border-b border-[#00b4d8]/20">
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xl">
              {[
                { id: "all", label: "ALL PACKAGES" },
                { id: "logo", label: "LOGO DESIGN" },
                { id: "website", label: "WEBSITES" },
                { id: "ecommerce", label: "E-COMMERCE" },
                { id: "custom", label: "AI & MARKETING (CUSTOM)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-extrabold uppercase tracking-wider transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#00b4d8] text-slate-950 shadow-md scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES SHOWCASE GRID */}
        {selectedCategory !== "custom" && (
          <section className="py-16 md:py-24 bg-[#030812] relative">
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#00b4d8] block">
                  CLEAR FLAT-RATE SCOPE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                  Transparent Investment. Maximum Return.
                </h2>
                <p className="text-slate-400 font-sans text-sm md:text-base max-w-2xl mx-auto">
                  All packages include complete vector assets, production deployment, and direct access to senior design and engineering leads.
                </p>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-b from-[#071d38] to-[#040e1d] border-2 border-[#00b4d8] shadow-[0_0_40px_rgba(0,180,216,0.35)] scale-100 lg:scale-[1.03]"
                        : "bg-[#071324] border border-slate-700/80 hover:border-[#00b4d8]/60 shadow-xl"
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-8">
                        <span
                          className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider shadow-md ${
                            pkg.badgeColor || "bg-amber-400 text-slate-950"
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="space-y-6 pt-2">
                      {/* Title & Subtitle */}
                      <div className="space-y-1.5">
                        <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white">
                          {pkg.title}
                        </h3>
                        <p className="text-slate-300 text-xs md:text-sm font-sans font-medium min-h-[38px]">
                          {pkg.subtitle}
                        </p>
                      </div>

                      {/* Pricing block */}
                      <div className="pt-2 border-t border-slate-700/60 pb-2">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="text-slate-400 line-through text-lg font-mono font-bold">
                            {pkg.originalPrice}
                          </span>
                          <span className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-white tracking-tight">
                            {pkg.promoPrice}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#00b4d8] uppercase tracking-wider">
                            /{pkg.billingText}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 font-bold pt-1">
                          ✦ Instant 50% Agency Sprint Discount
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block">
                          WHAT'S INCLUDED:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm font-sans text-slate-200">
                          {pkg.features.map((feat, idx) => {
                            const isHighlight = feat.includes("100%") || feat.includes("NO MONTHLY");
                            return (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="text-[#00b4d8] font-bold shrink-0 mt-0.5">✓</span>
                                <span className={isHighlight ? "font-bold text-amber-300" : ""}>
                                  {feat}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Order Now CTA Button */}
                    <div className="pt-8 border-t border-slate-700/60 mt-6">
                      <button
                        onClick={() => handleOrderClick(pkg.title)}
                        className={`w-full py-4 rounded-2xl font-mono text-xs md:text-sm uppercase font-extrabold tracking-widest transition-all text-center flex items-center justify-center gap-2 shadow-lg ${
                          pkg.popular
                            ? "bg-rose-600 hover:bg-rose-700 text-white shadow-[0_0_25px_rgba(225,29,72,0.5)] hover:scale-105"
                            : "bg-[#00b4d8] hover:bg-[#0284c7] text-slate-950 hover:text-white hover:scale-102"
                        }`}
                      >
                        <span>Order Now</span>
                        <span>→</span>
                      </button>
                      <p className="text-[10px] font-mono text-slate-400 text-center pt-2">
                        Fixed price · 100% Money-back guarantee
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* CUSTOM PACKAGE FOR AI AUTOMATION & DIGITAL MARKETING */}
        <section 
          id="custom-quote" 
          ref={quoteFormRef}
          className="py-16 md:py-24 bg-gradient-to-b from-[#030812] via-[#051326] to-[#030812] border-t border-[#00b4d8]/30 relative"
        >
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-[0.3em] text-[#00b4d8] block">
                BESPOKE ENTERPRISE ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
                Digital Marketing &amp; AI Automation <span className="text-[#00b4d8]">Custom Scope</span>
              </h2>
              <p className="text-slate-300 font-sans text-base md:text-lg max-w-3xl mx-auto font-light">
                Because growth marketing budgets, multi-channel funnels, and enterprise AI workflows vary by business size, we scope tailored architecture sprints based on your specific KPIs and target revenue.
              </p>
            </div>

            {/* 2 Custom Solution Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Performance Marketing */}
              <div className="p-8 rounded-3xl bg-[#07172b] border-2 border-[#00b4d8]/40 shadow-xl space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00b4d8]/10 border border-[#00b4d8]/40 flex items-center justify-center text-2xl">
                  📈
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                    CUSTOM SCOPE TIER
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    Performance Marketing &amp; Ad Sprints
                  </h3>
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">
                    Tailored for companies seeking aggressive customer acquisition across Google Search, Meta Ads, and programmatic retargeting.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-slate-200 border-t border-slate-700/60 pt-4">
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Full ad account audit &amp; pixel conversion tracking</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> High-converting ad copy &amp; video creative variants</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Dedicated media buyer &amp; weekly ROI dashboard</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Continuous CRO landing page experimentation</li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => handleOrderClick("Custom Digital Marketing Campaign")}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-extrabold uppercase tracking-wider text-white transition-all"
                  >
                    Request Marketing Quote →
                  </button>
                </div>
              </div>

              {/* Card 2: AI Automation */}
              <div className="p-8 rounded-3xl bg-[#07172b] border-2 border-[#00b4d8]/40 shadow-xl space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00b4d8]/10 border border-[#00b4d8]/40 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                    CUSTOM SCOPE TIER
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    Autonomous AI Agents &amp; Workflows
                  </h3>
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">
                    Bespoke conversational triage bots, automated CRM pipelines, Zapier/Make integrations, and autonomous lead scheduling systems.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-slate-200 border-t border-slate-700/60 pt-4">
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> 24/7 AI lead capture answering in &lt; 5 seconds</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Real-time calendar &amp; meeting auto-booking</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Two-way synchronization with HubSpot, Salesforce, or Stripe</li>
                  <li className="flex items-center gap-2"><span className="text-[#00b4d8] font-bold">✓</span> Custom vector database embeddings with company knowledge</li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => handleOrderClick("Custom AI Automation Engine")}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-extrabold uppercase tracking-wider text-white transition-all"
                  >
                    Request AI Automation Quote →
                  </button>
                </div>
              </div>

            </div>

            {/* DEDICATED QUERY & CUSTOM QUOTE FORM */}
            <div className="bg-[#071324] border-2 border-[#00b4d8] rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(0,180,216,0.3)]">
              
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-[11px] font-black uppercase tracking-wider shadow-md">
                    <span>⚡ 24-HOUR SCOPE &amp; CUSTOM QUOTE</span>
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                    Submit Your Project Requirements
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light">
                    Select a fixed package above or describe your bespoke marketing and AI automation needs. We'll return a comprehensive roadmap and proposal within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 sm:p-12 rounded-2xl bg-white text-[#0c2340] text-center space-y-4 animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#00b4d8] text-white text-3xl font-extrabold flex items-center justify-center mx-auto shadow-md">
                      ✓
                    </div>
                    <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00b4d8]">
                      PROPOSAL INQUIRY RECEIVED
                    </div>
                    <h4 className="font-serif text-3xl font-extrabold text-[#0c2340]">
                      Thank You! We've Received Your Scope.
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto font-medium">
                      A senior project architect is reviewing your specifications. We will send you a tailored roadmap and quote within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setRecaptchaToken(null);
                        }}
                        className="px-8 py-3.5 rounded-xl bg-[#0c2340] hover:bg-[#00b4d8] text-white font-mono text-xs uppercase font-extrabold tracking-wider transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-6 text-left">
                    
                    {formError && (
                      <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/60 text-rose-300 text-xs font-mono font-bold">
                        ⚠️ {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#00b4d8]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-[#00b4d8] text-white font-sans outline-none transition-all placeholder:text-slate-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#00b4d8]">
                          Best Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-[#00b4d8] text-white font-sans outline-none transition-all placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#00b4d8]">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phoneVal}
                          onChange={(e) => setPhoneVal(formatUSPhoneNumber(e.target.value))}
                          placeholder="(833) 492-2918"
                          className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-[#00b4d8] text-white font-sans outline-none transition-all placeholder:text-slate-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#00b4d8]">
                          Selected Package or Service *
                        </label>
                        <select
                          name="service_package"
                          defaultValue={selectedPackageForForm || "Custom AI & Marketing Scope"}
                          className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-[#00b4d8] text-white font-sans outline-none transition-all cursor-pointer"
                        >
                          <option value="Basic Logo Package ($99)">Basic Logo Package ($99)</option>
                          <option value="Startup Logo Pack ($249)">Startup Logo Pack ($249)</option>
                          <option value="Professional Brand Package ($499)">Professional Brand Package ($499)</option>
                          <option value="Startup Website Package ($299)">Startup Website Package ($299)</option>
                          <option value="Professional Website Package ($699)">Professional Website Package ($699)</option>
                          <option value="Pro Professional Web Design ($1499)">Pro Professional Web Design ($1499)</option>
                          <option value="Elite Website Package ($459)">Elite Website Package ($459)</option>
                          <option value="Startup E-Store ($799)">Startup E-Store ($799)</option>
                          <option value="Professional E-Store ($1399)">Professional E-Store ($1399)</option>
                          <option value="Custom Digital Marketing Campaign">Custom Digital Marketing Campaign</option>
                          <option value="Custom AI Automation Engine">Custom AI Automation Engine</option>
                          <option value="Full Digital Transformation (All Services)">Full Digital Transformation (All Services)</option>
                        </select>
                      </div>
                    </div>

                    {/* Detailed Requirements Textarea */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#00b4d8]">
                        Project Scope, Questions or Specific Features
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your brand vision, number of products, current ad channels, or workflow automation requirements..."
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-[#00b4d8] text-white font-sans outline-none transition-all placeholder:text-slate-500 resize-y"
                      />
                    </div>

                    {/* RECAPTCHA V2 */}
                    <div className="pt-2">
                      <div className="p-2 rounded-xl bg-white inline-block">
                        <ReCAPTCHA
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={(token) => {
                            setRecaptchaToken(token);
                            setFormError("");
                          }}
                          onExpired={() => setRecaptchaToken(null)}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="w-full py-4.5 rounded-2xl bg-rose-600 hover:bg-rose-700 disabled:bg-slate-700 text-white font-mono text-sm sm:text-base uppercase font-black tracking-widest shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 border-2 border-rose-400"
                      >
                        <span>{formSubmitting ? "PROCESSING SCOPE..." : "SUBMIT ORDER & GET TAILORED QUOTE →"}</span>
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                      <span>✓ 100% Confidential NDA Protected</span>
                      <span>📞 Direct Desk: <a href="tel:+18334922918" className="text-white hover:text-[#00b4d8] font-bold">+1 (833) 492-2918</a></span>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* SUBPAGE BOTTOM CTA */}
        <SubpageBottomCta
          badge="HOUSTON HQ & GLOBAL CLIENT DESKS"
          title="Ready to Launch Your High-Impact Digital Project?"
          description="Schedule a 20-minute strategy call with our senior architects or claim our 50% discount package today. We deliver fixed scopes and blueprints within 24 hours."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

export default PackagesPage;

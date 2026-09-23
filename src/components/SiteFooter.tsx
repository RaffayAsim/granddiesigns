import { Link } from "@tanstack/react-router";
import logoDarkBg from "@/assets/brand/logo_dark_bg.png";

export default function SiteFooter() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#00b4d8] via-[#0284c7] to-[#0369a1] text-white font-sans overflow-hidden select-none border-t-2 border-white/20 pt-8 md:pt-10 pb-4 md:pb-6">
      
      {/* Dot Matrix Background Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.2px, transparent 1.2px)`,
          backgroundSize: `28px 28px`
        }}
      />

      {/* Main Content Container */}
      <div className="relative w-full px-6 md:px-12 lg:px-16 space-y-8 md:space-y-10 z-10 max-w-[1800px] mx-auto">
        
        {/* Top Logo Header Row - Strictly Logo Image Only */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/25">
          <Link to="/" className="inline-block group py-1">
            <img
              src={logoDarkBg}
              alt="Grand Designs Official Logo"
              className="h-20 md:h-24 lg:h-28 w-auto max-w-[320px] md:max-w-[440px] object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          <p className="text-xs md:text-sm text-sky-100 font-sans font-medium max-w-md text-right hidden sm:block">
            Full-service digital agency specializing in brand identity, custom web engineering, digital marketing, and AI automation.
          </p>
        </div>

        {/* Re-Aligned 4 Columns — All Titles Align on the Exact Same Baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* TAB 1: STUDIO & EXPLORE (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] text-white border-b border-white/30 pb-2">
              STUDIO &amp; EXPLORE
            </h4>

            <ul className="space-y-2 text-xs md:text-sm font-bold text-sky-100">
              <li><Link to="/about" className="hover:text-white transition-colors block">About Our Studio</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors block">Houston HQ &amp; Global Desks</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors block">Services Catalog</Link></li>
              <li><Link to="/packages" className="text-amber-300 hover:text-white transition-colors block font-extrabold">Packages &amp; Fixed Pricing ⚡</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors block">Selected Work &amp; Archive</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors block">Transparent 4-Phase Process</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block">Schedule Discovery Call</Link></li>
            </ul>
          </div>

          {/* TAB 2: BRANDING & WEB DEV (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] text-white border-b border-white/30 pb-2">
              BRANDING &amp; WEB DEV
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-bold text-sky-100">
              <li><Link to="/logo-design" className="hover:text-white transition-colors block">Custom Vector Logo Design</Link></li>
              <li><Link to="/logo-design" className="hover:text-white transition-colors block">Brand Identity &amp; Style Guides</Link></li>
              <li><Link to="/website-design" className="hover:text-white transition-colors block">Custom Web Applications</Link></li>
              <li><Link to="/website-design" className="hover:text-white transition-colors block">High-Converting Landing Pages</Link></li>
              <li><Link to="/website-design" className="hover:text-white transition-colors block">E-Commerce &amp; Shopify Stores</Link></li>
              <li><Link to="/website-design" className="hover:text-white transition-colors block">UI/UX Design Systems &amp; Figma</Link></li>
            </ul>
          </div>

          {/* TAB 3: MARKETING & AI AUTOMATION (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] text-white border-b border-white/30 pb-2">
              MARKETING &amp; AI AUTOMATION
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-bold text-sky-100">
              <li><Link to="/marketing" className="hover:text-white transition-colors block">Search Engine Optimization (SEO)</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors block">Google &amp; Meta Performance Ads</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors block">Conversion Rate Optimization (CRO)</Link></li>
              <li><Link to="/ai-automation" className="hover:text-white transition-colors block">Autonomous AI Agents &amp; Chatbots</Link></li>
              <li><Link to="/ai-automation" className="hover:text-white transition-colors block">Zapier &amp; Make Workflow Pipelines</Link></li>
              <li><Link to="/ai-automation" className="hover:text-white transition-colors block">CRM &amp; Lead Nurture Automation</Link></li>
            </ul>
          </div>

          {/* TAB 4: SEPARATE PHONE NUMBER & EMAIL CONTACT CARD (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] text-white border-b border-white/30 pb-2">
              DIRECT EXECUTIVE HOTLINE
            </h4>
            
            <div className="p-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md space-y-3 shadow-lg">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-sky-200 block">
                  Direct executive hotline · Toll free, 24/7
                </span>
                <a
                  href="tel:+18334922918"
                  className="font-mono text-base font-extrabold text-white hover:text-sky-200 transition-colors flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>+1 (833) 492-2918</span>
                </a>
              </div>

              <div className="space-y-0.5 border-t border-white/20 pt-2.5">
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-sky-200 block">
                  STUDIO INQUIRY DESK
                </span>
                <Link
                  to="/contact"
                  className="font-mono text-xs font-bold text-white hover:text-sky-200 transition-colors block truncate"
                >
                  Schedule Consultation →
                </Link>
              </div>

              <div className="pt-0.5">
                <Link
                  to="/contact"
                  className="w-full py-2 rounded-xl bg-white text-[#0284c7] font-mono text-[11px] font-extrabold uppercase tracking-wider text-center block shadow-md hover:bg-sky-100 transition-colors"
                >
                  Launch Your Project →
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 z-10">
        {/* BOTTOM POLICY & COPYRIGHT BAR */}
        <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono text-sky-100">
          <div>
            © {new Date().getFullYear()} Grand Designs (granddiesigns.com). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-3 text-white font-bold">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <span>·</span>
            <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
            <span>·</span>
            <Link to="/nda" className="hover:underline">Confidentiality NDA</Link>
          </div>
        </div>


      </div>
    </footer>
  );
}

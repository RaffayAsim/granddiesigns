import { useState } from "react";

const RETAILERS = [
  {
    id: "amazon-kdp",
    name: "Amazon KDP & Kindle Unlimited",
    format: "eBook, Paperback & Hardcover",
    reach: "200+ Countries Worldwide",
    payout: "70% Direct Royalty Payout",
    badge: "GLOBAL #1 RETAILER",
  },
  {
    id: "audible-acx",
    name: "Audible & Apple Books Audio",
    format: "Studio Narration & Sound Master",
    reach: "100M+ Active Listeners",
    payout: "100% Royalty Retention",
    badge: "AUDIOBOOK #1 HUB",
  },
  {
    id: "barnes-noble",
    name: "Barnes & Noble & Nook Store",
    format: "Hardcover & Premium Paperback",
    reach: "600+ Physical Retail Stores",
    payout: "Direct Author Indexing",
    badge: "US PHYSICAL STORE HUB",
  },
  {
    id: "ingram-spark",
    name: "IngramSpark & Wholesale Network",
    format: "Physical Bookstores & Libraries",
    reach: "40,000+ Global Bookstores",
    payout: "100% Rights & Royalties",
    badge: "GLOBAL BOOKSTORE NETWORK",
  },
];

export default function InteractiveGlobalDistributionMatrix() {
  const [selectedRetailer, setSelectedRetailer] = useState(RETAILERS[0]);

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-r from-[#00b4d8] via-[#0284c7] to-[#0369a1] text-white border-t border-b border-white/20 overflow-hidden select-none">
      
      {/* Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: `36px 36px`
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 space-y-16 z-10">
        
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            40,000+ Global Retailer &amp; Library Indexing
          </h2>
          <p className="text-sky-100 font-sans text-base md:text-lg font-light">
            Select a retailer below to inspect your hardcover, paperback, and audiobook distribution footprint.
          </p>
        </div>

        {/* Retailer Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RETAILERS.map((r) => {
            const isSelected = r.id === selectedRetailer.id;
            return (
              <div
                key={r.id}
                onClick={() => setSelectedRetailer(r)}
                className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? "bg-white text-[#0c2340] border-white shadow-[0_25px_60px_rgba(0,0,0,0.3)] scale-105"
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-102"
                }`}
              >
                <div className="space-y-3">
                  <span className={`text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${isSelected ? "bg-[#0c2340] text-white" : "bg-white/20 text-white"}`}>
                    {r.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold leading-tight pt-2">
                    {r.name}
                  </h3>
                  <p className={`text-xs font-sans ${isSelected ? "text-slate-600" : "text-sky-100"}`}>
                    Format: {r.format}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#00b4d8]/20 flex items-center justify-between text-xs font-mono font-bold">
                  <span>{r.reach}</span>
                  <span className="text-[#00b4d8]">✓ ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Retailer Showcase Panel */}
        <div className="p-8 md:p-12 rounded-3xl border-2 border-white/50 bg-white/95 text-[#0c2340] backdrop-blur-2xl shadow-2xl space-y-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00b4d8]/20 pb-6">
            <div>
              <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block">
                SELECTED DISTRIBUTION CHANNEL
              </span>
              <h3 className="font-serif text-3xl font-extrabold text-[#0c2340]">
                {selectedRetailer.name}
              </h3>
            </div>
            <span className="px-4 py-2 rounded-2xl bg-[#0c2340] text-white font-mono text-xs font-extrabold">
              {selectedRetailer.payout}
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#f0f9ff] border border-[#00b4d8]/30">
              <div className="text-xs font-mono font-bold text-slate-500">GLOBAL COVERAGE</div>
              <div className="text-lg font-serif font-extrabold text-[#0c2340] mt-1">{selectedRetailer.reach}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#f0f9ff] border border-[#00b4d8]/30">
              <div className="text-xs font-mono font-bold text-slate-500">SUPPORTED FORMATS</div>
              <div className="text-lg font-serif font-extrabold text-[#0c2340] mt-1">{selectedRetailer.format}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#f0f9ff] border border-[#00b4d8]/30">
              <div className="text-xs font-mono font-bold text-slate-500">ROYALTY GUARANTEE</div>
              <div className="text-lg font-serif font-extrabold text-[#00b4d8] mt-1">100% Retention</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

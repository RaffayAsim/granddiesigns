import { useState } from "react";

const CAMPAIGN_CHANNELS = [
  {
    id: "amazon-ppc",
    name: "Amazon PPC Sponsored Ads",
    stat: "+340% Impressions",
    desc: "Target high-intent keywords across Amazon Kindle & Paperback search result pages.",
    metrics: { roas: "4.8x ROAS", reach: "1.2M Searchers", cpc: "$0.42 Avg CPC" },
  },
  {
    id: "booktok",
    name: "TikTok & Instagram BookTok",
    stat: "2.4M Viral Views",
    desc: "Partner with top book reviewers and literary influencers for unboxing & review videos.",
    metrics: { roas: "6.2x ROAS", reach: "2.8M Readers", cpc: "$0.18 Avg CPE" },
  },
  {
    id: "press-syndication",
    name: "PR & Media Press Syndication",
    stat: "150+ News Outlets",
    desc: "Get featured on Fox, NBC, Business Insider, and leading industry book blogs.",
    metrics: { roas: "5.1x ROAS", reach: "4.5M Reach", cpc: "Guaranteed Syndication" },
  },
  {
    id: "seo-funnel",
    name: "Author SEO & Google Search",
    stat: "#1 Rank Authority",
    desc: "Rank on Page 1 of Google for your book title, author name, and niche topics.",
    metrics: { roas: "8.5x ROAS", reach: "850K Organic", cpc: "$0.00 Organic" },
  },
];

export default function InteractiveCampaignSimulator() {
  const [activeChannel, setActiveChannel] = useState(CAMPAIGN_CHANNELS[0]);
  const [adBudget, setAdBudget] = useState(1500);

  const estimatedSales = Math.round((adBudget * 3.8) / 18);
  const estimatedRoyalties = Math.round(estimatedSales * 12.5);

  return (
    <section className="relative py-24 md:py-36 bg-[#030712] text-white border-t border-b border-[#00b4d8]/30 overflow-hidden select-none">
      
      {/* Background Glow & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px] bg-[radial-gradient(circle,rgba(0,180,216,0.22)_0%,transparent_75%)] blur-[140px]" />
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 space-y-16 z-10">
        
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Interactive Author Campaign Simulator
          </h2>
          <p className="text-slate-300 font-sans text-base md:text-lg font-light">
            Test live marketing channels, view estimated reader reach, and calculate projected author royalties.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Channel Selector Pills */}
          <div className="lg:col-span-5 space-y-4">
            {CAMPAIGN_CHANNELS.map((ch) => {
              const isActive = ch.id === activeChannel.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChannel(ch)}
                  className={`cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#0c2340] border-white shadow-[0_20px_50px_rgba(0,180,216,0.3)] scale-102"
                      : "bg-[#071526]/80 text-white border-[#00b4d8]/30 hover:border-[#00b4d8]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-extrabold">{ch.name}</h3>
                    <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full ${isActive ? "bg-[#0c2340] text-white" : "bg-[#00b4d8]/20 text-[#00b4d8]"}`}>
                      {ch.stat}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 font-sans ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                    {ch.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Live Interactive Analytics Simulator Board */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl border-2 border-[#00b4d8]/50 bg-gradient-to-br from-[#061527] via-[#040e1b] to-[#020710] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,180,216,0.3)] space-y-8">
              
              <div className="flex items-center justify-between border-b border-[#00b4d8]/30 pb-5">
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#00b4d8] block">
                    LIVE CAMPAIGN SIMULATOR
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-white">
                    {activeChannel.name}
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/40 font-mono text-xs font-extrabold shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                  SIMULATING LIVE DATA
                </span>
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#030914] border border-[#00b4d8]/30 text-center">
                  <div className="font-serif text-2xl md:text-3xl font-extrabold text-[#00b4d8]">{activeChannel.metrics.roas}</div>
                  <div className="font-mono text-[10px] font-extrabold text-slate-400 mt-1 uppercase">ESTIMATED ROAS</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#030914] border border-[#00b4d8]/30 text-center">
                  <div className="font-serif text-2xl md:text-3xl font-extrabold text-white">{activeChannel.metrics.reach}</div>
                  <div className="font-mono text-[10px] font-extrabold text-slate-400 mt-1 uppercase">TOTAL REACH</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#030914] border border-[#00b4d8]/30 text-center">
                  <div className="font-serif text-2xl md:text-3xl font-extrabold text-emerald-400">{activeChannel.metrics.cpc}</div>
                  <div className="font-mono text-[10px] font-extrabold text-slate-400 mt-1 uppercase">EFFICIENCY RATE</div>
                </div>
              </div>

              {/* Interactive Budget Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between font-mono text-xs font-extrabold">
                  <span className="text-slate-300 uppercase">MONTHLY ADVERTISING BUDGET:</span>
                  <span className="text-[#00b4d8] text-base">${adBudget.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={adBudget}
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-3 bg-[#030914] rounded-lg appearance-none cursor-pointer accent-[#00b4d8]"
                />
              </div>

              {/* Projected Revenue output */}
              <div className="p-5 rounded-2xl bg-[#00b4d8]/15 border border-[#00b4d8]/40 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-mono font-extrabold text-[#00b4d8]">PROJECTED AUTHOR ROYALTIES</div>
                  <div className="text-2xl md:text-3xl font-serif font-extrabold text-white mt-0.5">
                    ~${estimatedRoyalties.toLocaleString()} / mo
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-300">EST. COPIES SOLD</div>
                  <div className="text-xl font-serif font-extrabold text-[#00b4d8]">~{estimatedSales.toLocaleString()} books</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

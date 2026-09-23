import { useState } from "react";
import cover1 from "@/assets/covers/14.png";
import cover2 from "@/assets/covers/Dr Duncan 01.jpg";
import cover3 from "@/assets/covers/Dr Mary B 01.jpg";
import cover4 from "@/assets/covers/Front Cover 01.jpg";

export default function InteractiveCoverStudio() {
  const [activeCover, setActiveCover] = useState(cover1);
  const [foilFinish, setFoilFinish] = useState("Gold Foil");
  const [jacketType, setJacketType] = useState("Matte Hardcover");

  return (
    <section className="relative py-24 md:py-36 bg-[#030712] text-white border-t border-b border-[#00b4d8]/30 overflow-hidden select-none">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px] bg-[radial-gradient(circle,rgba(0,180,216,0.25)_0%,transparent_75%)] blur-[140px]" />
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 space-y-16 z-10">
        
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Interactive 3D Hardcover Art Studio
          </h2>
          <p className="text-slate-300 font-sans text-base md:text-lg font-light">
            Toggle between custom foil finishes, dust jackets, and real 3D hardcover artwork mockups.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Cover Selector with 3D Book Thumbnails */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest">
                1. SELECT SAMPLE CLIENT ARTWORK:
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[cover1, cover2, cover3, cover4].map((c, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveCover(c)}
                    className={`cursor-pointer perspective-[600px] group transition-all duration-300 ${
                      activeCover === c ? "scale-105" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* 3D Mini Book Mockup */}
                    <div className={`relative aspect-[2/3] rounded-r-lg rounded-l-xs overflow-hidden shadow-lg transform rotate-y-[-10deg] group-hover:rotate-y-[0deg] transition-transform duration-300 border ${
                      activeCover === c ? "border-[#00b4d8] shadow-[0_0_20px_rgba(0,180,216,0.8)]" : "border-slate-700"
                    }`}>
                      {/* Spine Fold Line */}
                      <div className="absolute left-2 top-0 bottom-0 w-[1.5px] bg-black/40 z-20" />
                      {/* Spine Gradient */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent z-10" />
                      <img src={c} alt="Cover option" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foil Stamping Finish Selector */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest">
                2. CUSTOM EMBOSSED FOIL FINISH:
              </div>
              <div className="flex flex-wrap gap-3">
                {["Gold Foil", "Silver Holographic", "Embossed Gloss", "Soft-Touch Matte"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFoilFinish(f)}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-extrabold uppercase transition-all duration-200 ${
                      foilFinish === f
                        ? "bg-[#00b4d8] text-white shadow-[0_0_15px_#00b4d8]"
                        : "bg-[#071526] text-slate-300 border border-[#00b4d8]/30 hover:border-[#00b4d8]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Jacket Type */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest">
                3. HARDCOVER DUST JACKET:
              </div>
              <div className="flex flex-wrap gap-3">
                {["Matte Hardcover", "Gloss Dust Jacket", "Cloth Bound Hardback"].map((j) => (
                  <button
                    key={j}
                    type="button"
                    onClick={() => setJacketType(j)}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-extrabold uppercase transition-all duration-200 ${
                      jacketType === j
                        ? "bg-white text-[#0c2340] shadow-md"
                        : "bg-[#071526] text-slate-300 border border-slate-700 hover:border-white"
                    }`}
                  >
                    {j}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* REALISTIC 3D HARDCOVER BOOK MOCKUP PREVIEW */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md w-full rounded-3xl p-8 bg-gradient-to-br from-[#061527] via-[#040e1b] to-[#020710] border-2 border-[#00b4d8]/50 shadow-[0_0_60px_rgba(0,180,216,0.3)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#00b4d8]/30 pb-4 text-xs font-mono font-bold text-[#00b4d8]">
                <span>{foilFinish.toUpperCase()}</span>
                <span>{jacketType.toUpperCase()}</span>
              </div>

              {/* REALISTIC 3D HARDCOVER BOOK MOCKUP WITH SPINE & SHADOW */}
              <div className="relative aspect-[2/3] rounded-r-2xl rounded-l-xs overflow-hidden shadow-[20px_20px_50px_rgba(0,0,0,0.8)] border-r-2 border-y-2 border-white/60 group-hover:scale-105 transition-all duration-500 transform rotate-y-[-6deg] group-hover:rotate-y-[0deg]">
                {/* 3D Spine Fold Hinge Line */}
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-black/50 z-30 shadow-xs" />
                {/* 3D Spine Depth Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-20" />
                {/* 3D Book Page Edge Texture right side */}
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-100/60 via-slate-200 to-amber-100/60 z-20" />
                
                <img src={activeCover} alt="3D Hardcover Book Mockup" className="w-full h-full object-cover" />
                
                {/* Glossy Diagonal Foil Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-white/20 to-transparent pointer-events-none z-10" />
              </div>

              <div className="text-center font-mono text-xs text-slate-400">
                Amazon KDP &amp; IngramSpark Sizing Compliant · 3D Hardcover Specification
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

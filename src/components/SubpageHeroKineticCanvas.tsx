// Real client logos
import logo0 from "@/assets/real-logos/logo0.png";
import logo1 from "@/assets/real-logos/logo1.png";
import logo2 from "@/assets/real-logos/logo2.png";
import logo3 from "@/assets/real-logos/logo3.png";
import logo4 from "@/assets/real-logos/logo4.png";
import logo5 from "@/assets/real-logos/logo5.png";
import logo6 from "@/assets/real-logos/logo6.png";
import logo7 from "@/assets/real-logos/logo7.png";
import logo8 from "@/assets/real-logos/logo8.png";
import logo9 from "@/assets/real-logos/logo9.png";
import logo11 from "@/assets/real-logos/logo11.png";
import logo12 from "@/assets/real-logos/logo12.png";
import logoDawe from "@/assets/real-logos/dawe.png";
import logoEad from "@/assets/real-logos/ead.webp";

// Real client website layouts
import webMechanic from "@/assets/real-weblayouts/web-mechanic.png";
import webTicketing from "@/assets/real-weblayouts/web-image76.png";
import webGarageDoor from "@/assets/real-weblayouts/web-garage-door.png";
import webCleaners from "@/assets/real-weblayouts/web-cleaners.png";
import webPropertyMgmt from "@/assets/real-weblayouts/web-property-mgmt.png";
import webGrooming from "@/assets/real-weblayouts/web-grooming.png";
import webLawns from "@/assets/real-weblayouts/web-lawns.png";
import webCharles from "@/assets/real-weblayouts/author-charles.jpg";
import webGresh from "@/assets/real-weblayouts/author-gresh.jpg";
import webRichard from "@/assets/real-weblayouts/author-richard.jpg";

interface CanvasItem {
  type: "web" | "logo";
  src: string;
  title: string;
}

const COLUMN_ITEMS: CanvasItem[][] = [
  // Col 0
  [
    { type: "web", src: webMechanic, title: "Auto Fleet Repair Portal" },
    { type: "logo", src: logo0, title: "Apex Property & Roofing" },
    { type: "web", src: webTicketing, title: "OHO Live Concerts" },
    { type: "logo", src: logo1, title: "Elevate Financial Group" },
  ],
  // Col 1
  [
    { type: "logo", src: logo2, title: "Signature Living Real Estate" },
    { type: "web", src: webGarageDoor, title: "Overhead Elite Garage Repair" },
    { type: "logo", src: logo3, title: "PurePro Cleaning Solutions" },
    { type: "web", src: webCleaners, title: "Pristine Maids Commercial" },
  ],
  // Col 2
  [
    { type: "web", src: webPropertyMgmt, title: "Signature Asset Property" },
    { type: "logo", src: logo4, title: "Vanguard Home Services" },
    { type: "web", src: webGrooming, title: "Bark & Paws Mobile Care" },
    { type: "logo", src: logo5, title: "Summit Advisory Group" },
  ],
  // Col 3
  [
    { type: "logo", src: logo6, title: "Kinetics Creative Studio" },
    { type: "web", src: webLawns, title: "Evergreen Premier Landscaping" },
    { type: "logo", src: logo7, title: "Heritage Law Advisory" },
    { type: "web", src: webCharles, title: "Executive Thought Leader" },
  ],
  // Col 4
  [
    { type: "web", src: webGresh, title: "Global Keynote Speaker Portal" },
    { type: "logo", src: logo8, title: "NextWave Tech Solutions" },
    { type: "web", src: webRichard, title: "Executive Mentor & Advisory Platform" },
    { type: "logo", src: logo9, title: "Prime Builders Construction" },
  ],
  // Col 5
  [
    { type: "logo", src: logo11, title: "Lumina Dental & Aesthetics" },
    { type: "web", src: webGarageDoor, title: "Overhead Garage Doors" },
    { type: "logo", src: logo12, title: "Starlight Hospitality Group" },
    { type: "logo", src: logoDawe, title: "Dawe Architectural" },
  ],
];

export default function SubpageHeroKineticCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <style>{`
        @keyframes fullCanvasScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes fullCanvasScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .kinetic-col-up {
          animation: fullCanvasScrollUp 34s linear infinite;
        }
        .kinetic-col-down {
          animation: fullCanvasScrollDown 38s linear infinite;
        }
        .kinetic-col-up-fast {
          animation: fullCanvasScrollUp 26s linear infinite;
        }
      `}</style>

      {/* Ambient Cyan Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px] bg-[radial-gradient(circle,rgba(0,180,216,0.25)_0%,transparent_75%)] blur-[140px]" />
      </div>

      {/* Dot Matrix Overlay Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `36px 36px`,
        }}
      />

      {/* 6 Vertical Scrolling Columns of Mixed Real Logos and Website Layouts */}
      <div className="absolute inset-0 z-0 opacity-25 hover:opacity-40 transition-opacity duration-700 overflow-hidden pointer-events-none grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-5 px-3 md:px-6">
        {COLUMN_ITEMS.map((col, colIdx) => {
          const isReverse = colIdx % 2 === 1;
          const isFast = colIdx === 2 || colIdx === 5;
          const animClass = isReverse ? "kinetic-col-down" : isFast ? "kinetic-col-up-fast" : "kinetic-col-up";

          return (
            <div key={`canvas-col-${colIdx}`} className="relative h-full overflow-hidden">
              <div className={`space-y-4 md:space-y-6 ${animClass}`}>
                {[...col, ...col].map((item, cardIdx) => (
                  <div
                    key={`col-${colIdx}-card-${cardIdx}`}
                    className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900/90 aspect-[4/5] sm:aspect-[3/4] w-full flex flex-col group/card backdrop-blur-xs"
                  >
                    {item.type === "web" ? (
                      /* Website Layout Card Preview */
                      <div className="w-full h-full flex flex-col bg-slate-950 overflow-hidden">
                        {/* Browser Top Bar */}
                        <div className="px-2.5 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                          </div>
                          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                            WEB
                          </span>
                        </div>
                        {/* Web Image */}
                        <div className="flex-1 w-full overflow-hidden relative">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover object-top brightness-90 contrast-105"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Logo Design Card Preview */
                      <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
                        {/* Top Badge */}
                        <div className="px-2.5 py-1.5 bg-slate-900/50 border-b border-slate-800/60 flex items-center justify-between">
                          <span className="text-[8px] font-mono text-[#00b4d8] font-bold uppercase tracking-wider">
                            IDENTITY
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]" />
                        </div>
                        {/* Logo Vector Canvas */}
                        <div className="flex-1 p-4 flex items-center justify-center">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="max-h-20 max-w-[85%] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] brightness-95"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Bottom Fade to dark background */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030812] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030812] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

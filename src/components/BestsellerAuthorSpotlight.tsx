import { useState, useEffect } from "react";
import servantCover from "@/assets/covers/servant-leadership-cover.png";
import goodChipCover from "@/assets/covers/God Chip Front Updaetd.jpg";
import natureCover from "@/assets/covers/Jerry Front Updated.jpg";
import friendshipCover from "@/assets/covers/Rhonda Front Updated.jpg";
import silentCriesCover from "@/assets/covers/Silent Cries of a Whispering Soul Updated.jpg";

import drTomPhoto from "@/assets/authors/dr-tom-photo.png";
import drDuncanPhoto from "@/assets/covers/Dr Duncan 01.jpg";
import drMaryPhoto from "@/assets/covers/Dr Mary B 01.jpg";
import johnPhoto from "@/assets/covers/JOhn D 01.jpg";
import shamailaPhoto from "@/assets/covers/Shamaila 01.jpg";

interface PressCard {
  title: string;
  headline: string;
  desc: string;
  link: string;
  pdf?: boolean;
}

interface BestsellerSlide {
  id: string;
  authorName: string;
  authorTitle: string;
  authorPhoto: string;
  bookTitle: string;
  bookDescription: string;
  bookCover: string;
  rating: string;
  bestsellerBadge: string;
  stat1: { val: string; label: string };
  stat2: { val: string; label: string };
  stat3: { val: string; label: string };
  amazonLink: string;
  pressCards: PressCard[];
}

const BESTSELLER_SLIDES: BestsellerSlide[] = [
  {
    id: "dr-tom",
    authorName: "Dr. Tom DePaoli",
    authorTitle: "Retired US Navy Captain (O-6) · Author of 15 Books",
    authorPhoto: drTomPhoto,
    bookTitle: "Servant Leadership Stories for Building a Radical Workplace",
    bookDescription: "Retired Navy captain, Lean Six Sigma black belt, veteran of 10 companies and 50 consulting engagements — Dr. Tom DePaoli spent four decades learning, task by task, exactly how leaders build radical workplace trust.",
    bookCover: servantCover,
    rating: "5.0",
    bestsellerBadge: "#1 AMAZON BESTSELLER",
    stat1: { val: "#1", label: "AMAZON BESTSELLER" },
    stat2: { val: "50", label: "REAL CASE STORIES" },
    stat3: { val: "15", label: "BOOKS PUBLISHED" },
    amazonLink: "https://www.amazon.com/Servant-Leadership-Stories-Building-Radical-ebook/dp/B0GX2VL8JG/ref=books_amazonstores_desktop_mfs_author_smart_catalog_1?_encoding=UTF8&pd_rd_w=8yXil&content-id=amzn1.sym.0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_p=0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_r=130-6053098-7701110&pd_rd_wg=EKFBt&pd_rd_r=4dd9f81c-b78e-4108-8454-320d3414dfcc",
    pressCards: [
      {
        title: "USA TODAY · SPECIAL FEATURE",
        headline: "“Take Care of Your People.” His Father Said It Three Times. Fifty Stories Later, It’s a Bestseller.",
        desc: "Retired Navy captain Dr. Tom DePaoli spent four decades doing something almost no executive does: sitting down beside his own employees and learning, task by task, exactly how they did their jobs.",
        link: "/usa-today-dr-tom-depaoli.pdf",
        pdf: true,
      },
      {
        title: "USA WEEKLY · INTERVIEW",
        headline: "Dr. Tom DePaoli on Servant Leadership, Trust, and Radical Workplace Transformation",
        desc: "In an exclusive interview with USA Weekly, Dr. Tom DePaoli breaks down the core principles of servant leadership and how modern leaders build lasting trust in competitive industries.",
        link: "https://usaweekly.com/dr-tom-depaoli-on-servant-leadership-and-trust/",
      },
    ],
  },
  {
    id: "javaid-laghari",
    authorName: "Dr. Javaid Laghari, PhD",
    authorTitle: "Higher Education Leader from Asia",
    authorPhoto: drDuncanPhoto,
    bookTitle: "God's Chip: A Tech Odyssey into Artificial Intelligence",
    bookDescription: "Dr. Laghari's book sits where faith, quantum computing and machine intelligence meet, and asks what leadership looks like when the machines start thinking too.",
    bookCover: goodChipCover,
    rating: "4.9",
    bestsellerBadge: "#1 TECH BESTSELLER",
    stat1: { val: "#1", label: "BARNES & NOBLE TOP 10" },
    stat2: { val: "100%", label: "ROYALTIES RETAINED" },
    stat3: { val: "30+", label: "COUNTRIES DISTRIBUTED" },
    amazonLink: "https://www.amazon.com",
    pressCards: [
      {
        title: "TECH WEEKLY · AUTHOR SPOTLIGHT",
        headline: "Dr. Javaid Laghari's 'God's Chip' Dominates Global AI Book Rankings",
        desc: "How a world leader published an international tech masterpiece with global distribution across Amazon KDP and Barnes & Noble.",
        link: "https://www.amazon.com",
      },
      {
        title: "GLOBAL LEADERSHIP JOURNAL",
        headline: "The Intersection of Quantum Technology and Modern Leadership",
        desc: "Dr. Laghari discusses his writing process and how turning complex technical ideas into a bestselling narrative transformed his global authority.",
        link: "https://www.amazon.com",
      },
    ],
  },
  {
    id: "jerry-greelis",
    authorName: "Jerry Greelis",
    authorTitle: "Renowned Astronomer & Nature Author",
    authorPhoto: drMaryPhoto,
    bookTitle: "Nature's Natural Portals: Puts the Stars in Our Backyard",
    bookDescription: "An enchanting exploration of nature, celestial beauty, and cosmic wonder, guiding readers to experience the galaxy right from their own backyards.",
    bookCover: natureCover,
    rating: "5.0",
    bestsellerBadge: "#1 NATURE BESTSELLER",
    stat1: { val: "#1", label: "NEW RELEASE RANK" },
    stat2: { val: "48 HRS", label: "TO TOP RANKINGS" },
    stat3: { val: "5★", label: "GLOBAL REVIEWS" },
    amazonLink: "https://www.amazon.com",
    pressCards: [
      {
        title: "COSMIC CHRONICLE · FEATURE",
        headline: "Jerry Greelis Transforms Backyard Astronomy into a Bestselling Hardcover Journey",
        desc: "Discover how Jerry Greelis reached thousands of stargazers through expert hardcover publishing and high-definition interior illustration layout.",
        link: "https://www.amazon.com",
      },
      {
        title: "OUTDOOR & NATURE REVIEW",
        headline: "Bringing the Stars Home: A Masterpiece in Science Storytelling",
        desc: "Reviewers praise 'Nature's Natural Portals' for its vivid photography, engaging prose, and flawless print quality.",
        link: "https://www.amazon.com",
      },
    ],
  },
  {
    id: "john-rhonda",
    authorName: "John D. & Rhonda Knight",
    authorTitle: "Co-Authors & Memoir Historians",
    authorPhoto: johnPhoto,
    bookTitle: "60 Years of Friendship in a One-Stoplight Town",
    bookDescription: "A heartwarming and authentic memoir capturing six decades of unbreakable bond, small-town life, resilience, and lifelong camaraderie.",
    bookCover: friendshipCover,
    rating: "5.0",
    bestsellerBadge: "MEMOIR OF THE YEAR",
    stat1: { val: "60 YRS", label: "TRUE LIFE STORY" },
    stat2: { val: "#1", label: "MEMOIR BESTSELLER" },
    stat3: { val: "10K+", label: "READERS REACHED" },
    amazonLink: "https://www.amazon.com",
    pressCards: [
      {
        title: "HERITAGE REVIEW · SPOTLIGHT",
        headline: "60 Years of Friendship Becomes an Immediate Fan-Favorite Memoir Across America",
        desc: "An inspiring look into how John D. & Rhonda Knight preserved 60 years of memories into a hardcover keepsake available in bookstores worldwide.",
        link: "https://www.amazon.com",
      },
      {
        title: "AMERICAN CHRONICLES",
        headline: "Small-Town Stories, Universal Heart: The Story Behind the Bestseller",
        desc: "How two authors turned decades of personal journal entries into a published phenomenon.",
        link: "https://www.amazon.com",
      },
    ],
  },
  {
    id: "shamaila-khan",
    authorName: "Shamaila Khan",
    authorTitle: "Personal Growth Coach & Motivational Author",
    authorPhoto: shamailaPhoto,
    bookTitle: "Silent Cries of a Whispering Soul: Guiding The Soul",
    bookDescription: "A profound spiritual guide designed to awaken inner peace, heal past wounds, and inspire personal growth for readers seeking clarity and purpose.",
    bookCover: silentCriesCover,
    rating: "5.0",
    bestsellerBadge: "#1 SPIRITUAL BESTSELLER",
    stat1: { val: "#1", label: "SELF-HELP BESTSELLER" },
    stat2: { val: "100%", label: "AUTHOR OWNERSHIP" },
    stat3: { val: "4.9★", label: "OVERALL RATING" },
    amazonLink: "https://www.amazon.com",
    pressCards: [
      {
        title: "MIND & SOUL MAGAZINE · COVER STORY",
        headline: "Shamaila Khan's Spiritual Guide Touches Readers Worldwide",
        desc: "How Shamaila Khan's powerful narrative hit top bestseller status within 48 hours of launch with full developmental editing and ghostwriting support.",
        link: "https://www.amazon.com",
      },
      {
        title: "WELLNESS INSIGHTS",
        headline: "Guiding the Soul to Inner Peace Through Storytelling",
        desc: "An in-depth review highlighting the transformative impact of 'Silent Cries of a Whispering Soul' across international readers.",
        link: "https://www.amazon.com",
      },
    ],
  },
];

export default function BestsellerAuthorSpotlight() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const slide = BESTSELLER_SLIDES[currentSlideIndex];

  const goToSlide = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentSlideIndex + 1) % BESTSELLER_SLIDES.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlideIndex - 1 + BESTSELLER_SLIDES.length) % BESTSELLER_SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToSlide((currentSlideIndex + 1) % BESTSELLER_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlideIndex, isPaused, isAnimating]);

  return (
    <section id="bestseller-spotlight" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="relative bg-gradient-to-r from-[#00b4d8] via-[#0284c7] to-[#0369a1] text-white py-20 md:py-28 overflow-hidden select-none font-sans w-full border-y-2 border-white/30 shadow-2xl">
      
      {/* Light Radial Ambient Dot Matrix Lighting matching user gradient banner */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1.2px, transparent 1.2px)`,
            backgroundSize: `26px 26px`
          }}
        />
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 z-10 space-y-10">
        
        {/* TOP SECTION HEADER WITH CAROUSEL NAVIGATION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto border-b border-white/30 pb-6">
          <div className="text-center md:text-left space-y-2 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Bestseller Author <span className="italic text-amber-300">Spotlight</span>
            </h2>

            <p className="text-sky-100 font-sans text-sm md:text-base font-medium">
              Success stories from authors we've published, now stocked across Amazon, USA Today and Barnes &amp; Noble.
            </p>
          </div>

          {/* Carousel Arrows & Indicator Dots */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {BESTSELLER_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex 
                      ? "w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" 
                      : "w-2.5 bg-white/40 hover:bg-white"
                  }`}
                  title={`Go to ${s.authorName}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-white/40 bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center font-bold text-base transition-all duration-300 hover:scale-110 active:scale-95 shadow-md backdrop-blur-md"
                title="Previous Author"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-white/40 bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center font-bold text-base transition-all duration-300 hover:scale-110 active:scale-95 shadow-md backdrop-blur-md"
                title="Next Author"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CAROUSEL CARD — VIBRANT BLUE SPOTLIGHT CARD WITH GLOWING GOLDEN BORDER */}
        <div className="max-w-6xl mx-auto rounded-3xl border-4 border-amber-400 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] p-7 md:p-11 shadow-[0_0_50px_rgba(251,191,36,0.6),0_25px_80px_rgba(0,0,0,0.5)] relative overflow-hidden text-white ring-4 ring-amber-300/50">
          
          <div 
            key={slide.id}
            className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-500 ${
              isAnimating ? "opacity-30 scale-[0.98] blur-[1px]" : "opacity-100 scale-100 blur-0"
            }`}
          >
            
            {/* LEFT: 3D HARDCOVER BOOK SHOWCASE WITH REAL COVER (CRISP ANTI-PIXELATED RENDERING) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[250px] md:max-w-[280px] w-full">
                
                {/* Outer White Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-white/40 to-sky-200/40 rounded-3xl blur-lg opacity-50 group-hover:opacity-85 transition duration-500" />

                <div className="relative rounded-r-2xl rounded-l-xs overflow-hidden shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border-r-2 border-y-2 border-white bg-slate-950 aspect-[2/3] transform transition-all duration-500 group-hover:scale-105 rotate-y-[-6deg] group-hover:rotate-y-[0deg]">
                  {/* 3D Spine Fold Hinge Line */}
                  <div className="absolute left-2.5 top-0 bottom-0 w-[1.5px] bg-black/40 z-30 pointer-events-none" />
                  
                  {/* 3D Spine Depth Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-20 pointer-events-none" />
                  
                  {/* 3D Page Edge Texture on right */}
                  <div className="absolute right-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-amber-100/60 via-slate-200 to-amber-100/60 z-20 pointer-events-none" />

                  <img
                    src={slide.bookCover}
                    alt={slide.bookTitle}
                    style={{
                      imageRendering: "auto" as any,
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                    className="w-full h-full object-cover object-top [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
                  />

                  {/* Glossy Foil Overlay Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/15 to-transparent pointer-events-none z-20" />
                </div>

              </div>
            </div>

            {/* RIGHT: AUTHOR NARRATIVE, AUTHOR PHOTO, & ACTIONS */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Author Photo & Profile Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-white/20">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300 p-0.5 bg-white shrink-0 shadow-md">
                  <img
                    src={slide.authorPhoto}
                    alt={slide.authorName}
                    style={{
                      imageRendering: "auto" as any,
                      backfaceVisibility: "hidden"
                    }}
                    className="w-full h-full object-cover rounded-full"
                  />

                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
                    <span>{slide.authorName}</span>
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-extrabold">✓</span>
                  </h3>
                  <p className="text-xs md:text-sm text-sky-200 font-mono font-bold mt-0.5">
                    {slide.authorTitle}
                  </p>
                </div>
              </div>

              {/* Book Title */}
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                {slide.bookTitle}
              </h2>

              <p className="text-sky-100 font-sans text-sm md:text-base font-light leading-relaxed line-clamp-3">
                {slide.bookDescription}
              </p>

              {/* Verified Key Stats Grid */}
              <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/20">
                <div>
                  <div className="font-serif text-xl md:text-2xl font-extrabold text-amber-300">{slide.stat1.val}</div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold text-sky-200 tracking-wider mt-0.5">{slide.stat1.label}</div>
                </div>
                <div>
                  <div className="font-serif text-xl md:text-2xl font-extrabold text-white">{slide.stat2.val}</div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold text-sky-200 tracking-wider mt-0.5">{slide.stat2.label}</div>
                </div>
                <div>
                  <div className="font-serif text-xl md:text-2xl font-extrabold text-amber-300">{slide.stat3.val}</div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold text-sky-200 tracking-wider mt-0.5">{slide.stat3.label}</div>
                </div>
              </div>

              {/* Action Buttons & High-Visibility Press Buttons */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={slide.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-white hover:bg-amber-400 text-slate-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Buy On Amazon</span>
                    <span>↗</span>
                  </a>

                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/30 font-mono text-xs md:text-sm font-black uppercase tracking-widest shadow-md hover:scale-105 transition-all duration-300"
                  >
                    Publish Your Bestseller →
                  </a>
                </div>

                {/* High-Visibility Press Feature Buttons */}
                {slide.pressCards && slide.pressCards.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/20">
                    <span className="text-xs font-mono font-extrabold uppercase text-amber-300 tracking-widest">
                      PRESS FEATURES:
                    </span>
                    {slide.pressCards.map((pc, i) => (
                      <a
                        key={`pc-${i}`}
                        href={pc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-950 border border-white/40 shadow-sm font-mono text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 backdrop-blur-md"
                      >
                        <span>{pc.title.replace("·", "—")}</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlobalCanvasCursor from "@/components/GlobalCanvasCursor";
import SharedHeroInlineForm from "@/components/SharedHeroInlineForm";
import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageBottomCta from "@/components/SubpageBottomCta";
import OfficialInquiryFormSection from "@/components/OfficialInquiryFormSection";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Schedule Strategy Consultation — Grand Designs" },
      {
        name: "description",
        content:
          "Book a 20-minute strategy call with Grand Designs senior leads. Receive a fixed scope, architectural blueprint, and quote within 24 hours.",
      },
    ],
  }),
});

/* Dynamic Smooth Alphabet-by-Alphabet Typewriter */
function ContactTypewriterText() {
  const words = [
    "brand identity.",
    "custom website.",
    "growth marketing.",
    "AI automation.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === fullWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullWord.substring(0, displayedText.length - 1)
            : fullWord.substring(0, displayedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words]);

  return (
    <span className="italic font-normal text-[#00b4d8] relative inline-block transition-all">
      <span className="inline-block border-r-2 border-[#00b4d8] pr-0.5 animate-pulse">
        {displayedText}
      </span>
      <svg
        className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#00b4d8]/70 pointer-events-none"
        viewBox="0 0 200 12"
        fill="none"
      >
        <path d="M4 8 C 50 2, 150 2, 196 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#00b4d8]/20 font-sans antialiased">
      <MegaNavbar />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-28 md:py-40 bg-[#030712] text-white border-b border-[#00b4d8]/30 overflow-hidden select-none">
        {/* Kinetic Canvas with Real Logos & Websites */}
        <SubpageHeroKineticCanvas />

        {/* HIGH-CONTRAST CENTERED HERO CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center space-y-8 z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-mono font-bold tracking-widest uppercase">
            <span>● DIRECT STRATEGY &amp; SCOPING DESK</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-white">
            Let's discuss your{" "}
            <ContactTypewriterText />
          </h1>

          <p className="text-slate-300 font-sans text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Book a complimentary 20-minute consultation call with a lead architect. We'll assess your objectives, design system, and tech stack, delivering a fixed quote within 24 hours.
          </p>

          {/* 3-Button Hero Section Form */}
          <div className="pt-2 max-w-4xl mx-auto">
            <SharedHeroInlineForm />
          </div>
        </div>
      </section>

      {/* VERIFIED PARTNERS MARQUEE WITH WHITE BACKGROUND */}
      <CompanyLogosMarquee />

      {/* SECTION 2: OFFICIAL INQUIRY FORM */}
      <OfficialInquiryFormSection />

      {/* SUBPAGE BOTTOM CTA SECTION */}
      <SubpageBottomCta
        badge="GUARANTEED 24-HOUR RESPONSE"
        title="Ready to Transform Your Digital Presence?"
        description="Fill out the inquiry form above or schedule an executive discovery call with our Houston studio leads."
      />

      <SiteFooter />
      <GlobalCanvasCursor />
    </div>
  );
}


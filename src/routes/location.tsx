import { useState, useRef, useEffect, memo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ReCAPTCHA from "react-google-recaptcha";
import MegaNavbar from "@/components/MegaNavbar";
import SiteFooter from "@/components/SiteFooter";
import SharedHeroInlineForm from "@/components/SharedHeroInlineForm";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptchaConfig";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";
import {
  validateFullName,
  validateUSPhoneNumber,
  validateStrictEmail,
  formatUSPhoneNumber,
} from "@/lib/usFormValidation";

import SubpageHeroKineticCanvas from "@/components/SubpageHeroKineticCanvas";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import SubpageBottomCta from "@/components/SubpageBottomCta";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Studio Headquarters — Houston, Texas | Digital Engineering Agency" },
      {
        name: "description",
        content:
          "Headquartered in the heart of Houston, Texas. Providing brand identity, custom web apps, performance marketing, and AI automation.",
      },
    ],
  }),
});

/* Dynamic Smooth Alphabet-by-Alphabet Typewriter */
function LocationTypewriterText() {
  const words = [
    "Houston, Texas.",
    "Brand Identity & Logos.",
    "Web Design & Development.",
    "Growth Ads & AI Automation.",
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


/* INLINE HERO STEP-BY-STEP QUERY BAR WITH NUCLEAR EVENT FIREWALL */
const HeroInlineQueryBar = memo(function HeroInlineQueryBar() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedPhone, setSavedPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setErrorMessage("");
    const val = inputRef.current?.value || "";

    if (step === 1) {
      const nameCheck = validateFullName(val);
      if (!nameCheck.isValid) {
        setErrorMessage(nameCheck.message!);
        return;
      }
      setSavedName(val.trim());
      setStep(2);
      if (inputRef.current) inputRef.current.value = "";
    } else if (step === 2) {
      const phoneCheck = validateUSPhoneNumber(val);
      if (!phoneCheck.isValid) {
        setErrorMessage(phoneCheck.message!);
        return;
      }
      setSavedPhone(val.trim());
      setStep(3);
      if (inputRef.current) inputRef.current.value = "";
    } else if (step === 3) {
      const emailCheck = validateStrictEmail(val);
      if (!emailCheck.isValid) {
        setErrorMessage(emailCheck.message!);
        return;
      }

      if (!recaptchaToken) {
        setErrorMessage("Please complete the Google reCAPTCHA verification checkbox below.");
        return;
      }

      setSubmitting(true);

      const verifyRes = await verifyRecaptchaToken(recaptchaToken);
      if (!verifyRes.success) {
        setSubmitting(false);
        setErrorMessage(verifyRes.message || "reCAPTCHA verification failed. Please try again.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("access_key", "a02c3a24-0150-4b1a-b0be-b2bdd36576fc");
        formData.append("name", savedName);
        formData.append("phone", savedPhone);
        formData.append("email", val.trim());
        formData.append("message", "Location Page Inquiry");
        formData.append("g-recaptcha-response", recaptchaToken);

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
      setSubmitted(true);
    }
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (step === 2) {
      e.target.value = formatUSPhoneNumber(e.target.value);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 md:p-6 rounded-2xl bg-[#00b4d8]/20 border-2 border-[#00b4d8] text-center space-y-2 max-w-xl mx-auto backdrop-blur-md animate-in fade-in duration-300">
        <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00b4d8]">
          ✓ INQUIRY SUBMITTED DIRECTLY
        </div>
        <h4 className="font-serif text-2xl font-extrabold text-white">
          Thank You, {savedName}!
        </h4>
        <p className="text-slate-300 text-sm">
          Your inquiry has been sent to our Houston Executive team. We will call you at <strong className="text-white">{savedPhone}</strong> shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {/* Progress Label Above Input */}
      <div className="flex items-center justify-between px-2 text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest">
        <span>STEP {step} OF 3</span>
        <span>{step === 1 ? "Full Name" : step === 2 ? "Phone Number" : "Email Address"}</span>
      </div>

      {/* HORIZONTAL INLINE INPUT + NEXT BUTTON BAR WITH FIREWALL */}
      <form
        onSubmit={handleNext}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onFocus={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        data-no-scroll="true"
        className="flex flex-col md:flex-row items-stretch gap-2.5 md:gap-0 shadow-[0_10px_40px_rgba(0,180,216,0.3)] rounded-2xl p-1 bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <input
          key={`hero-step-input-${step}`}
          ref={inputRef}
          type={step === 1 ? "text" : step === 2 ? "tel" : "email"}
          onChange={handlePhoneInputChange}
          placeholder={
            step === 1
              ? "Enter Your Name..."
              : step === 2
              ? "Enter US Phone (e.g. (833) 492-2918)..."
              : "Enter Your Email (e.g. alex@company.com)..."
          }
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onFocus={(e) => e.stopPropagation()}
          className="flex-1 px-6 py-4 rounded-xl md:rounded-l-xl md:rounded-r-none bg-white text-slate-900 font-sans font-extrabold text-base md:text-lg border-0 focus:outline-none placeholder:text-slate-400"
        />

        <button
          type="submit"
          disabled={submitting}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className="px-9 py-4 bg-[#00b4d8] hover:bg-[#0284c7] disabled:bg-slate-500 text-white font-sans font-extrabold text-base md:text-lg rounded-xl md:rounded-r-xl md:rounded-l-none shadow-lg hover:scale-[1.02] transition-all shrink-0 flex items-center justify-center gap-2"
        >
          <span>{submitting ? "Verifying..." : step === 3 ? "Submit" : "Next"}</span>
          <span>→</span>
        </button>
      </form>

      {/* OFFICIAL GOOGLE RECAPTCHA V2 WIDGET DISPLAY ON STEP 3 */}
      {step === 3 && (
        <div className="pt-2 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="p-2 rounded-2xl bg-white/90 border-2 border-[#00b4d8] shadow-xl overflow-x-auto">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => {
                setRecaptchaToken(token);
                setErrorMessage("");
              }}
              onExpired={() => {
                setRecaptchaToken(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Inline Validation Error Message */}
      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-mono font-bold text-center animate-in fade-in duration-200">
          ⚠️ {errorMessage}
        </div>
      )}
    </div>
  );
});

/* 100% CRASH-PROOF QUESTION FORM WITH EVENT FIREWALL */
export const BottomAuthorForm = memo(function BottomAuthorForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedPhone, setSavedPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleNextStep = () => {
    setErrorMessage("");

    if (step === 1) {
      const val = nameRef.current?.value || "";
      if (!val.trim()) {
        setErrorMessage("Please enter your full name before continuing.");
        return;
      }
      setSavedName(val);
      setStep(2);
    } else if (step === 2) {
      const val = phoneRef.current?.value || "";
      if (!val.trim()) {
        setErrorMessage("Please enter your phone number before continuing.");
        return;
      }
      setSavedPhone(val);
      setStep(3);
    } else if (step === 3) {
      const val = emailRef.current?.value || "";
      if (!val.trim()) {
        setErrorMessage("Please enter your email address before submitting.");
        return;
      }
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[#00b4d8] text-center space-y-3 max-w-xl mx-auto shadow-[0_15px_40px_rgba(0,180,216,0.3)] animate-in zoom-in-95 duration-300 text-[#0c2340]">
        <div className="w-12 h-12 rounded-full bg-[#00b4d8]/15 border-2 border-[#00b4d8] text-[#00b4d8] text-2xl font-extrabold flex items-center justify-center mx-auto shadow-sm">
          ✓
        </div>
        <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00b4d8]">
          INQUIRY SUBMITTED DIRECTLY
        </div>
        <h3 className="font-serif text-3xl font-extrabold text-[#0c2340]">
          Thank You!
        </h3>
        <p className="text-slate-700 font-sans text-sm md:text-base font-medium leading-relaxed">
          Your details have been sent directly to our Houston Studio Executive team. We will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleNextStep();
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      onFocus={(e) => e.stopPropagation()}
      data-lenis-prevent="true"
      data-no-scroll="true"
      className="space-y-6"
    >
      {/* Highlighted Promo Banner Badge */}
      <div className="pb-3 border-b border-[#00b4d8]/40 text-left">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-sans font-black text-xs md:text-sm uppercase tracking-wider shadow-lg border border-amber-300">
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
          <span>🔥 FILL THE FORM TO AVAIL 50% OFF</span>
        </span>
      </div>

      {/* Validation Message */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-mono font-bold">
          ⚠️ {errorMessage}
        </div>
      )}

      {/* Question 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <label className="block text-base md:text-lg font-sans font-extrabold text-[#00b4d8] uppercase tracking-wider">
            WHAT IS YOUR FULL NAME?
          </label>
          <input
            ref={nameRef}
            type="text"
            defaultValue={savedName}
            placeholder="Enter your full name (e.g. Dr. Tom DePaoli)..."
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            className="w-full px-6 py-4.5 rounded-2xl bg-white text-slate-950 font-sans font-extrabold text-lg border-4 border-[#00b4d8] shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#00b4d8]/60"
          />
        </div>
      )}

      {/* Question 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <label className="block text-base md:text-lg font-sans font-extrabold text-[#00b4d8] uppercase tracking-wider">
            WHAT IS YOUR PHONE NUMBER?
          </label>
          <input
            ref={phoneRef}
            type="tel"
            defaultValue={savedPhone}
            placeholder="Enter your phone number (e.g. +1 833 492 2918)..."
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            className="w-full px-6 py-4.5 rounded-2xl bg-white text-slate-950 font-sans font-extrabold text-lg border-4 border-[#00b4d8] shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#00b4d8]/60"
          />
        </div>
      )}

      {/* Question 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-base md:text-lg font-sans font-extrabold text-[#00b4d8] uppercase tracking-wider">
            WHAT IS YOUR BEST EMAIL ADDRESS?
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your work email address (e.g. alex@company.com)..."
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            className="w-full px-6 py-4.5 rounded-2xl bg-white text-slate-950 font-sans font-extrabold text-lg border-4 border-[#00b4d8] shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#00b4d8]/60"
          />
        </div>
      )}

      {/* Navigation Buttons Row */}
      <div className="flex items-center gap-4 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setStep((prev) => prev - 1);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className="px-6 py-3.5 rounded-xl border border-white/40 bg-slate-800 text-xs font-mono uppercase font-extrabold text-white hover:bg-slate-700 transition-colors"
          >
            ← Back
          </button>
        )}

        <button
          type="submit"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className="flex-1 py-4 rounded-xl bg-[#00b4d8] hover:bg-[#0284c7] text-white font-mono text-xs md:text-sm uppercase font-extrabold tracking-widest shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:scale-105 transition-all text-center"
        >
          {step === 3 ? "SCHEDULE A CALL ✓" : "NEXT QUESTION →"}
        </button>
      </div>
    </form>
  );
});

/* MEMOIZED STATIC HOUSTON MAP CARD TO PREVENT RERENDER LEAKS */
const HoustonMapCard = memo(function HoustonMapCard() {
  return (
    <div className="lg:col-span-7 h-[380px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-[#00b4d8]/40 shadow-xl relative bg-slate-900 flex flex-col justify-end p-6">
      <iframe
        title="Digital Agency Houston Headquarters Map"
        src="https://maps.google.com/maps?q=Houston%20TX&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
        loading="lazy"
      />
    </div>
  );
});

function LocationPage() {
  return (
    <div className="relative min-h-screen bg-[#030812] text-white font-sans selection:bg-[#00b4d8] selection:text-white overflow-x-hidden">
      <MegaNavbar />

      <main className="pt-24 md:pt-28">
        
        {/* HERO SECTION WITH FULL CANVAS MARQUEE & SHARED HERO INLINE FORM */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-28 md:py-40 bg-[#030712] text-white border-b border-[#00b4d8]/30 overflow-hidden select-none">
          {/* 6 Vertical Animated Kinetic Scrolling Columns of Real Logos & Websites */}
          <SubpageHeroKineticCanvas />

          {/* HIGH-CONTRAST CENTERED HERO CONTENT */}
          <div className="relative w-full max-w-5xl mx-auto px-6 text-center space-y-8 z-20">

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-white">
              Studio Headquarters in{" "}
              <LocationTypewriterText />
            </h1>

            <p className="text-slate-300 font-sans text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Connecting growing brands worldwide with premier brand identity, modern web engineering, performance digital marketing, and AI automation from Houston HQ.
            </p>


            {/* 3-Button Hero Section Form */}
            <div className="pt-2 max-w-4xl mx-auto">
              <SharedHeroInlineForm />
            </div>

          </div>

        </section>

        {/* VERIFIED PARTNERS MARQUEE WITH WHITE BACKGROUND */}
        <CompanyLogosMarquee />

        {/* FULL PAGE UNBORDERED LIGHT EXECUTIVE HEADQUARTERS & HOUSTON MAP SECTION */}
        <section className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 relative overflow-hidden">
          
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
            
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center text-left">
              
              {/* Left Column: Light Executive Content */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3 border-b border-slate-300/80 pb-6">
                  <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#0c2340] leading-tight">
                    Located in the heart of Texas, Houston
                  </h2>
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light">
                    Our executive digital engineering team is headquartered in Houston, Texas — providing end-to-end brand identity, custom web app development, performance marketing, and autonomous AI automation for scaling brands worldwide.
                  </p>
                </div>

                {/* Light Stat Cards */}
                <div className="space-y-3 font-mono text-xs text-slate-800">
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] shrink-0" />
                    <span>Toll Free Hotline: <a href="tel:+18334922918" className="text-[#0c2340] hover:text-[#00b4d8] font-bold">+1 (833) 492-2918</a></span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Studio Desk: <a href="/contact" className="text-[#0c2340] hover:text-[#00b4d8] font-bold">Schedule Consultation →</a></span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Studio Hours: Mon–Fri, 8:00 AM – 7:00 PM CST</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+18334922918"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-extrabold uppercase tracking-widest shadow-md transition-all hover:scale-105"
                  >
                    <span>📞 Direct Call Houston HQ</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Sleek Houston Map Card */}
              <HoustonMapCard />

            </div>

          </div>
        </section>

        {/* SUBPAGE BOTTOM CTA SECTION */}
        <SubpageBottomCta
          badge="HOUSTON HQ &amp; GLOBAL DESKS"
          title="Ready to Build With Our Houston Studio?"
          description="Schedule a 20-minute strategy call with our senior architects or visit our Texas headquarters for an executive consultation."
        />

      </main>

      <SiteFooter />
    </div>
  );
}

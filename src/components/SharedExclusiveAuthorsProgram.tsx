import { useState, useRef, memo } from "react";
import {
  validateFullName,
  validateUSPhoneNumber,
  validateStrictEmail,
  formatUSPhoneNumber,
} from "@/lib/usFormValidation";

export const BottomAuthorForm = memo(function BottomAuthorForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedPhone, setSavedPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleNextStep = async () => {
    setErrorMessage("");

    if (step === 1) {
      const val = nameRef.current?.value || "";
      const nameCheck = validateFullName(val);
      if (!nameCheck.isValid) {
        setErrorMessage(nameCheck.message!);
        return;
      }
      setSavedName(val.trim());
      setStep(2);
    } else if (step === 2) {
      const val = phoneRef.current?.value || "";
      const phoneCheck = validateUSPhoneNumber(val);
      if (!phoneCheck.isValid) {
        setErrorMessage(phoneCheck.message!);
        return;
      }
      setSavedPhone(val.trim());
      setStep(3);
    } else if (step === 3) {
      const val = emailRef.current?.value || "";
      const emailCheck = validateStrictEmail(val);
      if (!emailCheck.isValid) {
        setErrorMessage(emailCheck.message!);
        return;
      }

      setSubmitting(true);

      try {
        const formData = new FormData();
        formData.append("access_key", "a02c3a24-0150-4b1a-b0be-b2bdd36576fc");
        formData.append("name", savedName);
        formData.append("phone", savedPhone);
        formData.append("email", val);
        formData.append("message", "Digital Strategy Inquiry");

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
          Your inquiry has been submitted directly to our Senior Strategy team. We will reach out to you shortly.
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
            WHAT SHOULD WE CALL YOU?
          </label>
          <input
            ref={nameRef}
            type="text"
            defaultValue={savedName}
            placeholder="Your full name..."
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
            WHAT IS YOUR US PHONE NUMBER?
          </label>
          <input
            ref={phoneRef}
            type="tel"
            defaultValue={savedPhone}
            onChange={(e) => {
              e.target.value = formatUSPhoneNumber(e.target.value);
            }}
            placeholder="e.g. (833) 492-2918..."
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
          disabled={submitting}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className="flex-1 py-4 rounded-xl bg-[#00b4d8] hover:bg-[#0284c7] disabled:bg-slate-500 text-white font-mono text-xs md:text-sm uppercase font-extrabold tracking-widest shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:scale-105 transition-all text-center"
        >
          {submitting ? "VERIFYING..." : step === 3 ? "SCHEDULE A CALL ✓" : "NEXT STEP →"}
        </button>
      </div>
    </form>
  );
});

interface SharedExclusiveAuthorsProgramProps {
  scheduleCallOnly?: boolean;
  customTitle?: React.ReactNode;
  customBody?: string;
}

export default function SharedExclusiveAuthorsProgram({ scheduleCallOnly = false, customTitle, customBody }: SharedExclusiveAuthorsProgramProps) {
  return (
    <section id="author-inquiry-section" className="relative pt-10 md:pt-14 pb-4 md:pb-6 bg-[#030812] text-white font-sans overflow-hidden border-t border-[#00b4d8]/20">
      
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#00b4d8 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Headline */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {customTitle ? (
                customTitle
              ) : scheduleCallOnly ? (
                <>
                  Ready to build your <span className="underline decoration-[#00b4d8] decoration-4 underline-offset-8">next market-leading</span> digital presence?
                </>
              ) : (
                <>
                  Are <span className="underline decoration-[#00b4d8] decoration-4 underline-offset-8">you</span> ready to transform your brand?
                </>
              )}
            </h2>

            <p className="text-slate-300 font-sans text-base md:text-lg leading-relaxed max-w-lg">
              {customBody
                ? customBody
                : scheduleCallOnly
                ? "Partner with award-winning brand strategists, full-stack engineers, and AI architects. From iconic logo identity to custom web platforms and automated workflows, let's build something exceptional."
                : "Partner with award-winning brand strategists, full-stack engineers, and AI architects. One discovery call gives you a clear roadmap and custom quote for your project."}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-mono pt-1">
              <span>✦</span>
              <span>Direct access to Senior Creative &amp; Engineering Leads</span>
            </div>
          </div>

          {/* Right Side: SCHEDULE A CALL OR BOTTOM QUESTION FORM */}
          <div className="lg:col-span-6 text-left bg-[#07172b] border-2 border-[#00b4d8] p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,180,216,0.4)]">
            {scheduleCallOnly ? (
              <div className="space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-sans font-black text-xs uppercase tracking-wider shadow-lg border border-amber-300">
                  <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                  <span>⚡ Claim 50% Off Agency Discount</span>
                </span>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl md:text-4xl font-extrabold text-white leading-tight">
                    Schedule Your 1-on-1 Strategy Call
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                    Twenty minutes with a senior digital director. Talk through your brand vision, web requirements, ad campaigns, or automation goals. You'll receive a transparent, fixed quote within 24 hours.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a
                    href="tel:+18334922918"
                    className="w-full py-4 px-8 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-mono text-sm md:text-base font-black uppercase tracking-widest shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:scale-105 transition-all text-center block border-2 border-rose-400"
                  >
                    📞 Schedule a call now →
                  </a>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Executive desk available 24/7</span>
                    </span>
                    <a href="/contact" className="text-[#00b4d8] hover:underline font-bold">
                      Or book online consultation →
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <BottomAuthorForm />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

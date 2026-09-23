import { useState, useRef, memo } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptchaConfig";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";
import {
  validateFullName,
  validateUSPhoneNumber,
  validateStrictEmail,
  formatUSPhoneNumber,
} from "@/lib/usFormValidation";

export const SharedHeroInlineQueryBar = memo(function SharedHeroInlineQueryBar({
  showChatButton = false,
  isHomePage = false,
  centered = true,
  showPromoBadge = true,
  stacked = false,
}: {
  showChatButton?: boolean;
  isHomePage?: boolean;
  centered?: boolean;
  showPromoBadge?: boolean;
  stacked?: boolean;
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedPhone, setSavedPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  if (submitted) {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[#00b4d8] text-center space-y-3 max-w-xl mx-auto shadow-[0_15px_40px_rgba(0,180,216,0.3)] animate-in zoom-in-95 duration-300 text-[#0c2340]">
        <div className="w-12 h-12 rounded-full bg-[#00b4d8]/15 border-2 border-[#00b4d8] text-[#00b4d8] text-2xl font-extrabold flex items-center justify-center mx-auto shadow-sm">
          ✓
        </div>
        <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00b4d8]">
          INQUIRY SUBMITTED DIRECTLY
        </div>
        <h4 className="font-serif text-3xl font-extrabold text-[#0c2340]">
          Thank You!
        </h4>
        <p className="text-slate-700 font-sans text-sm md:text-base font-medium leading-relaxed">
          Your inquiry has been submitted directly to our Senior Strategy team. We will reach out to you shortly.
        </p>
      </div>
    );
  }

  // Determine badge alignment
  const badgeContainerClass = stacked
    ? "w-full flex justify-start text-left pl-1"
    : (centered || showChatButton)
    ? "w-full flex justify-center text-center"
    : "w-full flex justify-start text-left pl-1";

  // Determine button row alignment
  const buttonRowClass = stacked
    ? "flex flex-col items-stretch gap-3 w-full"
    : (centered || showChatButton)
    ? "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full"
    : "flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 w-full";

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (step === 2) {
      e.target.value = formatUSPhoneNumber(e.target.value);
    }
  };

  return (
    <div className="w-full space-y-3">
      {/* HIGH-VISIBILITY PROMO BADGE */}
      {showPromoBadge && (
        <div className={badgeContainerClass}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-sans font-black text-xs md:text-sm uppercase tracking-wider shadow-lg border border-amber-300">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span>🔥 FILL THE FORM TO AVAIL 50% OFF</span>
          </span>
        </div>
      )}

      {/* BUTTON ROW */}
      <div className={buttonRowClass}>
        
        {/* 1. CHAT WITH STRATEGIST BUTTON */}
        {showChatButton && (
          <a
            href="https://chatting.page/p8t66bbi9ruerrsb9lpvgeld5v5kb61w"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (typeof window !== "undefined") {
                const tidio = (window as any).tidioChatApi;
                if (tidio && typeof tidio.open === "function") {
                  e.preventDefault();
                  tidio.open();
                  return;
                }
                if (tidio && typeof tidio.show === "function") {
                  e.preventDefault();
                  tidio.show();
                  return;
                }
              }
            }}
            className="px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white border-2 border-slate-700 font-mono text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 h-[52px]"
          >
            <span>💬</span>
            <span>Chat With Us</span>
          </a>
        )}

        {/* 2. FORM INPUT BAR WITH FIREWALL */}
        <form
            onSubmit={async (e) => {
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

                // Web3Forms Submit
                try {
                  const formData = new FormData();
                  formData.append("access_key", "a02c3a24-0150-4b1a-b0be-b2bdd36576fc");
                  formData.append("name", savedName);
                  formData.append("phone", savedPhone);
                  formData.append("email", val.trim());
                  formData.append("message", "Digital Strategy & Services Inquiry");
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
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            data-no-scroll="true"
            className="flex-1 flex flex-row items-stretch shadow-[0_10px_30px_rgba(0,180,216,0.25)] rounded-2xl p-1 bg-white/40 backdrop-blur-xl border-2 border-[#00b4d8]/40 h-[52px] min-w-[280px] max-w-full"
          >
            <input
              key={`shared-hero-step-input-${step}`}
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
              className="flex-1 px-5 py-3 rounded-l-xl bg-white text-[#0c2340] font-sans font-extrabold text-sm md:text-base border-0 focus:outline-none placeholder:text-slate-400 min-w-0"
            />

            <button
              type="submit"
              disabled={submitting}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              className="px-7 py-3 bg-[#00b4d8] hover:bg-[#0284c7] disabled:bg-slate-400 text-white font-sans font-extrabold text-sm md:text-base rounded-r-xl shadow-md hover:scale-[1.02] transition-all shrink-0 flex items-center justify-center gap-1.5 border-l border-white/20"
            >
              <span>{submitting ? "Verifying..." : step === 3 ? "Submit" : "Next"}</span>
              <span>→</span>
            </button>
          </form>

        {/* 3. CALL NOW RED BUTTON */}
        <a
          href="tel:+18334922918"
          className={`px-7 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white border-2 border-rose-400 font-mono text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 h-[52px] ${stacked ? "w-full" : "shrink-0"}`}
        >
          <span>📞</span>
          <span>CALL +1 (833) 492-2918</span>
        </a>
      </div>

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
        <div className="mt-3 p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-mono font-bold text-center animate-in fade-in duration-200">
          ⚠️ {errorMessage}
        </div>
      )}
    </div>
  );
});

export default function SharedHeroInlineForm({
  showChatButton = false,
  isHomePage = false,
  centered = true,
  showPromoBadge = true,
  stacked = false,
  className = "",
}: {
  showChatButton?: boolean;
  isHomePage?: boolean;
  centered?: boolean;
  showPromoBadge?: boolean;
  stacked?: boolean;
  className?: string;
}) {
  const containerClass = `w-full ${stacked ? "" : showChatButton ? "max-w-5xl mx-auto px-4" : "max-w-4xl mx-auto px-4"} ${className}`;

  return (
    <div className={containerClass}>
      <SharedHeroInlineQueryBar
        showChatButton={showChatButton}
        isHomePage={isHomePage}
        centered={centered}
        showPromoBadge={showPromoBadge}
        stacked={stacked}
      />
    </div>
  );
}

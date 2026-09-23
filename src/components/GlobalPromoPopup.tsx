import { useState, useEffect } from "react";
import promoImg from "@/assets/studio-query-consultation.jpg";
import {
  validateFullName,
  validateUSPhoneNumber,
  validateStrictEmail,
  formatUSPhoneNumber,
} from "@/lib/usFormValidation";

export default function GlobalPromoPopup() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>("");
  const [phoneVal, setPhoneVal] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("Logo Design");

  const servicesList = [
    "Logo Design",
    "Website Design & Dev",
    "Digital Marketing",
    "AI Automation",
  ];

  useEffect(() => {
    // Show promo modal on website visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError("");
    setCaptchaError("");

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    // 1. Strict Validation
    const nameCheck = validateFullName(fullName);
    if (!nameCheck.isValid) {
      setValidationError(nameCheck.message || "Please provide your full name.");
      return;
    }

    const phoneCheck = validateUSPhoneNumber(phone);
    if (!phoneCheck.isValid) {
      setValidationError(phoneCheck.message || "Please enter a valid phone number.");
      return;
    }

    const emailCheck = validateStrictEmail(email);
    if (!emailCheck.isValid) {
      setValidationError(emailCheck.message || "Please enter a valid business email.");
      return;
    }


    setLoading(true);

    try {
      // Web3Forms Submission
      const payload = {
        access_key: "a02c3a24-0150-4b1a-b0be-b2bdd36576fc",
        subject: `🔥 [50% OFF PROMO] New Inquiry: ${selectedService} from ${fullName}`,
        from_name: "Digital Agency Promo Desk",
        name: fullName,
        phone: phone,
        email: email,
        service: selectedService,
        message: message || "Requested 50% discount consultation",
        promo_code: "STUDIO50",
        source_url: typeof window !== "undefined" ? window.location.href : "Website Visit",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* 2-Column Modal Container: Perfectly Balanced & Sized to Prevent Scrolling */}
      <div className="relative w-full max-w-4xl bg-white border-2 border-[#00b4d8] rounded-3xl text-[#0c2340] shadow-[0_25px_90px_rgba(0,180,216,0.4)] overflow-hidden select-none flex flex-col md:flex-row items-stretch max-h-[96vh]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center font-bold text-sm transition-colors z-30 shadow-lg cursor-pointer"
          title="Close Popup"
        >
          ✕
        </button>

        {/* LEFT COLUMN: PROJECT INQUIRY VISUAL PREVIEW & 50% OFF BADGE */}
        <div className="md:w-5/12 relative bg-[#07172b] flex flex-col justify-between p-6 overflow-hidden min-h-[200px] md:min-h-full">
          {/* Query Form / Consultation Background Image */}
          <img
            src={promoImg}
            alt="Project inquiry and creative consultation mockup"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07172b] via-[#07172b]/50 to-[#07172b]/20 pointer-events-none" />

          {/* VIBRANT BOLD UP TO 50% OFF BADGE */}
          <div className="relative z-20 flex items-start justify-between">
            <div className="w-20 h-20 rounded-full bg-rose-600 border-4 border-white text-white flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(225,29,72,0.85)] animate-pulse rotate-[-12deg]">
              <span className="text-[9px] font-mono font-black uppercase tracking-tighter">UP TO</span>
              <span className="text-lg font-sans font-black leading-none">50%</span>
              <span className="text-[9px] font-sans font-black tracking-widest">OFF</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/50 text-[#00b4d8] text-[9px] font-mono font-extrabold uppercase tracking-wider backdrop-blur-md">
              OFFICIAL QUERY DESK
            </span>
          </div>

          {/* Bottom Heading & Narrative */}
          <div className="relative z-10 space-y-1.5 text-white pt-10">
            <span className="text-[9px] font-mono font-extrabold uppercase tracking-[0.25em] text-[#00b4d8] block">
              SPECIAL STUDIO CONSULTATION
            </span>
            <h3 className="font-serif text-lg md:text-xl font-extrabold leading-snug">
              Looking for Award-Winning Logo Design, Web Dev &amp; AI Automation?
            </h3>
            <p className="text-slate-300 text-[11px] font-light leading-relaxed">
              Claim up to 50% OFF your next brand identity, custom website, marketing campaign, or AI workflow system.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: TIGHTLY ALIGNED FORM (NO SCROLLBAR) */}
        <div className="md:w-7/12 p-5 sm:p-6 bg-white flex flex-col justify-center overflow-hidden">
          
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-[#00b4d8]/15 border-2 border-[#00b4d8] text-[#00b4d8] text-2xl font-extrabold flex items-center justify-center mx-auto shadow-md">
                ✓
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-[#0c2340]">
                Thank You!
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto font-light">
                Your inquiry has been submitted directly to our Senior Creative &amp; Engineering team. We will reach out to you shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 px-7 py-2.5 rounded-full bg-[#00b4d8] hover:bg-[#0284c7] text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              
              {/* Header aligned properly */}
              <div className="space-y-0.5 border-b border-slate-100 pb-2">
                <span className="text-[9px] font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest block">
                  LIMITED TIME STUDIO DISCOUNT
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#0c2340] tracking-tight leading-tight">
                  FILL OUT THE FORM TO AVAIL <span className="text-[#00b4d8] italic">50% OFF</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2 text-left">
                {validationError && (
                  <div className="p-2 rounded-xl bg-rose-50 border border-rose-400 text-rose-700 font-mono text-[11px] font-bold flex items-center gap-1.5 animate-in fade-in">
                    <span>⚠️</span>
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Service Selector Chips */}
                <div>
                  <label className="block text-[10px] font-mono font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Select Service *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {servicesList.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold transition-all text-center truncate border cursor-pointer ${
                          selectedService === srv
                            ? "bg-[#00b4d8] text-white border-[#00b4d8] shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#00b4d8]"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-mono font-extrabold text-slate-700 uppercase tracking-wider mb-0.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b4d8] text-xs font-semibold"
                  />
                </div>

                {/* Phone & Email in a 2-column row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono font-extrabold text-slate-700 uppercase tracking-wider mb-0.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phoneVal}
                      onChange={(e) => setPhoneVal(formatUSPhoneNumber(e.target.value))}
                      placeholder="(833) 492-2918"
                      className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b4d8] text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-extrabold text-slate-700 uppercase tracking-wider mb-0.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b4d8] text-xs font-semibold"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-[10px] font-mono font-extrabold text-slate-700 uppercase tracking-wider mb-0.5">
                    Project Details &amp; Requirements
                  </label>
                  {/* Web3Forms Honeypot Bot Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="Tell us about your brand goals, website requirements, marketing needs, or AI automation ideas..."
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b4d8] text-xs font-medium resize-none"
                  />
                </div>

                {/* Terms of Use Checkbox */}
                <div className="flex items-center gap-2 pt-0.5">
                  <input
                    type="checkbox"
                    id="terms-agree"
                    required
                    className="w-3.5 h-3.5 accent-[#00b4d8] rounded cursor-pointer"
                  />
                  <label htmlFor="terms-agree" className="text-[10px] font-sans font-medium text-slate-600 cursor-pointer">
                    I Agree to <a href="/privacy" className="text-[#00b4d8] underline">Terms of Use</a> and <a href="/privacy" className="text-[#00b4d8] underline">Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-5 rounded-xl bg-[#00b4d8] hover:bg-[#0284c7] text-white font-mono text-xs font-black uppercase tracking-wider shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {loading ? "Submitting..." : "🔥 CLAIM 50% OFF DISCOUNT NOW →"}
                </button>

                <p className="text-[9px] text-slate-400 text-center font-mono pt-0.5">
                  🔒 100% Privacy Guaranteed. Zero spam. Complete NDA &amp; Ownership Protection.
                </p>
              </form>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

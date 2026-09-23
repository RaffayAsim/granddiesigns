import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptchaConfig";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";
import {
  validateFullName,
  validateUSPhoneNumber,
  validateStrictEmail,
  formatUSPhoneNumber,
} from "@/lib/usFormValidation";

export default function OfficialInquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [phoneVal, setPhoneVal] = useState<string>("");

  return (
    <section id="contact-form" className="relative py-24 md:py-36 bg-[#f0f9ff] text-[#0c2340] border-y border-[#00b4d8]/30 select-none font-sans">
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10">
        
        <div className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono font-extrabold uppercase tracking-[0.3em] text-[#00b4d8] block">
            OFFICIAL INQUIRY FORM
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-[#0c2340] tracking-tight">
            Get in Touch with Our Engineering &amp; Design Leads
          </h2>
          <p className="text-slate-700 font-sans text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Fill in the fields below and a senior director reads it personally. You'll hear back within 24 hours, guaranteed.
          </p>
        </div>

        {/* FORM CONTAINER WITH HIGH-VISIBILITY TYPOGRAPHY */}
        <div className="bg-white rounded-3xl border-2 border-[#00b4d8]/40 shadow-2xl p-8 md:p-14 space-y-8">
          {submitted ? (
            <div className="py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#00b4d8] text-white flex items-center justify-center text-4xl font-extrabold mx-auto shadow-xl">
                ✓
              </div>
              <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0c2340]">Inquiry Successfully Submitted!</h3>
              <p className="text-slate-700 font-sans text-lg md:text-xl max-w-lg mx-auto font-medium">
                Your project brief has been assigned to a senior director. We will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setRecaptchaToken(null);
                  setCaptchaError("");
                  setValidationError("");
                  setPhoneVal("");
                }}
                className="px-8 py-4 rounded-2xl bg-[#0c2340] text-white font-sans text-sm font-extrabold uppercase tracking-widest shadow-md hover:bg-[#00b4d8] transition-all"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                setCaptchaError("");
                setValidationError("");

                const formData = new FormData(e.currentTarget);
                const name = (formData.get("name") as string) || "";
                const email = (formData.get("email") as string) || "";
                const phone = (formData.get("phone") as string) || "";

                // Validate Name
                const nameCheck = validateFullName(name);
                if (!nameCheck.isValid) {
                  setValidationError(nameCheck.message!);
                  return;
                }

                // Validate Email
                const emailCheck = validateStrictEmail(email);
                if (!emailCheck.isValid) {
                  setValidationError(emailCheck.message!);
                  return;
                }

                // Validate Phone
                const phoneCheck = validateUSPhoneNumber(phone);
                if (!phoneCheck.isValid) {
                  setValidationError(phoneCheck.message!);
                  return;
                }

                if (!recaptchaToken) {
                  setCaptchaError("Please complete the Google reCAPTCHA verification before submitting.");
                  return;
                }

                setSubmitting(true);

                // Verify token against server endpoint / Google siteverify API
                const verifyRes = await verifyRecaptchaToken(recaptchaToken);
                if (!verifyRes.success) {
                  setSubmitting(false);
                  setCaptchaError(verifyRes.message || "reCAPTCHA verification failed. Please try again.");
                  return;
                }

                formData.append("access_key", "a02c3a24-0150-4b1a-b0be-b2bdd36576fc");
                formData.append("g-recaptcha-response", recaptchaToken);

                try {
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
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onFocus={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              data-no-scroll="true"
              className="space-y-8"
            >
              {/* Web3Forms Honeypot Botcheck */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              {/* Validation Warning Alert */}
              {validationError && (
                <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-400 text-rose-700 font-mono text-sm font-bold flex items-center gap-2 animate-in fade-in">
                  <span>⚠️</span>
                  <span>{validationError}</span>
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm md:text-base font-sans font-extrabold text-[#0c2340] uppercase tracking-wider">
                    Your Full Name <span className="text-[#00b4d8]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-2xl border-2 border-slate-300 bg-slate-50 px-6 py-4 text-base md:text-lg font-bold text-[#0c2340] focus:bg-white focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/20 outline-none transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm md:text-base font-sans font-extrabold text-[#0c2340] uppercase tracking-wider">
                    Your Email Address <span className="text-[#00b4d8]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="author@domain.com"
                    className="w-full rounded-2xl border-2 border-slate-300 bg-slate-50 px-6 py-4 text-base md:text-lg font-bold text-[#0c2340] focus:bg-white focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/20 outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service Dropdown */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm md:text-base font-sans font-extrabold text-[#0c2340] uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-[#00b4d8]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phoneVal}
                    onChange={(e) => setPhoneVal(formatUSPhoneNumber(e.target.value))}
                    placeholder="+1 (833) 492-2918"
                    className="w-full rounded-2xl border-2 border-slate-300 bg-slate-50 px-6 py-4 text-base md:text-lg font-bold text-[#0c2340] focus:bg-white focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/20 outline-none transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm md:text-base font-sans font-extrabold text-[#0c2340] uppercase tracking-wider">
                    Primary Service Required <span className="text-[#00b4d8]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-2xl border-2 border-slate-300 bg-slate-50 px-6 py-4 text-base md:text-lg font-bold text-[#0c2340] focus:bg-white focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/20 outline-none transition-all cursor-pointer shadow-xs uppercase"
                  >
                    <option value="">— Select primary service —</option>
                    <option value="Logo Design & Brand Identity">Logo Design &amp; Brand Identity</option>
                    <option value="Custom Website Design & Development">Custom Website Design &amp; Development</option>
                    <option value="Digital Marketing & Ad Campaigns">Digital Marketing &amp; Ad Campaigns</option>
                    <option value="AI Workflow & Automation">AI Workflow &amp; Automation</option>
                    <option value="Full Digital Transformation">Full Digital Transformation (All Services)</option>
                    <option value="Custom Consultation">Custom Consultation / Architecture</option>
                  </select>
                </div>
              </div>

              {/* Message / Brief */}
              <div className="space-y-3">
                <label className="block text-sm md:text-base font-sans font-extrabold text-[#0c2340] uppercase tracking-wider">
                  Project Brief &amp; Requirements <span className="text-[#00b4d8]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your brand, website vision, ad campaign goals, or automation bottlenecks. We'll prepare a structured architecture and fixed proposal."
                  className="w-full rounded-2xl border-2 border-slate-300 bg-slate-50 px-6 py-4 text-base md:text-lg font-bold text-[#0c2340] focus:bg-white focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/20 outline-none transition-all shadow-xs resize-y"
                />
              </div>

              {/* OFFICIAL GOOGLE RECAPTCHA V2 WIDGET */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-mono font-extrabold text-slate-600 uppercase tracking-wider">
                  Security Verification <span className="text-rose-500">*</span>
                </label>
                <div className="overflow-x-auto">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      setRecaptchaToken(token);
                      setCaptchaError("");
                    }}
                    onExpired={() => {
                      setRecaptchaToken(null);
                    }}
                  />
                </div>
                {captchaError && (
                  <p className="text-xs md:text-sm font-mono font-bold text-rose-600 animate-in fade-in">
                    ⚠️ {captchaError}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 sm:py-5 px-4 rounded-2xl bg-[#00b4d8] hover:bg-[#0284c7] disabled:bg-slate-400 text-white font-sans text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wider md:tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-center min-h-[54px] leading-tight"
                >
                  <span>{submitting ? "VERIFYING & SUBMITTING..." : "Send inquiry to editorial desk →"}</span>
                </button>
              </div>

              {/* NDA GUARANTEE BADGE */}
              <div className="pt-2 text-center text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
                <span>🔒 Covered by NDA from the first message</span>
                <span>·</span>
                <span>You keep 100% of your royalties</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

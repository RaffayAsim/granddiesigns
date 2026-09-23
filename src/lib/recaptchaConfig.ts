// Detect localhost or 127.0.0.1 development environment
const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.endsWith(".localhost") ||
    window.location.hostname === "");

// Official Google reCAPTCHA v2 universal test keys (guaranteed to work on localhost with no domain restriction)
const GOOGLE_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const GOOGLE_TEST_SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

export const RECAPTCHA_SITE_KEY =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) ||
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  import.meta.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  (isLocalhost ? GOOGLE_TEST_SITE_KEY : "6Lc4GH8tAAAAAFpFHpBhCKk7gLTS1zAkMEMDZdCB");

export const RECAPTCHA_SECRET_KEY =
  (typeof process !== "undefined" && process.env?.RECAPTCHA_SECRET_KEY) ||
  import.meta.env.RECAPTCHA_SECRET_KEY ||
  (isLocalhost ? GOOGLE_TEST_SECRET_KEY : "6Lc4GH8tAAAAAHb4Puq8mcD899X5NfBuWrPCmr_q");


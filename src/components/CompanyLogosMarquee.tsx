import googleLogo from "@/assets/platform-logos/google.png";
import googleAdsLogo from "@/assets/platform-logos/google_ads.png";
import metaLogo from "@/assets/platform-logos/meta.png";
import shopifyLogo from "@/assets/platform-logos/shopify.png";
import nextjsLogo from "@/assets/platform-logos/nextjs.png";
import stripeLogo from "@/assets/platform-logos/stripe.png";
import hubspotLogo from "@/assets/platform-logos/hubspot.png";
import figmaLogo from "@/assets/platform-logos/figma_wordmark.png";
import webflowLogo from "@/assets/platform-logos/webflow.png";
import wordpressLogo from "@/assets/platform-logos/wordpress.png";
import woocommerceLogo from "@/assets/platform-logos/woocommerce.png";
import awsLogo from "@/assets/platform-logos/aws.png";
import adobeLogo from "@/assets/platform-logos/adobe.png";
import openaiLogo from "@/assets/platform-logos/openai.png";
import zapierLogo from "@/assets/platform-logos/zapier.png";

export interface PlatformBrand {
  name: string;
  img: string;
}

export const SERVICE_PLATFORM_LOGOS: PlatformBrand[] = [
  { name: "Google", img: googleLogo },
  { name: "Google Ads", img: googleAdsLogo },
  { name: "Meta", img: metaLogo },
  { name: "Shopify", img: shopifyLogo },
  { name: "Next.js", img: nextjsLogo },
  { name: "Stripe", img: stripeLogo },
  { name: "HubSpot", img: hubspotLogo },
  { name: "Figma", img: figmaLogo },
  { name: "Webflow", img: webflowLogo },
  { name: "WordPress", img: wordpressLogo },
  { name: "WooCommerce", img: woocommerceLogo },
  { name: "Amazon Web Services", img: awsLogo },
  { name: "Adobe", img: adobeLogo },
  { name: "OpenAI", img: openaiLogo },
  { name: "Zapier", img: zapierLogo },
];

export const COMPANY_LOGOS = SERVICE_PLATFORM_LOGOS;

interface CompanyLogosMarqueeProps {
  className?: string;
  badgeTitle?: string;
  darkTheme?: boolean;
}

export default function CompanyLogosMarquee({
  className = "py-6 bg-white border-y border-slate-200",
  badgeTitle = "VERIFIED INDUSTRY PLATFORMS & ACCREDITED PARTNERS",
  darkTheme = false,
}: CompanyLogosMarqueeProps) {
  const bgClass = className.includes("bg-") ? className : `bg-white border-y border-slate-200 ${className}`;

  return (
    <section className={`w-full overflow-hidden select-none relative ${bgClass}`}>
      <style>{`
        @keyframes platformLogoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-platform-marquee {
          display: flex;
          width: max-content;
          animation: platformLogoScroll 32s linear infinite;
        }
        .animate-platform-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full text-center space-y-4">
        {badgeTitle && (
          <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-[0.3em] block text-[#0284c7]">
            {badgeTitle}
          </span>
        )}

        <div className="w-full relative overflow-hidden py-2">
          {/* Edge Gradient Masks for clean fade on white background */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-platform-marquee items-center gap-8 sm:gap-12 md:gap-16 px-6">
            {/* Seamless 2x Loop with real brand logo images */}
            {[...SERVICE_PLATFORM_LOGOS, ...SERVICE_PLATFORM_LOGOS].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center shrink-0 px-2 sm:px-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

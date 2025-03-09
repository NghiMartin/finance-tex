import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { GetStartedInStep } from "@/components/layout/sections/get-started-in-step";
import { HeroSection } from "@/components/layout/sections/hero";
import { ListCoin } from "@/components/layout/sections/list-coin";
import { OurPortfolio } from "@/components/layout/sections/our-portfolio";
import { TradeInsights } from "@/components/layout/sections/trade-insights";

export const metadata = {
  title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
  description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
  openGraph: {
    type: "website",
    url: "",
    title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
    description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
    images: [
      {
        url: "favicon.png",
        width: 1200,
        height: 630,
        alt: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
    description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
    images: [
      "favicon.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TradeInsights />
      <FeaturesSection />
      <ListCoin />
      <GetStartedInStep/>
      <OurPortfolio />
      <FAQSection />
      <FooterSection />
    </>
  );
}

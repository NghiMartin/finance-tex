"use client"
import { Button } from "@/components/ui/button";
import { useSheet } from "@/hooks/useSheet";
import { ArrowRight, Link } from "lucide-react";
import { useTranslation } from "react-i18next";


export const HeroSection = () => {
  const { t } = useTranslation();
  const {  openSheet } = useSheet();
  return (
    <section className="hp-banner grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-start lg:text-start space-y-6">
            <p className="text-xs md:text-base lg:text-base text-muted-foreground sm:w-10/12 lg:mx-0 font-bold">
        {t("hp-banner.main-banner-sub-title")}
      </p>

      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mx-auto">
        {t("hp-banner.main-banner-title")}
      </p>

        <p className="text-base  text-muted-foreground sm:w-10/12  lg:mx-0">
        {/* <span className="text-base text-hightlight font-bold text-muted-foreground sm:w-10/12 mx-auto lg:mx-0">
        {t("name-logo")}
        </span>  */}
         {t("hp-banner.main-banner-description")}
        </p>
       
      <div className=" lg:flex gap-5">
        {/* <ToggleTheme /> */}
            <Button onClick={() => openSheet("login")} className=" md:w-4/4 font-bold group/arrow rounded-[30px] p-8">
            {t("start-trading")}
            </Button>
      </div>
      </div>
      {/* Hero cards sections */}
      <div className="z-10">
      <img
          src={"/mockup-phone-coin.png"}
          className="w-[300px] md:w-[500px] lg:w-[500px] object-contain"
          alt="About services"
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { useSheet } from "@/hooks/useSheet";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface FeaturesProps {
  id:number,
  img: string;
  main: string;
  title: string;
  description: string;
}

export const OurPortfolio = () => {
  const { t } = useTranslation();
  const { openSheet } = useSheet();

  const featureList: FeaturesProps[] = [
    {
      id:1,
      img: "/icons-4.svg",
      main: t("hp-banner-4.section-step.step-1.main"),
      title: t("hp-banner-4.section-step.step-1.title"),
      description:
      t("hp-banner-4.section-step.step-1.description"),
    },
    {
      id:2,
      img: "/icons-5.svg",
      main: t("hp-banner-4.section-step.step-2.main"),
      title: t("hp-banner-4.section-step.step-2.title"),
      description:
      t("hp-banner-4.section-step.step-2.description"),
    },
    {
      id:3,
      img: "/icons-6.svg",
      main: t("hp-banner-4.section-step.step-3.main"),
      title: t("hp-banner-4.section-step.step-3.title"),
      description:
      t("hp-banner-4.section-step.step-3.description"),
    },
  ];
  
  return (
    <section id="get-started" className="  mt-[150px]  py-24 max-sm:py-32  relative">
        <div className="z-10 absolute right-[-2%] top-[-100px] max-sm:hidden">
      <img
          src={"/finan-coin.png"}
          className="w-[50px] md:w-[200px] lg:w-[200px] object-contain"
          alt="About features"
        />
      </div>
    <div className=" flex flex-col items-center">
        
    <div className="relative w-full flex flex-col justify-center items-center">
  <div className="absolute top-1/2  1/2  w-[90%] h-px bg-gray-300 opacity-50"></div>
    <img
      src="/tablet.png"
      className="w-[300px] md:w-[500px] lg:w-[500px] object-contain z-10"
      alt="About services"
    />

</div>
    <section className="hp-banner  w-[66%] max-sm:w-[100%] flex flex-col items-center  px-50 py-20 md:py-32 gap-10">
      <div className="text-center flex flex-col items-center lg:text-center space-y-6 ">
      <p className="text-2xl sm:text-3xl lg:text-5xl font-bold mx-auto">
      <span className="text-hightlight">{t("hp-banner-5.high-light-text-1")}</span> {t("hp-banner-5.you-want")} 
      </p>
      <p className="text-2xl sm:text-3xl lg:text-5xl font-bold mx-auto">
      <span className="text-hightlight"> {t("hp-banner-5.high-light-text-2")}</span> {t("hp-banner-5.you-need")}
      </p>
        <p className="text-base  text-muted-foreground sm:w-10/12  lg:mx-0">
         {t("hp-banner-5.description")}
        </p>
       
      <div className=" lg:flex gap-5">
            <Button  onClick={() => openSheet("login")} className=" md:w-4/4 font-bold group/arrow rounded-[30px] p-8">
            {t("start-trading")}
            </Button>
      </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
    </div>
    </section>
  );
};

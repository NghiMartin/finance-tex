"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
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

export const GetStartedInStep = () => {
  const { t } = useTranslation();

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
        <div className="z-10 absolute left-[-2%] top-[-100px] max-sm:hidden">
      <img
          src={"/tether-coin.png"}
          className="w-[50px] md:w-[200px] lg:w-[200px] object-contain"
          alt="About features"
        />
      </div>
    <div className="container">
    <p className="text-3xl md:text-4xl text-center font-bold mb-4">
      <span>{t("hp-banner-4.start-with")} {" "}
        <span className="text-3xl md:text-4xl text-center font-bold mb-4 text-hightlight">
      {t("name-logo")}
      </span>
      {" "}
      {t("hp-banner-4.after-5-mins")} 
      </span>
      </p>
      

      <div className="grid sm:grid-cols-2 pt-20 lg:grid-cols-3 gap-4">
        {featureList.map(({ img, title, description, main, id }) => (
          <div key={title}>
      <Card
  className={cn(
    "h-full  bg-background-none rounded-none border-l-0 border-t-0 border-b-0 shadow-none border-r-0",
  )}
>
              <CardHeader className="flex justify-center items-center gap-5">
                <div className=" p-2  mb-4">
                  {/* <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  /> */}
                 {id === 2 ? 
                 <div className="flex gap-10 items-center justify-center">
                  <Image className="max-sm:hidden" src={"/connect-line.svg"} alt={"image icon"} width="160" height="80" /> 
                  <Image src={img} alt={"image icon"} width="80" height="80" /> 
                  <Image className="max-sm:hidden" src={"/connect-line.svg"} alt={"image icon"} width="160" height="80" /> 
                 </div>
                 :  <Image src={img} alt={"image icon"} width="80" height="80" />} 
                </div>
                <p className="text-xs text-muted-foreground text-center mb-2 tracking-wider">
               {main}
                </p>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm  text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

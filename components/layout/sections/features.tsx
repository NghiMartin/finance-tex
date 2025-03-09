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
  title: string;
  description: string;
}

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const featureList: FeaturesProps[] = [
    {
      id:1,
      img: "/icons-1.svg",
      title: t("hp-banner-3.section-bottom.item-1.title"),
      description:
      t("hp-banner-3.section-bottom.item-1.description"),
    },
    {
      id:2,
      img: "/icons-2.svg",
      title: t("hp-banner-3.section-bottom.item-2.title"),
      description:
      t("hp-banner-3.section-bottom.item-2.description"),
    },
    {
      id:3,
      img: "/icons-3.svg",
      title: t("hp-banner-3.section-bottom.item-3.title"),
      description:
      t("hp-banner-3.section-bottom.item-3.description"),
    },
  ];
  
  return (
    <section id="features" className="container mt-[150px]  py-24 max-sm:py-32  relative">
            <div className="z-10 absolute right-[-10%] top-[-100px] max-sm:hidden">
      <img
          src={"/favicon.png"}
          className="w-[150px] md:w-[300px] lg:w-[300px] blur-sm object-contain"
          alt="About features"
        />
      </div>
      <h2 className="text-lg text-muted-foreground text-center mb-2 tracking-wider">
      {t("name-logo")}
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      {t("hp-banner-3.main-banner-sub-title-top")}
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-hightlight">
      {t("hp-banner-3.main-banner-sub-title-bottom")}
      </h2>

      <div className="grid sm:grid-cols-2 pt-20 lg:grid-cols-3 gap-4">
        {featureList.map(({ img, title, description, id }) => (
          <div key={title}>
      <Card
  className={cn(
    " border-r-white",
    "h-full  bg-background-none rounded-none border-l-0 border-t-0 border-b-0 shadow-none max-sm:border-r-0",
    id === 3 && "border-r-0"
  )}
>
              <CardHeader className="flex justify-center items-start">
                <div className=" p-2  mb-4">
                  {/* <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  /> */}
                  <Image src={img} alt={"image icon"} width="48" height="48" />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-start">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

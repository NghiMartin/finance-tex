"use client"
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const FooterSection = () => {
  const {t} = useTranslation();
  return (
    <footer id="footer" className="">
      <div className="p-10  border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
           <Logo/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-normal text-base">{t("footer.support")}</h3>
            <div>
              <Link href="#" className="opacity-60 text-sm hover:opacity-100">
              {t("footer.vip-obligations")}
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 text-sm hover:opacity-100">
              {t("footer.privacy-policy")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-normal text-base"> {t("footer.security")}</h3>
            <div>
              <Link href="#" className="opacity-60 text-sm hover:opacity-100">
              {t("footer.terms-and-conditions")}
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 text-sm hover:opacity-100">
              {t("footer.warning-risk-fqa")}
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 text-sm hover:opacity-100">
              {t("footer.disclaimer")}

              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
           <LanguageSwitcher/>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <p className="text-muted-foreground text-sm font-light">
          {t("footer.warning-risk")}
          </p>
        </section>
      </div>
    </footer>
  );
};

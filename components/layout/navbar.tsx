"use client";
import { ArrowRight, ChevronsDown, Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "../logo";
import { useSheet } from "@/hooks/useSheet";
import { LoginForm } from "./login/login-form";
import { RegisterForm } from "./register/register-form";
import { ResendVerificationForm } from "./resend-verification/page";
import { ForgotPasswordForm } from "./forgot-password/page";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const { isOpen, openSheet, setIsOpen, sheetType } = useSheet();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
<header className={`hp-header ${isScrolled ? "isScroll" : ""} shadow-inner bg-opacity-15 w-full mx-auto fixed top-0 z-20 flex justify-between items-center `}>
        <Logo/>
      {/* <!-- Mobile --> */}
      <div className="flex items-center justify-between lg:hidden ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            /> */}
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col h-full  justify-between overflow-y-auto   bg-card border-secondary "
          >
            <div>
              <SheetHeader className="mb-4">
                <SheetTitle className="absolute left-4 top-2  max-sm:top-7">
                <Logo/>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col min-h-screen justify-center items-center  gap-2">
               {/* FORM  */}
               {sheetType === "login" && <LoginForm />}
              {sheetType === "signup" && <RegisterForm />}
              {sheetType === "register-resend-verify-email" && <ResendVerificationForm />}
              {sheetType === "forgot-password" && <ForgotPasswordForm />}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
               {/*  SheetFooter  */}

            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* <!-- Desktop --> */}
      <div className="flex gap-2">
        {/* <ToggleTheme /> */}
            <Button className="w-3/6 md:w-2/4 py-6 max-sm:py-3 rounded-3xl font-bold text-base max-sm:text-sm text-white group/arrow" 
                    onClick={() => openSheet("signup")}
                    >
             {t("sign-up")}
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-3/6 md:w-2/4 py-6 text-base max-sm:py-3 rounded-3xl max-sm:text-sm text font-bold"
              onClick={() => openSheet("login")}
            >
              <Link
                href=""
              >
              {t("login")}
              </Link>
            </Button>
      </div>
    </header>
  );
};

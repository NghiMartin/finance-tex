"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
  };

  const languages = [
    { code: "en", label: "🇺🇸 Tiếng Anh" },
    { code: "vi", label: "🇻🇳 Tiếng Việt" },
    { code: "ko", label: "🇰🇷 한국어 (Hàn Quốc)" },
    { code: "ja", label: "🇯🇵 日本語 (Nhật Bản)" },
    { code: "zh", label: "🇨🇳 中文 (Trung Quốc)" },
    { code: "th", label: "🇹🇭 ภาษาไทย (Thái Lan)" },
    { code: "km", label: "🇰🇭 ភាសាខ្មែរ (Campuchia)" },
    { code: "lo", label: "🇱🇦 ພາສາລາວ (Lào)" },
    { code: "id", label: "🇮🇩 Bahasa Indonesia" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[220px]">
        <Button variant="outline" className="flex items-center gap-2">
          <span>{languages.find((lang) => lang.code === selectedLang)?.label || "🌍 Ngôn ngữ"}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[220px]">
        <DropdownMenuRadioGroup value={selectedLang} onValueChange={changeLanguage}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem key={lang.code} value={lang.code}>
              {lang.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

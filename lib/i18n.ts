import en from "@/app/locales/en.json";
import vi from "@/app/locales/vi.json";
import ko from "@/app/locales/ko.json";
import ja from "@/app/locales/ja.json";
import zh from "@/app/locales/zh.json";
import th from "@/app/locales/th.json";
import km from "@/app/locales/km.json";
import lo from "@/app/locales/lo.json";
import id from "@/app/locales/id.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
    ko: { translation: ko },
    ja: { translation: ja },
    zh: { translation: zh },
    th: { translation: th },
    km: { translation: km },
    lo: { translation: lo },
    id: { translation: id },
  },
  lng: "vi", 
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

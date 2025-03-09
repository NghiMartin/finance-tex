"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { SheetProvider } from "@/hooks/useSheet";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <SheetProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </SheetProvider>
    </ThemeProvider>
  );
}

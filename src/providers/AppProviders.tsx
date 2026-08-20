import React from "react";
import { NextIntlClientProvider } from "next-intl";
import ThemeProvider from "./ThemeProvider";
import LanguageProvider from "./LanguageProvider";
interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <NextIntlClientProvider>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}

import { NextIntlClientProvider } from "next-intl";

interface Props {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: Props) {
  return (
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
  );
}

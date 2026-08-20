import { ThemeToggle } from "@/shared/components/atom/ThemeButton";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atom/Title";
import PublicLayout from "@/shared/components/layout/PublicLayout";
import Box from "@/shared/components/molecules/Box";
import HowITWorks from "@/shared/components/organisms/HowITWorks";
export default function Home() {
  const t = useTranslations();
  return (
    <>
      <HowITWorks />
    </>
  );
}

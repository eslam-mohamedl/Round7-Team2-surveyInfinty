import { CircleAlert, Menu } from "../assets/icons/icons";
import Image from "next/image";
import { img1 } from "@/assets/images/images";
import { ThemeToggle } from "@/shared/components/atom/ThemeButton";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atom/Title";
import Text from "./Text";
import Box from "@/shared/components/molecules/Box";
import PublicLayout from "@/shared/components/layout/PublicLayout";
export default function Home() {
  const t = useTranslations();
  return (
    <PublicLayout>
      <ThemeToggle />

      <h2>{t("HomePage.title")}</h2>
      <Title size="sm" variant="primary">
        {" "}
        hello user in afaaqware
      </Title>
      <Title size="md" variant="primary">
        {" "}
        hello user in afaaqware
      </Title>
      <Title size="lg" variant="disabled">
        {" "}
        hello user in afaaqware
      </Title>

      <Text size="lg" variant="disabled" center={true}>
        {" "}
        this is text atoms
      </Text>
      <Text size="lg" variant="disabled" center={true}>
        {" "}
        this is text atoms
      </Text>
      <Text size="lg" variant="disabled" center={true}>
        {" "}
        this is text atoms
      </Text>
      <Text size="lg" variant="disabled" center={true}>
        {" "}
        this is text atoms
      </Text>
      <Box />
    </PublicLayout>
  );
}

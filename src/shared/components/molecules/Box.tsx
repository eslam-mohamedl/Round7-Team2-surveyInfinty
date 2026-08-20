import Title from "../atom/Title";
import Text from "@/app/Text";
import NumberBoll from "@/shared/components/atom/NumberBoll";
import { ReactNode } from "react";
interface Props {
  title: string;
  text: string;
  content: number;
}
export default function Box({ title, text, content }: Props) {
  return (
    <div className="ds-bg-alt  rounded-md p-5 flex justify-center items-center flex-col">
      <NumberBoll content={content} />
      <Title size="md">{title}</Title>
      <Text center={true}>{text}</Text>
    </div>
  );
}

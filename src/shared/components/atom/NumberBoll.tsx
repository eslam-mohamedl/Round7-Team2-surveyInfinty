import React from "react";
interface Props {
  content: number;
}
export default function NumberBoll({ content }: Props) {
  return (
    <div className="w-16 h-16 ds-bg-best rounded-full flex justify-center items-center font-bold text-md">
      {content}
    </div>
  );
}

import React from "react";
import Box from "../molecules/Box";
import { dataBox } from "@/shared/utils/data";
export default function HowITWorks() {
  return (
    <div className="ds-container grid grid-cols-1 lg:grid-cols-3 gap-5">
      {dataBox.map((box) => (
        <Box key={box.id} title={box.title} text={box.text} content={box.id} />
      ))}
    </div>
  );
}

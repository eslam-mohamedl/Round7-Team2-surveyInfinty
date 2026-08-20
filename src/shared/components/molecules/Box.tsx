import Title from "../atom/Title";
import Text from "@/app/Text";

import React from "react";

export default function Box() {
  return (
    <div className="ds-bg-alt w-[350px] rounded-2xl p-5 flex justify-center items-center flex-col">
      <Title>Events</Title>
      <Text center={true}>
        Attendance registration, event feedback, post-event surveys.
      </Text>
    </div>
  );
}

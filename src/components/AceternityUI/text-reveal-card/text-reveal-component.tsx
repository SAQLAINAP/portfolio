// import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Thanks for Visiting !!"
        revealText="Hey there Stalker!! "
      >
        <TextRevealCardTitle>
          You've Reached the end.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Thats pretty much about me, Hope u read a lot about me.I am more than happy to know about you as well.!!
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

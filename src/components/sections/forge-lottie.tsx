"use client";

import Lottie from "lottie-react";
import animationData from "@/lib/forge-lottie.json";

export function ForgeLottie() {
  return (
    <div aria-hidden="true" className="mx-auto h-24 w-24 opacity-80">
      <Lottie animationData={animationData} loop />
    </div>
  );
}

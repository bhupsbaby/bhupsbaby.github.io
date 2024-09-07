"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LiveNow = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-2">
      <DotLottieReact
        src="./animations/live-now.json"
        className="w-6 h-6 md:w-8 md:h-8"
        loop
        autoplay
      />
      <p className="text-xs md:text-sm font-semibold text-gray-400">
        Open to work
      </p>
    </div>
  );
};

export default LiveNow;

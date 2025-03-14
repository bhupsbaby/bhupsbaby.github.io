"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LiveNow = () => {
  return (
    <div className="flex justify-center items-center gap-3 py-2">
      <div className="flex relative items-center justify-center">
        <div className="h-4 w-4 animate-ping rounded-full bg-green-400" />
        <div className="absolute h-2 w-2 rounded-full bg-green-500" />
      </div>

      <p className="text-xs md:text-sm font-semibold text-gray-500">
        Open to work
      </p>
    </div>
  );
};

export default LiveNow;

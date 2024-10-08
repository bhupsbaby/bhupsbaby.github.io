import React from "react";

const About = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col mb-12 md:mb-20 justify-between ${className}`}
    >
      <p
        id="about"
        className="text-2xl md:text-3xl font-semibold text-black pb-12"
      >
        Passionate creating great experiences for Web <br />
        Products
      </p>
      <div className="flex gap-6">
        <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">
          Let&apos;s talk
        </button>
        <button className="rounded-full bg-offwhite px-6 py-2 text-sm font-medium text-black border border-lightbrown">
          See my work
        </button>
      </div>
    </div>
  );
};

export default About;

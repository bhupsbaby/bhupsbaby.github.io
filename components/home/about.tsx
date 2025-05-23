import React, { useState } from "react";
import { AnimatePresence, m } from "framer-motion"; // Import only the motion component, not the entire library
import EmojiContactForm from "../shared/EmojiContactForm";

const About = ({ className }: { className?: string }) => {
  const [showContactForm, setShowContactForm] = useState(false)
  return (
    <div
      className={`flex flex-col mb-12 md:mb-20 justify-between ${className}`}
    >
      <h1
        id="about"
        className="text-2xl md:text-3xl font-semibold text-black pb-12"
      >
        Passionate creating great experiences for Web <br />
        Products
      </h1>
      <div className="flex gap-6">
        <button onClick={() => setShowContactForm(true)} className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">
          Let&apos;s talk
        </button>
        <button className="rounded-full bg-offwhite px-6 py-2 text-sm font-medium text-black border border-lightbrown">
          See my work
        </button>
      </div>
      <AnimatePresence>
        {showContactForm && (
          <EmojiContactForm onClose={() => setShowContactForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(About);

import Image from "next/image";
import React from "react";

const ProfileHeading = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col sticky top-12 ${className}`}>
      <Image
        src={
          "https://i.pinimg.com/474x/69/56/f7/6956f7a4f805108af3f87c8bc5a600c1.jpg"
        }
        alt="Picture of the author"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center pt-7 gap-4">
        <h1 className="text-5xl">
          I'm <br /> Pranav Sonawane
        </h1>
        <p className="text-2xl font-semibold text-black">
          Software Developer based in <br />
          Maharashtra, India.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeading;

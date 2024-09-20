import Image from "next/image";
import React from "react";
import LiveNow from "./liveNow";
import DiscordIcon from "@/icons/discord";
import TwitterIcon from "@/icons/twitter";
import GithubIcon from "@/icons/github";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";

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
        className="rounded-full object-cover h-40 w-40 md:h-64 md:w-60"
      />
      <div className="flex flex-col justify-center pt-7 gap-2">
        <h1 id={"main-heading"} className="text-4xl md:text-5xl text-semibold">
          I&apos;m <br /> Pranav Sonawane
        </h1>
        <p className="text-base md:text-2xl font-semibold text-black">
          Software Developer based in <br />
          Maharashtra, India.
        </p>
        <div className="flex gap-4 py-2">
          <span className="">
            <FaGithub className="w-6 h-6" />
          </span>
          <span className="">
            <FaXTwitter className="w-6 h-6" />
          </span>
          <span className="">
            <FaDiscord className="w-6 h-6 text-indigo-500" />
          </span>
        </div>
        <div className="flex">
          <LiveNow />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeading;

import DiscordIcon from "@/icons/discord";
import GithubIcon from "@/icons/github";
import TwitterIcon from "@/icons/twitter";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-offwhite md:p-12">
      <div className="flex flex-col md:flex-row justify-between md:p-12 rounded-3xl rounded-bl-none rounded-br-none md:rounded-full bg-black text-white">
        <div className="flex flex-col p-7 md:flex-row items-center">
          <div className="flex md:flex-row items-center gap-7 md:gap-12">
            <Image
              src={
                "https://i.pinimg.com/474x/69/56/f7/6956f7a4f805108af3f87c8bc5a600c1.jpg"
              }
              alt="Picture of the author"
              width={100}
              height={80}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-col gap-2 p-7">
                <div className="flex flex-col">
                  <h2 className="text-xl md:text-3xl font-semibold">
                    I&apos;m Pranav Sonawane
                  </h2>
                  <p className="text-sm md:text-base text-gray-400">
                    Software Developer based in Maharashtra, India
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <span className="">
                    <GithubIcon dark={true} />
                  </span>
                  <span className="">
                    <TwitterIcon dark={true} />
                  </span>
                  <span className="">
                    <DiscordIcon dark={true} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:flex justify-center gap-4 md:gap-12 px-4 text-gray-400">
          <div className="flex flex-col justify-center gap-8 text-xs md:text-lg">
            <a href="#">Services</a>
            <a href="#">About Me</a>
          </div>
          <div className="flex flex-col justify-center gap-8 text-xs md:text-lg">
            <a href="#">Case Studies</a>
            <a href="#">Contact Me</a>
          </div>
        </div>

        <div className="flex justify-center items-center relative py-12 md:py-0 md:mb-0 px-20">
          <button className="absolute flex text-center justify-center rounded-full w-[90%] bg-white py-4 px-6 text-sm md:text-md text-black font-semibold">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-offwhite p-12">
      <div className="flex justify-between p-12 rounded-full bg-black text-white">
        <div className="flex items-center w-[70%]">
          <div className="flex items-center gap-12 w-[70%]">
            <Image
              src={
                "https://i.pinimg.com/474x/69/56/f7/6956f7a4f805108af3f87c8bc5a600c1.jpg"
              }
              alt="Picture of the author"
              width={100}
              height={80}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-3xl font-semibold">I'm Pranav Sonawane</h2>
              <p className="text-gray-400">
                Software Developer based in Maharashtra, India
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-20 px-8 w-full text-gray-400">
            <div className="flex flex-col justify-center gap-8 text-xl">
              <a href="#">Services</a>
              <a href="#">About Me</a>
            </div>
            <div className="flex flex-col justify-center gap-8 text-xl">
              <a href="#">Case Studies</a>
              <a href="#">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-20">
          <button className="flex rounded-full bg-white py-4 px-6 text-md text-black font-semibold">
            Talk with me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;

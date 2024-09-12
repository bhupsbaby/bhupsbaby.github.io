import React from "react";

const Loading = () => {
  return (
    <div className="">
      <div className="">
        <header
          className={`flex h-20 shrink-0 items-center px-7 md:px-48 bg-offwhite`}
        >
          <nav className="flex justify-between items-center w-full gap-4 sm:gap-6">
            <div className="flex justify-center items-center">
              <span id="navHeading" className="text-2xl py-2 font-extrabold">
                /Pranav
              </span>

              <div className="hidden md:block">
                <a
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md text-center text-gray-600 font-semibold "
                >
                  Services
                </a>
                <a
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md text-center text-gray-600 font-semibold "
                >
                  About
                </a>
              </div>
            </div>
            <button className="rounded-full bg-offwhite px-6 py-2 text-sm md:text-md font-semibold text-gray-600 border border-1 border-lightbrown">
              Resume
            </button>
          </nav>
        </header>
        <div className="w-full md:w-[50%]">
          <div className={`flex flex-col sticky top-12 `}>
            <div className="rounded-full object-cover bg-gray-200 h-40 w-40 md:h-64 md:w-60"></div>
            <div className="flex flex-col justify-center pt-7 gap-2">
              <h1
                id={"main-heading"}
                className="text-4xl md:text-5xl text-semibold"
              >
                I&apos;m <br /> Pranav Sonawane
              </h1>
              <p className="text-base md:text-2xl font-semibold text-black">
                Software Developer based in <br />
                Maharashtra, India.
              </p>
              <div className="flex">
                <div className="h-2 bg-gray-200 rounded-full " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-[50%]">
          <div className={`flex flex-col mb-12 md:mb-20 justify-between`}>
            <p id="about" className="text-2xl md:text-4xl leading-snug pb-12">
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
        </div>
        <div className={`flex flex-col gap-3 mb-20 w-full `}>
          <span className="border-t border-lightbrown w-full pb-2" />
          <h2 className="text-2xl font-semibold pb-4">Working Experience</h2>

          <div
            className={`flex items-center justify-between rounded-full border border-lightbrown bg-white p-4 pr-8`}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center relative w-12 h-12 rounded-full bg-offwhite p-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full" />
              </div>
              <div className="">
                <h3 className="text-xs md:text-lg font-normal">
                  <div className="h-2.5 bg-gray-200 rounded-full " />
                </h3>
                <p className="text-xs md:text-lg font-bold">
                  <div className="h-2 bg-gray-200 rounded-full " />
                  <div className="h-2 bg-gray-200 rounded-full " />
                </p>
              </div>
            </div>
            <p className="flex justify-center text-center text-xs md:text-sm text-gray-400 font-semibold">
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="h-2 bg-gray-200 rounded-full " />
            </p>
          </div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full " />
        <div className="h-2 bg-gray-200 rounded-full " />
        <div className="h-2 bg-gray-200 rounded-full " />
        <div className="h-2 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export default Loading;

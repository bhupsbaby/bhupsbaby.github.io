"use client";
import { ResumeUrl } from "@/data/data";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={`absolute flex h-20 shrink-0 items-center px-7 md:px-48 bg-offwhite ${className}`}
    >
      <nav className="flex justify-between items-center w-full gap-4 sm:gap-6">
        <div className="flex justify-center items-center">
          <Link href="#" className="mr-6 flex items-center" prefetch={false}>
            <span id="navHeading" className="text-2xl py-2 font-extrabold">
              /Pranav
            </span>
          </Link>
          <div className="hidden md:block">
            <a
              href="/blog"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md text-center text-gray-600 font-semibold "
            >
              Blogs
            </a>
            {/* <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md text-center text-gray-600 font-semibold "
            >
              About
            </a> */}
          </div>
        </div>

        <Link href={ResumeUrl} target="_blank" prefetch={false}>
          <button className="rounded-full bg-offwhite px-6 py-2 text-sm md:text-md font-semibold text-gray-600 border border-1 border-lightbrown">
            Resume
          </button>
        </Link>
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={`flex h-20 shrink-0 items-center px-4 md:px-48 bg-offwhite ${className}`}
    >
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
        <span id="navHeading" className="text-2xl py-2 font-extrabold">
          /Pranav
        </span>
      </Link>
      <nav className="flex justify-between items-center w-full gap-4 sm:gap-6">
        <div>
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

        <button className="rounded-full bg-offwhite px-6 py-2 text-md font-semibold text-gray-600 border border-1 border-lightbrown">
          See my work
        </button>
      </nav>
    </header>
  );
}

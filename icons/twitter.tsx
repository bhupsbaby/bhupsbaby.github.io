import { XProfileUrl } from "@/data/data";
import Link from "next/link";
import React from "react";

const TwitterIcon = ({
  className,
  dark,
}: {
  className?: string;
  dark?: boolean;
}) => {
  if (dark)
    return (
      <div>
        <Link href={XProfileUrl} target={"_blank"}>
          <svg
            className={`h-6 w-6`}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    );
  return (
    <div>
      <Link href={XProfileUrl} target={"_blank"}>
        <svg
          className={`h-6 w-6`}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
};

export default TwitterIcon;

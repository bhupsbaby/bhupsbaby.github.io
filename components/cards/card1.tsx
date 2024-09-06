import ArrowIcon from "@/icons/redirectArrow";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  data: {
    id: number;
    title: string;
    company: string;
    year: string;
    place: string;
    desc?: string;
    image: string;
    url?: string;
  };
};

const SmallCard = (props: Props) => {
  return (
    <div
      className={`flex items-center justify-between rounded-full border border-lightbrown bg-white p-4 pr-8 ${props.className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center relative w-12 h-12 rounded-full bg-offwhite p-2">
          <Image
            src={props.data.image}
            height={16}
            width={16}
            alt="company logo"
            className="absolute object-cover"
          />
        </div>
        <div className="">
          <h3 className="text-lg font-normal">{props.data.title}</h3>
          <p className="text-lg font-bold">{props.data.company}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 font-semibold">{props.data.year}</p>
    </div>
  );
};

export default SmallCard;

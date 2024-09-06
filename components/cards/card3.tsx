import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  data: {
    id: number;
    title: string;
    desc: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
  };
};

const CardWithImage = (props: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-3 rounded-2xl border border-lightbrown bg-white p-3 ${props.className}`}
    >
      <Image
        src={props.data.image}
        alt={props.data.title}
        width={100}
        height={100}
        className="rounded-xl w-full bg-lightbrown object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{props.data.title}</h2>
        <p className="text-sm line-clamp-2 text-gray-400">{props.data.desc}</p>
      </div>
    </div>
  );
};

export default CardWithImage;

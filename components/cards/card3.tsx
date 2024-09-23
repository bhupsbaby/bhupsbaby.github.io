import Image from "next/image";
import React from "react";
import Bubble from "../bubble";
import { defaultImageSrc } from "@/data/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  data: {
    id: number;
    title: string;
    desc: string;
    techStack: string[];
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
        src={props.data.image || defaultImageSrc}
        alt={props.data.title}
        width={100}
        height={100}
        className="rounded-xl w-full bg-lightbrown object-cover"
        blurDataURL={defaultImageSrc}
        placeholder="blur"
      />
      <div className="flex flex-col gap-1 w-full">
        <Link href={props.data.liveUrl || props.data.githubUrl} target="_blank">
          <div className="flex">
            <h3 className="text-lg font-semibold hover:underline underline-offset-2 decoration-gray-400">
              {props.data.title}
            </h3>
            {(props.data.liveUrl || props.data.githubUrl) && (
              <ArrowUpRight className="w-4 h-4 text-gray-400 ml-1" />
            )}
          </div>
        </Link>
        <div className="flex flex-wrap gap-2 w-full">
          {props.data.techStack.map((tech, index) => (
            <Bubble key={index} name={tech} />
          ))}
        </div>
        <p className="text-xs line-clamp-2 text-gray-400">{props.data.desc}</p>
      </div>
    </div>
  );
};

export default CardWithImage;

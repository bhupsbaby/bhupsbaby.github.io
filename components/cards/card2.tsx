import React from "react";

type Props = {
  className?: string;
  data: {
    id: number;
    title: string;
    desc?: string;
    icon?: string;
  };
};

const MediumCard = (props: Props) => {
  return (
    <div
      className={`flex items-center justify-between gap-6 rounded-3xl border border-lightbrown bg-white p-3 ${props.className}`}
    >
      <div className="flex justify-center items-center relative h-10 w-20 rounded-full bg-offwhite text-bold text-center">
        <div className="absolute">{"W." || props.data.icon}</div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{props.data.title}</h2>
        <p className="text-sm text-gray-400">{props.data.desc}</p>
      </div>
    </div>
  );
};

export default MediumCard;

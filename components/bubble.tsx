import React from "react";

const Bubble = ({ name }: { name: string }) => {
  return (
    <div className="col-auto flex rounded-full p-1 w-fit justify-center border border-lightbrown">
      <span className="text-xs font-semibold text-lightbrown">{name}</span>
    </div>
  );
};

export default Bubble;

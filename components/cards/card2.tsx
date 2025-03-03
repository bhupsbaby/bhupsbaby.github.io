'use client'

import React from "react";
import { motion } from "framer-motion"

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
    <motion.div
      className={`flex items-center justify-between gap-6 rounded-3xl border border-lightbrown bg-white p-3 ${props.className}`}
      whileHover={{ backgroundColor: "#FEFEFE" }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="flex justify-center items-center relative h-10 w-20 rounded-full bg-offwhite text-bold text-center">
        <div className="absolute">{"W." || props.data.icon}</div>
      </motion.div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base md:text-lg font-bold">{props.data.title}</h3>
        <motion.p className="text-xs md:text-sm text-gray-400">{props.data.desc}</motion.p>
      </div>
    </motion.div>
  );
};

export default MediumCard;

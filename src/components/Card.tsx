import React from "react";
import type { IconType } from "react-icons";
import { motion } from "motion/react";

interface CardProps {
  label?: string;
  description?: string;
  icon: IconType;
}

export const Card: React.FC<CardProps> = ({
  label,
  description,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="p-10 h-full rounded-xl shadow-md hover:-translate-y-3 transition-transform hover:shadow-cyan-500 border border-gray-200  bg-white w-full  flex flex-col items-center gap-5 "
    >
      <Icon size={64} />
      <div className="text-center">
        <h6 className="text-lg font-semibold">{label}</h6>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

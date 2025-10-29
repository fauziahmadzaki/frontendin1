import React from "react";
import type { IconType } from "react-icons";

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
    <div className="p-10 h-full rounded-xl shadow-md hover:-translate-y-3 transition-transform hover:shadow-cyan-500 border border-gray-200  bg-white w-full  flex flex-col items-center gap-5 ">
      <Icon size={64} />
      <div className="text-center">
        <h6 className="text-lg font-semibold">{label}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

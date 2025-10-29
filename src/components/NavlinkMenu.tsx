import { Navlink } from "./Navlink";
import clsx from "clsx";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface NavLinkMenuProps {
  label: string;
  menus: {
    to: string;
    label: string;
  }[];
}

export const NavlinkMenu = ({ label, menus }: NavLinkMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="lg:relative group hover:cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p className="font-semibold text-lg ">
        {label} <IoIosArrowDown className="inline-block " size={20} />
      </p>
      <div
        className={clsx([
          !isOpen && "hidden",
          "lg:hidden lg:absolute lg:translate-y-5 lg:group-hover:block lg:group-hover:translate-y-0 transition-transform   bg-white rounded-md p-5 lg:border border-gray-200 left-0 lg:shadow-sm w-max",
        ])}
      >
        {menus.map((menu, index) => (
          <Navlink key={index} to={menu.to}>
            {menu.label}
          </Navlink>
        ))}
      </div>
    </div>
  );
};

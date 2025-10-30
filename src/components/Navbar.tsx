import { IoMenu, IoClose } from "react-icons/io5";
import { Button } from "./Button";
import { useState } from "react";
import clsx from "clsx";
import { MobileMenu } from "./MobileMenu";
import { AnimatePresence } from "motion/react";
import { WideMenu } from "./WideMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="fixed lg:static top-0 z-50 bg-white w-full lg:shadow-md ">
      <nav className="relative lg:p-5 lg:px-10 lg:max-w-6xl mx-auto bg-white w-full lg:flex justify-between items-center transition-all duration-500 ease-in-out">
        <div className="p-5 lg:p-0 flex lg:block w-full lg:w-fit justify-between items-center border-b border-b-gray-200 shadow-sm lg:border-none lg:shadow-none">
          <h1 className="font-bold text-xl text-cyan-600">Sahabat Belajar</h1>
          {isOpen ? (
            <IoClose
              size={30}
              className="lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <IoMenu
              className="lg:hidden"
              size={30}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>
        <WideMenu />
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>

        <div
          className={clsx([
            "hidden lg:flex gap-2 lg:space-y-0 p-5 lg:p-0 border-b border-b-gray-200 shadow-sm lg:shadow-none lg:border-none",
          ])}
        >
          <Button variant="primary" className="block w-full lg:inline">
            Masuk
          </Button>
          <Button variant="outline" className="block w-full lg:inline">
            Daftar
          </Button>
        </div>
      </nav>
    </header>
  );
};

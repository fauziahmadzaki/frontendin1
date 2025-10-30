import clsx from "clsx";
import { motion } from "motion/react";

import { Navlink } from "./Navlink";
import { NavlinkMenu } from "./NavlinkMenu";
import { Button } from "./Button";
import { materi, menuLainnya } from "../assets/menus";

export const MobileMenu = () => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={clsx([
        "absolute bg-white w-screen z-50 lg:hidden gap-5 lg:space-y-0  p-5 space-y-5 lg:py-0  lg:p-0 shadow-sm border-b lg:border-none lg:shadow-none border-gray-200 transition-transform duration-300 ease-in-out overflow-hidden",
      ])}
    >
      <Navlink to="/">Beranda</Navlink>
      <Navlink to="#about">Tentang Kami</Navlink>
      <NavlinkMenu label="Materi" menus={materi} />
      <NavlinkMenu label="Menu Lainnya" menus={menuLainnya} />
      <div className={clsx(["lg:hidden gap-2 space-y-3 p-5 lg:p-0"])}>
        <Button variant="primary" className="block w-full lg:inline">
          Masuk
        </Button>
        <Button variant="outline" className="block w-full lg:inline">
          Daftar
        </Button>
      </div>
    </motion.div>
  );
};

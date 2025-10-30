import { Navlink } from "./Navlink";
import { NavlinkMenu } from "./NavlinkMenu";
import { materi, menuLainnya } from "../assets/menus";
import { Button } from "./Button";
import clsx from "clsx";

export const WideMenu = () => {
  return (
    <div className="hidden lg:flex  gap-5 lg:space-y-0  p-5 space-y-5 lg:py-0  lg:p-0 shadow-sm border-b lg:border-none lg:shadow-none border-gray-200 transition-transform duration-300 ease-in-out ">
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
    </div>
  );
};

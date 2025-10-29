import { FaWhatsapp, FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" bg-neutral-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 py-20 px-10 gap-20">
        <div className="w-fit">
          <h1 className="text-2xl font-bold">Sahabat Belajar</h1>
          <p className="text-lg font-semibold text-gray-500 text-justify">
            Tempat di mana semangat dan pengetahuan tumbuh bersama. Kami percaya
            bahwa setiap orang berhak mendapatkan kesempatan untuk berkembang,
            menggali potensi terbaiknya, dan meraih masa depan yang lebih cerah.
          </p>
          <div className="flex gap-5 items-center w-full mt-5">
            <FaWhatsapp size={30} className="hover:text-cyan-500" />
            <FaTiktok size={30} className="hover:text-cyan-500" />
            <FaFacebook size={30} className="hover:text-cyan-500" />
            <FaInstagram size={30} className="hover:text-cyan-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Links</h4>
            <ul>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                Beranda
              </a>
              <a href="#about" className="text-lg hover:text-cyan-500 block">
                Tentang Kami
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                Kontak
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                Kebijakan Privasi
              </a>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Materi</h4>
            <ul>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                UTBK/SNBT
              </a>
              <a href="#about" className="text-lg hover:text-cyan-500 block">
                TKA
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                Kedinasan
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                CPNS
              </a>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Kategori</h4>
            <ul>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                SMA/MAN/SMK
              </a>
              <a href="#about" className="text-lg hover:text-cyan-500 block">
                SMP/MTS
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                SD/MI
              </a>
              <a href="/" className="text-lg hover:text-cyan-500 block">
                Gapyear/Semigap
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-500 p-10">
        <p className=" text-base text-white">
          Copyright &copy; 2023 Sahabat Belajar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

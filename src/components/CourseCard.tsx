import { Button } from "./Button";
import image from "/UTBK.jpeg";
import { motion } from "motion/react";

export const CourseCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="border border-gray-200 shadow-md rounded-xl overflow-hidden w-full h-full"
    >
      <div className="border-b border-gray-200">
        <img src={image} alt="" />
      </div>
      <div className="p-5 flex flex-col justify-between gap-5">
        <div className="space-y-2">
          <h4 className="text-lg font-bold">UTBK Intesif</h4>
          <h5 className="text-lg font-semibold text-cyan-500">
            Oleh Ryan Fikri Ramadhan
          </h5>
          <p className="text-sm font-semibold">
            Kelas untuk kamu yang ingin mendapatkan skor 800++ dan masuk kampus
            top Indo
          </p>
          <p className="text-base font-bold">SMA / MAN</p>
          <p>Rp. 1.000.000</p>
        </div>
        <div className="space-y-2">
          <Button className="w-full">Daftar</Button>
          <Button className="w-full" variant="outline">
            Lihat
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

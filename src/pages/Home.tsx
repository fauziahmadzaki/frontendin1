import heroImage from "/Hero.jpg";
import ownerImage from "/Owner.png";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { FaWhatsapp, FaUserClock, FaFileVideo } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { Card } from "../components/Card";
import { CourseCard } from "../components/CourseCard";
import { Footer } from "../components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <section
        id="
      beranda"
        className="min-h-screen w-full bg-no-repeat bg-cover -mt-5  md:mt-15 md:pt-20 lg:px-80"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-white bg-black/50 p-15 h-screen md:h-max space-y-5 max-w-xl mx-auto mt-20">
          <h1 className="text-6xl font-bold text-cyan-500 text-center">
            Sahabat Belajar
          </h1>
          <h6 className="text-2xl font-semibold text-center">
            Belajar Bareng Dengan Asik
          </h6>
          <p className="text-lg text-justify">
            Tempat di mana semangat dan pengetahuan tumbuh bersama. Kami percaya
            bahwa setiap orang berhak mendapatkan kesempatan untuk berkembang,
            menggali potensi terbaiknya, dan meraih masa depan yang lebih cerah.
          </p>
          <div className="flex justify-between">
            <Button
              className="text-white bg-transparent border-white rounded-full hover:bg-white hover:text-black"
              variant="outline"
            >
              Gabung Sekarang
            </Button>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen w-full p-10 md:p-20 bg-neutral-100 space-y-10 lg:space-y-20"
      >
        <div className="space-y-10">
          <h1 className="text-3xl font-bold text-center">Tentang kami</h1>
          <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-10 lg:gap-20 justify-between items-center">
            <img
              src={ownerImage}
              width={400}
              alt=""
              className="w-[300px] lg:w-[400px] rounded-xl"
            />
            <div className="space-y-3 text-justify">
              <h6 className="text-xl font-bold">Cerita Dibalik Ide Ini</h6>
              <p className="text-sm lg:text-lg indent-5">
                Hai! Aku Ryan Fikri Ramadhan, pendiri platform belajar ini.
                Semuanya berawal dari satu hal sederhana — keinginan untuk bikin
                tempat belajar yang nggak bikin bosan dan mudah diakses siapa
                saja. Lewat platform ini, kamu bisa belajar kapan pun dan di
                mana pun, dengan cara yang seru dan tetap bermakna. Nggak peduli
                kamu masih pelajar, mahasiswa, atau sudah kerja, di sini kamu
                bisa terus berkembang sesuai minat dan tujuanmu. Setiap materi
                yang kami buat disusun dengan hati — biar nggak cuma teori, tapi
                juga bisa langsung kamu terapkan di dunia nyata. Kami pengen
                kamu nggak cuma paham, tapi juga siap menghadapi tantangan masa
                depan. Buat kami, belajar adalah perjalanan yang nggak pernah
                berhenti. Karena itu, kami terus berinovasi dan mendengarkan
                masukan dari kamu semua, supaya platform ini selalu tumbuh
                bareng dengan penggunanya.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center">
          Kenapa Sahabat Belajar?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:max-w-lg lg:max-w-6xl mx-auto gap-10 place-items-center">
          <Card
            icon={FaWhatsapp}
            label="Konsultasi Gratis"
            description="Tanya jawab kapan saja"
          />
          <Card
            icon={FaUserClock}
            label="Waktu Flesibel"
            description="Dari mana saja, kapan saja"
          />
          <Card
            icon={FaFileVideo}
            label="Materi Video"
            description="Akses materi selamanya"
          />
          <Card
            icon={PiCertificateFill}
            label="Sertifikat"
            description="Mendapatkan sertifikat"
          />
        </div>
      </section>
      <section className="min-h-screen w-full p-10 md:p-20 bg-white space-y-10 lg:space-y-20">
        <h1 className="text-3xl font-bold text-center">Pilihan Paket Kelas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;

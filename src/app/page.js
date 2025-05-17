import { SongExpandableCard } from "./SongExpandableCard";

export default function SongSelection() {
  const songs = [
    {
      id: 1,
      title: "Blue",
      artist: "Yungkai",
      imageSrc: "/images/blue.jpg",
      audioSrc: "/music/blue.mp3"
    },
    {
      id: 2,
      title: "Kita Usahakan Rumah Itu",
      artist: "Sal Priadi",
      imageSrc: "/images/kita-usahakan-rumah-itu.jpg",
      audioSrc: "/music/kita-usahakan-rumah-itu.mp3"
    },
    {
      id: 3,
      title: "Angel Eyes",
      artist: "ABBA",
      imageSrc: "/images/angeleyes.jpg",
      audioSrc: "/music/angeleyes.mp3"
    },
    {
      id: 4,
      title: "Marry You",
      artist: "Bruno Mars",
      imageSrc: "/images/marry-you.jpg",
      audioSrc: "/music/marry-you.mp3"
    },
    {
      id: 5,
      title: "Heather",
      artist: "Conan Gray",
      imageSrc: "/images/heather.jpg",
      audioSrc: "/music/heather.mp3"
    },
    {
      id: 6,
      title: "Asmalibrasi",
      artist: "Soegi Bornean",
      imageSrc: "/images/asmalibrasi.jpg",
      audioSrc: "/music/asmalibrasi.mp3"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex flex-col items-center justify-center relative overflow-hidden">
      <section className="w-full px-8 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text">
            PILIH LAGU KAMU
          </h1>
          <SongExpandableCard songs={songs} />
        </div>
      </section>
    </main>
  );
}
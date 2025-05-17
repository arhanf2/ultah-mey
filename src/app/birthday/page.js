"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Balloons } from "@/components/ui/balloons";
import ImageTrail from "@/components/ImageTrail";
import SplitText from "@/components/SplitText";
import Carousel from "@/components/ui/carousel";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { AnimatedList } from "@/components/magicui/animated-list";
import { MorphingText } from "@/components/magicui/morphing-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Gravity, MatterBody } from "@/components/ui/gravity";


export default function Birthday() {
  const balloonsRef = useRef(null);
  const audioRef = useRef(null);
  const [wishes, setWishes] = useState([
    {
      name: "John",
      message:
        "Happy Birthday! Wishing you all the happiness today and always!",
    },
    {
      name: "Maria",
      message: "May your special day be filled with love and laughter!",
    },
    { name: "David", message: "Here's to another amazing year ahead. Cheers!" },
  ]);
  let notifications = [
    {
      name: "Mery Sukma Handayani",
      description: "Hai aku mey, HBD YA KAMUU !!",
      time: "15m ago",

      icon: "🎉",
      color: "#00C9A7",
    },
    {
      name: "Uyee",
      description: "Sehat selalu kamu dek",
      time: "10m ago",
      icon: "😍",
      color: "#FFB800",
    },
    {
      name: "Meyyi",
      description: "PANJANG UMURNYA YAAA",
      time: "5m ago",
      icon: "😊",
      color: "#FF3D71",
    },
    {
      name: "Farhan",
      description: "Happy Birthday Kamuu !!",
      time: "2m ago",
      icon: "🥰",
      color: "#1E86FF",
    },
  ];

  notifications = Array.from({ length: 10 }, () => notifications).flat();

  const Notification = ({ name, description, icon, color, time }) => {
    return (
      <figure
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
          // animation styles
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: color,
            }}
          >
            <span className="text-lg">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm sm:text-lg">{name}</span>
              <span className="mx-1">·</span>
              <span className="text-xs text-gray-500">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </figure>
    );
  };
  const searchParams = useSearchParams();
  const [song, setSong] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [attemptedAutoplay, setAttemptedAutoplay] = useState(false);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showGift, setShowGift] = useState(false);
  const [memories, setMemories] = useState([
    {
      id: 1,
      image: "/images/marry-you.jpg",
      caption: "Remember our trip to the beach?",
    },
    {
      id: 2,
      image: "/images/marry-you.jpg",
      caption: "That dinner at your favorite restaurant!",
    },
    {
      id: 3,
      image: "/images/marry-you.jpg",
      caption: "Your surprise party last year!",
    },
    {
      id: 4,
      image: "/images/marry-you.jpg",
      caption: "When we went hiking together",
    },
  ]);

  const slideData = [
    {
      title: "Bochieell 1",
      button: "Explore Component",
      src: "images/mey5.png",
    },
    {
      title: "Bochieell 2",
      button: "Explore Component",
      src: "images/mey6.png",
    },
    {
      title: "Bochieell 3",
      button: "Explore Component",
      src: "images/mey7.png",
    },
    {
      title: "Bochieell 4",
      button: "Explore Component",
      src: "images/mey8.png",
    },
    {
      title: "Bochieell 5",
      button: "Explore Component",
      src: "images/mey9.png",
    },
    {
      title: "Bochieell 6",
      button: "Explore Component",
      src: "images/mey10.png",
    },
  ];

  const testimonials = [
    {
      name: "Mery Sukma Handayani",
      quote:
        "Selamat ulang tahun Mery! Semoga di tahun ini semua impianmu tercapai, selalu diberi kesehatan, kebahagiaan, dan dikelilingi orang-orang yang sayang padamu. Tetap semangat dan terus berkarya!",
      title: "🎉",
    },
    {
      name: "Uyee",
      quote:
        "Happy birthday! Semoga selalu sehat, sukses, dan bahagia. Jangan lupa tersenyum setiap hari dan terus menjadi inspirasi bagi banyak orang!",
      title: "😍",
    },
    {
      name: "Meyyi",
      quote:
        "Panjang umur, sehat selalu, dan semoga segala harapanmu di tahun ini bisa terwujud. Nikmati hari spesialmu dengan penuh suka cita!",
      title: "😊",
    },
    {
      name: "Farhan",
      quote:
        "Selamat ulang tahun! Semoga hari-harimu selalu dipenuhi kebahagiaan, cinta, dan keberuntungan. Have a blast on your special day!",
      title: "🥰",
    },
  ];

  useEffect(() => {
    // Get song data from URL parameters
    const songParam = searchParams.get("song");
    if (songParam) {
      try {
        const songData = JSON.parse(decodeURIComponent(songParam));
        setSong(songData);
      } catch (error) {
        console.error("Failed to parse song data:", error);
      }
    }

    // Launch balloons animation with fewer balloons
    if (balloonsRef.current) {
      // Launch just a few balloons at different intervals
      balloonsRef.current.launchAnimation();
    }

    // Add a click event to the document that will trigger on the first click
    const handleFirstClick = () => {
      if (audioRef.current && !isAudioPlaying && !audioRef.current.paused) {
        tryPlayAudio();
      }
    };

    document.addEventListener("click", handleFirstClick);

    // Set up countdown
    const birthdayDate = new Date();
    birthdayDate.setHours(23, 59, 59, 999); // End of today

    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = birthdayDate - now;

      if (difference <= 0) {
        clearInterval(timerInterval);
        setShowConfetti(true);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ hours, minutes, seconds });
    }, 1000);

    return () => {
      document.removeEventListener("click", handleFirstClick);
      clearInterval(timerInterval);
    };
  }, [searchParams]);

  // Set up and attempt to auto-play audio when song data is available
  useEffect(() => {
    if (song && audioRef.current && !attemptedAutoplay) {
      // Set up audio element
      audioRef.current.src = song.audioSrc;
      audioRef.current.volume = 1;
      audioRef.current.muted = true; // Start muted to increase chances of autoplay

      // Try to autoplay with multiple approaches
      tryPlayAudio();
      setAttemptedAutoplay(true);
    }
  }, [song, attemptedAutoplay]);

  // Function to try playing audio with different strategies
  const tryPlayAudio = () => {
    if (!audioRef.current) return;

    // Promise chain to try different autoplay strategies
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setIsAudioPlaying(true);

          // If we started muted, try to unmute after a short delay
          if (audioRef.current.muted) {
            setTimeout(() => {
              // Try to unmute
              audioRef.current.muted = false;
              setIsAudioPlaying(true);
            }, 1000);
          }
        })
        .catch((error) => {
          console.warn("Autoplay was prevented:", error);
          // If autoplay fails, we'll keep the button visible for user interaction
          if (audioRef.current) {
            audioRef.current.muted = false; // Make sure we're not muted for manual play
          }
        });
    }
  };

  // Toggle audio play/pause
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.muted = false; // Ensure audio is not muted when manually played
        audioRef.current
          .play()
          .then(() => {
            setIsAudioPlaying(true);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      } else {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      }
    }
  };

  // Handle gift reveal
  const revealGift = () => {
    setShowGift(true);
  };

  useEffect(() => {
    AOS.init({ duration: 3000 }); // Anda bisa menyesuaikan opsi di sini
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 z-10 text-center">
          <SplitText
            text="HAPPY BIRTHDAY MERY SUKMA HANDAYANI"
            className="text-6xl md:text-9xl font-extrabold text-white mb-4 tracking-tight"
            delay={400}
            animationFrom={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutQuad"
            threshold={0.1}
            rootMargin="0px"
          />

          {/* Song Information */}
          {song && (
            <div className="mt-8 flex flex-col items-center">
              <div className="relative w-64 h-64 mb-4 shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <Image
                  src={song.imageSrc}
                  alt={`${song.title} by ${song.artist}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">{song.title}</h3>
              <p className="text-lg text-white opacity-90 mb-4">
                {song.artist}
              </p>

              {/* Audio Controls */}
              <div className="mt-4">
                <button
                  onClick={toggleAudio}
                  className="px-6 py-2 rounded-full bg-white text-pink-600 font-medium hover:opacity-90 transition-opacity flex items-center"
                >
                  {isAudioPlaying && !audioRef.current?.paused ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pause Music
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Play Music
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Image Section */}
      <section className="w-full min-h-screen px-4 py-10 z-10 text-center md:text-left rounded-xl">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Text content - hidden on mobile, visible on desktop */}
            <div className=" md:w-1/2 pr-8" data-aos="fade-right">
              <h2 className="text-3xl hidden md:block font-bold text-white mb-6">
                <MorphingText texts={["YOUR", "SPECIAL DAY!"]} />
              </h2>
              <p className="text-xl text-justify text-white mb-4">
                This day is all about celebrating you and the incredible person
                you are. I’ve created this special page to show just how much
                you mean to me.
              </p>
              <p className="text-xl text-justify text-white mb-6">
                Explore this interactive birthday card, crafted with love just
                for you. Swipe through cherished memories, read heartfelt
                messages, and enjoy every moment of your special day!
              </p>
            </div>

            {/* iPhone - full width on mobile, half width on desktop */}
            <div className="w-full md:w-1/2 mb-15 md:mb-0" data-aos="fade-left">
              <Iphone15Pro
                className="size-full md:w-full md:h-[600px]"
                src="/images/mey1.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full min-h-screen px-4 py-10 z-10 text-center rounded-xl
    bg-white/40 backdrop-blur-md border border-white/50 shadow-lg
    transition-all duration-300 hover:bg-white/30"
      >
        <div className="flex justify-end">
          <h1
            className="text-xl w-1/2 font-semibold flex justify-start items-start
        bg-white backdrop-blur-md border border-white
        text-pink-600 p-2 md:p-4 md:w-1/4 rounded-xl
        shadow-md cursor-pointer hover:bg-white/50 hover:scale-105 transition-all"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            SWIPE SCREEN IN HERE
            <span className="ml-2 animate-pulse text-2xl select-none">⇆</span>
          </h1>
        </div>
        <div
          style={{ height: "100vh", position: "relative", overflow: "hidden" }}
          className="mt-4"
        >
          <ImageTrail
            items={[
              "images/mey2.png",
              "images/mey3.png",
              "images/mey4.png",
              "images/mey5.png",
              "images/mey6.png",
            ]}
            variant={1}
          />
        </div>
      </section>
      <section className="w-full min-h-screen px-4 py-10 z-10 text-center text-white rounded-xl">
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-transparent w-full">
          <MacbookScroll
            title={
              <span className="text-white text-2xl font-bold">
                Ciee yang udah 17 🤭
              </span>
            }
            src={`/images/mey11.png`}
            showGradient={false}
          />
        </div>
      </section>

      {/* NEW SECTION: Birthday Countdown */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-16">
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-xl md:text-2xl w-1/2 md:w-1/4 font-bold bg-white text-pink-600 p-3 rounded-xl mb-12">
            Birthday Countdown
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-36 h-36 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
              <span className="text-5xl font-bold text-white">
                {countdown.hours}
              </span>
              <span className="text-lg text-white opacity-90">Hours</span>
            </div>
            <div className="w-36 h-36 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
              <span className="text-5xl font-bold text-white">
                {countdown.minutes}
              </span>
              <span className="text-lg text-white opacity-90">Minutes</span>
            </div>
            <div className="w-36 h-36 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
              <span className="text-5xl font-bold text-white">
                {countdown.seconds}
              </span>
              <span className="text-lg text-white opacity-90">Seconds</span>
            </div>
          </div>

          <p className="mt-12 text-xl text-white">
            Until the end of your special day!
          </p>
        </div>
      </section>

      {/* NEW SECTION: Memory Gallery */}
      <section className="w-full min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-end">
            <h2 className="text-xl md:text-2xl w-72 md:w-1/4 font-bold bg-white text-pink-600 p-3 rounded-xl text-center mb-12">
            The one who holds my heart
            </h2>
          </div>

          <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Birthday Wishes */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
            Birthday Wishes
          </h2>
          <div className="w-full flex justify-center">
            <div
              className="w-full max-w-2xl h-full overflow-y-auto max-h-[400px] mx-auto"
              data-aos="fade-up"
            >
              <AnimatedList>
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </AnimatedList>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Birthday Gift */}
      <section className="w-full flex items-center justify-center py-16">
        <div className="h-[40rem] rounded-md flex flex-col antialiase items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-8 bg-gradient-to-r from-pink-600 to-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-4">
            Wishing you the happiest birthday ever!
          </p>
          <p className="text-sm opacity-75">Made with ❤️ just for you</p>
        </div>
      </footer>

      {/* Balloons with reduced count */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <Balloons
          ref={balloonsRef}
          type="default"
          count={5} // Reduced from default (10) to just 5 balloons per launch
          speed={1} // Slowed down the speed for better visibility
        />
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop />
    </main>
  );
}

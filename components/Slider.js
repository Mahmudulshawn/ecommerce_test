"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative mt-10 rounded-xl overflow-hidden w-full h-[40vh] md:h-[50vh]">
      {/* Slide Container */}
      <div
        className="flex transition-transform ease-in-out duration-1000 w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slide.bg} flex flex-col md:flex-row w-full flex-shrink-0 h-full`}
          >
            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl">
                {slide.description}
              </h2>
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Button size="lg">SHOP NOW</Button>
              </Link>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 h-full md:h-full relative">
              <Image
                src={slide.img}
                alt={slide.title}
                // layout="fill"
                width={800}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center transition-transform ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

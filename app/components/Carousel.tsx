'use client'

import React from "react";
import GameCard from "./GameCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Carousel = () => {
  const router = useRouter();

  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 4;

  const setColors = (color2: string): string => {
    const color1 = '#500000';
    const blend1 = blendColors(color1, color2, 0.2);
    const blend2 = blendColors(color1, color2, 0.8);
    return `linear-gradient(90deg, ${color1} 0%, ${blend1} 30%, ${blend2} 70%, ${color2} 100%)`;
  }

  const [gradient, setGradient] = useState<string>(setColors("#500000"));

  const nextSlide = () => {
    setGradient(setColors("#0C2340"));
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalSlides;
      window.location.hash = `item${newIndex}`;
      return newIndex;
    });
  }

  const prevSlide = () => {
    setGradient(setColors("#F2B400"));
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + totalSlides) % totalSlides;
      window.location.hash = `item${newIndex}`;
      return newIndex;
    });
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === 'ArrowRight') {
        nextSlide();
      }
      else if(event.key === 'ArrowLeft') {
        prevSlide();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
  }, [])

  const gradients = [
    setColors("#500000"),
    setColors("#0C2340"),
    setColors("#F2B400"),
    setColors("#ABCDEF"),
  ];


  return (
    <div className="items-center justify-center flex flex-col w-full h-full">
      <div className="relative w-[70vw] h-[70vh]">
        {gradients.map((grad, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-xl transition-opacity duration-500 ease-in-out"
            style={{ background: grad, opacity: slideIndex === i ? 1 : 0, pointerEvents: "none", zIndex: 0}}
          />
        ))}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <a className="btn btn-circle absolute left-4 top-1/2 pointer-events-auto" onClick={prevSlide} > {" "} ❮{" "} </a>
          <a className="btn btn-circle absolute right-4 top-1/2 pointer-events-auto" onClick={nextSlide} > {" "} ❯{" "} </a>
        </div>
        <div className="carousel z-15 w-full h-full pointer-events-none ">
          <div id="item0" className="carousel-item w-full">
            <GameCard title="VS UTSA" />
          </div>
          <div id="item1" className="carousel-item w-full">
            <GameCard title="VS Utah State"/>
          </div>
          <div id="item2" className="carousel-item w-full">
            <GameCard title="VS Auburn"/>
          </div>
          <div id="item3" className="carousel-item w-full">
            <GameCard title="VS Miss State"/>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item0" className="btn btn-xs" onClick={() => setSlideIndex(0)}>
            {" "}
            1{" "}
          </a>
          <a href="#item1" className="btn btn-xs" onClick={() => setSlideIndex(1)}>
            {" "}
            2{" "}
          </a>
          <a href="#item2" className="btn btn-xs" onClick={() => setSlideIndex(2)}>
            {" "}
            3{" "}
          </a>
          <a href="#item3" className="btn btn-xs" onClick={() => setSlideIndex(3)}>
            {" "}
            4{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

function blendColors(color1: string, color2: string, percent: number) {
  const c1 = color1.match(/\w\w/g)?.map((c) => parseInt(c, 16));
  const c2 = color2.match(/\w\w/g)?.map((c) => parseInt(c, 16));

  if(!c1 || !c2) {
    throw new Error("Invalid color format");
  }

  const blended = c1.map((v, i) => Math.round(v + percent * (c2[i] - v)));
  return ( "#" + blended.map((v) => v.toString(16).padStart(2, "0")).join(""));
}
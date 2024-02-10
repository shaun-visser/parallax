'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRef } from 'react';
import Parallax from 'parallax-js';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      pointerEvents: true,
    });
  }, []);

  return (
    <main
      id="scene"
      className="h-screen w-screen relative overflow-hidden bg-blue-100"
    >
      {/* <div
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 65%, rgba(0, 0, 0, 0.7))',
        }}
        className="absolute pointer-events-none z-50 w-full h-full top-0 left-0"
      ></div> */}
      <div className="absolute w-full h-full" data-depth="0.05">
        <div
          className="bg-cover absolute -left-[5%] -top-[5%] w-[110%] -bottom-[5%]"
          style={{ backgroundImage: "url('/bg.png')" }}
        ></div>
      </div>
      <div className="absolute w-full h-full" data-depth="0.1">
        <div className="absolute z-10 -left-[2%] bottom-[5.7%] md:bottom-[7.4%]] xl:bottom-[8.4%] 2xl:bottom-[11.4%] w-[98.046875%]">
          <img
            src="/mountain.png"
            className="w-full max-w-none pointer-events-none"
            alt=""
          />
        </div>
      </div>
      <div
        className="absolute w-full h-full z-20 pointer-events-none"
        data-depth="0.20"
      >
        <div className="absolute -left-[2%] bottom-0 xl:-bottom-[2%] 2xl:-bottom-[2%] w-[80.710938%]">
          <img
            src="/clouds.png"
            className="w-full max-w-none pointer-events-none"
            alt=""
          />
        </div>
      </div>
      <div
        className="absolute w-full h-full z-50 pointer-events-none"
        data-depth="0.30"
      >
        <div className="absolute z-10 -right-[3%] bottom-0 xl:-bottom-[3%] 2xl:-bottom-[3%] w-[70.546875%]">
          <img src="/foreground.png" className="w-full max-w-none" alt="" />
        </div>
      </div>
      <div
        className="absolute w-full h-full z-10 pointer-events-auto"
        data-depth="0.10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase text-white">
          <h1 className="font-bold text-8xl">Cape Town</h1>
          <h2 className="font-light text-5xl">South Africa</h2>
        </div>
      </div>
      {/*
      <img
        src="/clouds.png"
        className="absolute max-w-none transition duration-300 ease-in-expo pointer-events-none top-[90.705%] left-[48.194%] w-[194.583%] parallax transform -translate-y-1/2 -translate-x-1/2 z-40"
        alt=""
        data-depth="0.4"
      />
      <img
        src="/foreground.png"
        className="absolute max-w-none transition duration-300 ease-in-expo pointer-events-none top-[56.159%] left-[85.33%] w-[138.333%] parallax transform -translate-y-1/2 -translate-x-1/2 z-40"
        alt=""
        data-depth="0.5"
      />
      <div
        className="text absolute transition duration-300 ease-in-expo parallax top-[calc(50%+48px)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase text-white z-30"
        data-depth="0.6"
      >
        <h1 className="font-bold text-8xl">Cape Town</h1>
        <h2 className="font-light text-5xl">South Africa</h2>
      </div> */}
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 200;
const getFrameSrc = (i: number) =>
`/sourse-type-2/Sequence 1920_${String(i).padStart(2, "0")}.jpg`;


export default function ScrollSequence() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    let loaded = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loaded++;
        if (loaded === 1) setIsLoaded(true);
        if (loaded === frameCount) setLoadedImages(images);
      };
      images.push(img);
    }
  }, []);

  useEffect(() => {

    if (!isLoaded || !imgRef.current || !containerRef.current) return;

    const obj = { frame: 0 };
    const updateImage = () => {
      const current = Math.floor(obj.frame);
      imgRef.current!.src =
        loadedImages[current]?.src || getFrameSrc(current + 1);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(obj, {
      frame: frameCount - 1,
      onUpdate: updateImage,
      ease: "none",
    });

    if (headerRef.current) {
      tl.to(headerRef.current, { opacity: 0, y: -50, duration: 0.5 }, 0);
    }

    if (canvasWrapperRef.current) {
      const scaleStart = frameCount - 4;
      const scaleProgress = 4 / frameCount;
      // scaleStart / frameCount -- if needed to be more precise
      tl.to(
        canvasWrapperRef.current,
        {
          scale: 0.5,
          transformOrigin: "center center",
          ease: "power2.out",
        },
        `>-${scaleProgress}`
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [isLoaded, loadedImages]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-white overflow-hidden p-0 m-0 b"
    >
      <div
        ref={headerRef}
        className="absolute inset-0 py-10 px-4 z-10 flex items-center justify-center text-center"
      >
        <div className="mx-auto py-4 w-full w-max-[560px] ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white  block">
             Welcome to Our Product
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Empowering teams to move from prototype to production with
            confidence.
          </p>
        </div>
      </div>
      <div
        ref={canvasWrapperRef}
        className="w-full h-dvh will-change-transform relative p-0 m-0 overflow-hidden"
      >
        <img
          ref={imgRef}
          src={getFrameSrc(1)}
          alt="scroll sequence"
          className="object-cover w-full h-full inset-0 absolute"
        />
      </div>
    </section>
  );
}
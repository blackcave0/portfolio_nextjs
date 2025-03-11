"use client";
import React from "react";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

import { CanvasRevealEffectDemo } from "../components/CanvasRevelEffect/CanvasRevelEffect";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Card from "../components/UiLayout/Card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const Projects = () => {
  const cardData = [
    {
      category: "E-commerce",
      title: "MERN Stack E-commerce",
      hoverTitle: "Next.js E-commerce",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features include user authentication, product catalog, shopping cart, and secure checkout.",
      imageSrc: "/noise.png",
      // hoverImageSrc: "Wedding.gif",
      hoverImageSrc: "/Shopping_Basket.gif",
      link: "https://google.com",
    },
    {
      category: "Real Estate",
      title: "MERN Stack Real Estate",
      hoverTitle: "Next.js Real Estate",
      description:
        "A real estate listing website built with React, Node.js, Express, and MongoDB. Features include property search, detailed listings, user accounts, and contact forms.",
      imageSrc: "/noise.png",
      hoverImageSrc: "/Housekeys.gif",
      link: "https://google.com",
    },
    {
      category: "Matrimonial",
      title: "MERN Stack Matrimonial",
      hoverTitle: "Next.js Matrimonial",
      description:
        "A matrimonial website built with React, Node.js, Express, and MongoDB. Features include user profiles, partner preferences, search filters, and secure communication.",
      imageSrc: "/noise.png",
      hoverImageSrc: "/Wedding.gif",
      link: "https://google.com",
    },
  ];
  return (
    <>
      {/* <AnimatedContent> */}
      <div data-aos="fade-up" data-aos-duration="600">
        <div className="flex flex-col items-center justify-center h-96">
          <div className="bg-[var(--name-background)] px-5 py-2 rounded-full border border-gray-700">
            <h1 className="font-inter tracking-wide font-light text-sm  text-white">
              Portfolio
            </h1>
          </div>
          <div className="mt-12 md:mt-8 lg:mt-12">
            <h1 className="font-raleway tracking-wide font-bold text-3xl md:text-4xl lg:text-5xl  text-white">
              <span className="text-zinc-500">My Latest</span> Projects
            </h1>
          </div>
        </div>

        <div className="flex mt-[2.5rem] md:mt-[7.3rem] lg:mt-[3.5rem]">
          <Card cards={cardData} />
          {/* <Card  /> */}
        </div>
      </div>

      {/* <CanvasRevealEffectDemo /> */}

      {/* </AnimatedContent> */}
    </>
  );
};

export default Projects;

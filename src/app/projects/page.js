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
      category: "Healthcare",
      title: "Doctor Appointment System",
      hoverTitle: "Medical Booking Platform",
      description:
        "A comprehensive healthcare platform built with Next.js and Supabase database. Features include doctor appointment scheduling, medicine ordering, patient profiles, and secure payment processing.",
      imageSrc: "/noise.png",
      hoverImageSrc: "/doctor.gif",
      link: "https://mediconnect-seven.vercel.app/",
    },
    {
      category: "Fashion",
      title: "Fashion Store",
      hoverTitle: "Next.js Fashion Shop",
      description:
        "A fashion e-commerce platform built with Next.js and Supabase database. Features include product catalog, shopping cart, user accounts, and secure checkout system.",
      imageSrc: "/noise.png",
      hoverImageSrc: "/fashion.gif",
      link: "https://ecommerc-memonto.vercel.app/",
    },
    {
      category: "Matrimonial",
      title: "True Matrimonial",
      hoverTitle: "Next.js Matrimonial",
      description:
        "A matrimonial website built with React, Node.js, Express, and MongoDB. Features include user profiles, partner preferences, search filters, and secure communication.",
      imageSrc: "/noise.png",
      hoverImageSrc: "/Wedding.gif",
      link: "https://truematrimonial.pages.dev/",
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

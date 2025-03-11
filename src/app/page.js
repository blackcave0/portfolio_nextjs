/* eslint-disable react/no-unescaped-entities */
// import SplitText from "@/app/components/SplitText/SplitText";

import { ArrowUpRight, CirclePlay } from "lucide-react";

import TrueFocus from "./components/TrueFocus/TrueFocus";
// import MouseCursor from "./components/BlobCursor/MouseCursor";
import { RetroGrid } from "@/components/magicui/retro-grid";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Projects from "./projects/page";
// import SmoothScroll from "./components/SmoothScroll";
import { WordRotate } from "@/components/magicui/word-rotate";
import { IconCloudDemo } from "./components/IconCloud/IconCloud";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { FollowingPointerDemo } from "./components/FollowPointer/FollowPointerDemo";
import { TextReveal } from "@/components/magicui/text-reveal";
import Image from "next/image";
import Hero02 from "@/components/hero-02/hero-02";
import React from "react";
import About_Me from "./about/page";
import MyCareer from "./career/page";
import BlogComponent from "./blog/page";
import Contact from "./contact/page";

// import "./styles.css";

export const Card = ({ children }) => {
  return (
    <div className="w-[480px] h-[581px] block shadow-[0px_16px_64px_0px_#000000] bg-gradient-to-b from-[#0e0e0e] to-[rgb(30,30,30)] overflow-hidden opacity-80 z-0 rounded-none relative">
      {" "}
      {/* Added relative positioning */}
      {children}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>{" "}
      {/* Grain overlay */}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex  items-center justify-center  h-screen ">
        {/* <MouseCursor /> */}
        <div
          className="container  mx-auto px-4 md:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="">
              <p className="text-md bg-[var(--name-background)] font-montserrat mb-[6.3rem] dark:text-[var(--foreground)] border border-gray-700 p-2 w-[12.2rem] rounded-full">
                Hello, I'm Daksh 👋
              </p>
            </div>

            <div className="">
              <div className="flex flex-wrap items-center justify-center ">
                <div className="w-sx">
                  <h1 className="text-4xl md:text-6xl lg:text-6xl  font-inter font-bold leading-[1]">
                    Full Stack
                  </h1>
                </div>
                <div className="mx-3 mt-3 md:mt-0 lg:mt-0 w-3xs">
                  {
                    <WordRotate
                      className="text-2xl md:text-4xl lg:text-5xl text-black font-raleway leading-[1] font-bold "
                      words={[
                        "Developer",
                        "Engineer",
                        "Designer",
                        "Freelancer",
                      ]}
                    />
                  }
                </div>
              </div>
              <div className="mt-[3.3rem] md:mt-[4.3rem] lg:mt-[4.3rem]">
                <TrueFocus
                  sentence="Crafting engaging & AI-powered web experiences"
                  manualMode={false}
                  blurAmount={2}
                  borderColor="yellow"
                  animationDuration={1}
                  pauseBetweenAnimations={1}
                />
              </div>

              <div className="mt-[12.3rem] md:mt-[22.3rem] lg:mt-[22.3rem]">
                <a
                  // mailto="daksh.shah1010@gmail.com"
                  href="mailto:sarvesh.sri00@gmail.com"
                  className="bg-transparent  border border-gray-500 hover:bg-white text-white hover:text-black py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <main className=" absolute  -z-10 h-screen w-full">
          <RetroGrid />
        </main>
      </div>
      <main><IconCloudDemo /> </main>
      <main id="portfolio">
        <Projects />
      </main>

      <main className=" px-4 md:px-6 lg:px-6 mt-[8.2rem] md:mt-[3.3rem] lg:mt-[10.5rem]">
        <div
          className="container flex items-center justify-center mx-auto px-3 md:px-8 lg:px-[14.2rem]  h-100"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <p className="text-center font-arsenal text-2xl font-medium  md:text-3xl lg:text-3xl lg:leading-[2.5rem]  text-white">
            Optimizing performance and maximizing impact through intelligent
            software architecture,{" "}
            <span className="text-zinc-500">
              seamlessly blending animated UI/UX with AI-powered code across web
              and mobile platforms. Say no more to bloated systems that drain
              resources and user engagement. With my impactful software
              engineering and creative tech fusion,
            </span>{" "}
            you will scale to the moon!
          </p>
        </div>
      </main>

      {/* <div className="flex items-center justify-center">
        <div className="z-10  flex min-h-64 w-[70vw] ">
          <TextReveal
            className={"font-arsenal "}
            text="Optimizing performance and maximizing impact through intelligent software architecture, seamlessly blending animated UI/UX with AI-powered code across web and mobile platforms. Say no more to bloated systems that drain resources and user engagement. With my impactful software engineering and creative tech fusion, you will scale to the moon!"
          />
        </div>
      </div> */}

      <main id="about">
        <About_Me />
      </main>
      <section className="flex items-center justify-center h-screen-xl">
        <main id="career">
          <MyCareer />
        </main>
      </section>
      <section className="flex items-center justify-center">
        <main
          id="contact"
          className="w-screen relative bg-cover bg-bottom "
          style={{
            backgroundImage: "url('/tail.jpg')",
            height: "100vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-[#1a1a1a]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
          <Contact />
        </main>{" "}
      </section>
      <main id="blog">
        <BlogComponent />
      </main>
    </>
  );
}

"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Instagram } from "../icons/IconInstagram";
import Link from "next/link";
import { IconGithub } from "../icons/IconGithub";
import { IconLinkedin } from "../icons/IconLinkedin";
import { IconMedium } from "../icons/IconMedium";
import {
  DailydevIcon,
  Dailydotdev,
  IconDailyDev,
  IconDailydev,
} from "../icons/IconDaily";

/* eslint-disable react/no-unescaped-entities */
const About_Me = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Daksh Srivastava",
            jobTitle: "Full Stack Developer",
            url: "https://your-portfolio-domain.com",
            sameAs: [
              "https://linkedin.com/in/daksh-srivastava",
              "https://github.com/blackcave0",
              "https://medium.com/@capricious-ax",
              "https://app.daily.dev/capricious_daksh",
            ],
            skills: [
              "JavaScript",
              "React.js",
              "Node.js",
              "MongoDB",
              "Next.js",
              "React Native",
              "Tailwind CSS",
              "AI Integration",
              "Cloud Technologies",
            ],
          }),
        }}
      />

      <main>
        <div className="min-h-screen mt-[5rem] md:mt-0 lg:mt-0 flex items-center justify-center px-4 md:px-6 lg:px-6">
          <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-6 lg:px-6 py-8 md:py-10 lg:py-12">
            {/* Image Container */}
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              className="w-full h-[400px] md:h-[480px] lg:h-[580px]  block shadow-[0px_16px_64px_0px_#00000] bg-gradient-to-b from-[#0e0e0e] to-[rgb(30,30,30)] overflow-hidden opacity-80 rounded-2xl relative mx-auto shadow-xl"
            >
              <Image
                src="/new_me.png"
                alt="Daksh Srivastava - Full Stack Developer"
                width={500}
                height={500}
                priority
                className="h-80 w-64 md:h-96 md:w-72 lg:h-[30rem] lg:w-80 rounded-t-2xl absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
              />
            </div>
            <div
              className="mt-5 lg:mt-2"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              {/* <Badge className="flex items-center justify-center text-md bg-[var(--name-background)]  mb-[3.3rem] dark:text-[var(--foreground)] border border-gray-700 px-8 py-3 max-w-min rounded-full "> */}
              <div className="flex max-w-min bg-[var(--name-background)] px-5 py-2  rounded-full border border-gray-700">
                <h1 className="font-inter tracking-wide font-light text-sm  text-white">
                  About
                </h1>
              </div>
              {/* </Badge> */}
              <h1 className="mt-4 md:mt-5 lg:mt-6 max-w-[30ch] text-3xl md:text-4xl lg:text-[2.35rem] xl:text-4xl font-inter font-medium font-black leading-[1.2] tracking-tight">
                <span className="text-zinc-500 font-normal">
                  I'm a full-stack developer specializing in the
                </span>{" "}
                MERN STACK
              </h1>
              <p className="mt-4 md:mt-5 lg:mt-8 max-w-[50ch] font-inter text-zinc-600 text-base md:text-lg lg:text-lg">
                With a proven track record in MERN stack development, I'm adept
                at building high-quality, performant web applications and I am
                eager to design effective UI/UX, integrate modern AI and utilize
                cloud technologies in my future projects to ensure scalability
                and resilience in the process of providing end-to-end web
                solutions.
              </p>
              <div className="grid grid-cols-4 max-auto gap-4 mt-8 md:mt-10 lg:mt-12  flex items-center md:gap-4">
                {/* <div className="col-span-2 font-inter">
                  <h4 className="text-zinc-500">Years of experience</h4>
                  <strong className="text-2xl md:text-2xl lg:text-3xl">
                    3+
                  </strong>
                </div> */}
                {[
                  { label: "Years of experience", value: "3+" },
                  { label: "Clients", value: "15+" },
                  { label: "Projects Completed", value: "25+" },
                  { label: "Hours of Coding", value: "10,000+" },
                ].map((item, index) => (
                  <div key={index} className="space-y-1 col-span-2">
                    <p className="text-sm font-inter text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-2xl font-montserrat font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 md:mt-10 lg:mt-12">
                {/* <Instagram className="w-10 h-10" /> */}
                <Link
                  href="https://www.instagram.com/_capricious._.ax"
                  target="_blank"
                  className="transform transition-transform hover:scale-110 duration-300"
                >
                  <Instagram />
                </Link>

                <Link
                  href="https://github.com/blackcave0"
                  target="_blank"
                  className="transform transition-transform hover:scale-110 duration-300"
                >
                  <IconGithub />
                </Link>

                <Link
                  href="https://linkedin.com/in/sarvesh-srivastava0"
                  target="_blank"
                  className="transform transition-transform hover:scale-110 duration-300"
                >
                  <IconLinkedin />
                </Link>

                <Link
                  href="https://medium.com/@capricious-ax"
                  target="_blank"
                  className="transform transition-transform hover:scale-110 duration-300"
                >
                  <IconMedium />
                </Link>

                <Link
                  href="https://app.daily.dev/capricious_daksh"
                  target="_blank"
                  className="transform transition-transform hover:scale-110 duration-300"
                >
                  <Dailydotdev />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="flex justify-center px-4 md:px-6 lg:px-6 mt-[7.2rem] md:mt-[3.3rem] lg:mt-[5.5rem]">
        <div className="relative max-w-screen-xl  bg-[#121314] border rounded-3xl border-gray-700 text-1xl py-6 inline-flex flex-nowrap overflow-hidden mx-2 md:mx-8 lg:mx-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-black z-10"></div>
          <ul className="flex font-arsenal items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll whitespace-nowrap">
            <li className="inline">Web Development</li>
            <li className="inline">Mobile App Development</li>
            <li className="inline">Software Development</li>
            <li className="inline">UI Design</li>
            <li className="inline">Web Design</li>
            <li className="inline">Web Development</li>
            <li className="inline">Mobile App Development</li>
            <li className="inline">Software Development</li>
            <li className="inline">UI Design</li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll whitespace-nowrap"
            aria-hidden="true"
          >
            <li className="inline">Web Development</li>
            <li className="inline">Mobile App Development</li>
            <li className="inline">Software Development</li>
            <li className="inline">UI Design</li>
            <li className="inline">Web Design</li>
            <li className="inline">Web Development</li>
            <li className="inline">Mobile App Development</li>
            <li className="inline">Software Development</li>
            <li className="inline">UI Design</li>
          </ul>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-black z-10"></div>
        </div>{" "}
      </main>
    </>
  );
};

export default About_Me;

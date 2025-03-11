"use client";

const MyCareer = () => {
  return (
    <>
      <div className="px-6 md:px-6 lg:px-6 mt-[7.2rem] md:mt-[7.3rem] lg:mt-[10.5rem]">
        <div className="max-w-screen-xl w-full grid lg:grid-cols-1 mx-auto ">
          <div data-aos="fade-up" data-aos-duration="400" className="bg-[var(--name-background)] max-w-min px-5 py-2   rounded-full border border-gray-700">
            <h1 className="font-inter tracking-wide font-light text-sm  text-white">
              Career
            </h1>
          </div>
          <div className="flex  " data-aos="fade-up" data-aos-duration="400">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-inter font-noraml leading-[1] text-white mt-[2.2rem] md:mt-[2.3rem] lg:mt-[2.5rem]">
              <span className="text-zinc-600">And This Is</span> My Career
            </h1>
          </div>
        </div>
        <div className="max-w-screen-xl w-full mx-auto mt-[5.2rem] md:mt-[2.3rem] lg:mt-[5.5rem]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="grid lg:grid-cols-2 font-inter ">
              <div className="flex flex-col md:flex-row lg:flex-row  md:gap-3 lg:gap-3">
                <h1 className="text-2xl md:text:lg lg:text-2xl font-bold">
                  Freelance Web Developer
                </h1>
                <p className="font-semibold text-zinc-600">2021 - 2024</p>
              </div>
              <div>
                <p className="font-inter font-normal text-sm md:text-sm lg:text-base text-zinc-500">
                  As a freelance web developer, I crafted modern websites and
                  web applications, leveraging technologies such as{" "}
                  <span className="text-gray-100">
                    HTML, CSS, JavaScript, React, Node.js, and MongoDB
                  </span>{" "}
                  to deliver high-quality, responsive designs. I focus on
                  creating performant and user-friendly websites that help
                  clients achieve their online objectives.
                </p>
              </div>
            </div>
            <hr className="my-[3.3rem] " />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="grid lg:grid-cols-2 font-inter ">
              <div className="flex flex-col md:flex-row lg:flex-row  md:gap-3 lg:gap-3">
                <h1 className="text-2xl md:text:lg lg:text-2xl font-bold">
                  Freelance Android Developer
                </h1>
                <p className="font-semibold text-zinc-600">2023 - 2024</p>
              </div>
              <div>
                <p className="font-inter font-normal  text-sm md:text-sm lg:text-base text-zinc-500">
                  As a freelance Android developer{" "}
                  <span className="text-gray-100">
                    experienced with React Native,
                  </span>{" "}
                  I developed custom mobile applications for Android devices. My
                  expertise{" "}
                  <span className="text-gray-100">includes UI/UX design,</span>{" "}
                  API integration, state management (e.g., Redux, Context API),
                  and deployment to the Google Play Store. I worked closely with
                  clients to translate their ideas into functional, performant,
                  and visually appealing mobile solutions.
                </p>
              </div>
            </div>
            <hr className="my-[3.3rem] " />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="grid lg:grid-cols-2 font-inter ">
              <div className="flex flex-col md:flex-row lg:flex-row  md:gap-3 lg:gap-3">
                <h1 className="text-2xl md:text:lg lg:text-2xl font-bold">
                  Bachelor Degree
                </h1>
                <p className="font-semibold text-zinc-600">2016 - 2019</p>
              </div>
              <div>
                <p className="font-inter font-normal  text-sm md:text-sm lg:text-base text-zinc-500">
                  Bachelor of Commerce (B.Com) with a{" "}
                  <span className="text-gray-100">
                    specialization in Economics,
                  </span>{" "}
                  equipping me with a comprehensive{" "}
                  <span className="text-gray-100">
                    understanding of business operations and economic systems.
                    Proficient in applying economic theories
                  </span>{" "}
                  and quantitative methods to make informed business decisions.
                </p>
              </div>
            </div>
            <hr className="my-[3.3rem] " />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCareer;

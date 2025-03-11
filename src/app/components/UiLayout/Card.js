/* /* /* eslint-disable react/no-unescaped-entities */
 "use client/";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ cards }) => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-6 lg:px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto ">
          {cards?.map((card, index) => (
            <Link
              key={index}
              href={`${card.link}`}
              target="_blank"
              className="group w-full bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border "
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="relative">
                <div className="px-6 py-5">
                  <div className="group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1">
                    {card.category}
                  </div>
                  <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                    {card.title}
                  </span>
                  <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                    {card.hoverTitle}
                  </span>
                  <p className="text-sm text-slate-500">{card.description}</p>
                </div>
                <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out ">
                  <Image
                    className="group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0"
                    src={card.imageSrc}
                    width={500}
                    height={100}
                    alt={`Card image ${index + 1}`}
                  />
                  {
                    <Image
                      className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  object-cover duration-300  h-full  m-0 p-0"
                      src={card.hoverImageSrc}
                      width={500}
                      height={100}
                      alt={`Card image ${index + 1} displaying on hover`}
                      aria-hidden="true"
                    />
                  }
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default Card;

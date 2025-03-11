/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { PersonalData } from "../data/PersonalData";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="md:flex justify-between items-start">
          {/* Personal Info */}
          <div className="flex flex-col md:flex-col items-start mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/new_me.png"
                alt="Daksh"
                width={40}
                height={40}
                className="h-[40px] rounded-full mr-4 mb-2 md:mb-0 object-cover border-zinc-100 border-2"
              />
              <h4 className="text-sm md:text-md font-poppins lg:text-lg font-medium">
                {PersonalData.name}{" "}
              </h4>
            </div>
            <div className="text-sm text-gray-400 lg:mt-7">
              <p className="font-opensans text-sm text-gray-400">
                MERN stack developer building 'future-proof' apps with modern
                design.
              </p>
              <p className="font-opensans text-sm text-gray-400">
                {PersonalData.email}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-[5rem]">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              <div>
                <ul className="text-lg font-opensans flex flex-col gap-1 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-500 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Contact me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Book a call
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-lg text-gray-400 flex flex-col gap-1">
                  <li>
                    <a
                      href={PersonalData.social.linkedin}
                      className="hover:text-blue-500 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={PersonalData.social.instagram}
                      className="hover:text-blue-500 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={PersonalData.social.github}
                      className="hover:text-blue-500 transition-colors"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href={PersonalData.social.medium}
                      className="hover:text-blue-500 transition-colors"
                    >
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-8 pt-4 text-center md:text-left text-xxs text-gray-400 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center">
          <div className="font-montserrat text-gray-100  text-[3rem] md:text-[7rem] lg:text-[7rem] font-bold opacity-20 pointer-events-none">
            DAKSH SRIVASTAVA
          </div>
        </div>
      </div>

      {/* Background Text */}
    </footer>
  );
};

export default Footer;

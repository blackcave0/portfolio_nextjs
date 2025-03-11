import { PersonalData } from "@/components/data/PersonalData";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    // style={{ backgroundImage: "url('/noise.png')" }}
    <>
      <div className="h-[100vh] flex items-center  ">
        {/* <MouseCursor /> */}
        <div
          className="container mx-auto  md:px-6 lg:px-8"
          // data-aos="fade-up"
          // data-aos-duration="700"
        >
          <div className="text-center">
            <div
              className="flex max-w-min bg-[var(--name-background)] px-5 py-2  rounded-full border border-gray-700 mx-auto "
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="font-inter tracking-wide font-light text-sm  text-white">
                Contact
              </h1>
            </div>

            <div className="mt-16" data-aos="fade-up" data-aos-duration="700">
              <div className="flex flex-wrap items-center justify-center ">
                <div className="w-full">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl  font-inter font-base leading-[1]">
                    <span className="text-zinc-600">Let's Get in</span> Touch
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-8">
                <div className="w-full">
                  <p className="text-sm md:text-xl lg:text-base  font-poppins text-zinc-500 font-base leading-[1]">
                    Let's connect and start with your project ASAP.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <a
                  // mailto="daksh.shah1010@gmail.com"
                  href={PersonalData.phone}
                  className="bg-transparent border border-gray-500 hover:bg-white font-inter text-white hover:text-black py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Book a call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline-block ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:info@example.com"
                  className=" hover:text-white font-montserrat text-base font-normal transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <span className="text-gray-500">Or email</span>{" "}
                  {PersonalData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

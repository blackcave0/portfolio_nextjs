import SplitText from "@/app/components/SplitText/SplitText";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import MouseCursor from "./components/BlobCursor/MouseCursor";
// import "./styles.css";

export default function Home() {
  return (
    <>
      <MouseCursor />
      <div className="flex items-center justify-center h-screen ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="">
              <p className="text-md bg-[var(--name-background)] mb-8 dark:text-[var(--foreground)] border border-gray-700 p-2 w-[12.2rem] rounded-full">
                Hello, I&#39;m Daksh
              </p>
            </div>
            <div className="">
              <h1 className="text-7xl  mb-8 font-raleway font-semibold">
                Full Stack Engineer
              </h1>
              <TrueFocus
                sentence="Crafting engaging & AI-powered web experiences"
                manualMode={false}
                blurAmount={2}
                borderColor="yellow"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />

              <div className="mt-[2.3rem]">
                <a
                  href="#"
                  className="bg-transparent border border-gray-500 hover:bg-white text-white hover:text-black py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// SmoothScroll.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollContainer = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Prevent horizontal scroll.
    document.body.style.overflowX = "hidden";

    // Give ScrollTrigger time to calculate
    // Wait for the DOM to be ready (important in Next.js).
    const timeoutId = setTimeout(() => {
      if (!scrollContainer.current || !contentRef.current) return;

      const scroller = scrollContainer.current;
      const content = contentRef.current;

      // Config
      const smoothScrollConfig = {
        ease: "power3.out",
        duration: 1,
      };

      // Set initial opacity for fade-in effect
      gsap.set(content, { opacity: 0.5 });

      // Setup ScrollTrigger
      ScrollTrigger.create({
        trigger: scroller,
        scroller: window,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const scrollPos = -self.scroll();

          // Smooth scroll
          gsap.to(scroller, {
            y: scrollPos,
            duration: smoothScrollConfig.duration,
            ease: smoothScrollConfig.ease,
            overwrite: "auto",
          });

          // Fade-in effect on every scroll
          gsap.to(content, {
            opacity: 1,
            duration: 0.6, // Slightly longer duration
            ease: "power2.out", // Different easing
            overwrite: "auto",
          });
        },
        invalidateOnRefresh: true,
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.killAll();
        clearTimeout(timeoutId);
      };
    }, 500);
  }, []);

  return (
    <div
      className="scroll-container"
      ref={scrollContainer}
      style={{
        width: "100%",
        height: "50%",
        overflow: "hidden",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;

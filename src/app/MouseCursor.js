"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import './style.css'
export default function App() {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    if (ref.current) {
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
        // calculate x and y coordinates
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        // update state
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      className="circle"
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "spring",
      }}
    />
  );
}

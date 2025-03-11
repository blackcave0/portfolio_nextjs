// components/SmoothScrollLink.js (using window.scrollTo)
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function SmoothScrollLink({ href, children }) {
  const [targetElement, setTargetElement] = useState(null);

  useEffect(() => {
    if (href) {
      const targetId = href.startsWith("#") ? href.substring(1) : href;
      const element = document.getElementById(targetId);
      setTargetElement(element);
    }
  }, [href]);

  const handleClick = (e) => {
    e.preventDefault();

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 50; // Calculate target position with offset

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!targetElement && href && href.startsWith("#")) {
    return href ? (
      <Link
        href={href}
        onClick={handleClick}
        style={{ pointerEvents: "none", color: "gray" }}
      >
        {children}
      </Link>
    ) : null;
  }

  return href ? (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  ) : null;
}

export default SmoothScrollLink;

"use client";
import { useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function BackToTopButton({
  color = "#A842F9",
  hoverColor = "#8b34d2",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const header = document.querySelector("#project-header");
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (header) observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-50 transition-opacity duration-300  ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top">
      <IoArrowUpCircleOutline
        className=" transition-colors duration-300 drop-shadow-[0_4px_10px_rgba(168,66,249,0.4)]"
        size={48}
        style={{
          color: isVisible ? color : "transparent",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = color)}
      />
    </button>
  );
}

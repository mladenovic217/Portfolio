import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const totalItems = 56;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = Array.from({ length: totalItems });

  return (
    <div className="scroll-progress">
      {items.map((_, i) => {
        const itemProgress = ((i + 1) / totalItems) * 100;
        const isActive = progress >= itemProgress;

        return (
          <div
            key={i}
            className={`scroll-progress__item ${isActive ? "active" : ""}`}
            style={{ transitionDelay: `${i * 0.02}s` }}
          />
        );
      })}
    </div>
  );
}

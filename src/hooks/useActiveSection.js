import { useState, useEffect } from "react";

export function useActiveSection() {
  const [active, setActive] = useState("home");
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("section, #home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            setActive(id);
            setIsHero(id === "home" || id === "about");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("hero-active", isHero);
  }, [isHero]);

  return { active, isHero };
}

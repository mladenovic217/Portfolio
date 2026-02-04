import { useEffect } from "react";

export default function useScrollReveal(
  selector = "[data-animate]",
  threshold = 0.3,
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}

import { useEffect, useState } from "react";

export default function useTypewriter(
  fullText,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 700
) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, pause, fullText, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

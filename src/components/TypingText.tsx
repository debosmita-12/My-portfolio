
import { useEffect, useState } from "react";

const phrases = [
  "I build intelligent applications.",
  "I explore machine learning.",
  "I develop full-stack systems.",
  "I research computer vision.",
];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    let delay = deleting ? 38 : 78;

    if (!deleting && text === phrase) {
      delay = 1500;
    } else if (deleting && text === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else if (deleting) {
        setText(phrase.substring(0, text.length - 1));
      } else {
        setText(phrase.substring(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="typing-text">
      {text}
    </span>
  );
}

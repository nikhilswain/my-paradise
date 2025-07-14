"use client";

import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function AnimatedText({
  texts,
  className = "",
  interval = 2000,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
}

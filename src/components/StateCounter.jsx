import { useEffect, useRef, useState } from "react";

const StatCounter = ({ targetNumber, duration = 4000 }) => {
  // 1. Increased default to 4000ms (4 seconds)
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const totalFrames = duration / 16;
    const incrementStep = targetNumber / totalFrames;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= targetNumber) {
          clearInterval(timer);
          return targetNumber;
        }
        return prevCount + incrementStep;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, targetNumber, duration]);

  return <span ref={elementRef}>{Math.floor(count)}</span>;
};

export default StatCounter;

"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Counter({ end = 100, decimals = 0, duration = 3 }) {
  const wrapperRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={wrapperRef} className="count" data-from="0" data-to={end}>
      {start ? <CountUp end={end} duration={duration} decimals={decimals} /> : "0"}
    </span>
  );
}
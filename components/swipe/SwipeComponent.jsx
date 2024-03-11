"use client";

import React, { useRef, useState } from "react";

export default function SwipeComponent({ children }) {
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const swipeRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const touch = e.touches[0];
    const difference = startX - touch.clientX;
    swipeRef.current.style.transform = `translateX(${-difference}px)`;
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    swipeRef.current.style.transform = "";
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={swipeRef}
      className="overflow-x-hidden"
    >
      {children}
    </div>
  );
}

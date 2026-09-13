import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  dataCursor?: string;
  onClick?: () => void;
  key?: React.Key;
}

/**
 * SpotlightCard: An interactive card that mirrors the Hero section's spotlight mechanic.
 * Tracks cursor position to cast a subtle, soft radial illumination across the card's surface
 * and border, with ZERO unnatural 3D tilt or distortion. 100% responsive on mobile and desktop.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(140, 36, 36, 0.08)',
  dataCursor,
  onClick,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={dataCursor}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
    >
      {/* Subtle radial spotlight illumination layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Delicate border glow highlight right under the cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity: opacity * 0.9,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, rgba(140, 36, 36, 0.25), transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Card Children Content */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </div>
  );
}

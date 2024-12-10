"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { useMousePosition } from "./use-mouse-position"; // Adjusted import for local file
import { cn } from "../../../utils/cn"; // Keep your utility function import here or replace it with `classnames` if unavailable

interface MaskTextProps extends React.HTMLAttributes<HTMLDivElement> {
  revealText: string;
  originalText: React.ReactNode | string;
}

export default function MaskText({
  revealText = "Hey Stalker!!",
  originalText = "Thanks for visiting my portfolio!",
  className,
}: MaskTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });
  useMousePosition(containerRef, setMousePosition);
  const size = isHovered ? 500 : 50;

  const common =
    "flex h-full w-full items-center justify-center text-5xl font-bold leading-snug text-foreground";

  return (
    <div className={cn("relative h-screen", className)} ref={containerRef}>
      <motion.div
        className={cn(common, "absolute bg-black")}
        style={{
          maskImage: "url(/components/AceternityUI/text-mask/circle.svg)", // Corrected path to `circle.svg`
          WebkitMaskImage: "url(/components/AceternityUI/text-mask/circle.svg)",
          maskRepeat: "no-repeat",
          maskSize: "50px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {revealText}
        </p>
      </motion.div>

      <div className={common}>{originalText}</div>
    </div>
  );
}
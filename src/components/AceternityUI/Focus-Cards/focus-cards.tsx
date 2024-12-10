import React, { useState } from "react";
import { cn } from "../../../utils/cn";

type CardProps = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardProps;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-36 w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 transition-all duration-300 ease-out rounded-lg",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <img
          src={card.src}
          alt={card.title || "Image"}
          className="object-cover absolute inset-0 rounded-lg"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-2 px-2 transition-opacity duration-300 rounded-lg",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-sm md:text-md font-medium text-white">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Heading */}
  <h1 style={{ fontSize: "4.5rem", fontWeight: "600", textAlign: "center", marginTop: "1.5rem", marginBottom: "1.5rem", background: "linear-gradient(to right, #00FFFF, #800080)", WebkitBackgroundClip: "text", color: "transparent" }}>My Tech-Stack</h1>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto my-auto py-6 px-6"
      >
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
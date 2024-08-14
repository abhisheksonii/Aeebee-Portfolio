// components/ui/card-stack.tsx
"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

let interval: any;

export type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${items.length * CARD_OFFSET + 200}px` }}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute inset-x-0 top-0 bg-gray-900 rounded-3xl shadow-xl border border-green-500/30 shadow-black/[0.1]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              y: index * CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};
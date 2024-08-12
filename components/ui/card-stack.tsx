"use client";
import { useEffect, useState } from "react";
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
    <div className="relative w-full h-60 sm:h-72 md:h-80">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 bg-gray-900 rounded-3xl shadow-xl border border-green-500/30 shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
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
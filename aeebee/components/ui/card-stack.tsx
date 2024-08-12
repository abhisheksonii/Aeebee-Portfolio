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
    <div className="relative h-60 w-60 md:h-80 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-gray-900 h-60 w-60 md:h-80 md:w-96 rounded-3xl shadow-xl border border-green-500/30 shadow-black/[0.1] flex flex-col justify-between"
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
            {(card.name || card.designation) && (
              <div className="p-4">
                {card.name && <p className="text-green-300 font-medium">{card.name}</p>}
                {card.designation && <p className="text-green-200 font-normal">{card.designation}</p>}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
"use client";
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Product Manager",
    company: "Patent Ninja",
    period: "May 2024 - Present",
    description: "Handling diverse set of clients, building scalable products, handling backend APIs, crafting AI products"
  },
  {
    title: "AI and Data Management Intern",
    company: "IProp91",
    period: "May 2024 - August 2024",
    description: "Designed Web scraper to collect, transform and store Real Estate Data"
  }
];

export default function Experience() {
  const cardWidth = `${100 / experiences.length}%`;

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-400">Experience</h2>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
        {experiences.map((exp, index) => (
          <CardContainer 
            key={index} 
            className="flex-shrink-0" 
            containerClassName="py-0"
            style={{width: cardWidth}}
          >
            <CardBody className={cn(
              "bg-zinc-900/50 backdrop-blur-md relative group/card",
              "dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]",
              "dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1]",
              "w-full h-full rounded-xl p-6 border",
              "transition-all duration-300"
            )}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-green-500"
              >
                {exp.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-green-300 text-sm mt-2"
              >
                {exp.company} | {exp.period}
              </CardItem>
              <CardItem
                as="p"
                translateZ="80"
                className="text-green-100 text-sm mt-4"
              >
                {exp.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={`https://picsum.photos/seed/${encodeURIComponent(exp.company)}/400/200`}
                  alt={`${exp.company} visual`}
                  width={400}
                  height={200}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
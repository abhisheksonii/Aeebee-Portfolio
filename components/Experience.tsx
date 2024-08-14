// components/Experience.tsx
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
  image: string;
}

const experiences: Experience[] = [
  {
    title: "Product Manager",
    company: "Patent Ninja",
    period: "May 2024 - Present",
    description: "Handling diverse set of clients, building scalable products, handling backend APIs, crafting AI products",
    image: "/images/patent-ninja.png"
  },
  {
    title: "AI and Data Management Intern",
    company: "IProp91",
    period: "May 2024 - August 2024",
    description: "Designed Web scraper to collect, transform and store Real Estate Data",
    image: "/images/Iprop91.png"
  }
];

export default function Experience() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-green-400">Experience</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 px-4 md:px-0">
        {experiences.map((exp, index) => (
          <CardContainer key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] flex-grow">
            <CardBody className={cn(
              "bg-gray-900/90 backdrop-blur-sm relative group/card h-full",
              "hover:shadow-2xl hover:shadow-green-500/[0.1]",
              "border-white/[0.2] border",
              "w-full rounded-xl p-4 md:p-6",
              "transition-all duration-300 flex flex-col"
            )}>
              <CardItem
                translateZ="50"
                className="text-xl md:text-2xl font-bold text-green-400 mb-2"
              >
                <h3>{exp.title}</h3>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-base md:text-lg text-green-300 mb-2"
              >
                <p>{exp.company} | {exp.period}</p>
              </CardItem>
              <CardItem
                translateZ="80"
                className="text-sm md:text-base text-white mb-4 flex-grow"
              >
                <p>{exp.description}</p>
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full h-32 md:h-40 relative rounded-lg overflow-hidden mt-auto"
              >
                <Image
                  src={exp.image}
                  alt={`${exp.company} visual`}
                  fill
                  className="object-cover group-hover/card:shadow-xl transition-all duration-300"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
// components/Education.tsx
"use client";
import React from 'react';
import { CardStack, Card } from "@/components/ui/card-stack";

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Artificial Intelligence & Data Science",
    institution: "College Of Technology And Engineering",
    year: "2021 - Present",
    description: "Focusing on cutting-edge AI technologies and data science methodologies."
  },
  // Add more education entries if needed
];

const educationToCard = (edu: Education): Card => ({
  id: edu.id,
  name: '',
  designation: '',
  content: (
    <div className="flex flex-col h-full justify-between p-4 md:p-6">
      <div>
        <p className="text-base md:text-lg font-bold text-green-400 mb-2">{edu.degree}</p>
        <p className="text-sm md:text-base font-medium text-green-300 mb-1">{edu.institution}</p>
        <p className="text-xs md:text-sm text-green-200 mb-2">{edu.year}</p>
      </div>
      <p className="text-xs md:text-sm text-white">{edu.description}</p>
    </div>
  ),
});

export default function Education() {
  const educationCards = educations.map(educationToCard);
  return (
    <section className="py-10 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-green-400">Education</h2>
      <div className="flex justify-center px-4 md:px-0">
        <div className="w-full max-w-md">
          <CardStack
            items={educationCards}
            offset={10}
            scaleFactor={0.06}
          />
        </div>
      </div>
    </section>
  );
}
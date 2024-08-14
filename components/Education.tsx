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
    <div className="p-4">
      <p className="text-base md:text-lg font-bold text-green-400">{edu.degree}</p>
      <p className="text-sm md:text-base font-medium text-green-300">{edu.institution}</p>
      <p className="text-xs md:text-sm text-green-200">{edu.year}</p>
      <p className="text-xs md:text-sm text-white mt-2">{edu.description}</p>
    </div>
  ),
});

export default function Education() {
  const educationCards = educations.map(educationToCard);
  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-400">Education</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <CardStack
            items={educationCards}
            offset={5}
            scaleFactor={0.06}
          />
        </div>
      </div>
    </section>
  );
}
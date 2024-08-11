"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Cybersecurity Analyst",
    company: "SecureTech Solutions",
    period: "2020 - Present",
    description: "Leading threat detection and incident response team, implementing advanced security measures."
  },
  {
    title: "Network Security Engineer",
    company: "DataGuard Systems",
    period: "2018 - 2020",
    description: "Designed and maintained robust network security infrastructure, conducted regular security audits."
  }
];

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <CardContainer key={index}>
            <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                  src="/api/placeholder/400/200"
                  height={200}
                  width={400}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${exp.company} visual`}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
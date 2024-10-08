// components/Projects.tsx
"use client";
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Project {
  name: string;
  description: string;
  tools: string[];
  image: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: "AI-Powered Portfolio",
    description: "A dynamic portfolio website showcasing my projects and skills, built with Next.js and AI integration.",
    tools: ["Next.js", "React", "Tailwind CSS", "AI Integration"],
    image: "/Avatar.png",
    liveLink: "https://abhisheksoni.vercel.app/"
  },
  {
    name: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets, built with D3.js and React.",
    tools: ["React", "D3.js", "Node.js", "Express"],
    image: "/Avatar.png",
    liveLink: "https://your-dashboard-url.com"
  }
];

export default function Projects() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-green-400">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 px-4 md:px-0">
        {projects.map((project, index) => (
          <CardContainer key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] flex-grow">
            <CardBody className={cn(
              "bg-gray-900/90 backdrop-blur-sm relative group/card h-full",
              "hover:shadow-2xl hover:shadow-green-500/[0.1]",
              "border-white/[0.2] border",
              "w-full rounded-xl p-4 md:p-6",
              "transition-all duration-300 flex flex-col"
            )}>
              <CardItem translateZ="50" className="mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-green-400">{project.name}</h3>
              </CardItem>
              <CardItem translateZ="60" className="mb-4 flex-grow">
                <p className="text-sm md:text-base text-green-200">{project.description}</p>
              </CardItem>
              <CardItem translateZ="100" className="w-full h-32 md:h-40 relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover group-hover/card:shadow-xl transition-all duration-300"
                />
              </CardItem>
              <CardItem translateZ="80" className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span key={i} className="bg-green-800 px-2 py-1 rounded text-xs text-green-100">
                    {tool}
                  </span>
                ))}
              </CardItem>
              {project.liveLink && (
                <CardItem translateZ="120" className="mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors duration-300"
                  >
                    View Live
                  </a>
                </CardItem>
              )}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
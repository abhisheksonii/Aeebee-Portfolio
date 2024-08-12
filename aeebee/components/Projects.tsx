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
    liveLink: "https://your-portfolio-url.com"
  },
  {
    name: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets, built with D3.js and React.",
    tools: ["React", "D3.js", "Node.js", "Express"],
    image: "/Avatar.png",
    liveLink: "https://your-dashboard-url.com"
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-400">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="w-full max-w-md">
            <CardBody className={cn(
              "bg-zinc-900/50 backdrop-blur-md relative group/card",
              "dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]",
              "dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1]",
              "w-full h-auto rounded-xl p-6 border",
              "transition-all duration-300"
            )}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-green-500 mb-2"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-green-100 text-sm mb-4"
              >
                {project.description}
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full mb-4"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={400}
                  height={200}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                translateZ="80"
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.tools.map((tool, i) => (
                  <span key={i} className="bg-green-800 px-2 py-1 rounded text-xs text-green-100">
                    {tool}
                  </span>
                ))}
              </CardItem>
              {project.liveLink && (
                <CardItem
                  translateZ="120"
                  className="mt-auto"
                >
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
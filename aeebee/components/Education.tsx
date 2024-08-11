"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const educations: Education[] = [
  {
    degree: "Master of Science in Cybersecurity",
    institution: "Tech University",
    year: "2018"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Code College",
    year: "2016"
  }
]

export default function Education() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <CardContainer key={index}>
            <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-green-500"
              >
                {edu.degree}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-green-300 text-sm mt-2"
              >
                {edu.institution}
              </CardItem>
              <CardItem
                as="p"
                translateZ="70"
                className="text-green-100 text-sm mt-2"
              >
                {edu.year}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}
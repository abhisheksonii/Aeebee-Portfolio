"use client";

import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Introduction() {
  return (
    <section className="py-20">
      <CardContainer className="w-full">
        <CardBody className="flex flex-col md:flex-row items-center bg-gray-900 p-8 rounded-xl">
          <CardItem
            translateZ="100"
            className="w-64 h-64 bg-green-500 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8"
          >
            <Image src="/avatar.png" alt="Hacker Avatar" width={256} height={256} />
          </CardItem>
          <div>
            <CardItem translateZ="50" className="text-4xl font-bold mb-4">
              Greetings, I'm [Your Name]
            </CardItem>
            <CardItem translateZ="75" className="text-xl text-green-300">
              Elite hacker, code enthusiast, and digital explorer. I navigate the binary realm, leaving no firewall unbreached and no system unexplored.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  )
}
"use client";
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from '@/lib/utils';

export default function Introduction() {
  return (
    <section className="py-20">
      <CardContainer className="w-full">
        <CardBody className={cn(
          "flex flex-col md:flex-row items-center justify-center",
          "bg-zinc-900/50 backdrop-blur-md p-8 rounded-xl",
          "shadow-xl hover:shadow-green-500/20 transition-all duration-300"
        )}>
          <CardItem
            translateZ="100"
            className="w-64 h-64 bg-green-500 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8 flex-shrink-0"
          >
            <Image 
              src="/avatar.png" 
              alt="Hacker Avatar" 
              width={256} 
              height={256} 
              className="object-cover w-full h-full"
            />
          </CardItem>
          <div className="text-center md:text-left">
            <CardItem translateZ="50" className="text-4xl font-bold mb-4 text-green-400">
              Greetings, I'm Abhishek
            </CardItem>
            <CardItem translateZ="75" className="text-xl text-green-300">
              Go from Zero to MVP in just 2 weeks for any product.
              I'm a software developer with a passion for building innovative solutions.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  )
}
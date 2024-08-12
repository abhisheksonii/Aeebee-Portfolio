"use client";
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from '@/lib/utils';

export default function Introduction() {
  return (
    <section className="py-10 sm:py-20">
      <CardContainer className="w-full px-4 sm:px-0">
        <CardBody className={cn(
          "flex flex-col sm:flex-row items-center",
          "bg-zinc-900/50 backdrop-blur-md p-4 sm:p-8 rounded-xl",
          "shadow-xl hover:shadow-green-500/20 transition-all duration-300",
          "w-full max-w-7xl mx-auto"
        )}>
          <CardItem
            translateZ="100"
            className="w-32 h-32 sm:w-40 sm:h-40 bg-green-500 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-8 flex-shrink-0"
          >
            <Image
              src="/avatar.png"
              alt="Hacker Avatar"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </CardItem>
          <div className="flex-grow text-center sm:text-left">
            <CardItem translateZ="50" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-green-400">
              Greetings, I'm Abhishek
            </CardItem>
            <CardItem translateZ="75" className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-green-300">
              Go from Zero to MVP in just 2 weeks for any product.
            </CardItem>
            <CardItem translateZ="100" className="text-sm sm:text-base md:text-lg text-green-200">
              I'm a software developer with a passion for building innovative solutions.
              Specializing in rapid prototyping and efficient development, I bring ideas to life
              quickly and effectively.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  )
}
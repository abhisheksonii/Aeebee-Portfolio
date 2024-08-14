// components/Introduction.tsx
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from '@/lib/utils';

export default function Introduction() {
  return (
    <section className="py-4 md:py-8">
      <CardContainer className="w-full px-4 md:px-0">
        <CardBody className={cn(
          "flex flex-col md:flex-row items-center",
          "bg-zinc-900/50 backdrop-blur-md p-4 md:p-6 rounded-xl",
          "shadow-xl hover:shadow-green-500/20 transition-all duration-300",
          "w-full max-w-7xl mx-auto"
        )}>
          <CardItem
            translateZ="100"
            className="w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0"
          >
            <Image
              src="/avatar.png"
              alt="Hacker Avatar"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </CardItem>
          <div className="flex-grow text-center md:text-left">
            <CardItem translateZ="50" className="text-xl md:text-3xl font-bold mb-2 text-green-400">
              Greetings, I&apos;m Abhishek
            </CardItem>
            <CardItem translateZ="75" className="text-lg md:text-xl font-semibold mb-2 text-green-300">
              Go from Zero to MVP in just 2 weeks for any product.
            </CardItem>
            <CardItem translateZ="100" className="text-sm md:text-base text-green-200">
              I&apos;m a software developer with a passion for building innovative solutions.
              Specializing in rapid prototyping and efficient development.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  )
}
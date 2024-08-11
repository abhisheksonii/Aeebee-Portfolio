"use client";

import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Header() {
  return (
    <header className="py-6 bg-black border-b border-green-500">
      <div className="container mx-auto px-4">
        <CardContainer>
          <CardBody className="flex justify-between items-center">
            <CardItem translateZ="20">
              <Link href="/" className="text-2xl font-bold">
                H4CK3R
              </Link>
            </CardItem>
            <nav>
              <ul className="flex space-x-4">
                <CardItem translateZ="20">
                  <Link href="/">Home</Link>
                </CardItem>
                <CardItem translateZ="20">
                  <button className="px-4 py-2 bg-green-500 text-black rounded">
                    Contact Me
                  </button>
                </CardItem>
              </ul>
            </nav>
          </CardBody>
        </CardContainer>
      </div>
    </header>
  )
}
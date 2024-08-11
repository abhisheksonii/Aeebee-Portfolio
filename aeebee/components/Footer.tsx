"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <CardContainer>
          <CardBody className="flex justify-between items-center">
            <CardItem translateZ="20">
              <p>&copy; 2024 H4CK3R. All rights reserved.</p>
            </CardItem>
            <div className="space-x-4">
              <CardItem translateZ="20">
                <a href="/resume.pdf" download className="text-green-500 hover:text-green-400">
                  Download Resume
                </a>
              </CardItem>
              <CardItem translateZ="20">
                <a href="mailto:hacker@example.com" className="text-green-500 hover:text-green-400">
                  Contact Me
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </footer>
  )
}
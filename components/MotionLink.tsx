'use client'
import { motion } from 'framer-motion'

interface MotionLinkProps {
  children: React.ReactNode;
  href: string;
  download?: boolean;
}

export default function MotionLink({ children, href, download }: MotionLinkProps) {
  return (
    <motion.a
      href={href}
      download={download}
      className="px-4 py-2 bg-green-500 text-black rounded inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}
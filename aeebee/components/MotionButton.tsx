'use client'

import { motion } from 'framer-motion'

interface MotionButtonProps {
  children: React.ReactNode;
}

export default function MotionButton({ children }: MotionButtonProps) {
  return (
    <motion.button
      className="px-4 py-2 bg-green-500 text-black rounded"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {children}
    </motion.button>
  )
}
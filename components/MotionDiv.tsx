'use client'
import { motion } from 'framer-motion'

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionDiv({ children, className }: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
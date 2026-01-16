"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { fadeInUp, defaultTransition } from "@/lib/motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={fadeInUp}
      transition={{
        ...defaultTransition,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}


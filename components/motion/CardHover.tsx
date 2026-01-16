"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { cardHover, defaultTransition } from "@/lib/motion"

interface CardHoverProps {
  children: ReactNode
  className?: string
}

export default function CardHover({ children, className }: CardHoverProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover={shouldReduceMotion ? "rest" : "hover"}
      variants={cardHover}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  )
}


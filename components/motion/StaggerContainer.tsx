"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { staggerContainer } from "@/lib/motion"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export default function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}


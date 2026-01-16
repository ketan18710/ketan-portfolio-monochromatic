"use client"

import { useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export default function Marquee({
  children,
  speed = 25,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  // Create multiple copies for seamless infinite scroll
  const content = (
    <>
      <span className="inline-block whitespace-nowrap">{children}</span>
      <span className="inline-block whitespace-nowrap ml-8">{children}</span>
      <span className="inline-block whitespace-nowrap ml-8">{children}</span>
      <span className="inline-block whitespace-nowrap ml-8">{children}</span>
      <span className="inline-block whitespace-nowrap ml-8">{children}</span>
      <span className="inline-block whitespace-nowrap ml-8">{children}</span>
    </>
  )

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {content}
        {content}
      </div>
    </div>
  )
}


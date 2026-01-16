"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { heroStaggerContainer, heroNameReveal, heroTextReveal } from "@/lib/motion"
import Image from "next/image"
import Typewriter from "@/components/ui/Typewriter"

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)

  // Detect mobile for different scroll thresholds
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Trigger typewriter when opacity is high enough
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const threshold = isMobile ? 0.35 : 0.45
    return scrollYProgress.on("change", (latest) => {
      if (latest > threshold && !startTyping) {
        setStartTyping(true)
      }
    })
  }, [scrollYProgress, startTyping, isMobile])

  // ============================================
  // PHASE 1: Name + Subtitle at TOP (0-30% scroll)
  // ============================================
  const nameOpacity = useTransform(scrollYProgress, isMobile ? [0, 0.20] : [0, 0.30], [1, 0])
  const nameY = useTransform(scrollYProgress, [0, 0.35], [0, -60])

  // ============================================
  // PORTRAIT: Moves up - FASTER on mobile
  // ============================================
  const portraitY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.35] : [0, 0.4, 0.6],
    isMobile ? [0, -500] : [0, -350, -800]
  )
  const portraitScale = useTransform(scrollYProgress, [0, 0.45], [1.5, 1])

  // ============================================
  // TAGLINE: Appears earlier on mobile
  // ============================================
  const taglineOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.30, 0.40, 0.85, 0.95] : [0.45, 0.55, 0.85, 0.95],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={heroRef}
      className="min-h-[85vh] md:min-h-[150vh] flex items-start justify-center relative"
    >
      <div className="w-full sticky top-0 min-h-screen overflow-hidden">

        {/* PHASE 1: Name + Subtitle - positioned at TOP */}
        <motion.div
          className="absolute top-[8%] left-0 right-0 text-center px-2 sm:px-4 md:px-6 lg:px-8 z-20"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={heroStaggerContainer}
          style={shouldReduceMotion ? {} : { opacity: nameOpacity, y: nameY }}
        >
          {/* Large name - Split into 2 lines on mobile, single line on desktop */}
          <motion.h1
            className="font-tinos text-[24vw] sm:text-[20vw] md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[13rem] font-bold text-white leading-[1.0] md:leading-[0.85] tracking-[-0.03em] will-change-transform"
            variants={heroNameReveal}
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.15)' }}
          >
            <span className="block md:inline">KETAN</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">VERMA</span>
          </motion.h1>

          {/* Decorative line + Subtitle */}
          <motion.div
            className="mt-4 sm:mt-6 md:mt-6 flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4"
            variants={heroTextReveal}
          >
            <span className="hidden md:block w-12 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            {/* Mobile: 2 lines */}
            <div className="md:hidden flex flex-col items-center gap-1">
              <p className="font-tinos text-xl sm:text-2xl text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">
                Senior
              </p>
              <p className="font-tinos text-xl sm:text-2xl text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">
                Full-Stack Developer
              </p>
            </div>
            {/* Desktop: single line */}
            <p className="hidden md:block font-tinos text-base lg:text-lg text-white tracking-[0.3em] uppercase font-medium">
              Senior Full-Stack Developer
            </p>
            <span className="hidden md:block w-12 h-[1px] bg-gradient-to-l from-transparent to-white/50" />
          </motion.div>
        </motion.div>

        {/* PORTRAIT: Centered using flexbox for reliable centering across all sizes */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 flex items-end justify-center pb-32 sm:pb-24 md:pb-8 pointer-events-none">
            <motion.div
              className="w-64 h-64 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden grayscale will-change-transform"
              style={{
                y: portraitY,
                scale: portraitScale,
              }}
            >
              <Image
                src="/portrait-fur.jpg"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        )}

        {/* TAGLINE: Typewriter effect - positioned lower */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-x-0 top-[60%] sm:top-[55%] md:top-1/2 -translate-y-1/2 px-4 md:px-8 lg:px-16 text-center pointer-events-none"
            style={{
              opacity: taglineOpacity,
            }}
          >
            <Typewriter
              segments={[
                { text: "I Write", className: "text-4xl sm:text-5xl md:text-5xl font-bold font-display text-white/50 mb-2 sm:mb-4", display: "block" },
                { text: "Code that Ships", className: "text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black font-display text-white mb-4 sm:mb-6 tracking-tight", display: "block" },
                { text: "and", className: "text-4xl sm:text-5xl md:text-5xl font-bold font-display text-white/50 mb-2 sm:mb-4", display: "block" },
                { text: "Systems that Scale.", className: "text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight", display: "block" }
              ]}
              className="max-w-6xl mx-auto pt-24 sm:pt-32 md:pt-40 lg:pt-64"
              speed={50}
              start={startTyping}
              delay={200}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

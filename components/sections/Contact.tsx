"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeInUp, defaultTransition } from "@/lib/motion"

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="font-tinos text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Let&apos;s build<br />something great
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-mono text-base md:text-lg text-white/50 max-w-xl"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Currently available for freelance work and full-time remote roles.
            Let&apos;s talk about your next project.
          </motion.p>

          {/* Big CTA Button */}
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="w-full"
          >
            <a
              href="mailto:ketan18710@gmail.com"
              className="group relative w-full flex items-center justify-center gap-4 px-12 py-7 md:py-8 bg-white text-black font-mono text-lg md:text-xl tracking-wider uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/5 to-transparent" />

              {/* Left decorative line */}
              <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-black/20 group-hover:w-16 transition-all duration-300" />

              {/* Content */}
              <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Email Me</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>

              {/* Right decorative line */}
              <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-black/20 group-hover:w-16 transition-all duration-300" />
            </a>
          </motion.div>

          {/* Details below */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-white/10 gap-4"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-sm text-white/50">ketan18710@gmail.com</span>
              <span className="font-mono text-sm text-white/50">+91-9971996179</span>
            </div>
            <span className="font-mono text-xs text-white/30 tracking-wider">
              © {new Date().getFullYear()} Ketan Verma
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

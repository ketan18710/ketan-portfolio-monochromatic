"use client"

import { motion, useReducedMotion } from "framer-motion"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const models = [
  "ChatGPT",
  "Gemini",
  "Grok",
  "Outlier / Scale AI",
]

export default function LLMCredibility() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-12 md:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={defaultTransition}
        >
          AI Model Training
        </motion.h2>

        <div className="space-y-6 md:space-y-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {models.map((model, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <div className="p-4 md:p-6 bg-surface border border-border rounded-lg text-center">
                  <p className="text-lg md:text-xl font-medium text-text-primary">
                    {model}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <motion.div
            className="mt-8 md:mt-12 p-6 md:p-8 bg-surfaceElevated border border-border rounded-lg"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-semibold text-text-primary text-center">
              $80,000+ earned
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


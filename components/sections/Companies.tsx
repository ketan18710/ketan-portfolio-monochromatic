"use client"

import { motion, useReducedMotion } from "framer-motion"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const companies = [
  "Company Name",
  "Company Name",
  "Company Name",
  "Company Name",
  "Company Name",
  "Company Name",
]

export default function Companies() {
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
          Companies Worked With
        </motion.h2>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="p-6 md:p-8 bg-surface border border-border rounded-lg text-center">
                <p className="text-base md:text-lg text-text-secondary">
                  {company}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}


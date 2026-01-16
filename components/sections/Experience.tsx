"use client"

import { motion, useReducedMotion } from "framer-motion"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const experience = [
  {
    role: "Role Title",
    company: "Company Name",
    period: "2020 - Present",
    metrics: [
      "Built system serving X users",
      "Increased revenue by Y%",
    ],
  },
  {
    role: "Role Title",
    company: "Company Name",
    period: "2018 - 2020",
    metrics: [
      "Scaled infrastructure to handle Z requests",
      "Reduced latency by W%",
    ],
  },
]

export default function Experience() {
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
          Experience
        </motion.h2>

        <StaggerContainer className="space-y-8 md:space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="p-6 md:p-8 bg-surface border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-lg md:text-xl text-text-secondary">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-text-tertiary mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.metrics.map((metric, metricIndex) => (
                    <li
                      key={metricIndex}
                      className="text-base md:text-lg text-text-secondary"
                    >
                      • {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}


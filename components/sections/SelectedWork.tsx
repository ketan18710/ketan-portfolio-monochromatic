"use client"

import { motion, useReducedMotion } from "framer-motion"
import StaggerContainer from "@/components/motion/StaggerContainer"
import CardHover from "@/components/motion/CardHover"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const projects = [
  {
    title: "Project Name",
    tagline: "Brief one-liner describing the project",
  },
  {
    title: "Project Name",
    tagline: "Brief one-liner describing the project",
  },
  {
    title: "Project Name",
    tagline: "Brief one-liner describing the project",
  },
]

export default function SelectedWork() {
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
          Selected Work
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <CardHover>
                <div className="p-6 md:p-8 bg-surface border border-border rounded-lg transition-colors duration-300 hover:border-borderHover hover:bg-surfaceElevated cursor-pointer h-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary">
                    {project.tagline}
                  </p>
                </div>
              </CardHover>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}


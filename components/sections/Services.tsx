"use client"

import { motion, useReducedMotion } from "framer-motion"
import CardHover from "@/components/motion/CardHover"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const services = [
  {
    title: "Full-Stack Product Development",
    description: "End-to-end product development from concept to production",
  },
  {
    title: "Backend Architecture & APIs",
    description: "Scalable backend systems and robust API design",
  },
  {
    title: "Performance Optimization",
    description: "Systems that scale with your business",
  },
  {
    title: "Rapid MVP → Production",
    description: "Fast iteration from prototype to production-ready",
  },
]

export default function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-0 pb-24 md:pb-32 lg:pb-40 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-12 md:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={defaultTransition}
        >
          Capabilities
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <CardHover>
                <div className="p-6 md:p-8 bg-surface border border-border rounded-lg transition-colors duration-300 hover:border-borderHover hover:bg-surfaceElevated cursor-pointer h-full">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary">
                    {service.description}
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


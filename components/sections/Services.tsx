"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeInUp, defaultTransition } from "@/lib/motion"

const services = [
  {
    id: "01",
    title: "Product Development",
    tech: "React • Node • AWS • Postgre",
  },
  {
    id: "02",
    title: "Design & Strategy",
    tech: "Figma • UX Research • Brand",
  },
  {
    id: "03",
    title: "Data & AI Solutions",
    tech: "Python • ML • Cloud • RAG",
  },
  {
    id: "04",
    title: "Digital Transformation",
    tech: "Strategy • IoT • Platforms",
  },
]

export default function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-6 md:py-12 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="font-tinos text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-12 md:mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          Capabilities
        </motion.h2>

        {/* Editorial List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative flex flex-col md:flex-row items-start md:items-center py-8 md:py-12 ${index === 0 ? "border-t-0" : "border-t border-white/10"
                } hover:border-white/30 transition-colors duration-500 cursor-default`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
            >
              {/* Column 1: Number */}
              <div className="w-full md:w-[15%] mb-4 md:mb-0">
                <span className="font-tinos text-4xl md:text-5xl text-white/40 group-hover:text-white transition-colors duration-300">
                  {service.id}
                </span>
              </div>

              {/* Column 2: Title */}
              <div className="w-full md:w-[60%] mb-4 md:mb-0">
                <h3 className="font-tinos text-5xl md:text-6xl lg:text-7xl text-white transition-transform duration-500 md:group-hover:translate-x-4">
                  {service.title}
                </h3>
              </div>

              {/* Column 3: Tech Stack */}
              <div className="w-full md:w-[25%] md:text-right">
                <p className="font-mono text-sm md:text-base text-white/40 group-hover:text-white transition-colors duration-300">
                  {service.tech}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Bottom border for last item */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}


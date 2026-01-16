"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeInUp, defaultTransition } from "@/lib/motion"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-8 md:space-y-12"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Ready to build something great? Let&apos;s talk.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <Button asChild>
              <a href="mailto:your.email@example.com">Email me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


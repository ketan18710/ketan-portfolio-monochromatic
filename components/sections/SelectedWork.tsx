"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Jove",
    description:
      "Legacy architecture struggled with high-concurrency video streaming. Engineered a Dockerized microservices backend (FastAPI/Django) and migrated frontend to Next.js, reducing latency by 40% and optimizing Core Web Vitals for massive video-rich pages.",
    tech: ["Next.js", "Python", "FastAPI", "Redis", "Docker"],
    image: "/images/projects/jove.png",
  },
  {
    id: 2,
    title: "Grorapid CRM",
    description:
      "Engineered the core Email & Form Builders and a lightweight JS/CSS library, enabling users to embed fully functional, custom-styled forms into any external application with just two lines of code.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "/images/projects/grorapid.png",
  },
  {
    id: 3,
    title: "Rolson Tools",
    description:
      "Manual campaign creation was error-prone across 15+ industries. Developed an automated audience management system and optimized backend queries, implementing Redis caching to cut database load by 40% and speed up search by 30%.",
    tech: ["Node.js", "Redis", "PostgreSQL", "React"],
    image: "/images/projects/rolson.png?v=2",
  },
]

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Transform vertical scroll (0 to 1) into horizontal movement
  // For 3 cards, we need to move through 2 full card widths (200% of single card width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] bg-background"
    >
      {/* Sticky container that pins the content */}
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden">
        {/* Section Header */}
        <motion.h2
          className="font-tinos text-6xl md:text-8xl lg:text-9xl font-bold text-white px-4 md:px-8 pt-6 md:pt-12 mb-12 md:mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        {/* Horizontal scrolling track */}
        <motion.div
          style={{ x: shouldReduceMotion ? 0 : x, willChange: "transform" }}
          className="flex gap-8 pl-4 md:pl-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] h-[50vh] md:h-[60vh] flex flex-col md:flex-row border border-white/10 rounded-sm overflow-hidden"
            >
              {/* Left: Project Screenshot */}
              <div className="w-full md:w-[60%] h-[40%] md:h-full bg-neutral-900 flex items-center justify-center border-r border-white/10 relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Right: Text Content */}
              <div className="w-full md:w-[40%] h-[60%] md:h-full bg-black p-6 md:p-10 flex flex-col justify-center">
                {/* Project Title */}
                <h3 className="font-tinos text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-white/20 mb-6" />

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-white/40 tracking-wider uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

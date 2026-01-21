"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Jove",
    description:
      "Led the frontend migration to Next.js and engineered a custom IP-based authentication system to enable seamless institutional access (e.g., Harvard, Stanford). Optimized backend microservices to ensure secure, high-performance data delivery for academic clients.",
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

// Mobile Card Component
const MobileProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm mb-6">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="max-w-3xl">
      <span className="font-mono text-white/40 text-xs tracking-widest mb-3 block">
        0{index + 1}
      </span>
      <h3 className="font-tinos text-3xl font-bold text-white mb-4">
        {project.title}
      </h3>
      <p className="text-white/70 text-base leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-white/60 tracking-wider uppercase">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

// Desktop Horizontal Scroll Component
const DesktopSelectedWork = () => {
  const shouldReduceMotion = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden">
        <motion.h2
          className="font-tinos text-8xl lg:text-9xl font-bold text-white px-8 pt-12 mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured
        </motion.h2>

        <motion.div
          style={{ x: shouldReduceMotion ? 0 : x, willChange: "transform" }}
          className="flex gap-8 pl-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[calc(100vw-4rem)] h-[65vh] flex flex-row overflow-hidden group"
            >
              {/* Image */}
              <div className="w-[55%] h-full bg-neutral-900 relative overflow-hidden rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="w-[45%] h-full pl-10 flex flex-col justify-center">
                <span className="font-mono text-white/40 text-xs tracking-widest mb-4">
                  0{index + 1}
                </span>
                <h3 className="font-tinos text-5xl lg:text-6xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-white/50 tracking-wider uppercase">
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

// Mobile Vertical Stack Component
const MobileSelectedWork = () => {
  return (
    <section className="bg-background px-4 py-16">
      <motion.h2
        className="font-tinos text-5xl font-bold text-white mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured
      </motion.h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <MobileProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default function SelectedWork() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!mounted) {
    return <section className="relative h-[400vh] bg-background"><div className="sticky top-0 h-screen" /></section>
  }

  return isMobile ? <MobileSelectedWork /> : <DesktopSelectedWork />
}

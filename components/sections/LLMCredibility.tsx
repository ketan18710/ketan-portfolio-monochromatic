"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

const demos = [
  {
    id: 1,
    title: "Recursive Validator",
    prompt: "Write a production-grade recursive Markdown link validator. It must handle relative paths, anchor links (#header), and detect orphaned images. Implement a caching layer for file system operations to optimize performance on large documentation repos (500+ files).",
    video: "https://vjs.zencdn.net/v/oceans.mp4",
    caption: "INFRASTRUCTURE"
  },
  {
    id: 2,
    title: "Shark Survival Engine",
    prompt: "Build an object-oriented Pygame engine. Implement a 'Boat' class with vector-based movement and a 'Shark' class with randomized spawning geometry. Add pixel-perfect collision detection using Rect objects and a main game loop with 60 FPS delta-time normalization.",
    video: "https://vjs.zencdn.net/v/oceans.mp4",
    caption: "ALGORITHMS"
  },
  {
    id: 3,
    title: "Physics Football",
    prompt: "Create a physics-based football game using HTML5 Canvas and Vanilla JS. Implement a custom vector physics engine for ball trajectory including gravity, bounce damping, and friction. Add mouse-drag event listeners for 'slingshot' aiming mechanics.",
    video: "https://vjs.zencdn.net/v/oceans.mp4",
    caption: "FRONTEND"
  },
]

// Video Card for Desktop
const DesktopVideoCard = ({ demo, isActive }: { demo: typeof demos[0], isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => { })
    } else if (!isActive && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isActive])

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  return (
    <div className="relative w-full h-full bg-black rounded-sm overflow-hidden">
      <video
        ref={videoRef}
        src={demo.video}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6">
        <span className="font-mono text-white/80 text-xs tracking-widest uppercase">
          {demo.caption}
        </span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-white/50">REC</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-tinos text-4xl lg:text-5xl text-white mb-4">
          {demo.title}
        </h3>
        <div className="mb-3">
          <span className="font-mono text-white/40 text-xs tracking-wider uppercase">Prompt:</span>
        </div>
        <p className="font-mono text-white/70 text-sm leading-relaxed max-w-2xl italic">
          "{demo.prompt}"
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
        <div className="h-full bg-white transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

// Mobile Card Component
const MobileVideoCard = ({ demo, index }: { demo: typeof demos[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => { })
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isInView])

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      className="group"
    >
      {/* Video */}
      <div className="relative w-full aspect-video overflow-hidden rounded-sm mb-6">
        <video
          ref={videoRef}
          src={demo.video}
          loop
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="font-mono text-white/90 text-[10px] tracking-widest uppercase">{demo.caption}</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-white/60">REC</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <div className="h-full bg-white/80 transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        <span className="font-mono text-white/40 text-xs tracking-widest mb-3 block">0{index + 1}</span>
        <h3 className="font-tinos text-2xl text-white mb-4">{demo.title}</h3>
        <div className="mb-2">
          <span className="font-mono text-white/40 text-xs tracking-wider uppercase">Prompt:</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed font-mono italic">"{demo.prompt}"</p>
      </div>
    </motion.div>
  )
}

// Desktop Component - Header scrolls away, cards container is the scroll trigger
const DesktopLLMCredibility = () => {
  const shouldReduceMotion = useReducedMotion()
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  })

  // Calculate exact transform for 3 cards: need to move 2 cards worth
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map scroll progress to card index
      const cardIndex = Math.min(Math.floor(latest * demos.length), demos.length - 1)
      setActiveCard(cardIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section className="relative bg-background">
      {/* Header - scrolls away naturally */}
      <motion.div
        className="px-8 pt-24 pb-16"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-tinos text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          Teaching AI<br />How to Code
        </h2>
        <div className="flex flex-row gap-6 font-mono text-base text-white/50 flex-wrap">
          <span className="text-white/80">Quality Manager @ Scale AI</span>
          <span className="text-white/30">—</span>
          <span className="text-white/80">$80k+ on Outlier</span>
          <span className="text-white/30">—</span>
          <span>Training next-gen AI models using RLHF, SFT, DPO methodologies across ChatGPT, Gemini, Claude, Grok</span>
        </div>
      </motion.div>

      {/* Cards container - this controls the scroll */}
      <div ref={cardsContainerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x: shouldReduceMotion ? 0 : x, willChange: "transform" }}
            className="flex gap-8 px-8"
          >
            {demos.map((demo, index) => (
              <div key={demo.id} className="flex-shrink-0 w-[calc(100vw-4rem)] h-[85vh]">
                <DesktopVideoCard demo={demo} isActive={index === activeCard} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Mobile Vertical Stack Component  
const MobileLLMCredibility = () => {
  return (
    <section className="bg-background px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-tinos text-4xl font-bold text-white mb-4 tracking-tight">
          Teaching AI<br />How to Code
        </h2>
        <div className="flex flex-col gap-1.5 font-mono text-xs text-white/50">
          <span className="text-white/80">Quality Manager @ Scale AI</span>
          <span className="text-white/80">$80k+ on Outlier</span>
          <span>Training next-gen AI using RLHF, SFT, DPO</span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-20">
        {demos.map((demo, index) => (
          <MobileVideoCard key={demo.id} demo={demo} index={index} />
        ))}
      </div>
    </section>
  )
}

export default function LLMCredibility() {
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
    return <section className="relative h-[300vh] bg-background"><div className="sticky top-0 h-screen" /></section>
  }

  return isMobile ? <MobileLLMCredibility /> : <DesktopLLMCredibility />
}

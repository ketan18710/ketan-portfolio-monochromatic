"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"

const demos = [
  {
    id: 1,
    title: "Basketball Ring",
    prompt: "Aap \"Shining Stars\" school mein ek software development contractor ke taur pe niyukt kiye gaye hain. Vanilla Javascript mein ek basketball game banani hai. Basketball aur ek ring dikayen, ring daayen se baayen ghoomti rahegi. Arrow key se direction, space hold se power baar — ball arrow ki disha mein jayegi. 30 second ka game, 10 points per basket.",
    video: "/recordings/basketball_game.mp4",
    caption: "FRONTEND",
    objectPosition: "center 30%"
  },
  {
    id: 2,
    title: "Football with Defenders",
    prompt: "College ke non-profit organization ke liye Javascript mein football game. Goal post ke aage 2 rectangle defenders sthir khade rahenge. Ball agar field ke edges par lage to bounce hoke vapas jayegi. Arrow keys se direction, space se power. Har goal par defenders ki position change hogi. 30 second, 10 points per goal.",
    video: "/recordings/football_game.mp4",
    caption: "FRONTEND",
    objectPosition: "center center"
  },
  {
    id: 3,
    title: "Shark Survival Engine",
    prompt: "Ham ek mahasaagaro mein vyaapaaree jahaaj chalane wali company se hai. Python GUI par aadharit game — samandar mein ek naav, dusri taraf se har 2 second mein 4 sharks generate hongi random points par. Left aur right kunji se naav hilao, sharks avoid karo. Shark ke takrane par game khatam. Sharks ko sirf fin banake darshyen.",
    video: "/recordings/boat_shooting_python.mp4",
    caption: "ALGORITHMS",
    objectPosition: "center center"
  },
  {
    id: 4,
    title: "Target Practice",
    prompt: "Aap \"Anand University\" mein senior developer hain. Python mein lakshya abhyaas game — lal aur peele rang ke gol targets screen par dikhenge. Screen ke niche ek top (cannon) hogi, 'h' key se hare rang ke shots fire honge, arrow keys se cannon ghoomega. Peele target par 10 ank, lal par 20 ank. Har 3 second mein 2 naye targets, 30 second ka game.",
    video: "/recordings/target-practice.mp4",
    caption: "GAME DEV",
    objectPosition: "center center"
  },
]

// Fullscreen Video Modal
const VideoModal = ({ demo, onClose }: { demo: typeof demos[0] | null, onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (demo) {
      // Force muted for iOS autoplay policy
      if (videoRef.current) {
        videoRef.current.defaultMuted = true
        videoRef.current.muted = true
      }

      document.body.style.overflow = "hidden"
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      window.addEventListener("keydown", handleEsc)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEsc)
      }
    }
  }, [demo, onClose])

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  if (!demo) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-[92vw] h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-white/50 text-xs tracking-widest uppercase">{demo.caption}</span>
            <span className="text-white/20">·</span>
            <h3 className="font-tinos text-2xl text-white">{demo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <span className="font-mono text-xs text-white/40 group-hover:text-white/60 tracking-wider">ESC</span>
            <svg className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div className="relative flex-1 bg-black/60 rounded-sm overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-contain"
          >
            <source src={demo.video} type="video/mp4" />
          </video>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div className="h-full bg-white/60 transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Prompt below video */}
        <div className="mt-4 max-w-4xl">
          <span className="font-mono text-white/30 text-xs tracking-wider uppercase">Prompt:</span>
          <p className="font-mono text-white/50 text-sm leading-relaxed mt-1 italic">
            &quot;{demo.prompt}&quot;
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Video Card for Desktop
const DesktopVideoCard = ({ demo, isActive, onExpand }: { demo: typeof demos[0], isActive: boolean, onExpand: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Force muted for iOS autoplay policy
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [])

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
    <div
      className="relative w-full h-full bg-black rounded-sm overflow-hidden cursor-pointer group/card"
      onClick={onExpand}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ objectPosition: demo.objectPosition }}
      >
        <source src={demo.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Expand hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
          </svg>
        </div>
      </div>

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
          &quot;{demo.prompt}&quot;
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
const MobileVideoCard = ({ demo, index, onExpand }: { demo: typeof demos[0], index: number, onExpand: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Force muted for iOS autoplay policy
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [])

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
      <div
        className="relative w-full aspect-video overflow-hidden rounded-sm mb-6 cursor-pointer"
        onClick={onExpand}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: demo.objectPosition }}
        >
          <source src={demo.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="font-mono text-white/90 text-[10px] tracking-widest uppercase">{demo.caption}</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-white/60">REC</span>
        </div>

        {/* Expand hint */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 opacity-70">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
            </svg>
          </div>
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
        <p className="text-white/60 text-sm leading-relaxed font-mono italic">&quot;{demo.prompt}&quot;</p>
      </div>
    </motion.div>
  )
}

// Desktop Component - Header scrolls away, cards container is the scroll trigger
const DesktopLLMCredibility = () => {
  const shouldReduceMotion = useReducedMotion()
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [modalDemo, setModalDemo] = useState<typeof demos[0] | null>(null)

  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  })

  // Calculate exact transform for 4 cards: need to move 3 cards worth
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map scroll progress to card index
      const cardIndex = Math.min(Math.floor(latest * demos.length), demos.length - 1)
      setActiveCard(cardIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const closeModal = useCallback(() => setModalDemo(null), [])

  return (
    <section className="relative bg-background">
      {/* Header - scrolls away naturally */}
      <motion.div
        className="px-8 pt-12 md:pt-24 pb-16 md:pb-24"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-tinos text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          Teaching AI<br />How to Code
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-6 font-mono text-base text-white/50 flex-wrap">
            <span className="text-white/80">Quality Manager @ Scale AI</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">$80k+ on Outlier</span>
            <span className="text-white/30">—</span>
            <span>Training next-gen AI models using RLHF, SFT, DPO methodologies across ChatGPT, Gemini, Claude, Grok</span>
          </div>
          <p className="font-mono text-base text-white/70 font-medium max-w-3xl">
            I design prompts and build exemplary solutions — creating the training data that teaches AI to code like an expert.
          </p>
        </div>
      </motion.div>

      {/* Cards container - this controls the scroll */}
      <div ref={cardsContainerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x: shouldReduceMotion ? 0 : x, willChange: "transform" }}
            className="flex gap-8 px-8"
          >
            {demos.map((demo, index) => (
              <div key={demo.id} className="flex-shrink-0 w-[calc(100vw-4rem)] h-[85vh]">
                <DesktopVideoCard demo={demo} isActive={index === activeCard} onExpand={() => setModalDemo(demo)} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalDemo && <VideoModal demo={modalDemo} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  )
}

// Mobile Vertical Stack Component  
const MobileLLMCredibility = () => {
  const [modalDemo, setModalDemo] = useState<typeof demos[0] | null>(null)
  const closeModal = useCallback(() => setModalDemo(null), [])

  return (
    <section className="bg-background px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-tinos text-5xl font-bold text-white mb-4 tracking-tight">
          Teaching AI<br />How to Code
        </h2>
        <div className="flex flex-col gap-1.5 font-mono text-xs text-white/50">
          <span className="text-white/80">Quality Manager @ Scale AI</span>
          <span className="text-white/80">$80k+ on Outlier</span>
          <span>Training next-gen AI using RLHF, SFT, DPO</span>
        </div>
        <p className="font-mono text-sm text-white/70 font-medium max-w-3xl mt-3">
          I design prompts and build exemplary solutions — creating the training data that teaches AI to code like an expert.
        </p>
      </motion.div>

      <div className="flex flex-col gap-20">
        {demos.map((demo, index) => (
          <MobileVideoCard key={demo.id} demo={demo} index={index} onExpand={() => setModalDemo(demo)} />
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalDemo && <VideoModal demo={modalDemo} onClose={closeModal} />}
      </AnimatePresence>
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
    return <section className="relative h-[400vh] bg-background"><div className="sticky top-0 h-screen" /></section>
  }

  return isMobile ? <MobileLLMCredibility /> : <DesktopLLMCredibility />
}

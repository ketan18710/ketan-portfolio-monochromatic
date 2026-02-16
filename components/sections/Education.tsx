"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeInUp, defaultTransition } from "@/lib/motion"
import Image from "next/image"

const education = [
    {
        id: "01",
        degree: "Master of Technology in AI & ML",
        institute: "Indian Institute of Technology, Patna",
        duration: "2023 — 2025",
        logo: "/images/education/iit-patna.png",
        code: "IITP-MTECH-25",
    },
    {
        id: "02",
        degree: "Bachelor of Arts in Computer Science",
        institute: "The NorthCap University",
        duration: "2016 — 2020",
        logo: "/images/education/northcap.png",
        code: "NCU-BACS-20",
    },
]

// Simple CSS Barcode Component
const Barcode = ({ className }: { className?: string }) => (
    <div className={`flex items-stretch h-8 gap-[2px] opacity-50 ${className}`}>
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className={`bg-white w-[${Math.random() > 0.5 ? "2px" : "4px"}]`}
                style={{ width: Math.random() > 0.5 ? "2px" : "1px", opacity: Math.random() * 0.5 + 0.5 }}
            />
        ))}
    </div>
)

export default function Education() {
    const shouldReduceMotion = useReducedMotion()

    return (
        <section id="education" aria-label="Education" className="py-12 md:py-24 px-4 md:px-8 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.h2
                    className="font-tinos text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-16 md:mb-24 uppercase tracking-tight"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={defaultTransition}
                >
                    I went to school here
                </motion.h2>

                {/* Tickets Container */}
                <div className="flex flex-col gap-8 md:gap-12">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="group relative w-full flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ ...defaultTransition, delay: index * 0.15 }}
                        >
                            {/* Left Side: Institute Info */}
                            <div className="flex-1 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                                {/* Logo */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white rounded-full p-1 flex items-center justify-center">
                                    <Image
                                        src={item.logo}
                                        alt={item.institute}
                                        width={80}
                                        height={80}
                                        className="object-contain p-1"
                                    />
                                    {/* Frosted overlay for monochromatic feel if needed */}
                                    <div className="absolute inset-0 bg-black/0 mix-blend-saturation rounded-full" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-xs text-white/40 tracking-wider">INSTITUTION</span>
                                    <h3 className="font-tinos text-2xl md:text-4xl text-white font-medium">
                                        {item.institute}
                                    </h3>
                                </div>
                            </div>

                            {/* Perforated Divider */}
                            <div className="relative w-full md:w-[1px] h-[1px] md:h-auto self-stretch">
                                {/* The dots */}
                                <div className="absolute inset-0 border-t md:border-t-0 md:border-l border-dashed border-white/20 mx-4 md:mx-0 my-0 md:my-4" />

                                {/* The cutouts (semicircles) */}
                                <div className="absolute left-0 md:left-1/2 top-1/2 md:top-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border border-white/10" />
                                <div className="absolute right-0 md:left-1/2 md:bottom-0 top-1/2 md:top-auto translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 md:translate-y-1/2 w-6 h-6 bg-background rounded-full border border-white/10" />
                            </div>

                            {/* Right Side: Degree & Meta */}
                            <div className="md:w-[45%] p-6 md:p-10 flex flex-col justify-between gap-6 bg-white/[0.02]">
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-xs text-white/40 tracking-wider">DEGREE</span>
                                    <h4 className="font-sans text-xl md:text-2xl text-white/90">
                                        {item.degree}
                                    </h4>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-mono text-xs text-white/40 tracking-wider">PERIOD</span>
                                        <span className="font-mono text-white/70">{item.duration}</span>
                                    </div>

                                    {/* Visual Barcode */}
                                    <div className="flex flex-col gap-1 items-end opacity-50">
                                        <Barcode />
                                        <span className="font-mono text-[10px] text-white/30">{item.code}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

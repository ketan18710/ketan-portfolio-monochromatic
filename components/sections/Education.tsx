"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeInUp, defaultTransition } from "@/lib/motion"
import Image from "next/image"

const education = [
    {
        id: "01",
        degree: "Master of Technology in AI & ML",
        institute: "Indian Institute of Technology, Patna",
        duration: "Aug 2023 - May 2025",
        logo: "/images/education/iit-patna.png",
    },
    {
        id: "02",
        degree: "Bachelor of Arts in Computer Science",
        institute: "The NorthCap University",
        duration: "April 2016 - May 2020",
        logo: "/images/education/northcap.png",
    },
]

export default function Education() {
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
                    Education
                </motion.h2>

                {/* Education List */}
                <div className="flex flex-col">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`group relative flex flex-col md:flex-row items-start md:items-center py-8 md:py-12 ${index === 0 ? "border-t-0" : "border-t border-white/10"
                                } hover:border-white/30 transition-colors duration-500 cursor-default`}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ ...defaultTransition, delay: index * 0.1 }}
                        >
                            {/* Column 1: Logo */}
                            <div className="w-full md:w-[12%] mb-4 md:mb-0 flex items-center justify-start md:justify-center">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                                    <Image
                                        src={item.logo}
                                        alt={`${item.institute} logo`}
                                        width={80}
                                        height={80}
                                        className="object-contain p-2"
                                    />
                                </div>
                            </div>

                            {/* Column 2: Degree & Institute */}
                            <div className="w-full md:w-[63%] mb-4 md:mb-0">
                                <h3 className="font-tinos text-3xl md:text-4xl lg:text-5xl text-white transition-transform duration-500 md:group-hover:translate-x-4 mb-2">
                                    {item.degree}
                                </h3>
                                <p className="font-mono text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300 md:group-hover:translate-x-4 transition-transform">
                                    {item.institute}
                                </p>
                            </div>

                            {/* Column 3: Duration */}
                            <div className="w-full md:w-[25%] md:text-right">
                                <p className="font-mono text-sm md:text-base text-white/40 group-hover:text-white transition-colors duration-300">
                                    {item.duration}
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

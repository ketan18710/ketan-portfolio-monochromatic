"use client"

import { motion, useReducedMotion } from "framer-motion"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { fadeInUp, defaultTransition } from "@/lib/motion"
import Image from "next/image"

const companies = [
    { name: "Scale AI", logo: "/images/companies/scale-ai.png" },
    { name: "Forgeahead", logo: "/images/companies/forgeahead.png" },
    { name: "Rolson", logo: "/images/companies/rolson.png" },
    { name: "Grorapid", logo: "/images/companies/grorapid.png" },
    { name: "WittyBrains", logo: "/images/companies/wittybrains.png" },
    { name: "Rawnest", logo: "/images/companies/rawnest.png" },
    { name: "AiPivot", logo: "/images/companies/aipivot.png" },
    { name: "World Net Labs", logo: "/images/companies/wnl.png" },
]

export default function Companies() {
    const shouldReduceMotion = useReducedMotion()

    return (
        <section className="py-12 md:py-24 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="font-tinos text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-16 md:mb-24 uppercase tracking-tight"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={defaultTransition}
                >
                    Companies Worked With
                </motion.h2>

                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            transition={defaultTransition}
                        >
                            <div className="p-6 md:p-8 bg-surface border border-border rounded-lg flex flex-col items-center justify-center gap-4 h-[180px] md:h-[200px] hover:border-white/20 transition-colors">
                                <div className="relative w-full h-12 md:h-14">
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-mono text-[1.2rem] md:text-sm text-white/50 tracking-wider">
                                    {company.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

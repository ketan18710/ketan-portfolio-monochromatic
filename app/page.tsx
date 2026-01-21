import dynamic from "next/dynamic"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"

// Lazy load sections below the fold
const Education = dynamic(() => import("@/components/sections/Education"), {
  ssr: true,
})
const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork"), {
  ssr: true,
})
const LLMCredibility = dynamic(() => import("@/components/sections/LLMCredibility"), {
  ssr: true,
})
const Companies = dynamic(() => import("@/components/sections/Companies"), {
  ssr: true,
})
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  ssr: true,
})
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Education />
      <SelectedWork />
      <LLMCredibility />
      <Companies />
      <Experience />
      <Contact />
    </main>
  )
}


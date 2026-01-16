import type { Metadata } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono, Tinos } from "next/font/google"
import "./globals.css"

// Display font for hero name - bold, geometric, modern
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700"],
})

// Body font - clean, legible, professional
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

// Monospace font for typewriter effect
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
})

// Tinos font for hero name and subtitle - serif, elegant
const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Ketan Verma - Senior Full-Stack Developer",
  description: "Senior Full-Stack Developer with 5+ years building scalable, production-grade systems for real businesses.",
  keywords: ["full-stack developer", "senior developer", "web development", "backend architecture", "AI model training"],
  authors: [{ name: "Ketan Verma" }],
  openGraph: {
    title: "Ketan Verma - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 5+ years building scalable, production-grade systems for real businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketan Verma - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 5+ years building scalable, production-grade systems for real businesses.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${tinos.variable}`}>
      <body className="antialiased font-body">{children}</body>
    </html>
  )
}

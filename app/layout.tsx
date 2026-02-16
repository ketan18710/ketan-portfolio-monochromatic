import type { Metadata } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono, Tinos } from "next/font/google"
import "./globals.css"
import JsonLd from "@/components/JsonLd"

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
  metadataBase: new URL("https://www.ketanverma.work"),
  title: "Ketan Verma — Senior Full-Stack Developer for Hire | React, Node.js, Python",
  description:
    "Freelance senior full-stack developer with 5+ years shipping production-grade systems for startups. React, Node.js, Python, AWS. Available for remote contract & full-time roles. Trusted by Scale AI, Jove, and more.",
  keywords: [
    "hire full-stack developer",
    "freelance react developer",
    "senior node.js developer for hire",
    "remote full-stack developer",
    "hire senior developer for startup",
    "freelance full-stack developer with AI experience",
    "senior react developer for startup mvp",
    "full-stack developer available for remote work",
    "backend architecture",
    "AI model training",
    "Ketan Verma developer",
  ],
  authors: [{ name: "Ketan Verma", url: "https://www.ketanverma.work" }],
  creator: "Ketan Verma",
  publisher: "Ketan Verma",
  applicationName: "Ketan Verma Portfolio",
  alternates: {
    canonical: "https://www.ketanverma.work",
  },
  openGraph: {
    title: "Ketan Verma — Senior Full-Stack Developer for Hire",
    description:
      "Freelance senior full-stack developer with 5+ years shipping production-grade systems for startups. Available for remote work.",
    type: "website",
    url: "https://www.ketanverma.work",
    siteName: "Ketan Verma Portfolio",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Ketan Verma — Senior Full-Stack Developer for Hire",
    description:
      "Freelance senior full-stack developer with 5+ years shipping production-grade systems. React, Node.js, Python, SQL, NoSQL.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${tinos.variable}`}>
      <body className="antialiased font-body">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

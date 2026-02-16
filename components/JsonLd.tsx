export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ketan Verma",
        jobTitle: "Senior Full-Stack Developer",
        url: "https://www.ketanverma.work",
        email: "ketan18710@gmail.com",
        telephone: "+91-9971996179",
        description:
            "Freelance senior full-stack developer with 5+ years shipping production systems for startups. Specializing in React, Node.js, Python, and AWS.",
        knowsAbout: [
            "Full-Stack Development",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "AWS",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "AI Model Training",
            "RLHF",
            "Backend Architecture",
        ],
        sameAs: [
            "https://www.linkedin.com/in/ketan18710/",
            "https://github.com/ketan18710",
        ],
        alumniOf: [
            {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Technology, Patna",
            },
            {
                "@type": "CollegeOrUniversity",
                name: "The NorthCap University",
            },
        ],
        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ketan Verma — Senior Full-Stack Developer",
        url: "https://www.ketanverma.work",
        description:
            "Portfolio of Ketan Verma, a freelance senior full-stack developer available for remote contract and full-time roles.",
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ketan Verma — Full-Stack Development Services",
        url: "https://www.ketanverma.work",
        description:
            "Senior full-stack development services for startups and remote teams. Expertise in React, Node.js, Python, AWS, and AI/ML.",
        provider: {
            "@type": "Person",
            name: "Ketan Verma",
        },
        areaServed: {
            "@type": "Place",
            name: "Worldwide",
        },
        serviceType: [
            "Full-Stack Product Development",
            "Backend Architecture & APIs",
            "Performance Optimization",
            "MVP to Production",
            "AI Model Training & Data Quality",
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    )
}

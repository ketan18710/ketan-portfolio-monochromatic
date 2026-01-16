"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export interface TypewriterSegment {
    text: string
    className?: string
    display?: "inline" | "block"
}

interface TypewriterProps {
    segments: TypewriterSegment[]
    className?: string
    speed?: number
    delay?: number
    start?: boolean
}

export default function Typewriter({
    segments,
    className = "",
    speed = 50,
    delay = 0,
    start
}: TypewriterProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Flatten text to a single string for valid typing logic, but we need to map back to segments
    // Actually, better approach: type character by character and render them into the correct segments

    const [displayedSegments, setDisplayedSegments] = useState<TypewriterSegment[]>(
        segments.map(s => ({ ...s, text: "" }))
    )

    const [isTyping, setIsTyping] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    // Calculate total length
    const totalLength = segments.reduce((acc, seg) => acc + seg.text.length, 0)

    // Track which segment is currently active for cursor placement
    const [activeSegmentIndex, setActiveSegmentIndex] = useState(0)

    useEffect(() => {
        const shouldStart = start !== undefined ? start : isInView
        if (!shouldStart) return

        const startTimeout = setTimeout(() => {
            setIsTyping(true)
            let globalIndex = 0

            const typeInterval = setInterval(() => {
                if (globalIndex < totalLength) {
                    globalIndex++

                    // Reconstruct segments based on globalIndex
                    let remainingChars = globalIndex
                    const newSegments = segments.map(seg => {
                        const charsForThisSeg = Math.min(seg.text.length, remainingChars)
                        remainingChars -= charsForThisSeg
                        return {
                            ...seg,
                            text: seg.text.slice(0, charsForThisSeg)
                        }
                    })

                    setDisplayedSegments(newSegments)

                    // Calculate active segment for cursor
                    let tempIndex = globalIndex
                    let newActiveIndex = 0
                    for (let i = 0; i < segments.length; i++) {
                        if (tempIndex <= segments[i].text.length) {
                            newActiveIndex = i
                            break
                        }
                        tempIndex -= segments[i].text.length
                        // If we are at the exact boundary, check if there's a next segment
                        if (tempIndex === 0 && i < segments.length - 1) {
                            // If we just finished this segment, move to start of next?
                            // Actually, keeping it on the current one until 1 char of next is typed is usually smoother
                            // But usually cursor blinks at end of finished line until next starts
                            newActiveIndex = i
                            // If we want it to jump immediately to next line start:
                            // newActiveIndex = i + 1
                        }
                        // If we are past the last segment (fully finished), keep on last
                        if (i === segments.length - 1 && tempIndex > 0) {
                            newActiveIndex = i
                        }
                    }
                    // Edge case: if fully complete
                    if (globalIndex === totalLength) {
                        newActiveIndex = segments.length - 1
                    }

                    setActiveSegmentIndex(newActiveIndex)

                } else {
                    clearInterval(typeInterval)
                    setIsTyping(false)
                }
            }, speed)

            return () => clearInterval(typeInterval)
        }, delay)

        return () => clearTimeout(startTimeout)
    }, [isInView, segments, speed, delay, start, totalLength])

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)
        return () => clearInterval(cursorInterval)
    }, [])

    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
        const shouldStart = start !== undefined ? start : isInView
        if (shouldStart && !hasStarted) {
            setHasStarted(true)
        }
    }, [start, isInView, hasStarted])

    return (
        <div ref={ref} className={className}>
            {displayedSegments.map((seg, i) => (
                <span key={i} className={`${seg.className || ""} ${seg.display === "block" ? "block w-full" : "inline"}`}>
                    {seg.text}
                    {/* Render cursor inside the active segment */}
                    {i === activeSegmentIndex && (
                        <span
                            className={`inline-block w-[3px] h-[1em] bg-white ml-1 align-middle transition-opacity duration-100 ${hasStarted && showCursor ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    )}
                </span>
            ))}
        </div>
    )
}

// Variants for common animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
}

// Shared transition configs
export const defaultTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

export const slowTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

export const fastTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

// Premium easing curves for scroll animations
export const premiumEasing = [0.22, 1, 0.36, 1] as [number, number, number, number]
export const slowOutEasing = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Hero section specific variants
export const heroTextReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: premiumEasing,
    }
  },
}

export const heroNameReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: premiumEasing,
    }
  },
}

export const heroStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// For word-by-word animation
export const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: premiumEasing,
    },
  }),
}

// Scroll-specific variants
export const scrollFadeScale = {
  initial: { opacity: 1, scale: 1 },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: slowOutEasing,
    }
  },
}

export const scrollRevealFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: premiumEasing,
    }
  },
}



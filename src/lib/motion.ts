/**
 * HESTIIA RESTAURANT — SHARED MOTION TOOLKIT
 * Centralized easing curves, durations, and Framer Motion / GSAP animation variants.
 */

// ─── Easing Families ────────────────────────────────────────────────────────
// Strictly following the power3.out / [0.22, 1, 0.36, 1] slow and elegant curve
export const EASINGS = {
  default: [0.22, 1, 0.36, 1] as const,
  expoOut: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  // GSAP string equivalent
  gsapDefault: 'power3.out',
  gsapSmooth: 'power2.out',
  gsapLinear: 'none',
} as const

// ─── Standard Durations (Seconds) ───────────────────────────────────────────
export const DURATIONS = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.5,
  mobile: 0.65,
  slow: 0.85,
  editorial: 1.2,
} as const

// ─── Stagger Offsets ────────────────────────────────────────────────────────
export const STAGGERS = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.16,
} as const

// ─── Shared Framer Motion Variants ──────────────────────────────────────────
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: DURATIONS.normal, ease: EASINGS.default },
    },
  },

  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATIONS.normal, ease: EASINGS.default },
    },
  },

  fadeUpMobile: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATIONS.mobile, ease: EASINGS.default },
    },
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: (staggerVal: number = STAGGERS.normal) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerVal,
        delayChildren: 0.05,
      },
    }),
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATIONS.normal, ease: EASINGS.default },
    },
  },

  clipRevealUp: {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: { duration: DURATIONS.slow, ease: EASINGS.default },
    },
  },

  clipRevealLeft: {
    hidden: { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: { duration: DURATIONS.slow, ease: EASINGS.default },
    },
  },
} as const

// ─── Breakpoints & Constants ────────────────────────────────────────────────
export const MOTION_BREAKPOINTS = {
  desktop: 1024,
  tablet: 768,
  mobile: 390,
} as const

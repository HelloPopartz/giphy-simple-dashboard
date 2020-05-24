import React from 'react'
import { ExtendableStyles, Testable, WithChildren } from 'utils/react'
import { motion } from 'framer-motion'

export type RevealOnHoverProps = ExtendableStyles & Testable & WithChildren

const animationStates = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const transitionValues = {
  duration: 0.3,
}

export function RevealOnHover(props: RevealOnHoverProps) {
  return (
    <motion.span
      variants={animationStates}
      transition={transitionValues}
      whileHover="show"
      initial={'hidden'}
      {...props}
    />
  )
}

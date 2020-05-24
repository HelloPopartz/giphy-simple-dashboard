import React from 'react'
import { ExtendableStyles, Testable, WithChildren } from 'utils/react'
import { motion } from 'services/animations'

export type SlideInProps = ExtendableStyles & Testable & WithChildren

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: '100%', transition },
  enter: { x: 0, transition: { transition } },
}

export function SlideIn(props: SlideInProps) {
  return <motion.span variants={backVariants} initial="exit" animate="enter" exit="exit" {...props} />
}

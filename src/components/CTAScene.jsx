import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CTAScene() {
  const [stage, setStage] = useState('idle')

  const handleEnter = () => {
    if (stage !== 'idle') return
    setStage('title1')
    setTimeout(() => setStage('title2'), 2200)
  }

  return (
    <motion.div
      className="relative flex min-h-[18vh] w-full items-center justify-center overflow-visible px-6 py-4"
      onViewportEnter={handleEnter}
      viewport={{ amount: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {stage === 'title1' && (
          <motion.h2
            key="t1"
            className="rounded-3xl border border-white/40 bg-[#a8758a]/80 px-5 py-4 font-display text-3xl leading-tight text-white shadow-md backdrop-blur-md"
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(8px)', transition: { duration: 0.6 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            o que você está esperando para renovar sua autoestima?
          </motion.h2>
        )}

        {stage === 'title2' && (
          <motion.h2
            key="t2"
            className="rounded-3xl border border-white/40 bg-[#a8758a]/80 px-5 py-4 font-display text-3xl leading-tight text-white shadow-md backdrop-blur-md"
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            a Dra. Rosa Maria Marquezini vai ser sua especialista!!
          </motion.h2>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CTAScene

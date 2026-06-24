import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const logos = [
  { src: '/images/logo-sbcp.png', alt: 'Sociedade Brasileira de Cirurgia Plástica' },
  { src: '/images/logo-asps.jpg', alt: 'American Society of Plastic Surgeons' },
  { src: '/images/logo-isaps.jpg', alt: 'ISAPS' },
]

function LogosScene() {
  const [stage, setStage] = useState('idle')

  const handleEnter = () => {
    if (stage !== 'idle') return
    setStage('intro')
    setTimeout(() => setStage('settled'), 1900)
  }

  return (
    <motion.div
      className="absolute inset-0"
      onViewportEnter={handleEnter}
      viewport={{ amount: 0.5 }}
    >
      <AnimatePresence>
        {(stage === 'intro' || stage === 'settled') && (
          <motion.div
            className="pointer-events-none absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'intro' ? 0.55 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 'intro' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-5 -translate-y-[30%]"
            exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          >
            {logos.map((logo, i) => (
              <motion.img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-28 w-28 rounded-2xl bg-white object-contain p-2 shadow-2xl"
                initial={{ opacity: 0, scale: 0.2, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {stage === 'settled' && (
        <>
          <motion.div
            className="absolute top-[10%] left-1/2 w-[85%] -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block rounded-2xl border border-white/40 bg-white/30 px-4 py-3 font-sans text-base font-semibold leading-snug text-[#3a2f23] shadow-md backdrop-blur-md">
              a Dra. Rosa Maria Marquezini é membro oficial dos times:
            </span>
          </motion.div>

          <motion.div
            className="absolute top-[22%] left-[41%] flex -translate-x-1/2 items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {logos.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-[5.5rem] w-[5.5rem] rounded-xl bg-white object-contain p-1.5 shadow-lg"
              />
            ))}
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

export default LogosScene

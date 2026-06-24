import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/carrosel-1.png',
  '/images/carrosel-2.png',
  '/images/carrosel-3.png',
  '/images/carrosel-4.png',
  '/images/carrosel-5.png',
]

function OfficeCarousel() {
  const [active, setActive] = useState(null)
  const track = [...images, ...images]

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4 px-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(src)}
            className="h-60 w-48 shrink-0 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            <img src={src} alt="Consultório" className="h-full w-full object-cover" />
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              alt="Consultório"
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OfficeCarousel

import { AnimatePresence, motion } from 'framer-motion'

function InstagramModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-sm rounded-3xl border border-white/40 bg-white/90 p-6 text-center shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0">
                <defs>
                  <linearGradient id="igGradientModal" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#igGradientModal)"
                  d="M12 2c-2.717 0-3.056.012-4.123.06-1.064.05-1.79.218-2.428.465a4.901 4.901 0 0 0-1.772 1.153A4.901 4.901 0 0 0 2.525 5.45c-.247.637-.415 1.363-.465 2.428C2.012 8.944 2 9.283 2 12s.012 3.056.06 4.123c.05 1.064.218 1.79.465 2.428a4.901 4.901 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.637.247 1.363.415 2.428.465C8.944 21.988 9.283 22 12 22s3.056-.012 4.123-.06c1.064-.05 1.79-.218 2.428-.465a4.901 4.901 0 0 0 1.772-1.153 4.901 4.901 0 0 0 1.153-1.772c.247-.637.415-1.363.465-2.428.048-1.067.06-1.406.06-4.123s-.012-3.056-.06-4.123c-.05-1.064-.218-1.79-.465-2.428a4.901 4.901 0 0 0-1.153-1.772A4.901 4.901 0 0 0 18.551 2.525c-.637-.247-1.363-.415-2.428-.465C15.056 2.012 14.717 2 12 2Zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058Z"
                />
                <path
                  fill="url(#igGradientModal)"
                  d="M12 15.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7Zm6.4-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
                />
              </svg>

              <h3 className="font-display text-xl leading-none text-[#0d0a14]">
                fique por dentro da{' '}
                <span className="bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] bg-clip-text text-transparent">
                  rotina
                </span>{' '}
                da dra rosa marquezini
              </h3>
            </div>

            <img
              src="/images/iphone-instagram.webp"
              alt="Perfil no Instagram da Dra. Rosa Marquezini"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="mx-auto mt-5 w-[70%] max-w-[220px]"
            />

            <a
              href="https://instagram.com/drarosammarquezini"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] px-5 py-3 font-sans text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Seguir no Instagram
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InstagramModal

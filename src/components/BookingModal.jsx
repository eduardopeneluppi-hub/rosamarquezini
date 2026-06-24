import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WHATSAPP_NUMBER = '551239224146'

const options = [
  'Técnica Deep Plane Facelift',
  'Facelift',
  'Blefaroplastia (pálpebras)',
  'Lipo de papada',
  'Abdominoplastia',
  'Mamoplastia',
  'Lipoaspiração',
]

function BookingModal({ open, onClose }) {
  const [selected, setSelected] = useState(null)
  const [custom, setCustom] = useState('')

  const message = custom.trim() || selected

  const handleSend = () => {
    if (!message) return
    const text = encodeURIComponent(
      `Olá, Dra. Rosa Maria! Gostaria de agendar uma consulta sobre: ${message}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    onClose()
  }

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
            className="w-full max-w-sm rounded-3xl border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-2xl text-[#0d0a14]">agendar consulta</h3>
            <p className="mt-1 font-sans text-sm text-[#3a2f23]">
              Escolha um assunto ou descreva o que você precisa:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSelected(opt)
                    setCustom('')
                  }}
                  className={`rounded-full border px-3 py-1.5 font-sans text-xs font-semibold transition-colors ${
                    selected === opt
                      ? 'border-[#e6469a] bg-[#e6469a] text-white'
                      : 'border-[#3a2f23]/20 bg-[#f3ead9]/60 text-[#3a2f23] hover:bg-[#f3ead9]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <textarea
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value)
                setSelected(null)
              }}
              placeholder="Ou digite aqui o que você precisa..."
              rows={3}
              className="mt-4 w-full resize-none rounded-2xl border border-[#3a2f23]/20 bg-white px-4 py-3 font-sans text-sm text-[#1f1a16] outline-none focus:border-[#e6469a]"
            />

            <button
              type="button"
              onClick={handleSend}
              disabled={!message}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1da851] px-5 py-3 font-sans text-sm font-bold text-white shadow-lg shadow-[#1da851]/40 transition-transform hover:scale-[1.02] disabled:bg-[#1da851]/50 disabled:shadow-none"
            >
              <svg viewBox="0 0 16 16" className="h-5 w-5 fill-white">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.93 7.93 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.51.646-.626.778-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.084-.084.193-.222.29-.333.097-.11.129-.19.193-.317.065-.129.034-.243-.015-.341-.05-.099-.43-1.038-.59-1.42-.16-.382-.32-.33-.44-.336-.114-.005-.245-.005-.376-.005a.728.728 0 0 0-.527.247c-.182.198-.69.677-.69 1.654 0 .976.71 1.921.81 2.052.099.13 1.355 2.084 3.32 2.91.464.197.838.317 1.123.405.474.146.905.126 1.246.077.38-.057 1.169-.479 1.334-.94.165-.464.165-.86.115-.94-.05-.082-.182-.131-.38-.231z" />
              </svg>
              Enviar no WhatsApp
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal

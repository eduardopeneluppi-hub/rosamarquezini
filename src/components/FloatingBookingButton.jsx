import { useState } from 'react'
import BookingModal from './BookingModal'

function FloatingBookingButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-[#a8758a] px-5 py-3 font-sans text-sm font-semibold text-white shadow-2xl transition-transform hover:scale-105"
      >
        Agendar consulta
      </button>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default FloatingBookingButton

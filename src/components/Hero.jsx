import { useState } from 'react'
import BookingModal from './BookingModal'
import InstagramModal from './InstagramModal'

function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [instagramOpen, setInstagramOpen] = useState(false)

  return (
    <section
      className="relative aspect-[9/16] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute top-[8%] left-[-6%] w-full px-6 text-center">
        <span className="animate-badge-in inline-flex items-center rounded-full border border-white/40 bg-[#f3ead9]/50 px-4 py-1.5 font-sans text-sm font-semibold tracking-wide text-[#3a2f23] shadow-md backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:bg-[#f3ead9]/70 hover:shadow-lg">
          cirurgiã plástica
        </span>

        <h1 className="animate-title-in mt-1 font-display text-[2.6rem] leading-[0.95] tracking-tight text-[#0d0a14]">
          rosa maria
          <br />
          marquezini
        </h1>
      </div>

      <img
        src="/images/dra-marquezini.png"
        alt="Dra. Rosa Maria Marquezini"
        className="animate-photo-in absolute top-[22.8%] left-[-0.7%] w-[80%] max-w-sm"
      />

      <div className="absolute top-[78%] left-0 z-20 w-full px-6">
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="block w-[62%] rounded-full bg-[#a8758a] px-5 py-3 text-left font-sans text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          Agendar consulta
        </button>
        <button
          type="button"
          className="mt-3 ml-[19%] block w-[62%] rounded-full bg-[#f3ead9] px-5 py-3 text-left font-sans text-sm font-semibold text-[#3a2f23] shadow-lg transition-transform hover:scale-105"
        >
          Antes e depois
        </button>
        <button
          type="button"
          onClick={() => setInstagramOpen(true)}
          className="mt-3 ml-[38%] flex w-[62%] items-center gap-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] px-5 py-3 text-left font-sans text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-white">
            <path d="M12 2c-2.717 0-3.056.012-4.123.06-1.064.05-1.79.218-2.428.465a4.901 4.901 0 0 0-1.772 1.153A4.901 4.901 0 0 0 2.525 5.45c-.247.637-.415 1.363-.465 2.428C2.012 8.944 2 9.283 2 12s.012 3.056.06 4.123c.05 1.064.218 1.79.465 2.428a4.901 4.901 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.637.247 1.363.415 2.428.465C8.944 21.988 9.283 22 12 22s3.056-.012 4.123-.06c1.064-.05 1.79-.218 2.428-.465a4.901 4.901 0 0 0 1.772-1.153 4.901 4.901 0 0 0 1.153-1.772c.247-.637.415-1.363.465-2.428.048-1.067.06-1.406.06-4.123s-.012-3.056-.06-4.123c-.05-1.064-.218-1.79-.465-2.428a4.901 4.901 0 0 0-1.153-1.772A4.901 4.901 0 0 0 18.551 2.525c-.637-.247-1.363-.415-2.428-.465C15.056 2.012 14.717 2 12 2Zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058Z" />
            <path d="M12 15.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7Zm6.4-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
          </svg>
          Instagram
        </button>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <InstagramModal open={instagramOpen} onClose={() => setInstagramOpen(false)} />
    </section>
  )
}

export default Hero

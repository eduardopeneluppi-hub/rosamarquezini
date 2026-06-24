import OfficeCarousel from './OfficeCarousel'
import CTAScene from './CTAScene'

function FourthSection() {
  return (
    <section className="relative w-full py-10">
      <img
        src="/images/section4-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-white/40 bg-white/30 px-6 py-2.5 font-sans text-lg font-semibold tracking-wide text-[#3a2f23] shadow-md backdrop-blur-md">
          nosso consultório
        </span>
      </div>

      <div className="relative mt-8">
        <OfficeCarousel />
      </div>

      <CTAScene />

      <div className="relative mt-2 px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-white/40 bg-[#a8758a]/80 px-6 py-2.5 font-sans text-lg font-semibold tracking-wide text-white shadow-md backdrop-blur-md">
          onde nos encontrar
        </span>
      </div>

      <div className="relative mt-6 px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/30 p-2 shadow-xl backdrop-blur-md">
          <iframe
            title="Localização do consultório"
            className="h-72 w-full rounded-[1.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Edif%C3%ADcio+Costa+Norte,+R.+Carlos+Maria+Auricchio,+70,+Jd.+Aquarius,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12246-876&output=embed"
          />
        </div>
        <p className="mt-3 pb-24 font-sans text-sm text-[#3a2f23]">
          Edifício Costa Norte — R. Carlos Maria Auricchio, 70 — Sala 803
          <br />
          Jd. Aquarius, São José dos Campos - SP, 12246-876
        </p>
      </div>
    </section>
  )
}

export default FourthSection

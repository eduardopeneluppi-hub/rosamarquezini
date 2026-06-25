import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
}

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/section2-bg.jpg"
        alt=""
        className="block w-full"
      />
      <div className="pointer-events-none absolute top-[-2%] left-[-6%] h-40 w-40 rounded-full bg-[#e6469a]/40 blur-3xl" />

      <motion.div
        className="absolute top-[5.5%] left-1/2 w-full -translate-x-1/2 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex items-center rounded-full border border-white/50 bg-white/70 px-6 py-2.5 font-sans text-lg font-semibold tracking-wide text-[#3a2f23] shadow-md">
          atuações e especialidades
        </span>
      </motion.div>

      <div className="absolute top-[52%] left-1/2 aspect-[375/666] w-[95%] max-w-md -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src="/images/cards-marque.png"
          alt=""
          className="h-full w-full"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="absolute top-[14%] left-[17%] w-[46%]"
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[0.91rem] leading-snug font-medium text-[#1f1a16]">
            <span className="text-[1.05rem] font-semibold text-[#0d0a14]">Técnica de destaque:</span>{' '}
            a Dra. Rosa Maria é amplamente reconhecida pela técnica de rejuvenescimento
            facial Deep Plane Facelift, focada em resultados naturais e duradouros ao
            reposicionar as estruturas profundas do rosto.
          </p>
        </motion.div>

        <motion.div
          className="absolute top-[58%] left-[41%] w-[46%]"
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[0.91rem] leading-snug font-medium text-[#1f1a16]">
            <span className="text-[1.05rem] font-semibold text-[#0d0a14]">Procedimentos:</span> ela
            realiza cirurgias faciais e corporais, como facelift, blefaroplastia
            (pálpebras), lipo de papada, abdominoplastia, mamoplastia e
            lipoaspiração.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

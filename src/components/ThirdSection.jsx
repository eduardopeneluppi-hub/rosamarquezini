import LogosScene from './LogosScene'

function ThirdSection() {
  return (
    <section className="relative w-full">
      <img src="/images/section3-bg.jpg" alt="" className="block w-full" />

      <LogosScene />

      <div className="absolute bottom-[4%] right-[4%] w-[57%] max-w-sm">
        <div className="absolute -top-3 -right-3 -bottom-3 -left-3 rounded-[2rem] border border-white/50 bg-gradient-to-br from-white/40 to-[#e6469a]/20 shadow-xl backdrop-blur-sm" />
        <img
          src="/images/marquezini2.png"
          alt="Dra. Rosa Maria Marquezini"
          className="relative w-full rounded-[1.5rem]"
        />
      </div>
    </section>
  )
}

export default ThirdSection

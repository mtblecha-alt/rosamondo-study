import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Gallery from '../components/Gallery'

export default function HomePage() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Header />
      <Hero />
      <HowItWorks />
      <Gallery />

      {/* Footer */}
      <footer
        className="w-full py-12 px-8 md:px-20 lg:px-32 border-t border-white/8"
        style={{ background: '#080808' }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mk-latin text-white/70 text-lg tracking-wide mb-1">rosamondo</p>
            <p className="font-helvetica text-white/25 text-xs tracking-widest uppercase">
              Der Marktplatz für zirkuläre Materialien
            </p>
          </div>
          <p className="font-helvetica text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Rosamondo. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </main>
  )
}

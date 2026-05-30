import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Header />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Footer />
    </main>
  )
}

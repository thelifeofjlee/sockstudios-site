import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import FloorPlan from '@/components/FloorPlan'
import Amenities from '@/components/Amenities'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import BookNow from '@/components/BookNow'
import Availability from '@/components/Availability'
import FindUs from '@/components/FindUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Pricing />
      <Reviews />
      <BookNow />
      <Availability />
      <FAQ />
      <FloorPlan />
      <FindUs />
      <Footer />
    </main>
  )
}

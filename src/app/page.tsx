import { Header } from '@/app/components/header'
import { HeaderHero } from '@/app/components/header-hero'
import { FurnitureGallery } from '@/app/components/furniture-gallery'
import { CompletedWorks } from '@/app/components/completed-works'
import { Testimonials } from '@/app/components/testimonials'
import { InfoSection } from '@/app/components/info-section'
import { ScrollToTop } from '@/app/components/scroll-to-top'
import { Footer } from '@/app/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeaderHero />
        <FurnitureGallery />
        <InfoSection />
        <CompletedWorks />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}


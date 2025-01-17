import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { FurnitureGallery } from "@/app/components/furniture-gallery";
import { CompletedWorks } from "@/app/components/completed-works";
import { Testimonials } from "@/app/components/testimonials";
import { InfoSection } from "@/app/components/info-section";
import { ScrollToTop } from "@/app/components/scroll-to-top";
import { Footer } from "@/app/components/footer";
import { InfoContact } from "./components/info-contact";
import { WorksGallery } from "./components/works-gallery";

export default function Home() {
	return (
		<div className='min-h-screen bg-background flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Hero />
				<InfoSection />
				<FurnitureGallery />
				{/* <CompletedWorks /> */}
				{/* <WorksGallery /> */}
				<Testimonials />
				<InfoContact />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

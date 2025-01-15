import { Navigation } from "./components/navigation";
import { FurnitureGallery } from "./components/furniture-gallery";
import { CompletedWorks } from "./components/completed-works";
import { Testimonials } from "./components/testimonials";
import { InfoSection } from "./components/info-section";
import { ScrollToTop } from "./components/scroll-to-top";
import { HeaderHero } from "./components/header-hero";

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* <Navigation /> */}
			<HeaderHero />
			<main>
				<FurnitureGallery />
				<InfoSection />
				<CompletedWorks />
				<Testimonials />
			</main>
			<footer className='bg-gray-800 text-white py-6'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<p>&copy; 2025 MuebleríaX. Todos los derechos reservados.</p>
				</div>
			</footer>
			<ScrollToTop />
		</div>
	);
}

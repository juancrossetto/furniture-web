import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { MediaMasonry } from "@/app/components/media-masonry";

// Simulated data - in a real app, this would come from a database or API
const works = {
	"1": {
		id: "1",
		title: "Cocina Moderna",
		description:
			"Diseño y fabricación de cocina integral con acabados de alta calidad y diseño ergonómico.",
		fullDescription:
			"Esta cocina moderna fue diseñada y fabricada a medida para un cliente que buscaba maximizar el espacio y la funcionalidad. Utilizamos materiales de alta calidad como cuarzo para las encimeras y MDF lacado para los muebles. La distribución en forma de U permite un flujo de trabajo eficiente y proporciona abundante espacio de almacenamiento.",
		media: [
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{
				type: "video" as const,
				src: "https://example.com/cocina-moderna-video.mp4",
			},
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{
				type: "video" as const,
				src: "https://example.com/cocina-moderna-video2.mp4",
			},
		],
	},
	"2": {
		id: "2",
		title: "Baño de Lujo",
		description:
			"Remodelación completa de baño con acabados de lujo y diseño spa.",
		fullDescription:
			"Este proyecto de remodelación transformó un baño anticuado en un oasis de lujo. Instalamos una amplia ducha de lluvia, una bañera independiente y un vanitory doble con lavabos de diseño. Los azulejos de gran formato y la iluminación ambiental crean una atmósfera relajante y sofisticada.",
		media: [
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{
				type: "video" as const,
				src: "https://example.com/bano-lujo-video.mp4",
			},
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
			{
				type: "video" as const,
				src: "https://example.com/bano-lujo-video2.mp4",
			},
			{ type: "image" as const, src: "/placeholder.svg?height=600&width=800" },
		],
	},
	// ... otros trabajos
};

export default async function Page({
	params,
}: {
	params: Promise<{ workId: string }>;
}) {
	// const workId = (await params).workId;
	// const work = works[workId as keyof typeof works];

	// if (!work) {
	// 	notFound();
	// }

	return (
		<div className='min-h-screen flex flex-col'>
			{/* <Header />
			<main className='flex-grow'>
				<article className='max-w-4xl mx-auto px-4 py-8'>
					<Button variant='ghost' asChild className='-ml-4 mb-8'>
						<Link
							href='/'
							className='flex items-center text-sm text-gray-600 hover:text-gray-900'
						>
							<ChevronLeft className='mr-1 h-4 w-4' />
							Volver al inicio
						</Link>
					</Button>

					<h1 className='text-4xl font-bold mb-6'>{work.title}</h1>

					<p className='text-xl text-gray-600 mb-8'>{work.description}</p>

					<div className='prose max-w-none mb-12'>
						<p>{work.fullDescription}</p>
					</div>

					<h2 className='text-2xl font-semibold mb-4'>Galería del proyecto</h2>
					<MediaMasonry media={work.media} />
				</article>
			</main>
			<Footer /> */}
		</div>
	);
}

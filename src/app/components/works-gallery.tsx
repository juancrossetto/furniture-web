"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Work {
	id: string;
	title: string;
	imageUrl: string;
	size: "normal" | "wide" | "tall";
}

// Initial set of works - each group of 10 follows the pattern
const initialWorks: Work[] = [
	// First group
	{
		id: "1",
		title: "Cocina Moderna",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "2",
		title: "Baño de Lujo",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "3",
		title: "Vestidor",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "4",
		title: "Oficina en Casa",
		imageUrl: "/placeholder.svg?height=600&width=800",
		size: "wide",
	},
	{
		id: "5",
		title: "Biblioteca",
		imageUrl: "/placeholder.svg?height=600&width=400",
		size: "tall",
	},
	{
		id: "6",
		title: "Comedor",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "7",
		title: "Dormitorio",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "8",
		title: "Sala de Estar",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "9",
		title: "Terraza",
		imageUrl: "/placeholder.svg?height=600&width=400",
		size: "tall",
	},
	{
		id: "10",
		title: "Cocina Exterior",
		imageUrl: "/placeholder.svg?height=600&width=800",
		size: "wide",
	},
];

// Additional works following the same pattern
const additionalWorks: Work[] = [
	{
		id: "11",
		title: "Estudio",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "12",
		title: "Gimnasio en Casa",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "13",
		title: "Cuarto de Juegos",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "14",
		title: "Sala de Cine",
		imageUrl: "/placeholder.svg?height=600&width=800",
		size: "wide",
	},
	{
		id: "15",
		title: "Bodega",
		imageUrl: "/placeholder.svg?height=600&width=400",
		size: "tall",
	},
	{
		id: "16",
		title: "Lavandería",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "17",
		title: "Entrada",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "18",
		title: "Garaje",
		imageUrl: "/placeholder.svg?height=300&width=400",
		size: "normal",
	},
	{
		id: "19",
		title: "Jardín",
		imageUrl: "/placeholder.svg?height=600&width=400",
		size: "tall",
	},
	{
		id: "20",
		title: "Piscina",
		imageUrl: "/placeholder.svg?height=600&width=800",
		size: "wide",
	},
];

export function WorksGallery() {
	const [works, setWorks] = useState<Work[]>(initialWorks);
	const [loading, setLoading] = useState(false);

	const loadMore = () => {
		setLoading(true);
		// Simulate API call delay
		setTimeout(() => {
			setWorks([...works, ...additionalWorks]);
			setLoading(false);
		}, 1000);
	};

	const getItemClass = (index: number, size: string) => {
		const baseClass =
			"relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]";
		const rowIndex = Math.floor(index / 10) * 10;
		const positionInGroup = index % 10;

		if (positionInGroup >= 3 && positionInGroup <= 4) {
			return `${baseClass} ${
				size === "wide" ? "col-span-2 row-span-2" : "row-span-2"
			}`;
		} else if (positionInGroup >= 8 && positionInGroup <= 9) {
			return `${baseClass} ${
				size === "wide" ? "col-span-2 row-span-2" : "row-span-2"
			}`;
		}

		return baseClass;
	};

	return (
		<section className='py-16 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<Badge className='mb-4' variant='secondary'>
						Gallery
					</Badge>
					<h2 className='text-4xl font-bold mb-4'>Our Photo Gallery</h2>
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						Whether you seek inspiration for your next project or simply wish to
						explore our craftsmanship, browse through our collection of
						completed works.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{works.map((work, index) => (
						<Link
							key={work.id}
							href={`/trabajos/${work.id}`}
							className={getItemClass(index, work.size)}
						>
							<div className='w-full h-full aspect-square'>
								<Image
									src={work.imageUrl || "/placeholder.svg"}
									alt={work.title}
									fill
									className='object-cover'
								/>
								<div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
									<h3 className='text-white text-xl font-semibold px-4 text-center'>
										{work.title}
									</h3>
								</div>
							</div>
						</Link>
					))}
				</div>

				{works.length < initialWorks.length + additionalWorks.length && (
					<div className='text-center mt-8'>
						<Button
							onClick={loadMore}
							disabled={loading}
							size='lg'
							variant='secondary'
							className='min-w-[200px]'
						>
							{loading ? "Loading..." : "View More"}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHomeInfo } from "@/lib/get-home-info";
import { getCategories } from "@/lib/get-categories";
import { ProductCategory } from "@/lib/types";
// const { NEXT_PUBLIC_STRAPI_HOST, NEXT_PUBLIC_STRAPI_TOKEN } = process.env;

// let categories: ProductCategory[] = [
//   {
//     type: 'special',
//     title: 'Diseño personalizado',
//     description: 'Obtené un 15% de descuento en tu primer proyecto a medida',
//     imageUrl: '',
//     href: '/contacto',
//     className: 'lg:col-start-1 lg:row-start-1'
//   },
//   {
//     type: 'collection',
//     title: 'Muebles de Cocina',
//     description: 'Cocinas modernas y funcionales diseñadas para tu espacio',
//     imageUrl: '/placeholder.svg?height=400&width=600',
//     href: '/categoria/cocina',
//     className: 'lg:col-start-2 lg:row-start-1 lg:row-span-2',
//     features: ['Alacenas y bajomesadas', 'Islas de cocina', 'Despenseros']
//   },
//   {
//     type: 'collection',
//     title: 'Muebles de Baño',
//     description: 'Baños elegantes y prácticos para tu hogar',
//     imageUrl: '/placeholder.svg?height=800&width=600',
//     href: '/categoria/bano',
//     className: 'lg:col-start-3 lg:row-start-1 lg:row-span-3',
//     features: ['Vanitorys', 'Muebles columna', 'Espejos con luz']
//   },
//   {
//     type: 'feature',
//     title: 'Vestidores',
//     description: 'Maximizá tu espacio con nuestros vestidores personalizados',
//     imageUrl: '/placeholder.svg?height=400&width=600',
//     href: '/categoria/vestidores',
//     className: 'lg:col-start-1 lg:row-start-2 lg:row-span-2',
//     features: ['Vestidores walk-in', 'Placares a medida', 'Organizadores']
//   },
//   {
//     type: 'feature',
//     title: 'Mesas y Sillas',
//     description: 'Diseños únicos para cada espacio',
//     imageUrl: '/placeholder.svg?height=800&width=600',
//     href: '/categoria/mesas',
//     className: 'lg:col-start-2 lg:row-start-3 lg:row-span-3',
//     features: ['Mesas de comedor', 'Escritorios', 'Sillas ergonómicas']
//   },
//   {
//     type: 'collection',
//     title: 'Placares',
//     description: 'Soluciones de almacenamiento a medida',
//     imageUrl: '/placeholder.svg?height=400&width=600',
//     href: '/categoria/placares',
//     className: 'lg:col-start-1 lg:row-start-4 lg:row-span-2',
//     features: ['Placares empotrados', 'Módulos especiales', 'Accesorios']
//   },
//   {
//     type: 'feature',
//     title: 'Oficinas',
//     description: 'Mobiliario corporativo y comercial',
//     imageUrl: '/placeholder.svg?height=400&width=600',
//     href: '/categoria/oficinas',
//     className: 'lg:col-start-3 lg:row-start-4 lg:row-span-2',
//     features: ['Puestos de trabajo', 'Salas de reuniones', 'Recepciones']
//   }
// ]

export async function Hero() {
	// const { title, description, slogan, cover } = await getHomeInfo();
	const homeInfo = await getHomeInfo();
	const title = "Juanma";
	const categories = await getCategories();
	// const image = `${NEXT_PUBLIC_STRAPI_HOST}${cover.url}`
	return (
		<div className='bg-background min-h-screen flex flex-col'>
			{/* Hero Section */}
			<div className='flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col'>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-12'>
					El arte del diseño
					<br />
					en cada detalle.
				</h1>

				{/* Category Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] flex-grow'>
					{categories.map((category, index) => (
						<Link
							key={index}
							href={
								category.type === "special"
									? category.href
									: `/categories/${category.id}`
							}
							className={`relative group overflow-hidden rounded-2xl ${category.className}`}
						>
							{category.type === "special" ? (
								<div className='h-full bg-[#e8f5e9] p-6 flex flex-col justify-between'>
									<h2 className='text-2xl font-semibold'>{category.title}</h2>
									<div>
										<p className='mb-4'>{category.description}</p>
										<Button variant='outline' size='sm'>
											Ver más
										</Button>
									</div>
								</div>
							) : (
								<>
									<Image
										src={category.imageUrl || "/placeholder.svg"}
										alt={category.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									{/* Default state overlay */}
									<div className='absolute inset-0 bg-black/30 p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0'>
										<h2 className='text-white text-2xl font-semibold'>
											{category.title}
										</h2>
										<p className='text-white/90 text-sm'>
											{category.description}
										</p>
									</div>
									{/* Hover state overlay */}
									<div className='absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<h2 className='text-white text-2xl font-semibold mb-4'>
											{category.title}
										</h2>
										<p className='text-white/90 text-base mb-4'>
											{category.description}
										</p>
										{category.features && (
											<ul className='text-white/90 text-sm space-y-2 mb-4'>
												{category.features.map((feature, idx) => (
													<li key={idx}>✓ {feature}</li>
												))}
											</ul>
										)}
										<Button variant='secondary' size='sm'>
											Ver más
										</Button>
									</div>
								</>
							)}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

import { AutoSlider } from "@/app/components/auto-slider";

const completedWorks = [
	{
		id: "1",
		title: "Cocina Moderna",
		description: "Diseño y fabricación de cocina integral",
		imageUrl: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "2",
		title: "Baño de Lujo",
		description: "Remodelación completa de baño",
		imageUrl: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "3",
		title: "Probadores para Tienda",
		description: "Instalación de probadores en tienda de ropa",
		imageUrl: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "4",
		title: "Oficina Ejecutiva",
		description: "Diseño de muebles para oficina ejecutiva",
		imageUrl: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "5",
		title: "Vestidor a Medida",
		description: "Creación de vestidor personalizado",
		imageUrl: "/placeholder.svg?height=300&width=400",
	},
];

export function CompletedWorks() {
	return (
		<section className='py-12 bg-gray-50'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-extrabold text-gray-900 mb-6'>
					Trabajos Realizados
				</h2>
				<AutoSlider works={completedWorks} />
			</div>
		</section>
	);
}

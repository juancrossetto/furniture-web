import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials } from "@/lib/get-testimonials";

// const testimonials = [
//   { id: 1, name: 'María García', text: 'Excelente servicio y calidad en los muebles. Muy satisfecha con mi nueva cocina.' },
//   { id: 2, name: 'Juan Pérez', text: 'Los probadores que instalaron en mi tienda son perfectos. Mis clientes están encantados.' },
//   { id: 3, name: 'Ana Rodríguez', text: 'La mesa de comedor que me hicieron es hermosa y de gran calidad. Totalmente recomendados.' },
//   // Agrega más testimonios aquí
// ]

export const Testimonials = async () => {
	const testimonials = await getTestimonials();
	return (
		<div className='py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-extrabold text-gray-900 mb-6'>
					Lo que dicen nuestros clientes
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{testimonials.map((testimonial) => (
						<Card key={testimonial.id}>
							<CardContent className='p-6'>
								<div className='text-gray-600 mb-4'>
									<BlocksRenderer content={testimonial.description} />
								</div>
								<p className='font-semibold'>{testimonial.clientName}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

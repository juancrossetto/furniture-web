"use client";

import { MapPin, Phone, Mail, Clock, CreditCard, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function InfoContact() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add form submission logic here
	};

	return (
		<div className='py-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Info boxes grid */}
				{/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					<Card className='bg-primary text-primary-foreground'>
						<CardContent className='p-6 text-center'>
							<div className='flex justify-center mb-4'>
								<Truck className='h-8 w-8' />
							</div>
							<h3 className='text-lg font-bold mb-3'>ENVÍOS A TODO AMBA</h3>
							<p className='text-primary-foreground/90'>
								Con sede en Temperley trabajamos en todo el AMBA. Contamos con
								movilidad propia.
							</p>
						</CardContent>
					</Card>

					<Card className='bg-primary text-primary-foreground'>
						<CardContent className='p-6 text-center'>
							<div className='flex justify-center mb-4'>
								<Clock className='h-8 w-8' />
							</div>
							<h3 className='text-lg font-bold mb-3'>TRABAJAMOS 24×7</h3>
							<p className='text-primary-foreground/90'>
								Taller abierto las 24hs del día, los 7 días de la semana.
							</p>
						</CardContent>
					</Card>

					<Card className='bg-primary text-primary-foreground'>
						<CardContent className='p-6 text-center'>
							<div className='flex justify-center mb-4'>
								<CreditCard className='h-8 w-8' />
							</div>
							<h3 className='text-lg font-bold mb-3'>
								TODOS LOS MEDIOS DE PAGO
							</h3>
							<p className='text-primary-foreground/90'>
								Pagá tu mueble a medida en efectivo o con tarjeta.
							</p>
						</CardContent>
					</Card>
				</div> */}

				{/* Get in Touch Section */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-4'>Contactanos</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						¿No dude en contactarnos? Envíe sus consultas aquí y nos
						comunicaremos con usted lo antes posible.
					</p>
				</div>

				{/* Map and Contact Form */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='w-full h-[400px] rounded-lg overflow-hidden'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8876666837674!2d-58.39776892427384!3d-34.77241726683624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2a9b0f0b6b5%3A0x8b5f817a5c1c4b0!2sAv.%20Hip%C3%B3lito%20Yrigoyen%2C%20Temperley%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1705432510體'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						/>
					</div>

					<div>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<Input placeholder='Your Name' required className='w-full' />
							</div>
							<div>
								<Input
									type='email'
									placeholder='Email'
									required
									className='w-full'
								/>
							</div>
							<div>
								<Input
									type='tel'
									placeholder='Phone'
									required
									className='w-full'
								/>
							</div>
							<div>
								<Textarea
									placeholder='Message'
									required
									className='w-full min-h-[150px]'
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-primary text-primary-foreground'
							>
								Send
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

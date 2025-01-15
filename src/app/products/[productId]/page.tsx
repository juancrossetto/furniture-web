import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductSlider } from "@/app/components/product-slider"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

// Simulated data - in a real app, this would come from a database or API
const products = {
  'cocina-1': {
    id: 'cocina-1',
    name: 'Alacena Moderna',
    price: 1500,
    media: [
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'video' as const, src: 'https://example.com/product-video.mp4' },
    ],
    description: 'Alacena moderna con acabados de alta calidad y amplio espacio de almacenamiento.',
    features: ['Material: MDF', 'Color: Blanco mate', 'Tiradores: Aluminio']
  },
  'cocina-2': {
    id: 'cocina-2',
    name: 'Isla Central',
    price: 2500,
    media: [
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'video' as const, src: 'https://example.com/product-video.mp4' },
    ],
    description: 'Isla central con superficie de trabajo y espacio de almacenamiento integrado.',
    features: ['Material: Madera maciza', 'Superficie: Granito', 'Incluye: 4 taburetes']
  },
  'bano-1': {
    id: 'bano-1',
    name: 'Vanitory Flotante',
    price: 1300,
    media: [
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'image' as const, src: '/placeholder.svg?height=600&width=600' },
      { type: 'video' as const, src: 'https://example.com/product-video.mp4' },
    ],
    description: 'Vanitory flotante con diseño minimalista y amplio espacio de almacenamiento.',
    features: ['Material: MDF resistente a la humedad', 'Incluye: Lavabo de porcelana', 'Acabado: Laca brillante']
  },
  // ... otros productos
}

export default async function Page({
    params,
  }: {
    params: Promise<{ productId: string }>
  }) {
    const productId = (await params).productId
  const product = products[productId as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="-ml-4 mb-8">
            <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8">
            <ProductSlider media={product.media} />

            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold mb-4">${product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <h2 className="text-xl font-semibold mb-2">Características:</h2>
              <ul className="list-disc pl-5 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>

              <Button size="lg">Agregar al carrito</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


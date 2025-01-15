import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Navigation } from '../../components/navigation'
import { ImageMasonry } from '../../components/image-masonry'
import { ErrorPage } from '../../components/error-page'
import { Button } from "@/components/ui/button"
import { ScrollToTop } from '../../components/scroll-to-top'

const products = {
  'cocina-moderna': {
    name: 'Cocina Moderna',
    category: 'Cocinas',
    description: 'Una cocina moderna con acabados de alta calidad y diseño ergonómico.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  'bano-elegante': {
    name: 'Baño Elegante',
    category: 'Baños',
    description: 'Un baño elegante con detalles lujosos y materiales duraderos.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  // Agrega más productos aquí
}

export default function ProductPage({ params }: { params: { product: string, category: string } }) {
  const product = products[params.product as keyof typeof products]

  if (!product) {
    return <ErrorPage />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 -ml-4 hover:bg-transparent">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
          </Button>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{product.category}</p>
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
          </div>
        </div>
        
        <ImageMasonry images={product.images} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Descripción</h2>
          <p className="text-lg text-gray-700">{product.description}</p>
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}


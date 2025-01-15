import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

// Simulated data - in a real app, this would come from a database or API
const categories = {
  'cocina': {
    name: 'Muebles de Cocina',
    products: [
      { id: 'cocina-1', name: 'Alacena Moderna', price: 1500, image: '/placeholder.svg?height=300&width=300' },
      { id: 'cocina-2', name: 'Isla Central', price: 2500, image: '/placeholder.svg?height=300&width=300' },
      { id: 'cocina-3', name: 'Set de Cajones', price: 1200, image: '/placeholder.svg?height=300&width=300' },
      { id: 'cocina-4', name: 'Mueble para Horno', price: 1800, image: '/placeholder.svg?height=300&width=300' },
    ]
  },
  'bano': {
    name: 'Muebles de Baño',
    products: [
      { id: 'bano-1', name: 'Vanitory Flotante', price: 1300, image: '/placeholder.svg?height=300&width=300' },
      { id: 'bano-2', name: 'Espejo con Luz', price: 800, image: '/placeholder.svg?height=300&width=300' },
      { id: 'bano-3', name: 'Columna Organizadora', price: 950, image: '/placeholder.svg?height=300&width=300' },
    ]
  },
  // ... otras categorías
}

export default async function Page({
    params,
  }: {
    params: Promise<{ categoryId: string }>
  }) {
    const categoryId = (await params).categoryId
// export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories[categoryId as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="-ml-4">
              <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mt-4">{category.name}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button>Ver detalles</Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


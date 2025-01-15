'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Skeleton } from "@/components/ui/skeleton"

type Furniture = {
  id: number
  name: string
  category: string
  imageUrl: string
  slug: string
}

const furnitureItems: Furniture[] = [
  { id: 1, name: 'Cocina Moderna', category: 'cocina', imageUrl: '/placeholder.svg?height=300&width=300', slug: 'cocina-moderna' },
  { id: 2, name: 'Baño Elegante', category: 'bano', imageUrl: '/placeholder.svg?height=300&width=300', slug: 'bano-elegante' },
  { id: 3, name: 'Probador Espacioso', category: 'probadores', imageUrl: '/placeholder.svg?height=300&width=300', slug: 'probador-espacioso' },
  { id: 4, name: 'Mesa de Comedor', category: 'mesas', imageUrl: '/placeholder.svg?height=300&width=300', slug: 'mesa-comedor' },
  // Agrega más muebles aquí
]

export function FurnitureGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(furnitureItems.length).fill(false))

  const filteredFurniture = selectedCategory
    ? furnitureItems.filter(item => item.category === selectedCategory)
    : furnitureItems

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoadedImages = [...prev]
      newLoadedImages[index] = true
      return newLoadedImages
    })
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Nuestros Muebles</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          <Button
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? "default" : "outline"}
            className="w-full sm:w-auto"
          >
            Todos
          </Button>
          {['cocina', 'bano', 'probadores', 'mesas'].map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="w-full sm:w-auto"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFurniture.map((item, index) => (
            <Card key={item.id}>
              <Link href={`/${item.category}/${item.slug}`}>
                <CardContent className="p-4">
                  <div className="relative w-full h-48">
                    {!loadedImages[index] && (
                      <Skeleton className="w-full h-full absolute inset-0" />
                    )}
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className={`object-cover rounded-md transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


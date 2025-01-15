'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const completedWorks = [
  { id: 1, title: 'Cocina Moderna', description: 'Diseño y fabricación de cocina integral', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: 2, title: 'Baño de Lujo', description: 'Remodelación completa de baño', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: 3, title: 'Probadores para Tienda', description: 'Instalación de probadores en tienda de ropa', imageUrl: '/placeholder.svg?height=300&width=300' },
  // Agrega más trabajos realizados aquí
]

export function CompletedWorks() {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(completedWorks.length).fill(false))

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoadedImages = [...prev]
      newLoadedImages[index] = true
      return newLoadedImages
    })
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Trabajos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedWorks.map((work, index) => (
            <Card key={work.id} className="transition-transform duration-300 hover:scale-105 focus-within:scale-105">
              <CardContent className="p-4">
                <div className="relative w-full h-48">
                  {!loadedImages[index] && (
                    <Skeleton className="w-full h-full absolute inset-0" />
                  )}
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className={`object-cover rounded-md transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{work.title}</h3>
                <p className="text-sm text-gray-600">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"

interface ImageMasonryProps {
  images: string[]
}

export function ImageMasonry({ images }: ImageMasonryProps) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false))

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoadedImages = [...prev]
      newLoadedImages[index] = true
      return newLoadedImages
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className={`${index % 3 === 0 ? 'row-span-2' : ''} relative`}>
          {!loadedImages[index] && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={800}
            height={600}
            className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad(index)}
          />
        </div>
      ))}
    </div>
  )
}


'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"

interface MediaItem {
  type: 'image' | 'video'
  src: string
}

interface MediaMasonryProps {
  media: MediaItem[]
}

export function MediaMasonry({ media }: MediaMasonryProps) {
  const [loadedMedia, setLoadedMedia] = useState<boolean[]>(new Array(media.length).fill(false))

  const handleMediaLoad = (index: number) => {
    setLoadedMedia(prev => {
      const newLoadedMedia = [...prev]
      newLoadedMedia[index] = true
      return newLoadedMedia
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {media.map((item, index) => (
        <div key={index} className={`${index % 3 === 0 ? 'md:col-span-2' : ''} relative`}>
          {!loadedMedia[index] && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          {item.type === 'image' ? (
            <Image
              src={item.src || "/placeholder.svg"}
              alt={`Media item ${index + 1}`}
              width={800}
              height={600}
              className={`w-full h-auto object-cover rounded-lg transition-opacity duration-300 ${loadedMedia[index] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleMediaLoad(index)}
            />
          ) : (
            <video
              src={item.src}
              controls
              className={`w-full h-auto rounded-lg transition-opacity duration-300 ${loadedMedia[index] ? 'opacity-100' : 'opacity-0'}`}
              onLoadedData={() => handleMediaLoad(index)}
            />
          )}
        </div>
      ))}
    </div>
  )
}


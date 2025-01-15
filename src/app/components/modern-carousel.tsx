'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModernCarouselProps {
  images: string[]
}

export function ModernCarousel({ images }: ModernCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
  }

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const getImageIndex = (offset: number) => {
    const newIndex = currentIndex + offset
    if (newIndex < 0) return images.length - 1
    if (newIndex >= images.length) return 0
    return newIndex
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center min-h-[400px] md:min-h-[600px] bg-gray-100 rounded-lg">
        {/* Previous Image Preview */}
        <div className="absolute left-0 top-0 bottom-0 w-[15%] overflow-hidden opacity-30">
          <div className="relative w-full h-full">
            <Image
              src={images[getImageIndex(-1)]}
              alt="Previous image"
              fill
              className="object-cover blur-sm"
            />
          </div>
        </div>

        {/* Current Image */}
        <div className="relative w-[70%] h-[400px] md:h-[600px] transition-transform duration-500 ease-in-out">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className={cn(
              "object-contain",
              isAnimating && "transition-opacity duration-500 ease-in-out"
            )}
          />
        </div>

        {/* Next Image Preview */}
        <div className="absolute right-0 top-0 bottom-0 w-[15%] overflow-hidden opacity-30">
          <div className="relative w-full h-full">
            <Image
              src={images[getImageIndex(1)]}
              alt="Next image"
              fill
              className="object-cover blur-sm"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


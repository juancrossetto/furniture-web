'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, MessageCircle, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const categories = [
  { name: 'Cocina', href: '/categoria/cocina' },
  { name: 'Baño', href: '/categoria/bano' },
  { name: 'Probadores', href: '/categoria/probadores' },
  { name: 'Mesas', href: '/categoria/mesas' },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">MuebleríaX</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com/tumuebleriaX" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
          </div>
          <div className="sm:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-4">
              <Link href="https://instagram.com/tumuebleriaX" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

const categories = [
  { name: 'Cocina', href: '/categories/cocina' },
  { name: 'Baño', href: '/categories/bano' },
  { name: 'Vestidores', href: '/categories/vestidores' },
  { name: 'Mesas y Sillas', href: '/categories/mesas-y-sillas' },
]

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            MuebleríaX
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name}
                href={category.href}
                className="text-sm font-medium hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </header>
  )
}


import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function ErrorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="Error Illustration"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        ¡Ups! No pudimos encontrar ese producto
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        Lo sentimos, pero el producto que estás buscando no está disponible o no existe.
      </p>
      <Button asChild>
        <Link href="/">
          Volver a la página principal
        </Link>
      </Button>
    </div>
  )
}


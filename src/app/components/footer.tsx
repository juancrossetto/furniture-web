import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MuebleríaX</h3>
            <p className="text-sm text-gray-600">Diseñamos y fabricamos muebles a medida para hacer de tu espacio un lugar único y funcional.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/cocina" className="text-sm text-gray-600 hover:text-gray-900">Cocina</Link></li>
              <li><Link href="/categories/bano" className="text-sm text-gray-600 hover:text-gray-900">Baño</Link></li>
              <li><Link href="/categories/vestidores" className="text-sm text-gray-600 hover:text-gray-900">Vestidores</Link></li>
              <li><Link href="/categories/mesas-y-sillas" className="text-sm text-gray-600 hover:text-gray-900">Mesas y Sillas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-600">Dirección: Calle Ejemplo 123, Ciudad</p>
            <p className="text-sm text-gray-600">Teléfono: (123) 456-7890</p>
            <p className="text-sm text-gray-600">Email: info@muebleriax.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 MuebleríaX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


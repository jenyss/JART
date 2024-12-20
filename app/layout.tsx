import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { inter } from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="pt-16">
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <div className="mr-4">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="text-black hover:text-gray-600 transition-colors">
                Artworks
              </Link>
              <Link href="/artists" className="text-black hover:text-gray-600 transition-colors">
                Artists
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}


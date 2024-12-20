import Link from 'next/link'
import Image from 'next/image'
import { artists } from '../../data/artists'

export default function ArtistsPage() {
  return (
    <div>
      <h1 className="text-2xl font-roobert font-medium mb-6">Featured Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 gap-6"> */}
        {artists.map((artist) => (
          <Link key={artist.id} href={`/artists/${artist.id}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-80">
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-roobert font-medium mb-1">{artist.name}</h2>
                <p className="text-xs italic text-gray-600">
                  {artist.birthYear} - {artist.deathYear || 'Present'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


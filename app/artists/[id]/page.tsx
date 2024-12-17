import Image from 'next/image'
import { notFound } from 'next/navigation'
import { artists, artworks } from '../../../data/artworks'
import { ArtworkGrid } from '../../../components/ArtworkGrid'

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find(a => a.id === parseInt(params.id))
  const artistArtworks = artworks.filter(a => a.artistId === parseInt(params.id))

  if (!artist) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="relative w-64 h-64 rounded-full overflow-hidden">
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-sans font-medium mb-1">{artist.name}</h1>
          <p className="text-sm italic text-gray-600 mb-4">
            {artist.birthYear} - {artist.deathYear || 'Present'}
          </p>
          <p className="text-gray-600 mb-4">{artist.bio}</p>
        </div>
      </div>
      <h2 className="text-2xl font-sans font-medium mb-4">Artworks</h2>
      <ArtworkGrid artworks={artistArtworks} onArtworkClick={() => {}} />
    </div>
  )
}


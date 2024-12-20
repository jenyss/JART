import Image from 'next/image'
import Link from 'next/link'
import { Artwork } from '../data/artworks'
import { artists } from '../data/artists'

interface ArtworkItemProps {
  artwork: Artwork
  onClick?: () => void
}

export function ArtworkItem({ artwork, onClick }: ArtworkItemProps) {
  const aspectRatio = (artwork.width / artwork.height);
  const artist = artists.find(a => a.id === artwork.artistId);

  return (
    <div className="group relative transition-transform hover:scale-105">
      <div 
        className="relative w-full overflow-hidden bg-gray-100"
        // className="relative w-full overflow-hidden rounded-lg bg-gray-100"
        style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
        onClick={onClick}
      >
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover cursor-pointer"
        />
      </div>
      <div className="mt-3 space-y-1">
      <Link 
        href={`/artists/${artwork.artistId}`} 
        className="text-sm font-sans hover:underline block"
      >
        {artist?.name}
      </Link>
        <p className="text-xs italic font-bold">{artwork.title}, {artwork.year}</p>
        <p className="text-[11px] italic text-gray-600">{artwork.materials}, {artwork.artSize}</p>
      </div>
    </div>
  )
}

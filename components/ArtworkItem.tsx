import Image from 'next/image'
import Link from 'next/link'
import { Artwork, artists } from '../data/artworks'

interface ArtworkItemProps {
  artwork: Artwork
  onClick: () => void
}

export function ArtworkItem({ artwork, onClick }: ArtworkItemProps) {
  const aspectRatio = artwork.width / artwork.height;
  const isPortrait = aspectRatio < 1;
  const artist = artists.find(a => a.id === artwork.artistId);

  return (
    <div
      className={`cursor-pointer transition-transform hover:scale-105 ${
        isPortrait ? 'row-span-2' : ''
      }`}
    >
      <div className="relative w-full" style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }} onClick={onClick}>
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="mt-2 space-y-1">
        <Link href={`/artists/${artwork.artistId}`} className="text-sm font-sans hover:underline">
          {artist?.name}
        </Link>
        <p className="text-xs italic">{artwork.title}</p>
        <p className="text-xs italic">{artwork.year}</p>
      </div>
    </div>
  )
}


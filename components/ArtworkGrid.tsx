import Image from 'next/image'
import { Artwork } from '../data/artworks'
import { ArtworkItem } from './ArtworkItem'

interface ArtworkGridProps {
  artworks: Artwork[]
  onArtworkClick?: (artwork: Artwork) => void
}

export function ArtworkGrid({ artworks, onArtworkClick }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {artworks.map((artwork) => (
        <ArtworkItem
          key={artwork.id}
          artwork={artwork}
          onClick={onArtworkClick ? () => onArtworkClick(artwork) : undefined}
        />
      ))}
    </div>
  )
}


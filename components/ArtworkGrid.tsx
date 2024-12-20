'use client'

import { Artwork } from '../data/artworks'
import { ArtworkItem } from './ArtworkItem'

interface ArtworkGridProps {
  artworks: Artwork[]
  onArtworkClick?: (artwork: Artwork) => void
}

export function ArtworkGrid({ artworks, onArtworkClick }: ArtworkGridProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 xl:columns-5 gap-4">
    {/* // <div className="columns-1 columns-2 columns-3 columns-4 gap-4"> */}
      {artworks.map((artwork) => (
        <div key={artwork.id} className="mb-8 break-inside-avoid">
          <ArtworkItem
            artwork={artwork}
            onClick={onArtworkClick ? () => onArtworkClick(artwork) : undefined}
          />
        </div>
      ))}
    </div>
  )
}


'use client'

import { useState } from 'react'
import { ArtworkGrid } from '../components/ArtworkGrid'
import { ArtworkModal } from '../components/ArtworkModal'
import { artworks, Artwork } from '../data/artworks'

export default function ArtworksPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
  }

  const handleCloseModal = () => {
    setSelectedArtwork(null)
  }

  return (
    <div>
      <h1 className="text-2xl font-sans font-medium mb-6">Artworks</h1>
      <ArtworkGrid artworks={artworks} onArtworkClick={handleArtworkClick} />
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={handleCloseModal}
      />
    </div>
  )
}


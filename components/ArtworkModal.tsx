import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Artwork } from '../data/artworks'
import { X } from 'lucide-react'
import { VisuallyHidden } from '@/components/ui/visually-hidden'

interface ArtworkModalProps {
  artwork: Artwork | null
  isOpen: boolean
  onClose: () => void
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!artwork) return null

  const aspectRatio = artwork.width / artwork.height;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
        <VisuallyHidden>
          <DialogTitle>{artwork.title} by {artwork.artist}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <Image
            src={artwork.imageUrl}
            alt={`${artwork.title} by ${artwork.artist}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full bg-black/20 text-white/60 hover:bg-black/40 hover:text-white/80 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


// import Image from 'next/image'
// import { Dialog } from './ui/Dialog'
// import { Artwork } from '../data/artworks'
// import { X } from 'lucide-react'

// interface ArtworkModalProps {
//   artwork: Artwork | null
//   isOpen: boolean
//   onClose: () => void
// }

// export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
//   if (!artwork) return null

//   return (
//     <Dialog isOpen={isOpen} onClose={onClose}>
//       <div className="relative flex items-center justify-center p-0 bg-[#FFFFFF]">

//         {/* Image container */}
//         <div className="relative w-[40vw] h-[90vh] max-w-screen-xl max-h-screen overflow-hidden p-[8mm] bg-white">
//           <Image
//             src={artwork.imageUrl}
//             alt={artwork.title}
//             layout="fill" /* This ensures it uses the full container */
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </Dialog>
//   )
// }

// import Image from 'next/image';
// import { Dialog } from './ui/Dialog';
// import { Artwork } from '../data/artworks';

// interface ArtworkModalProps {
//   artwork: Artwork | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
//   if (!artwork) return null;

//   // Calculate a scaled size based on the viewport
//   const maxWidth = window.innerWidth * 0.9; // 90% of the viewport width
//   const maxHeight = window.innerHeight * 0.9; // 90% of the viewport height
//   const aspectRatio = artwork.width / artwork.height;

//   // Dynamically calculate width and height while maintaining aspect ratio
//   let scaledWidth = maxWidth;
//   let scaledHeight = scaledWidth / aspectRatio;

//   if (scaledHeight > maxHeight) {
//     scaledHeight = maxHeight;
//     scaledWidth = scaledHeight * aspectRatio;
//   }

//   return (
//     <Dialog isOpen={isOpen} onClose={onClose}>
//       <div className="relative flex items-center justify-center p-0">
//         {/* Image container with straight edges */}
//         <div
//           className="relative"
//           style={{
//             width: `${scaledWidth}px`,
//             height: `${scaledHeight}px`,
//             borderRadius: '0px', // Ensure straight edges
//           }}
//         >
//           <Image
//             src={artwork.imageUrl}
//             alt={artwork.title}
//             layout="fill"
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </Dialog>
//   );
// }


import Image from 'next/image';
import { Dialog } from './ui/Dialog';
import { Artwork } from '../data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!artwork) return null;

  // Calculate a scaled size based on the viewport
  const maxWidth = window.innerWidth * 0.8; // 90% of the viewport width
  const maxHeight = window.innerHeight * 0.8; // 90% of the viewport height
  const aspectRatio = artwork.width / artwork.height;

  // Dynamically calculate width and height while maintaining aspect ratio
  let scaledWidth = maxWidth;
  let scaledHeight = scaledWidth / aspectRatio;

  if (scaledHeight > maxHeight) {
    scaledHeight = maxHeight;
    scaledWidth = scaledHeight * aspectRatio;
  }

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div
        className="relative flex items-center justify-center p-0 m-0 bg-transparent !rounded-none"
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          layout="fill"
          className="object-contain !rounded-none"
          priority
        />
      </div>
    </Dialog>
  );
}

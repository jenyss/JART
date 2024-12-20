// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { artists, Artist } from '../../../data/artists';
// import { artworks, Artwork } from '../../../data/artworks';
// import { ArtworkGrid } from '../../../components/ArtworkGrid';
// import { ArtworkModal } from '../../../components/ArtworkModal';

// export default function ArtistPage() {
//   const params = useParams();
//   const router = useRouter();
//   const [artist, setArtist] = useState<Artist | null>(null);
//   const [artistArtworks, setArtistArtworks] = useState<Artwork[]>([]);
//   const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

//   // Fetch artist and their artworks based on the ID from params
//   useEffect(() => {
//     console.log('Params:', params); // Log raw params for debugging

//     const rawId = Array.isArray(params?.id) ? params.id[0] : params.id; // Handle string | string[]
//     console.log('Raw ID:', rawId);

//     const id = rawId ? parseInt(rawId, 10) : null; // Parse ID as an integer
//     console.log('Parsed ID:', id);

//     if (id !== null) {
//       const foundArtist = artists.find((a) => a.id === id);
//       console.log('Found Artist:', foundArtist);

//       if (foundArtist) {
//         setArtist(foundArtist);
//         setArtistArtworks(artworks.filter((a) => a.artistId === id));
//       } else {
//         // console.error('Artist not found. Redirecting...');
//         // router.push('/404'); // Redirect if artist not found
//         console.error('Artist not found. Redirecting...');
//         // Delay redirect to see logs
//         setTimeout(() => {
//           router.push('/404'); // Redirect to a 404 page if artist is not found
//         }, 30000); // 3-second delay
//       }
//     } else {
//       console.error('Invalid or missing ID in params.');
//     }
//   }, [params, router]);

//   // Handle modal opening for artwork details
//   const handleArtworkClick = (artwork: Artwork) => {
//     setSelectedArtwork(artwork);
//   };

//   // Handle modal close
//   const handleCloseModal = () => {
//     setSelectedArtwork(null);
//   };

//   // Show a loading state until artist data is fetched
//   if (!artist) {
//     console.log('Loading artist data...');
//     return <div>Loading...</div>;
//   }

//   // Render the artist page
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
//         <div className="relative w-64 h-64 rounded-full overflow-hidden">
//           <Image
//             src={artist.imageUrl}
//             alt={artist.name}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             className="object-cover"
//           />
//         </div>
//         <div>
//           <h1 className="text-4xl font-sans font-medium mb-1">{artist.name}</h1>
//           <p className="text-sm italic text-gray-600 mb-4">
//             {artist.birthYear} - {artist.deathYear || 'Present'}
//           </p>
//           <p className="text-gray-600 mb-4">{artist.bio}</p>
//         </div>
//       </div>
//       <h2 className="text-2xl font-sans font-medium mb-4">Artworks</h2>
//       <ArtworkGrid artworks={artistArtworks} onArtworkClick={handleArtworkClick} />
//       <ArtworkModal
//         artwork={selectedArtwork}
//         isOpen={!!selectedArtwork}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// }


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import { artists, Artist } from '../../../data/artists'
import { artworks, Artwork } from '../../../data/artworks'
import { ArtworkGrid } from '../../../components/ArtworkGrid'
import { ArtworkModal } from '../../../components/ArtworkModal'

export default function ArtistPage() {
  const params = useParams()
  const [artist, setArtist] = useState<Artist | null>(null)
  const [artistArtworks, setArtistArtworks] = useState<Artwork[]>([])
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    const id = typeof params.id === 'string' ? parseInt(params.id, 10) : null
    if (id !== null) {
      const foundArtist = artists.find(a => a.id === id)
      if (foundArtist) {
        setArtist(foundArtist)
        setArtistArtworks(artworks.filter(a => a.artistId === id))
      } else {
        notFound()
      }
    }
  }, [params.id])

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
  }

  const handleCloseModal = () => {
    setSelectedArtwork(null)
  }

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="relative w-64 h-64 overflow-hidden">
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
      <ArtworkGrid artworks={artistArtworks} onArtworkClick={handleArtworkClick} />
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={handleCloseModal}
      />
    </div>
  )
}


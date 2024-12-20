export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  birthYear: number;
  deathYear?: number;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Elena Stoeva",
    bio: "Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in Western art history.",
    imageUrl: "/artist_images/Elena_Stoeva_Profile.jpg",
    birthYear: 1853,
    deathYear: 1890
  },
  {
    id: 2,
    name: "Arshak Nersisyan",
    bio: "Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life.",
    imageUrl: "/artist_images/Arshak_Nersisyan_Profile.jpg",
    birthYear: 1632,
    deathYear: 1675
  },
  {
    id: 3,
    name: "Milen Marinov",
    bio: "Spanish surrealist artist renowned for the striking and bizarre images in his work.",
    imageUrl: "/artist_images/Milen_Marinov_Profile.jpeg",
    birthYear: 1904,
    deathYear: 1989
  },
  {
    id: 4,
    name: "Nadia Petrova",
    bio: "Spanish surrealist artist renowned for the striking and bizarre images in his work.",
    imageUrl: "/artist_images/Milen_Marinov_Profile.jpeg",
    birthYear: 1904
  },
  {
    id: 5,
    name: "Plamen Monev",
    bio: "Spanish surrealist artist renowned for the striking and bizarre images in his work.",
    imageUrl: "/artist_images/Milen_Marinov_Profile.jpeg",
    birthYear: 1904
  },
  {
    id: 6,
    name: "Stefan Kulev",
    bio: "Spanish surrealist artist renowned for the striking and bizarre images in his work.",
    imageUrl: "/artist_images/Milen_Marinov_Profile.jpeg",
    birthYear: 1904
  },
];


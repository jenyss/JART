export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  birthYear: number;
  deathYear?: number;
}

export interface Artwork {
  id: number;
  title: string;
  artistId: number;
  year: number;
  description: string;
  imageUrl: string;
  width: number;
  height: number;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Elena Stoeva",
    bio: "Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in Western art history.",
    imageUrl: "/artist_images/van-gogh.jpg",
    birthYear: 1853,
    deathYear: 1890
  },
  {
    id: 2,
    name: "Johannes Vermeer",
    bio: "Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life.",
    imageUrl: "/artist_images/vermeer.jpg",
    birthYear: 1632,
    deathYear: 1675
  },
  {
    id: 3,
    name: "Salvador Dalí",
    bio: "Spanish surrealist artist renowned for the striking and bizarre images in his work.",
    imageUrl: "/artist_images/dali.jpg",
    birthYear: 1904,
    deathYear: 1989
  },
];

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Dutch blue",
    artistId: 1,
    year: 1889,
    description: "This painting depicts the view from the east-facing window of Van Gogh's asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.",
    imageUrl: "/art_images/Dutch_blue.jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    title: "Sunflowers",
    artistId: 1,
    year: 1888,
    description: "One of a series of still life paintings of sunflowers by Van Gogh, this artwork is known for its vibrant yellows and bold brush strokes.",
    imageUrl: "/art_images/sunflowers.jpg",
    width: 700,
    height: 900,
  },
  {
    id: 3,
    title: "The Potato Eaters",
    artistId: 1,
    year: 1885,
    description: "This early work by Van Gogh depicts a group of peasants gathered around a table for their evening meal, showcasing the artist's interest in the lives of working-class people.",
    imageUrl: "/art_images/potato-eaters.jpg",
    width: 900,
    height: 700,
  },
  {
    id: 4,
    title: "Girl with a Pearl Earring",
    artistId: 2,
    year: 1665,
    description: "This painting is one of Vermeer's most famous works, depicting a girl wearing an exotic dress, an oriental turban, and a large pearl earring.",
    imageUrl: "/art_images/girl-with-pearl-earring.jpg",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    title: "The Milkmaid",
    artistId: 2,
    year: 1658,
    description: "This painting depicts a domestic kitchen maid pouring milk, exemplifying Vermeer's mastery of light and his attention to the details of everyday life.",
    imageUrl: "/art_images/the-milkmaid.jpg",
    width: 800,
    height: 700,
  },
  {
    id: 6,
    title: "View of Delft",
    artistId: 2,
    year: 1661,
    description: "One of the most famous cityscapes in Western art, this painting showcases Vermeer's skill in depicting light and atmosphere in an outdoor setting.",
    imageUrl: "/art_images/view-of-delft.jpg",
    width: 900,
    height: 600,
  },
  {
    id: 7,
    title: "The Persistence of Memory",
    artistId: 3,
    year: 1931,
    description: "This surrealist masterpiece depicts melting clocks in a landscape, suggesting the relativity of time and space.",
    imageUrl: "/art_images/persistence-of-memory.jpg",
    width: 900,
    height: 600,
  },
  {
    id: 8,
    title: "The Elephants",
    artistId: 3,
    year: 1948,
    description: "This painting features distorted elephants with elongated, spindly legs, representing the contrast between weightlessness and structure.",
    imageUrl: "/art_images/the-elephants.jpg",
    width: 700,
    height: 900,
  },
  {
    id: 9,
    title: "Swans Reflecting Elephants",
    artistId: 3,
    year: 1937,
    description: "This painting demonstrates Dalí's paranoid-critical method, showing swans on a lake whose reflections appear as elephants.",
    imageUrl: "/art_images/swans-reflecting-elephants.jpg",
    width: 800,
    height: 600,
  },
];


export interface Release {
  name: string;
  artists: string[];
  releaseDate: Date;
  image: string;
  url: string;
}

export interface Artist {
  name: string;
  followers: number;
  image: string;
}
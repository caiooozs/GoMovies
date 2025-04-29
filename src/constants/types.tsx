export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
};

export interface PopularMoviesProps {
  movies?: Movie[];
}

export interface DrawerMoviesProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedMovie: Movie | null;
}

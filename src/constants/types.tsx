export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export interface PopularMoviesProps {
  movies?: Movie[];
}

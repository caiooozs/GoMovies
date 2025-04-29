import { Header } from "../components/header";
import { IndexFooter } from "../components/footer";
import { MainContent } from "../components/mainContent";
import { PopularMovies } from "../components/popular-movies";
import { MoviesGetServices } from "@/services/movies";
import { DrawerMovies } from "../components/moviesDrawer";
import { DrawerMoviesProps } from "@/constants/types";

export const Home = async () => {
  const movies = await MoviesGetServices();
  return (
    <div>
      <Header />
      <MainContent />
      <PopularMovies movies={movies} />
    </div>
  );
};

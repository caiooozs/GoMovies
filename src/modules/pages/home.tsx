import { Header } from "../components/header";
import { IndexFooter } from "../components/footer";
import { MainContent } from "../components/mainContent";
import { PopularMovies } from "../components/popular-movies";
import { MoviesGetServices } from "@/services/movies";

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

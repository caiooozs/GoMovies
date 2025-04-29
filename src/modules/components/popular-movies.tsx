"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MoviesGetServices } from "@/services/movies";
import { Movie } from "@/constants/types";
import { PopularMoviesProps } from "@/constants/types";
import { useState } from "react";
import { DrawerMovies } from "@/modules/components/moviesDrawer";

export function PopularMovies({ movies }: PopularMoviesProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DrawerMovies
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedMovie={selectedMovie}
      />

      <div id="movies">
        <div className="grid grid-cols-6 gap-4 p-4">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              onClick={() => {
                setSelectedMovie(movie);
                setIsOpen(true);
              }}
              className="bg-gray-200 transition-all transform duration-300 hover:shadow-2xl hover:scale-110 cursor-pointer"
            >
              <CardTitle className="text-md font-bold text-center">
                {movie.title}
              </CardTitle>
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-2xl"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

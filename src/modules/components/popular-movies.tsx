"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MoviesGetServices } from "@/services/movies";
import { Movie } from "@/constants/types";
import { PopularMoviesProps } from "@/constants/types";

export function PopularMovies({ movies }: PopularMoviesProps) {
  return (
    <>
      <div id="movies">
        <div className="grid grid-cols-5 gap-4">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              className="bg-gray-200 transition-all transform duration-300 hover:shadow-2xl hover:scale-110"
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

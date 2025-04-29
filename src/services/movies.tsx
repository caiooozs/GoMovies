import { PopularMoviesProps } from "@/constants/types";
import { pages } from "next/dist/build/templates/app-page";

export async function MoviesGetServices() {
  if (!process.env.NEXT_PUBLIC_API_URL || !process.env.API_KEY) {
    throw Error("API_URL or API_KEY not defined.");
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw Error("Fetch not defined.");
  }
  const data = await res.json();
  return data.results;
}

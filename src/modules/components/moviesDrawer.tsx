import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

import { DrawerMoviesProps } from "@/constants/types";

export const DrawerMovies = ({
  isOpen,
  setIsOpen,
  selectedMovie,
}: DrawerMoviesProps) => {
  return (
    <div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          {selectedMovie && (
            <div className="flex p-4">
              <div className="flex flex-col items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                  alt={selectedMovie.title}
                  className="rounded-md mt-4 w-full h-full object-cover"
                />
                <p className="mt-2 text-sm font-semibold">
                  <span className="text-red-800">
                    Nota: {selectedMovie.vote_average}
                  </span>{" "}
                  | Data de lançamento: {selectedMovie.release_date}
                </p>
              </div>
              <div className="flex flex-col">
                <DrawerHeader>
                  <DrawerTitle className="text-center text-2xl font-extrabold text-red-800">
                    {selectedMovie.title}
                  </DrawerTitle>
                  <DrawerDescription className="italic font-light text-center text-md max-w-4xl">
                    {selectedMovie.overview}
                  </DrawerDescription>
                </DrawerHeader>
              </div>
            </div>
          )}
          <DrawerFooter>
            <DrawerClose>
              <Button
                type="button"
                variant="outline"
                className="w-3/12 bg-black text-white cursor-pointer"
              >
                Voltar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

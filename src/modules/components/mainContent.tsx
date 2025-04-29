export const MainContent = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 justify-center p-12">
        <h1 className="lg:font-bold lg:text-4xl md:text-4xl md:font-bold sm:text-2xl sm:font-bold text-2xl font-bold text-[#fff]">
          Os melhores filmes você encontra aqui!
        </h1>
        <a href="#movies" className="cursor-pointer border-0 decoration-0">
          <button
            type="button"
            className=" bg-red-900 lg:w-96 lg:h-12 md:w-48 md:h-12 sm:w-32 sm:h-10 w-32 h-10 rounded-lg transition-all transform hover:scale-110 hover:shadow-2xl font-bold text-[#fff]"
          >
            Explorar
          </button>
        </a>
      </div>
    </>
  );
};

export const MainContent = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 justify-center p-12">
        <h1 className="font-bold text-4xl">
          Os melhores filmes você encontra aqui!
        </h1>
        <a href="#movies" className="cursor-pointer border-0 decoration-0">
          <button
            type="button"
            className=" bg-red-900 w-96 h-12 rounded-lg transition-all transform hover:scale-110 hover:shadow-2xl font-bold"
          >
            Explorar
          </button>
        </a>
      </div>
    </>
  );
};

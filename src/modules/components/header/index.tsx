import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex justify-between w-full p-6">
      <h1 className="font-bold text-3xl">
        <span className="text-red-800">GO</span>
        <span className="text-[#fff]">FILMES</span>
      </h1>
      <input
        type="search"
        placeholder="Procurar..."
        className="border-3 border-solid border-white p-2 rounded-lg text-[#fff]"
      ></input>
    </div>
  );
};

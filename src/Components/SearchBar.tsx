import { BsSearch } from "react-icons/bs";
import type { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative w-full">
      <input className="px-5 py-3 bg-neutral-900 border border-neutral-700 rounded-full w-full text-stone-200 placeholder-neutral-500 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition"
        type="text"
        placeholder="Search for movies, TV shows..."
        {...props}
      />
      <BsSearch className="top-1/2 right-4 absolute -translate-y-1/2 text-neutral-500" />
    </div>
  );
}

export default SearchBar;

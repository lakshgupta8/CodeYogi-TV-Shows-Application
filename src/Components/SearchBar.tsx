import { BsSearch } from "react-icons/bs";
import type { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative w-full">
      <input className="bg-surface px-5 py-3 border border-border-active focus:border-brand rounded-full focus:outline-none focus:ring focus:ring-brand w-full placeholder-text-muted/60 text-text-primary transition"
        type="text"
        placeholder="Search for movies, TV shows..."
        {...props}
      />
      <BsSearch className="top-1/2 right-4 absolute text-text-muted/60 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;

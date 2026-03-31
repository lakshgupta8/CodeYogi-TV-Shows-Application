import { BsSearch } from "react-icons/bs";
import type { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative">
      <input className="px-2 py-1 border border-black rounded-full w-full"
        type="text"
        placeholder="Search"
        {...props}
      />
      <BsSearch className="top-1/2 right-4 absolute -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;

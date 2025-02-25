import { Search } from "lucide-react";

interface SearchProps {
  placeholder?: string;
  className?: string;
}

const SearchResult = ({
  // placeholder = "Search...",
  className = "",
}: SearchProps) => {
  return (
    <div className={`search-container relative ${className}`}>
      {/* <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
      <Search />
    </div>
  );
};

export default SearchResult;

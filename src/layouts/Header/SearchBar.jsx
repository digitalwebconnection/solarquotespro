import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48 xl:w-64"
      />
      <button type="submit" className="absolute right-3 text-gray-400 hover:text-blue-500">
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchBar;

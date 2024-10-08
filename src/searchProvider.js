import { createContext, useState } from 'react';


export const SearchContext = createContext();


const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Cairo');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};


export default SearchProvider;

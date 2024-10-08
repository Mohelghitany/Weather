import React, { useState, useContext } from 'react';
import { SearchContext } from '../../searchProvider'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.css';


const SearchComponent = () => {
  const { setSearchTerm } = useContext(SearchContext); 
  const [isSearchVisible, setSearchVisible] = useState(false); 
  const [localSearchValue, setLocalSearchValue] = useState(''); 

 
  const handleIconClick = () => {
    setSearchVisible(!isSearchVisible); 
    setLocalSearchValue(''); 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (localSearchValue.trim() !== '') {
      setSearchTerm(localSearchValue); 
      setSearchVisible(false);
      setLocalSearchValue(''); 
    }
  };

  return (
    <div>
     
      <button className='but' onClick={handleIconClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>

      
      {isSearchVisible && (
        <form className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={localSearchValue} 
            onChange={(e) => setLocalSearchValue(e.target.value)} 
            className='input'
          />
        </form>
      )}
    </div>
  );
};

export default SearchComponent;

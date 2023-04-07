import React from "react";
import './search-bar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input id='search-input' type="text" placeholder="Search"/>
        <img className='search-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png' alt='Search Icon' />
    </div>
  );
};

export default SearchBar;

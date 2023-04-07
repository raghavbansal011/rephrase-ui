import React from "react";
import './header.css'
import SearchBar from '../search-bar/search-bar.js'

const Header = ({ video }) => {
  return (
    <div className='page-header'>
        <div class='header-container'>
            <img className='logo' src='https://uploads-ssl.webflow.com/6307393e40826809fbf8dabe/630774c3ea503dff4acdd2c6_web_logo_c.png' alt="Search icon"/>
            <SearchBar />
            <div className='user-options'>
                <img className='user-icon' src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt="User icon"/>
            </div>
        </div>
    </div>
  );
};

export default Header;

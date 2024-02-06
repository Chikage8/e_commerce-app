import React from "react";

function SearchBar() {
    return (
        <div id='nav-search'>
            <form action="/" method='GET' acceptCharset='utf-8' id='nav-search-bar-form' className='nav-search-bar nav-progressive-attribute' name='site-search' role='search' ></form>
            <div className="search-text">
                <input type="text" value-name='field-keywords' placeholder='Search Azamon' id='nav-search-text-input' className='nav-input nav-progressive-attribute' autoComplete="off" aria-label='Search Azamon' />
            </div>
        </div>
    );
}

export default SearchBar;
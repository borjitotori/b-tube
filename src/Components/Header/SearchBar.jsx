import React from 'react'
import '../../Styles/header.css'

const SearchBar = (props) => {
    return(
        <div className="searchBar">
            <input className="SearchIput" id="input" type="text"/>
            <div className="Button" onClick={()=> props.searchHandler("input")}>Search</div>
        </div>
    )
}

export default SearchBar;
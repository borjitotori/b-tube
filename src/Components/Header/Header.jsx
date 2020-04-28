import React from 'react'
import SearchBar from './SearchBar'
import '../../Styles/header.css'

const Header = (props) => {
    return(
        <div className = "Header">
            <img className="goBack" src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" onClick={()=> props.goBackHandler()}/>
            <SearchBar searchHandler={props.searchHandler}/>
        </div>
    )
}

export default Header;
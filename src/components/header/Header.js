import React, {useContext, useEffect, useState} from 'react';
import { NavLink, useNavigate} from "react-router-dom";
import "../header/Header.scss"
import {LanguageContext} from "../../context";

const Header = () => {


    const {setLanguage} = useContext(LanguageContext)
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const getVaalue = (e) =>{
        setValue(e.target.value)
    }


    const handleClick = (Name) =>{
        if (value.trim() !== ''){
            navigate(`/movie/search/${Name}`)
        }
    }

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header--left">

                        <h1>TMDB</h1>
                        <button></button>
                        <NavLink to="/">Popular</NavLink>
                        <NavLink to="/NowPlaying">NowPlaying</NavLink>
                        <NavLink to="/toprated">TopRated</NavLink>
                        <select onClick={(e) => setLanguage(e.target.value)}>
                            <option value="en-EN">English</option>
                            <option value="ru-RU">Russian</option>
                            <option value="tr-TR">Turkish</option>
                            <option value="fr-FR">France</option>
                        </select>
                    </div>
                    <input onChange={getVaalue}
                           type="search" placeholder="Search for a movie,tv show,person......"/>
                    <button onClick={() => handleClick(value) }>Search</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
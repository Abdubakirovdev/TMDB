import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../components/ApiKey/key";
import MovieCard from "../components/Card/MovieCard";
import {LanguageContext} from "../context";
const TopRated = () => {

    const {language} = useContext(LanguageContext)
    const [rated,setRated] = useState([])
    const gerRated = async () =>{
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {data} = await response
        setRated(data.results)
    }
    console.log(rated)

    useEffect(() =>{
        gerRated()
    },[language])

    return (
        <>
        <div className="container">
            <div className="movies">
                {
                    rated.map(film =>(
                        <MovieCard key={film.id} film={film}/>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default TopRated;
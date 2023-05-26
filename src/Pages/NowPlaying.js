import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../components/ApiKey/key";
import MovieCard from "../components/Card/MovieCard";
import {LanguageContext} from "../context";
const NowPlaying = () => {

    const [playing,setPlaying] = useState([])
    const {language} = useContext(LanguageContext)

    const getPlaying = async () =>{
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=${language}&page=1`)
        const {data} = await response
        setPlaying(data.results)
    }
    console.log(playing)

    useEffect(() =>{
        getPlaying()
    },[language])

    return (
        <>
        <div className="container">
            <div className="movies">
                {
                    playing.map(film =>(
                        <MovieCard key={film.id} film={film}/>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default NowPlaying;
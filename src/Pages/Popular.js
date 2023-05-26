import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios'
import MovieCard from "../components/Card/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {

    const [popular, setPopular] = useState([])
    const {language} = useContext(LanguageContext)

    const getPopular = async () => {
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=ba0070461872321ad19b81af9ce58a26&language=${language}&page=1`)
        const {data} = await response
        setPopular(data.results)
        console.log(popular)
    }

    useEffect(() => {
        getPopular()
    }, [language])


    return (

            <div className="container">
                <div className="movies">
                    {
                        popular.map(film =>(
                            <MovieCard key={film.id} film={film}/>
                        ))
                    }
                </div>
            </div>
    );
};

export default Popular;
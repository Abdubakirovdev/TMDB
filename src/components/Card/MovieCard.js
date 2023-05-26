import React from 'react';
import "../Card/Movie.scss"
import {Link} from "react-router-dom";

const MovieCard = ({film}) => {


    return (
        <header id="movie">
            <div className="container">
                <div className="movie">
                    <Link to={`/movie/${film.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} alt="img"/>
                    </Link>
                    <div className="popular--title">
                        <h1>{film.title}</h1>
                        <h4>Popularity:{film.popularity}</h4>
                        <h5>Rating:{film.vote_average}</h5>
                        <h6>Data:{film.release_date}</h6>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MovieCard;
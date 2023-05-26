import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../components/ApiKey/key";
import {useParams} from "react-router-dom";
import MovieCard from "../../components/Card/MovieCard";
import '../../App.css'

const Search = () => {

    const [result, setResult] = useState([])
    const {movieName} = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const [page,setPage] = useState(1)


    const getValue = async () => {
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}&page=${currentPage}`)
        const {data} = await response
        setPage(data.total_pages)
        setResult(data.results)
        window.scroll(0 , 0)
    }
    console.log(result)


    useEffect(() => {
        getValue()
    }, [movieName, currentPage])


    return (
        <div className='container'>
            <div className='movies'>
                {
                    result.map(el => (
                        <MovieCard film={el}/>
                    ))}
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                margin: '100px 0'
            }}>
                <button style={{
                    visibility: currentPage === 1 ? 'hidden' : 'visible'
                }} onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
                <button style={{
                    visibility: currentPage === page? 'hidden' : 'visible'
                }} onClick={() => setCurrentPage(currentPage + 1)}>next</button>
            </div>
        </div>

    );
};

export default Search;

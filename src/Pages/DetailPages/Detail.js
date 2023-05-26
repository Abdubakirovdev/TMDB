import React, {useContext, useEffect, useState} from 'react';
import "./Detal.scss"
import {APIKEY} from "../../components/ApiKey/key";
import {useParams} from "react-router-dom";
import axios from "axios";
import Actors from "./Actors/Actors";
import {LanguageContext} from "../../context";

const Detail = () => {
    const {language} = useContext(LanguageContext)
    const [detail,setDetail] = useState([])
    const movieId = useParams()
    console.log(movieId)

    const getDetail = async () =>{
        const  response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${APIKEY}&language=${language}`)
        const {data} = await response
        setDetail(data)
    }



    useEffect(() =>{
        getDetail()
    }, [language])


    return (
        <>
        <div id="detail" style={{
            background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat center/cover`,
            minWidth: "100%",
            height:'100%'
        }}>
            <div className="container" style={{
                backdropFilter: "blur(3px)"
            }}>
                <div className="detail--movie">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>
                    <div className="detail--movie__title">
                        <h1>{detail.title}</h1>
                        <p>{detail.overview}</p>
                        <h3>Release date: {detail.release_date}</h3>
                        <div style={{
                            padding: "20px",
                            width: "750px",
                            overflow: "hidden"
                        }}>
                            <Actors movieId={movieId}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Detail;
import React, {useContext, useEffect, useState} from 'react';
import '../Actors/DetailActor.scss'
import axios from "axios";
import {APIKEY} from "../../../components/ApiKey/key";
import {Link, useParams} from "react-router-dom";
import {LanguageContext} from "../../../context";

const DetailActors = () => {
    const [cast, setCast] = useState([])
    const [act,setAct] = useState([])
    const {actorId} = useParams()
    const {language} = useContext(LanguageContext)

    const getAct = async () =>{
        const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${APIKEY}`)
        const {data} = await response
        setAct(data)
    }

    const getMovieCredits = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${APIKEY}&language=${language}`)
        const {data} = await url
        setCast(data.cast)
    }
    console.log(cast)

    useEffect(() =>{
        getMovieCredits()
        getAct()
    }, [language])

    return (
            <div>
               <div className='container' style={{
                   display: 'flex'
               }}>
                   <div className="actorr">
                       <img className='poster' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${act.profile_path}`} alt=""/>
                       <div className='actor--detail'>
                           <h1>{act.name}</h1>
                           <h3>Birthday:{act.birthday}</h3>
                           <p>{act.biography ? act.biography : `We don't have a biography ` }</p>
                           <div className="actor--detail__cast">
                               {
                                   cast.map(el =>(
                                       <div>
                                           <Link to={`/movie/${el.id}`}>
                                               <div className='actor--detail__cast--photo' >
                                                   <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                               </div>
                                           </Link>
                                           <h3>{el.title}</h3>
                                       </div>
                                   ))
                               }
                           </div>
                       </div>
                   </div>
               </div>
            </div>
    );
};

export default DetailActors;
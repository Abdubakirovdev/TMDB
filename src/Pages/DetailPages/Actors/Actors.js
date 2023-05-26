import React, {useContext, useEffect, useState} from 'react';
import Slider from 'react-slick'
import axios from "axios";
import {APIKEY} from "../../../components/ApiKey/key";
import unknown from "../../../img/profile-picture.webp"
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../../context";
const Actors = ({movieId}) => {

    const [actors, setActors] = useState([])
    const {language} = useContext(LanguageContext)
    const getActors = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}/credits?api_key=${APIKEY}&language=${language}`)
            const {data} = await response
            setActors(data.cast)
    }
    console.log(actors)

    useEffect(() => {
        getActors()
    }, [language])

    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };


    return (
        <div style={{
            width: '700px'
        }}>
            <h2 style={{
                color: "cornflowerblue",
                padding: '30px 0'
            }}>Top Billed Cast</h2>
            <Slider {...settings}>
                {
                    actors.map(el => (
                            <div style={{
                                margin: "0 20px",
                            }}>
                                {
                                    el.profile_path ?
                                        <NavLink to={`/movie/actors/${el.id}`}><img style={{
                                            width:"130px"
                                        }} src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/></NavLink>

                                    :
                                <img style={{width:'130px', height:'170px'}} src={unknown} alt="img"/>
                                }
                                    <div style={{
                                        background: 'white',
                                        width: '130px',
                                        height: '70px '
                                    }}>
                                        <h4 style={{
                                            fontSize: '13px'
                                        }}>{el.original_name}</h4>
                                        <h6 style={{
                                            fontSize: '9px'
                                        }}>{el.character}</h6>
                                    </div>
                            </div>
                        ))
                }

            </Slider>
        </div>
    );
};

export default Actors;

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
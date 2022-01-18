import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import './Moviee.css';
import axiosInstance from '../AxiosConfig/axiosConfig';
import { apiKey  } from '../AxiosConfig/axiosConfig';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AddFavourite from '../store/Action/addFavourite';
import RemoveFavourite from '../store/Action/RemoveFavourite' ;
import ShowMovie from '../store/Action/movies';

const MovieCard = ({movie , deleteIcon}) => {

    const {id , poster_path , title , release_date} = movie ;
    const dispatch = useDispatch()
    
    // =================== Using Redix ===============
    // const [moviees , setMoviees] = useState ( [] )
    // useEffect( () => {
    //     axiosInstance
    //     .get(`/movie/popular?api_key=${apiKey}`)
    //     .then ( (res) => {
    //         console.log(res.data)
    //         setMoviees(res.data.results)
    //      } )
    //     .catch( (error) => console.log(error))
    // }, [] )

    // =========== Using Redux-thunk ==============
    // const moviees = useSelector( (state) => state.mov)
    // useEffect(() => {
    //   dispatch((ShowMovie()))
    // } , [])

    
    // Handle Favorite Page
    const favList = useSelector( (state) => state.favList.favList)

    const foundItem = favList?.find((i) => i.id === movie.id )

    const [selectedMov , setSelectesMov] = useState(foundItem ? true : false)

    const HandleFav = () => {
       dispatch(selectedMov? RemoveFavourite(movie):AddFavourite(movie))
       setSelectesMov(!selectedMov)
    }

  return (
    <div className='col-3 position-relative movie-card'>
        <div className='card text-start m-1'  key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  />
            <i className={`far fa-2x starIcon position-absolute
            ${selectedMov && "text-danger"}
            ${deleteIcon ? "far fa-trash-alt fa-2x text-danger": "far fa-star fa-2x"}
            `} 
            onClick={()=> {HandleFav()}}>
            </i>
            
            <div className='card-body'>
                <h5> Title: {title} </h5> 
                <h5> Date: {release_date} </h5> 
            </div>

            {/* Link to redirect in page details for selected moviee  */}
            <Link className='btn-primary' to={`/moveieDetails/${id}`} > Show Details </Link> 
        </div>
    </div>
  );
}

export default MovieCard;

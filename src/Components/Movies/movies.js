import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
// import './Moviee.css';
import axiosInstance from '../AxiosConfig/axiosConfig';
import { apiKey  } from '../AxiosConfig/axiosConfig';
import { useDispatch } from 'react-redux';
import MovieCard from './MovCard';


const Moviees = () => {

    const dispatch = useDispatch()

    // =================== Using Redix ===============
    const [pageNum , setPageNum] = useState(1)
    const [moviees , setMoviees] = useState ( null )

    const getMoviees = ( page = 1 ) => {
        axiosInstance
        .get(`/movie/popular?api_key=${apiKey}&page=${page}`)
        .then ( (res) => {
            console.log(res.data)
            setMoviees(res.data.results)
         } )
        .catch( (error) => console.log(error))
    }

    useEffect( () => {
      getMoviees()
    } , [])

    // Handle to get to Next Page 
    const GetNextPage = () => {
      let pageVal = pageNum
      setPageNum(++pageVal)
      getMoviees(pageVal)
      // (pageVal > 1 ) && 
    }

    // Handle to get to Previous Page 
    const GetPreviousPage = () => {
      let pageVal = pageNum ;
      (pageVal > 1 ) && --pageVal
      setPageNum(pageVal)
      getMoviees(pageVal) 
    }

    return (
      <div className='col-10 mx-auto mt-3 '>
          <div className='d-flex flex-wrap'>
            { moviees ? moviees.map((i) => <MovieCard movie={i} key={i.id} />) : null}
        </div>

        <div className='d-flex justify-content-between'>
          <button type='button' className = {`btn-primary ${pageNum < 2 && "opacity-0"}`} onClick={() => {GetPreviousPage()}}>
            Previous Page
          </button>
          <button type='button' className = "btn-primary" onClick={() => {GetNextPage()}}>
            Next Page
          </button>
        </div>
      </div>
    )
  }




















export default Moviees;

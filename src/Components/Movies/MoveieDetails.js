import React from "react";
import { useState , useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './Moviee.css';
import axiosInstance from '../AxiosConfig/axiosConfig';
import { apiKey  } from '../AxiosConfig/axiosConfig';
import ShowMovDetails from "../store/Action/MovieeDetails";

export default function MovieeDetails() {

    const params = useParams()

    //  =================== Using Redix ===============
    // const [moviees, setMoviees] = useState({});
  
    // useEffect( ()=> {
    //   axiosInstance
    //   .get (`/movie/${params.id}?api_key=${apiKey}`)
    //   .then ( (res) => setMoviees(res.data) )
    //   .catch ( (error) => console.log(error) )
    // } , [] )
    
    // =========== Using Redux-thunk ==============
    const moviees = useSelector( (state) => state.movDetails)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch((ShowMovDetails(params.id)))
    } , [])
  
    return (
        <div className='col-10 mx-auto mt-3'>
            <div className='d-flex flex-wrap'>
                <div className='card cardDetail'>
                    <img src={`https://image.tmdb.org/t/p/w500/${moviees.poster_path}`}  />
                    <h5> Title: {moviees.title} </h5> 
                    <h5> Date: {moviees.release_date} </h5> 
                </div>
            </div>
        </div>
    )
}
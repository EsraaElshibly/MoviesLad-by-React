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



















// import React from 'react';
// import { useState } from "react";
// import { useEffect } from "react";
// import './Moviee.css';
// import axiosInstance from '../AxiosConfig/axiosConfig';
// import { apiKey  } from '../AxiosConfig/axiosConfig';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import AddFavourite from '../store/Action/addFavourite';
// import RemoveFavourite from '../store/Action/RemoveFavourite' ;
// import ShowMovie from '../store/Action/movies';

// const Moviees = () => {

//     const dispatch = useDispatch()

//     // =================== Using Redix ===============
//     const [moviees , setMoviees] = useState ( [] )
//     useEffect( () => {
//         axiosInstance
//         .get(`/movie/popular?api_key=${apiKey}`)
//         .then ( (res) => {
//             console.log(res.data)
//             setMoviees(res.data.results)
//          } )
//         .catch( (error) => console.log(error))
//     }, [] )

//     // =========== Using Redux-thunk ==============
//     // const moviees = useSelector( (state) => state.mov)
//     // useEffect(() => {
//     //   dispatch((ShowMovie()))
//     // } , [])

    
//     // Handle Favorite Page
//     const favList = useSelector( (state) => state.favList.favList)

//     const foundItem = favList?.find((x) => x.id = moviees.id )

//     const [selectedMov , setSelectesMov] = useState(foundItem ? true : false)

//     const HandleFav = (e) => {
//        e.stoppropagation()
//        dispatch(selectedMov? RemoveFavourite(moviees):AddFavourite(moviees))
//        setSelectesMov(!selectedMov)
//       // console.log(AddFavourite(moviees));
//       // console.log("hlsj");
//     }

//   return (
//     <div className='mov-parent '>
//       <div className='Movies'>
//         <div className='row'>
//         { moviees.map((mov , index) => {
//               return (
//                 <div className='moviee-item col-md-3' key={mov.id}>
                        
//                     <div className='card'>
//                         <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}  />
//                         <i className={`far fa-2x starIcon 
//                         ${selectedMov && "text-danger"}
//                         ${deleteIcon ? "far fa-trash fa-2x text-danger": "far fa-star fa-2x"}
//                         `} 
//                         onClick={(e)=> {HandleFav(e)}}>
//                         </i>
//                        <h5> Title: {mov.title} </h5> 
//                        <h5> Date: {mov.release_date} </h5> 
                       
//                         <Link className='btn-primary' to={`/moveieDetails/${mov.id}`} key={index} > Show Details </Link> 
//                         {/* <button onClick={()=> {HandleFav()}}>Add Fav</button> */}
//                     </div>
//                 </div>
//               )
//           }) 
//       }
//         </div>
//     </div>
//     </div>
//   );
// }

export default Moviees;

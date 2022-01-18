import React from "react";
import MovieCard from "./MovCard";
import { useSelector } from "react-redux";

export default function Favourite() {

    const favList = useSelector( (state) => state.favList.favList)
    
    return (
      <div className='col-10 mx-auto mt-3'>
        <div className='d-flex flex-wrap'>
            {favList.length !== 0 ?
                favList.map((i) => 
                <MovieCard movie={i} key={i.id} deleteIcon /> )
                : <div className="mx-auto "> There is not moviees in favourite list Add into fav by Click on Star Icon </div>
            }
        </div>
    </div>
    )
}
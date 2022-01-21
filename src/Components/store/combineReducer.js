import { combineReducers } from "redux";
import CounterReducer from "./Reducers/counterRed";
import AddFav from "./Reducers/AddFav";
import MovieeReducer from "./Reducers/movieeRed";
import MovieeDetReducer from "./Reducers/MovDetRed";

export default combineReducers ({
    count : CounterReducer ,
    favList : AddFav ,
    mov: MovieeReducer ,
    movDetails: MovieeDetReducer ,
})
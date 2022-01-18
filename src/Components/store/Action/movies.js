import axiosInstance, { apiKey } from "../../AxiosConfig/axiosConfig" ;

export default function ShowMovie() {
    return (dispatch) => {
        axiosInstance 
        .get(`/movie/popular?api_key=${apiKey}`)
        .then( (res) => dispatch({type: "SHOW_MOV" , payload:res.data.results}))
        .catch( (err) => console.log(err))
    }
} 
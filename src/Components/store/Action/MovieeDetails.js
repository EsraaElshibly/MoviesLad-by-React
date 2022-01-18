import axiosInstance, {apiKey} from "../../AxiosConfig/axiosConfig";

export default function ShowMovDetails(_id) {
    return (dispatch)=> {
        axiosInstance
        .get(`/movie/${_id}?api_key=${apiKey}`)
        .then((res) => dispatch({type:"SHOW_DETAILS" , payload: res.data}) )
        .catch((err)=> console.log(err))
    }
}
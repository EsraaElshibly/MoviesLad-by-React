function ChangeCounter (data) 
{
    return {
        type: "SET_COUNTER" ,
        payload: data
    }
}

export default ChangeCounter ;
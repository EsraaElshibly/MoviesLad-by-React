const intial = {
    count: 0
}

export default function CounterReducer (state = intial , action)
{
    switch(action.type) {
        case "SET_COUNTER" :
            return {
                ...state ,
                count : action.payload
            }
        default :
            return state
    }
}
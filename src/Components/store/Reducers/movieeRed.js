
export default function MovieeReducer (state = [] , action)
{
    switch(action.type) {
        case "SHOW_MOV" :
            return action.payload
            
        default :
            return state
    }
}
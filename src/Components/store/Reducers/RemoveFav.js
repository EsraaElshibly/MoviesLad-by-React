const intial = {
    fav : [] 
}

function RemoveFav(state = intial , action) {
    switch (action.type) {
        case "REMOVE_FAVOURITE" :
            return {
                ...state , 
                fav: state.fav.filter(i => i !==action.payload)
            }

        default :
            return state
    }
}

export default RemoveFav
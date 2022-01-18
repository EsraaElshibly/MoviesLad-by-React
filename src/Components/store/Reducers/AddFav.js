const intial = {
    favList : [] 
}

function AddFav(state = intial , action) {
    switch (action.type) {
        case "ADD_FAVOURITE" :
            return {
                ...state , 
                favList: [action.payload , ...state.favList]
            }

        default :
            return state
    }
}

export default AddFav
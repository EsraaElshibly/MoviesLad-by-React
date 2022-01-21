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

        case "REMOVE_FAVOURITE" :
            return {
                ...state , 
                favList: state.favList.filter(i => i !==action.payload)
            }

        default :
            return state
    }
}

export default AddFav
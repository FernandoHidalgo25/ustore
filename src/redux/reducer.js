const initialState = {
    stores: []
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_STORES":
            return {...state, stores: action.payload};
        default:
            return {...state}
    }
}
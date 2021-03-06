const initialStore = {
    name: "",
    url: "",
    lat: null,
    long: null,
    imageUrl: "",
    address: "",
    kindOfShop: "",
    zipCode: null,
    id: null,
    comments: []
}

const initialUser = {
    username: ""
}

const initialState = {
    stores: [],
    selectedStore: initialStore,
    user: initialUser
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_STORES":
            return {...state, stores: action.payload};
        case "GET_STORE":
            return {...state, selectedStore: action.payload};
        case "CLEAR_STORE":
            return {...state, selectedStore: initialStore};
        case "SET_USER":
            return {...state, user: action.payload};
        case "ADD_COMMENT":
            return {...state, selectedStore: {...state.selectedStore, comments: [action.payload, ...state.selectedStore.comments]}}
        case "LOGOUT":
            return {...state, user: initialUser};
        default:
            return {...state}
    }
}
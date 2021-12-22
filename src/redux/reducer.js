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

const initialState = {
    stores: [],
    selectedStore: initialStore
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_STORES":
            return {...state, stores: action.payload};
        case "GET_STORE":
            return {...state, selectedStore: action.payload};
        case "CLEAR_STORE":
            return {...state, selectedStore: initialStore};
        default:
            return {...state}
    }
}
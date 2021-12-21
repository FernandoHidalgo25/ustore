const initialState = {
    stores: [],
    selectedStore: {
        name: "",
        url: "",
        lat: null,
        long: null,
        imageUrl: "",
        address: "",
        kindOfShop: "",
        zipCode: null,
        id: null,
    }
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_STORES":
            return {...state, stores: action.payload};
        case "GET_STORE":
            return {...state, selectedStore: action.payload}
        default:
            return {...state}
    }
}
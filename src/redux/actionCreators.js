export const getStores = () => {
    return dispatch => fetch("http://localhost:3000/stores")
    .then(res => res.json())
    .then(stores => dispatch({type: "GET_STORES", payload: stores})
    )
}

export const getStore = (id) => {
    return dispatch => fetch(`http://localhost:3000/stores/${id}`)
    .then(res => res.json())
    .then(store => dispatch({type: "GET_STORE", payload: store})
    )
}
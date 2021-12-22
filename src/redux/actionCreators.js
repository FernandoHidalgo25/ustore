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

export const clearStore = () => ({type: "CLEAR_STORE"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users", {
        method: 'POST', //or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))
} 

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions", {
        method: 'POST', //or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))
}


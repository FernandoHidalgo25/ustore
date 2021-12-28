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
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
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
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
}

export const submitComment = (comment, storeId) => {
    return dispatch => fetch(`http://localhost:3000/stores/${storeId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify(comment)
    })
    .then(res => {
        if (res.ok) {
          res.json().then(review => dispatch({type: "ADD_COMMENT", payload: review}))
        } else {
          res.json().then(res => alert(res.errors))
        }
    })
}

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
        headers: {
            'Authorization': localStorage.token
        }
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token 
        dispatch({type: "SET_USER", payload: response.user})
    })
} 

export const logout = () => {
    return dispatch =>{
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}
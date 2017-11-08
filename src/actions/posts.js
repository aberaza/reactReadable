export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'
export const RATE_POST = 'RATE_POST'

export const getPost = id => ({
    type: GET_POST,
    id
})

export const addPost = post => ({
    type: ADD_POST,
    post
})

export const delPost = id => ({
    type: DEL_POST,
    id
})

export const ratePost = (id, rate) =>({
    type: RATE_POST,
    id,
    rate
})

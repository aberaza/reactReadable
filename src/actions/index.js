const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

const GET_POST = 'GET_POST'
const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
const GET_COMMENT = 'GET_COMMENT'

const ADD_POST = 'ADD_POST'
const DEL_POST = 'DEL_POST'
const RATE_POST = 'RATE_POST'

const ADD_COMMENT = 'ADD_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'
const RATE_COMMENT = 'RATE_COMMENT'

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

export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
})

export const delComment = id => ({
    type: DEL_COMMENT,
    id
})

export const rateComment = (id, rate) =>({
    type: RATE_COMMENT,
    id,
    rate
})

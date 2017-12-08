import * as API from '../utils/blogAPI'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DEL_COMMENT = 'DEL_COMMENT'
export const RATE_COMMENT = 'RATE_COMMENT'


export const getPostComments = comments => ({
    type: GET_POST_COMMENTS,
    comments
})

export const getComment = comment => ({
    type: GET_COMMENT,
    comment
})


export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
})

export const editComment = comment => ({
    type: EDIT_COMMENT,
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

export const serverGetPostComments = id => dispatch => API.getPostComments(id) 
    .then(comments => dispatch(getPostComments(comments)))

export const serverGetComment = id => dispatch => API.getComment(id)
    .then(comment => dispatch(getComment(comment)))

export const serverAddComment = comment => dispatch => API.addComment(comment)
    .then(comment => dispatch(addComment(comment)))

export const serverEditComment = comment => dispatch => API.editComment(comment)
    .then(comment => dispatch(editComment(comment)))
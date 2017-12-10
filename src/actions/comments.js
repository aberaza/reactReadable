import * as API from '../utils/blogAPI'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DEL_COMMENT = 'DEL_COMMENT'

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

export const serverGetPostComments = id => dispatch => API.getPostComments(id) 
    .then(comments => dispatch(getPostComments(comments)))

export const serverGetComment = id => dispatch => API.getComment(id)
    .then(comment => dispatch(getComment(comment)))

export const serverAddComment = comment => dispatch => API.addComment(comment)
    .then(c => dispatch(addComment(c)))

export const serverEditComment = comment => dispatch => API.editComment(comment)
    .then(c => dispatch(editComment(c)))

export const serverRateComment = (id, rate) => dispatch => API.rateComment(id, rate)
    .then(comment => dispatch(editComment(comment)))

export const serverDelComment = id => dispatch => API.deleteComment(id)
    .then(comment => dispatch(delComment(id)))
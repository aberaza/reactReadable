export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'


export const ADD_COMMENT = 'ADD_COMMENT'
export const DEL_COMMENT = 'DEL_COMMENT'
export const RATE_COMMENT = 'RATE_COMMENT'


export const getPostComments = id => ({
    type: GET_POST_COMMENTS,
    id
})

export const getComment = id => ({
    type: GET_COMMENT,
    id
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


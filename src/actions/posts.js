import * as API from '../utils/blogAPI'

export const GET_POST = 'GET_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DEL_POST = 'DEL_POST'

export const getPost = post => ({
    type: GET_POST,
    post
})

export const getPosts = posts => ({
    type: GET_POSTS,
    posts
})

export const getCategoryPosts = (category, posts) => ({
    type: GET_CATEGORY_POSTS,
    category,
    posts
})

export const addPost = post => ({
    type: ADD_POST,
    post
})

export const editPost = post =>({
    type: EDIT_POST,
    post
})

export const delPost = id => ({
    type: DEL_POST,
    id
})

export const serverGetPost = id => dispatch => API.getPost(id)
    .then(post => dispatch(getPost(post)))

export const serverGetPosts = _ => dispatch => API.getPosts()
    .then(posts => dispatch(getPosts(posts)))

export const selectCategory = category => dispatch => API.getCategoryPosts(category)
    .then(posts => dispatch(getCategoryPosts(category, posts)))

export const serverAddPost = post => dispatch => API.addPost(post)
    .then(p=> dispatch(addPost(p)))

export const serverEditPost = post => dispatch => API.editPost(post)
    .then(p => dispatch(editPost(p)))

export const serverRatePost = (id, rate) => dispatch => API.votePost(id, rate)
    .then(p => dispatch(editPost(p)))

export const serverDelPost = id => dispatch => API.deletePost(id)
    .then(p => dispatch(delPost(p.id)))


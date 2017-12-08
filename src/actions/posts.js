import * as API from '../utils/blogAPI'

export const GET_POST = 'GET_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'
export const RATE_POST = 'RATE_POST'

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

export const delPost = id => ({
    type: DEL_POST,
    id
})

export const ratePost = (id, rate) =>({
    type: RATE_POST,
    id,
    rate
})

export const serverGetPost = id => dispatch => API.getPost(id)
    .then(post => dispatch(getPost(post)))

export const serverGetPosts = _ => dispatch => API.getPosts()
    .then(posts => dispatch(getPosts(posts)))

export const selectCategory = category => dispatch => API.getCategoryPosts(category)
    .then(posts => dispatch(getCategoryPosts(category, posts)))

export const serverAddPost = post => dispatch => API.addPost(post)
    .then(post => dispatch(addPost(post)))

export const serverDelPost = id => dispatch => API.deletePost(id)
    .then(post => dispatch(delPost(post.id)))

export const serverRatePost = (id, rate) => dispatch => API.votePost(id, rate)
    .then(post => dispatch(ratePost(id, rate)))
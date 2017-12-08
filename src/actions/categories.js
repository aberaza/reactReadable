import * as API from '../utils/blogAPI'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories
})

export const setCategory = category => ({
    type: SET_CATEGORY,
    category
})

export const getCategoryPosts = (category, posts) => ({
    type: GET_CATEGORY_POSTS,
    category,
    posts
})

export const serverGetCategories = _=> dispatch => API.getCategories()
    .then(categories => dispatch(getCategories(categories)))

export const serverSetCategory = category => dispatch => dispatch(setCategory(category))

export const selectCategory = category => dispatch => API.getCategoryPosts(category)
    .then(posts => dispatch(getCategoryPosts(category, posts)))

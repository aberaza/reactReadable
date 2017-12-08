import * as API from '../utils/blogAPI'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'


export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories
})

export const setCategory = category => ({
    type: SET_CATEGORY,
    category
})

export const serverGetCategories = _=> dispatch => API.getCategories()
    .then(categories => dispatch(getCategories(categories)))

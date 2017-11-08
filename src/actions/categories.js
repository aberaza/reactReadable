export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

export const getCategories = _ => ({
    type: GET_CATEGORIES
})

export const getCategoryPosts = category => ({
    type: GET_CATEGORY_POSTS,
    category
})



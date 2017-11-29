import { GET_CATEGORIES, GET_CATEGORY_POSTS } from '../actions'

const initialCategoriesState = ["cat1", "tales", "MagicUltra", "emptyCategory"];
    
/** REDUCER */
export  default function ( state = initialCategoriesState, action ) {
    switch( action.type ){
        case GET_CATEGORIES:
        case GET_CATEGORY_POSTS:
        default:
            return state;
    }
}

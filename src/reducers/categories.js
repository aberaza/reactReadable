import { GET_CATEGORIES, GET_CATEGORY_POSTS, SET_CATEGORY } from '../actions'

const initialCategoriesState = [{name:"cat1", path:"cat1"}, {name:"tales", path:"tales"}, {name:"MagicUltra", path:"MagicUltra"}];
    
/** REDUCER */
export  default function ( state = initialCategoriesState, action ) {
    console.dir(arguments)
    switch( action.type ){
        case GET_CATEGORIES:
            return action.categories;
        case SET_CATEGORY:
        default:
            return state;
    }
}

import { combineReducers } from 'redux'
import posts from './posts'
import coments from './comments'
import categories from './categories'

export default combineReducers({posts, coments, categories})
import { GET_POST, GET_POSTS, GET_CATEGORY_POSTS, ADD_POST, EDIT_POST, DEL_POST } from '../actions'
import { flagAsDeleted, setVoteScore, updateElement } from '../utils/helpers'

/* partial model:
{
    ...
    posts : [
        {
            id: String
            timestamp: Number
            title: String
            body: String
            author: String
            category: String
            deleted: Boolean
            voteScore: Number [0-10]
            commentCount: Number

        }
    ]
}

*/

const initialPostsState = [
    {
       id : "00000000",
       timestamp: 1234567890,
       title: "First Post",
       body: "This is the body of the first post",
       author: "author1",
       category: "cat1",
       voteScore: 5,
       deleted: false,
       commentCount: 1,
    },
    {
       id : "00000001",
       timestamp: 1234567891956,
       title: "The Second  Post",
       body: "This is the body of the second post. Not quite original",
       author: "author1",
       category: "cat1",
       voteScore: 4,
       deleted: false,
       commentCount: 0,
    },
    {
       id : "00000002",
       timestamp: 1234567880,
       title: "YAP: Yet Another Post",
       body: "Lorem ipsum dolor... just kidding",
       author: "Bond, James",
       category: "MagicUltra",
       voteScore: 7,
       deleted: false,
       commentCount: 0,
    },
    {
       id : "00000003",
       timestamp: 1234567990,
       title: "This is getting boring",
       body: "There was a time, in the old times...",
       author: "Grimm",
       category: "tales",
       voteScore: 0,
       deleted: false,
       commentCount: 0,
    }
];


/** REDUCER */
export default function( state = initialPostsState, action ) {
    switch (action.type ) {
        case GET_POST :
            return [ action.post ]; 
        case GET_POSTS :
            return action.posts;
        case GET_CATEGORY_POSTS:
            return action.posts;
        case ADD_POST :
            return [...state, action.post]
        case DEL_POST :
            return state.map(flagAsDeleted(action.id))
        case EDIT_POST:
            return state.map(updateElement(action.post))
        default: 
            return state;
    }
}
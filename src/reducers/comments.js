import { GET_POST_COMMENTS, ADD_COMMENT, EDIT_COMMENT, GET_COMMENT, DEL_COMMENT, RATE_COMMENT } from '../actions'

import { flagAsDeleted, setVoteScore, updateElement } from '../utils/helpers'
/* partial state model
{
    ...,
    comments : [
        {
            id : String,
            parentId: String,
            timestamp: Number,
            body: String,
            author: String,
            voteScore: Number [0-10],
            deleted: Boolean,
            parentDeleted: Boolean
        }
    ]
} 
*/

const initialCommentsState = [
    {
        id:"p0001",
        parentId: "00000000",
        timestamp: 1234569890,
        body: "Nooooo, please, stop with stupid mocked data!",
        author: "Real User",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    },
    {
        id:"p0002",
        parentId: "00000001",
        timestamp: 1234569891,
        body: "No, please, stop with stupid mocked data!",
        author: "Real User",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }
];

/** REDUCER */
export default function (state=initialCommentsState, action){
    switch (action.type) {
        case GET_POST_COMMENTS:
            return action.comments;
        case GET_COMMENT: 
            return [action.comment];
        case ADD_COMMENT:
            return [...state, action.comment]
        case EDIT_COMMENT:
            return state.map(updateElement(action.comment))
        case DEL_COMMENT:
            return state.map(flagAsDeleted(action.id))
        default:
            return state;
    }
}

import { GET_POST_COMMENTS, GET_COMMENT, ADD_COMMENT, DEL_COMMENT, RATE_COMMENT } from '../actions'

import { flagAsDeleted, setVoteScore } from '../utils/helpers'
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

const initialCommentsState = {
    "00000000" : [{
        id:"p0001",
        parentId: "00000000",
        timestamp: 1234569890,
        body: "No, please, stop with stupid mocked data!",
        author: "Real User",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }],
    "00000001" : [{
        id:"p0002",
        parentId: "00000001",
        timestamp: 1234569890,
        body: "No, please, stop with stupid mocked data!",
        author: "Real User",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }],
}

/** REDUCER */
export default function (state=initialCommentsState, action){
    switch (action.type) {
        case GET_POST_COMMENTS: // TODO: Implement when server is integrated
        case GET_COMMENT: //TODO: implement when server is integrated
            return state;
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };
        case DEL_COMMENT:
            return {
                ...state,
                comments: state.comments.map(flagAsDeleted(action.id))
            };
        case RATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(setVoteScore(action.id, action.score))
            };
        default:
            return state;
    }
}
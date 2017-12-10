import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import UUID from 'uuid'

import { AppPost } from './post'

import { AppComment } from './comment'
import { serverGetPostComments, serverEditComment, serverRateComment, serverDelComment, serverAddComment } from '../actions/comments'
import { serverGetPost } from '../actions/posts'
class PostDetails extends React.Component {
    componentDidMount(){
        this.props.getPost(this.props.id)
        this.props.getPostComments(this.props.id)
    }

    render() {
        const {id, comments=[], sort, delComment, rateComment, editComment, addComment } = this.props;
        const cId = UUID.v1();
        return (
            <div className="postDetails">
                <div className="row">
                    <div className="col s12">
                        <AppPost id={id}></AppPost>
                    </div>
                
                    <div className="col s11 push-s1">
                        { comments
                                .filter( comment => !comment.deleted )
                                .map( comment => <AppComment key={comment.id} comment={comment} edit={editComment} rate={rateComment} del={delComment} />) }
                        <Route path="/:category/:id/comment" render={({match}) => (<AppComment key={cId} comment={{id:cId, parentId:match.params.id}} editing={true} isNew={true} edit={addComment} />)} />    
                    </div>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ( { comments } , { id }) => ( {  
    comments: comments.filter(comment => comment.parentId === id)
})

const mapDispatchToProps = {
    getPostComments: serverGetPostComments,
    rateComment: serverRateComment, 
    delComment: serverDelComment,
    editComment:serverEditComment,
    addComment:serverAddComment,
    getPost:serverGetPost
}

export let AppPostDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails))

import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import UUID from 'uuid'
import PropTypes from 'prop-types'

import { AppPost } from './post'
import { AppComment } from './comment'
import { Error404 } from './Error404'
import { serverGetPostComments, serverEditComment, serverRateComment, serverDelComment, serverAddComment } from '../actions/comments'
import { serverGetPost } from '../actions/posts'
import { sortBy } from '../utils/helpers'

class PostDetails extends React.Component {
    componentDidMount(){
        this.props.getPost(this.props.id)
        this.props.getPostComments(this.props.id)
    }

    render() {
        const {id, comments=[], sort, delComment, rateComment, editComment, addComment, postExists } = this.props;
        const cId = UUID.v1();
        return (
            <div className="postDetails">
                <div className="row">
                    <div className="col s12">
                        { postExists 
        ? ( <AppPost id={id} /> ) 
                        : ( <Error404 /> )
                        }
                    </div>
                
                    <div className="col s11 push-s1">
                        { comments
                                .filter( comment => !comment.deleted )
                                .sort(sortBy(sort))
                                .map( comment => <AppComment key={comment.id} comment={comment} edit={editComment} rate={rateComment} del={delComment} />) }
                        <Route path="/:category/:id/comment" render={({match}) => (<AppComment key={cId} comment={{id:cId, parentId:match.params.id}} editing={true} isNew={true} edit={addComment} />)} />    
                    </div>
                </div>  
            </div>
        )
    }
}

PostDetails.propTypes = {
    id: PropTypes.string.isRequired
}

const mapStateToProps = ( { comments, posts } , { id }) => ( {  
    comments: comments.filter(comment => comment.parentId === id),
    postExists: posts.some(p=>(p.id === id))
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

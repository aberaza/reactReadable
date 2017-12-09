import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { AppPost } from './post'

import { AppComment } from './comment'
import { serverGetPostComments, serverEditComment, serverRateComment, delComment } from '../actions/comments'

class PostDetails extends React.Component {
    componentDidMount(){
        this.props.getPostComments(this.props.id)
    }

    render() {
        const {post={}, comments=[], sort, delComment, rateComment, editComment } = this.props;

        return (
            <div className="postDetails">
                <div className="row">
                    <div className="col s12">
                        <AppPost id={post.id}></AppPost>
                    </div>
                
                    <div className="col s11 push-s1">
                        { comments
                                .filter( comment => !comment.deleted )
                                .map( comment => <AppComment key={comment.id} comment={comment} edit={editComment} rate={rateComment} del={delComment} />) }
                    </div>
                </div>
    
                
            </div>
        )
    }
}

const mapStateToProps = ( { posts, comments, categories } , { id }) => ( { 
    post : posts.find(p=>(p.id===id)), 
    comments: comments.filter(comment => comment.parentId === id),
    categories
} )

const mapDispatchToProps = {
    getPostComments: serverGetPostComments,
    rateComment: serverRateComment, 
    delComment,
    editComment:serverEditComment}

export let AppPostDetails = connect(mapStateToProps, mapDispatchToProps)(PostDetails)

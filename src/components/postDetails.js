import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'
import { AppComment } from './comment'
import { delComment, rateComment } from '../actions/comments'

const onDeleteComment = (id, dispatch) => _=>{console.log("Want to delete comment " + id); dispatch(delComment(id));}
const onRateComment = (id, dispatch) => rating=> dispatch(rateComment(id, rating)) 
//const onEditComment = (id, dispatch) => text =>{console.log("Want to save comment " + id)}

function PostDetails({ post, comments=[], sort, dispatch }) {
    return (
        <div className="postDetails">
            <div className="row">
                <div className="col s12">
                    <AppPost post={post}></AppPost>
                </div>
            
                <div className="col s11 push-s1">
                    { comments
                            .filter( comment => !comment.deleted )
                            .map( comment => <AppComment key={comment.id} comment={comment} deleteComment={onDeleteComment(comment.id, dispatch)} rateComment={onRateComment(comment.id, dispatch)} />) }
                </div>
            </div>
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4>Modal header</h4>
                    <p>text content</p>
                </div>
                <div className="modal-footer">
                    <a href="" className="modal-action modal-close waves-effect waves-green btn-flat">Save</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( { posts, comments } , { id }) => ( { 
    post : posts.find(p=>(p.id===id)), 
    comments: comments.filter(comment => comment.parentId === id)
} )


export let AppPostDetails = connect(mapStateToProps)(PostDetails)

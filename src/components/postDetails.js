import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

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
                    <AppPost id={post.id}></AppPost>
                </div>
            
                <div className="col s11 push-s1">
                    { comments
                            .filter( comment => !comment.deleted )
                            .map( comment => <AppComment key={comment.id} id={comment.id} del={onDeleteComment(comment.id, dispatch)} rate={onRateComment(comment.id, dispatch)} />) }
                </div>
            </div>

            
        </div>
    )
}

const mapStateToProps = ( { posts, comments, categories } , { id }) => ( { 
    post : posts.find(p=>(p.id===id)), 
    comments: comments.filter(comment => comment.parentId === id),
    categories
} )

export let AppPostDetails = connect(mapStateToProps)(PostDetails)

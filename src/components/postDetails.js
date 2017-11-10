import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'
import { AppComment } from './comment'

function PostDetails({ post, comments=[], sort }) {
    return (
        <div className="postDetails">
            <div className="row">
                <div className="col s12">
                    <AppPost post={post}></AppPost>
                </div>
            
                <div className="col s11 push-s1">
                    { comments.map( comment => <AppComment key={comment.id} comment={comment} />) }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( { posts, comments } , { id }) => ( { post:posts.find(p=>(p.id===id)) ,comments: (comments[id]||[])} )


export let AppPostDetails = connect(mapStateToProps)(PostDetails)
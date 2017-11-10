import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'

function PostDetails({ post, comments=[], sort }) {
    return (
        <div className="postDetails">
            <div className="row">
                <div className="col s12">
                    <AppPost post={post}></AppPost>
                </div>
            
                <div className="col s10 push-s2">

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( { posts, comments } , { id }) =>{
    return { post:posts.find(p=>(p.id===id)) ,comments: (comments[id]||[])}
}


export let AppPostDetails = connect(mapStateToProps)(PostDetails)
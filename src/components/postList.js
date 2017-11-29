import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'
import { sortBy } from '../utils/helpers'

function PostList({ posts, category = "ALL", sort }) {
    
    return (
        <div className="posts">
          <div className="row">
            <div className="col s12">
               { (category!=="ALL"?posts.filter( post => post.category === category) : posts)
                    .sort(sortBy(sort))
                    .map( post => <AppPost key={post.id} post={post} />) 
                }
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = ({posts}) => ({ posts })

const mapDispatchToProps = (dispatch) => ({
    // onPostClick : (id) => dispatch(showFull(id))
})


export let AppPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)
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
                    .filter( post => post.deleted === false)
                    .sort(sortBy(sort))
                    .map( post => <AppPost key={post.id} id={post.id} />) 
                }
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = ({posts}) => ({ posts })

export let AppPostList = connect(mapStateToProps)(PostList)
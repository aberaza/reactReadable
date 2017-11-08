import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'

function PostList(props) {
    console.dir(props)
    return (
        <div className="posts">
          <div className="row">
            <div className="col s12">
               { props.posts.map( post => <AppPost key={post.id} post={post} />) }
            </div>
          </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
      posts: state.posts
    }
  }
  
  function mapDispatchToProps(dispatch){
    return { 
      //onPostClick : (id) => dispatch(showFull(id))
    }
  }

export let AppPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)
import React from 'react'
import { connect } from 'react-redux'

import { AppPost } from './post'
import { sortBy } from '../utils/helpers'
import { serverGetPosts } from '../actions/posts'

class PostList extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render () {
        const { posts, category = 'ALL', sort } = this.props;

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
}

const mapStateToProps = ({posts}) => ({ posts })
const mapDispatchToProps = { getPosts : serverGetPosts }

export let AppPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)
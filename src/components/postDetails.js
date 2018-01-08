import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AppPost } from './post'
import { AppComment } from './comment'
import AddContentButton from './AddContentButton'

import { serverGetPostComments, serverEditComment, serverRateComment, serverDelComment, serverAddComment } from '../actions/comments'
import { serverGetPost } from '../actions/posts'
import { sortBy, getUUID } from '../utils/helpers'

class PostDetails extends React.Component {
    constructor() {
        super();
        this.state = { 
            error : false
        }
    }

    componentDidMount(){
        this.props.getPost(this.props.id)
            .then(response =>{
                if(response.post.error || !this.props.postExists) {
                    this.setState({error : true})
                }
            })
        this.props.getPostComments(this.props.id)
    }

    render() {
        const {id, comments=[], sort, delComment, rateComment, editComment, addComment, postExists } = this.props;
        const cId = getUUID();
        
        if(this.state.error){
            return ( <Redirect to='/404' push/> )
        }

        return (
            <div className="postDetailsContainer">
            <div className="postDetails">
                <div className="row">
                    <div className="col s12">
                        <AppPost id={id} />
                    </div>
                
                    <div className="col s11 push-s1">
                        { postExists && comments
                                .filter( comment => !comment.deleted )
                                .sort(sortBy(sort))
                                .map( comment => <AppComment key={comment.id} comment={comment} edit={editComment} rate={rateComment} del={delComment} />) }
                        <Route path="/:category/:id/comment" render={({match}) => (<AppComment key={cId} comment={{id:cId, parentId:match.params.id}} editing={true} isNew={true} edit={addComment} />)} />    
                    </div>
                </div>  
            </div>
            <AddContentButton />
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

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { timestamp2String } from '../utils/helpers'


function PostEdit(props){
    const { post, categories } = props;
    const { id, title, body, category, author } = post;

    return (
        
        <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff90a3', height: '100px'}} alt=""/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <div className="row">
                        <div className="input-field">
                            <i className="material-icons prefix">title</i>
                            <input type="text" value={title || ""} id="postTitle" name="postTitle" />
                            <label for="postTitle">Title</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s5">
                        <i className="material-icons prefix">face</i>
                        <input type="text" value={author || "" } name="postAuthor" id="postAuthor"/>
                        <label for="postAuthor">Author</label>
                    </div>
                    <div className="input-field col s5">
                        <select>
                            { categories.map(cat => (<option value={cat}>{cat}</option>))}    
                        </select>
                        <label>Category select</label>
                    </div>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">edit</i>
                        <textarea name="postBody" value={body} placeholder="...type your thoughts" id="postBody" className="materialize-textarea"></textarea>
                        <label for="postBody">Post</label>
                    </div>
                </div>
            </div>
            
            <div className="card-action">
                <Link to={`#`} className="blue-text">Save</Link>
                <Link to={`#`} className="red-text">Back</Link>
            </div>
       </div>
    )
}

const mapStateToProps = ( { posts, comments, categories } , { postId }) => ( { 
    post : posts.find(p=>(p.id===postId)), 
    comments: comments.filter(comment => comment.parentId === postId),
    categories
} )

export let AppPostEdit = connect(mapStateToProps)(PostEdit)

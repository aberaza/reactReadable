import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { timestamp2String } from '../utils/helpers'

export default function Comment(props){
    const { body, author, voteScore, timestamp } = props.comment;
    const { del, like, dislike, edit } = props;
    return (
    <div className="card-panel orange accent-2">
    
    
    <div className="card-content">
        <div className="col s11">
            <span className="black-text">{body}</span>
        </div>
        <div className="row">
            <div className="col s1">
                <span className="badge left white-text">{voteScore} <i className="material-icons">star</i></span>
            </div>
        </div>
    </div>
        
    <div className="card-action">
        <div className="chip"><img src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt="by" />by {author}</div> <div className="chip">{`posted ${timestamp2String(timestamp)}`}</div>
        <a href="#!" onClick={like} className="right green-text btn-flat"><i className="material-icons">thumb_up</i></a>
        <a href="#!" onClick={dislike} className="right yellow-text right"><i className="material-icons">thumb_down</i></a>
        <a href="#!" onClick={del} className="right red-text btn-flat"><i className="material-icons">delete</i></a>
        <a href="#!" onClick={edit} className="right blue-text btn-flat"><i className="material-icons">edit</i></a>
    </div>
    </div>
    )
}
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
}
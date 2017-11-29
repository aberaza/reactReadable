import React from 'react'

import { timestamp2String } from '../utils/helpers'

export function AppComment(props){
    
    const { body, author, voteScore, timestamp } = props.comment;
    const { deleteComment, rateComment } = props;

    return (
        <div className="card-panel grey lighten-4">
            
            <div className="chip"><img src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt="by" />by {author}</div> <div className="chip">{`posted ${timestamp2String(timestamp)}`}</div>
            
            <div className="card-content">
                <div className="row">
                    <div className="col s1">
                        <span className="badge left">{voteScore} <i className="material-icons">thumbs_up_down</i></span>
                    </div>
                    <div className="col s11">
                        <span className="black-text">{body}</span>
                    </div>
                </div>
            </div>
                
            <div className="card-action">
                <a href="#" onClick={()=>rateComment(voteScore + 1)} className="green-text btn-flat"><i className="material-icons">thumb_up</i></a>
                <a href="#" onClick={deleteComment} className="right red-text btn-flat"><i className="material-icons">delete</i></a>
                <a href="#" className="right blue-text btn-flat"><i className="material-icons">edit</i></a>
            </div>
        </div>
    )
}

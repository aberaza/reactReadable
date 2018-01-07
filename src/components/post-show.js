import  React  from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

import { timestamp2String } from '../utils/helpers'

export default function Post(props){
    const {id, title, body, timestamp, category, author, commentCount=0, voteScore } = props.post;

    return (
       <div className="card">
           <div className="card-content deep-orange lighten-1">
                <Link to={`/${category}/${id}`} className="card-title white-text" style={{width:'100%'}} >
                    {title}    
                    <div className="badge right"> {voteScore} <i className="close material-icons">star</i></div>
                </Link>          
            </div>
            <div className="card-stacked">
                <div className="card-content deep-orange lighten-4">
                    <p>{body}</p>
                </div>
                <div className="card-action deep-orange lighten-2">
                    <div className="toolbar">
                    <div className="chip"><img src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt="by" />by {author}</div> 
                    <div className="chip">{`posted ${timestamp2String(timestamp)}`}</div> 
                    <div className="chip">{`commented ${commentCount} times`}</div>
                    <a href='#!' onClick={props.onLike} className="green-text right"><i className="material-icons">thumb_up</i></a>
                    <a href="#!" onClick={props.onDislike} className="yellow-text right"><i className="material-icons">thumb_down</i></a>
                    <a href='#!' onClick={props.onDelete} className="red-text right"><i className="material-icons">delete</i></a>
                    <a href="#!" onClick={props.onEdit} className="blue-text right"><i className="material-icons">edit</i></a>
                    </div>
                </div>
               </div>
       </div>
    )
}

Post.propTypes = {
    post : PropTypes.object.isRequired,
    onLike: PropTypes.func.isRequired,
    onDislike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}
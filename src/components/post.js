import  React  from 'react'

import { timestamp2String } from '../utils/helpers'

export function AppPost(props){
    const {title, body, timestamp, category, author, commentCount, voteScore } = props.post;
    return (
       <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff8093', height: '100px'}} alt=""/>
            
                
                <span className="card-title" ><div className="chip"> {voteScore} <i className="close material-icons">thumbs_up_down</i></div> {title}</span>
                <a href="#!" className="btn-floating btn-large halfway-fab waves-effect waves-light red">
                    <i className="large material-icons">thumb_up</i>   
                </a>
                
            </div>
            <div className="card-stacked">
                <div className="chip"><img src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt="by" />by {author}</div> <div className="chip">{`posted ${timestamp2String(timestamp)}`}</div>
                <div className="card-content">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="card-action"><a href="">Action 1</a></div>
       </div>
    )
}

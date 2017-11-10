import  React  from 'react'

import { timestamp2String } from '../utils/helpers'

export function AppPost(props){
    const {title, body, timestamp, category, author, commentCount, voteScore } = props.post;
    return (
       <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff8093', height: '100px'}} alt=""/>
            
                
                <span className="card-title" style={{width:'100%'}} >
                    {title}    
                    <div className="badge right"> {voteScore} <i className="close material-icons">thumbs_up_down</i></div>
                </span>
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
            
            <div className="card-action">
                <a href=""></a>
                <a href="" className="right red-text"><i className="material-icons">delete</i></a>
                <a href="" className="right blue-text"><i className="material-icons">edit</i></a>
            </div>
       </div>
    )
}

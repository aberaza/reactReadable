import  React  from 'react'

export function AppPost(props){
    const {title, body, timestamp, category, author, commentCount, voteScore } = props.post;
    return (
       <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff8093', height: '100px'}} alt=""/>
            
                <span className="card-title" >{title}</span>
                <a href="" className="btn-floating halfway-fab waves-effect waves-light red">
               <i className="material-icons">favorite_border</i>
            </a>
            </div>
            
            
            <div className="card-stacked">
            <div className="card-content">
                <p>{body}</p>
            </div>
            </div>
            <div className="card-action"><a href="">Action 1</a></div>
       </div>
    )
}

import React from 'react'

import { timestamp2String } from '../utils/helpers'

export function AppComment(props){
    console.dir(props)
    const { body, author, voteScore, timestamp } = props.comment;
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
                <a href="" className="green-text btn-flat"><i className="material-icons">thumb_up</i></a>
                <a href="" className="right red-text btn-flat"><i className="material-icons">delete</i></a>
                <a href="" className="right blue-text btn-flat"><i className="material-icons">edit</i></a>
            </div>
        </div>
    )
}
/*
        <div className="card horizontal">
            <div className="card-image">
                <img className="circle responsive-img" style={{maxWidth:'150px'}} src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt=""/>
                <div className="card-title">
                    <div className="chip">cardtitle</div>
                </div>
            </div>
            <div className="card-stacked">
            <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">edit</i></a>

            
           
        
            <div className="card-content grey lighten-3">
                
                <p>And some some text over here</p>
                One of the most confusing aspects of CSS styling is the application of the font-size attribute for text scaling. In CSS, you’re given four different units by which you can measure the size of text as it’s displayed in the web browser. Which of these four units is best suited for the web? It’s a question that’s spawned a diverse variety of debate and criticism. Finding a definitive answer can be difficult, most likely because the question, itself, is so difficult to answer.
                
            </div>
            <div className="card-content blue lighten-3">
                <p>And yet some more</p>
            </div>
            </div>
        </div>
        */
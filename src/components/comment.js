import React from 'react'
import { connect } from 'react-redux'

import { timestamp2String } from '../utils/helpers'
import { addComment, delComment, rateComment } from '../actions/comments'

function Comment(props){
    const { body, author, voteScore, timestamp } = props.comment;
    const { del, rate, edit } = props;
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
        <a href="#!" onClick={rate} className="green-text btn-flat"><i className="material-icons">thumb_up</i></a>
        <a href="#!" onClick={del} className="right red-text btn-flat"><i className="material-icons">delete</i></a>
        <a href="#!" onClick={edit} className="right blue-text btn-flat"><i className="material-icons">edit</i></a>
    </div>
</div>
    )
}

function EditComment(props) {
    const { comment, change, save, cancel } = props;
    const { body="", author="" } = comment;

    return (
        <div className="card grey lighten-2">
            <div className="card-content">
                <div className="row">        
                    <div className="row">
                        <div className="input-field col s5">
                            <i className="material-icons prefix">face</i>
                            <input type="text" value={author} onChange={change} name="author" id="author"/>
                            <label className="active" for="author">Author</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">edit</i>
                        <textarea name="body" value={body} onChange={change} placeholder="...type your thoughts" id="body" className="materialize-textarea"></textarea>
                        <label className="active" for="postBody">Post</label>
                    </div>
                </div>
            </div>
            <div className="card-action">
                <a href='#!' onClick={save} className="blue-text">Save</a>
                <a href='#!' onClick={cancel} className="red-text">Back</a>
            </div>
        </div>
    )
}

export class AppComment extends React.Component {
    constructor(props){
        super(props);
        this.state = { editing : props.editing || false, comment : props.comment }
    }
 
    onEdit = _ => this.setState({editing:true})
    onCancel = _ => this.setState({editing:false})
    onSave = _ => {
        this.setState({editing:false})
        this.props.edit(this.state.comment)
        
    } 
    onChange = (e) => { 
        const {name, value} = e.target
        this.setState(({comment}) => ({editing : true, comment: {...comment,[name] : value}}))
    } 
    onDelete = () => this.props.delComment(this.props.id) 
    onRate = () => this.props.rate(this.props.comment.id)

    render () {
        return (
            this.state.editing?
                <EditComment comment={this.state.comment} change={this.onChange} save={this.onSave} cancel={this.onCancel} />
                : <Comment comment={this.props.comment} edit={this.onEdit} del={this.onDelete} rate={this.onRate} /> 
        )
    }
}
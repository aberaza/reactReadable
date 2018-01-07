import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { timestamp2String } from '../utils/helpers'

import EditComment from './comment-edit'
import Comment from './comment-show'

export class AppComment extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            editing : props.editing || false, 
            isNew : props.isNew || false,
            comment : props.comment }
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
    onDelete = () => this.props.del(this.props.comment.id) 
    onLike = () => this.props.rate(this.props.comment.id)
    onDislike = () => this.props.rate(this.props.comment.id, 'downVote')

    render () {
        return (
            this.state.editing?
                <EditComment comment={this.state.comment} change={this.onChange} save={this.onSave} cancel={this.onCancel} isNew={this.state.isNew} />
                : <Comment comment={this.props.comment} edit={this.onEdit} del={this.onDelete} like={this.onLike} dislike={this.onDislike} /> 
        )
    }
}

AppComment.propTypes = {
    comment:PropTypes.object.isRequired,
    isNew:PropTypes.bool,
    editin:PropTypes.bool
}
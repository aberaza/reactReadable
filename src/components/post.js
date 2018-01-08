import  React  from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import $ from 'jquery'

import Post from './post-show'
import PostEdit from './post-edit'

import { serverAddPost, serverEditPost, serverDelPost, serverRatePost } from '../actions/posts' 
import { timestamp2String } from '../utils/helpers'

class MPost extends React.Component {
    componentDidMount(){
        $('select').material_select()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.categories !== this.props.categories){
            $('select').material_select()
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.post !== this.state.post){
            this.setState({post:nextProps.post})
        }
    }

    constructor(props, context){
        super(props, context);
        this.state = {
            editing:(props.editing || props.new || false),
            isNew : props.isNew || false,
            post : props.post,
            categories : props.categories
        }
    }

    onEditAndCancel = ()=> this.setState({editing: !this.state.editing})
    onSave = _ => { 
        this.setState({editing:false}); 
        let p = this.state.post;
        if (this.state.isNew) {
            p = {...p, category:$('.select-dropdown').val(), id: this.props.id}
            return this.props.serverAddPost(p)
        }
        return this.props.serverEditPost(p)         
    }
    onChange = (e) => {
        const {name, value} = e.target
        this.setState(({post})=>({editing:true, post : {...post,[name]:value}}))        
    }     
    onDelete = _=> this.props.serverDelPost(this.props.id).then(this.props.history.push('/')) 
    onLike = _=> this.props.serverRatePost(this.props.id)
    onDislike = _=> this.props.serverRatePost(this.props.id, 'downVote')

    render () {
        const { post, editing, isNew} = this.state;
        const {categories} = this.props
        return (editing? 
            <PostEdit post={post} isNew={isNew} categories={categories} onSave={this.onSave} onCancel={this.onEditAndCancel} onChange={this.onChange} /> 
            : <Post post={post} onEdit={this.onEditAndCancel} onDelete={this.onDelete} onLike={this.onLike} onDislike={this.onDislike} />
        )        
    }
}

MPost.propTypes = {
    id : PropTypes.string.isRequired
}

const mapStateToProps = ( {posts, categories}, { id }) => ({
    post : posts.find(p=>(p.id === id)) || {},
    categories
})

const mapDispatchToProps = {serverAddPost, serverEditPost, serverDelPost, serverRatePost }

export let AppPost = withRouter(connect(mapStateToProps, mapDispatchToProps)(MPost))
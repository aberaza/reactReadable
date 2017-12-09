import  React  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
//import 'materialize-css/dist/js/materialize.min.js'

import { addPost, delPost, ratePost } from '../actions/posts' 

import { timestamp2String } from '../utils/helpers'

function Post(props){
    const {id, title, body, timestamp, category, author, commentCount, voteScore } = props.post;

    return (
       <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff8093', height: '100px'}} alt=""/>
            
                <Link to={`/${category}/${id}`} className="card-title" style={{width:'100%'}} >
                    {title}    
                    <div className="badge right"> {voteScore} <i className="close material-icons">star</i></div>
                </Link>
                
                <a href="#!" onClick={()=>props.onRate(voteScore + 1)} className="btn-floating btn-large halfway-fab waves-effect waves-light red">
                    <i className="large material-icons">star_border</i>   
                </a>
                
            </div>
            <div className="card-stacked">
                <div className="chip"><img src={require("../imgs/fg-avatar-anonymous-user-retina.png")} alt="by" />by {author}</div> 
                <div className="chip">{`posted ${timestamp2String(timestamp)}`}</div> 
                <div className="chip">{`commented ${commentCount} times`}</div>
                <div className="card-content">
                    <p>{body}</p>
                </div>
            </div>
            <div className="card-action">
                <a href='#!' onClick={props.onDelete} className="right red-text"><i className="material-icons">delete</i></a>
                <a href="#!" onClick={props.onEdit} className="right blue-text"><i className="material-icons">edit</i></a>
            </div>
       </div>
    )
}

function PostEdit(props){
    const { post, categories, onChange } = props;
    const { title, body, author } = post;

    const change = (e,name)=>{
        onChange(e.target.name, e.target.value);
    }

    return (        
        <div className="card">
           <div className="card-image">
               <img src="//:0" style={{backgroundColor:'#ff90a3', height: '100px'}} alt=""/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <div className="row">
                        <div className="input-field">
                            <i className="material-icons prefix">title</i>
                            <input type="text" value={title || ""} onChange={change} id="title" name="title" />
                            <label className="active" for="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <i className="material-icons prefix">face</i>
                            <input type="text" value={author || "" } onChange={change} name="author" id="author"/>
                            <label className="active" for="author">Author</label>
                        </div>
                        <div className="input-field col s5">
                            <select>{ categories.map(cat => (<option value={cat.path}>{cat.name}</option>))}</select>
                            <label>Category select</label>
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
                <a href='#!' onClick={props.onSave} className="blue-text">Save</a>
                <a href='#!' onClick={props.onCancel} className="red-text">Back</a>
            </div>
       </div>
    )
}

class MPost extends React.Component {

    componentDidMount(){
        $('select').material_select()
    }

    constructor(props){
        super(props);
        this.state = {
            editing:(this.props.editing || this.props.new || false),
            new : this.props.new || false,
            post : props.post
        }
    }

    onEdit = ()=> this.setState({editing:true})
    onCancel = ()=> this.setState({editing:false})
    onSave = (post)=> { 
        this.props.addPost(post); 
        this.setState({editing:false, post}); 
    }
    onChange = (field, value) => this.setState(({post})=>({editing:true, post : {...post,[field]:value}}))
    onDelete = ()=> this.props.delPost(this.props.id)
    onRate = (rate)=> this.props.ratePost(this.props.id, rate)

    render () {
        //return content;
        return (this.state.editing? 
            <PostEdit post={this.state.post} categories={this.props.categories} onCancel={this.onCancel} onChange={this.onChange} /> 
            : <Post post={this.state.post} new={this.state.new} onEdit={this.onEdit} onDelete={this.onDelete} onRate={this.onRate} />
        )        
    }
}

const mapStateToProps = ( {posts, categories}, { id }) => ({
    post : posts.find(p=>(p.id === id)) || {},
    categories
})

const mapDispatchToProps = { addPost, delPost, ratePost }

export let AppPost = connect(mapStateToProps, mapDispatchToProps)(MPost)
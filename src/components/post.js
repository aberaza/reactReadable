import  React  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'

import { serverAddPost, serverEditPost, serverDelPost, serverRatePost } from '../actions/posts' 

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
    const { post, isNew=true, categories, onChange, onSave, onCancel } = props;
    const { title, body, author, category } = post;

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
                            <input type="text" value={title || ""} onChange={onChange} id="title" name="title" />
                            <label className="active" for="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <i className="material-icons prefix">face</i>
                            <input type="text" value={author || "" } disabled={!isNew} onChange={onChange} name="author" id="author"/>
                            <label className="active" for="author">Author</label>
                        </div>
                        <div className="input-field col s5">
                            <select id="categorySelect" onChange={onChange} defaultValue={categories[0].path}>{ categories.map(cat => (<option value={cat.path} key={cat.path} >{cat.name}</option>))}</select>
                            <label>Category select</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">edit</i>
                        <textarea name="body" value={body} onChange={onChange} placeholder="...type your thoughts" id="body" className="materialize-textarea"></textarea>
                        <label className="active" for="postBody">Post</label>
                    </div>
                </div>
            </div>
            
            <div className="card-action">
                <Link to='/' onClick={onSave} className="blue-text">Save</Link>
                <Link to='/' onClick={onCancel} className="red-text">Back</Link>
            </div>
       </div>
    )
}

class MPost extends React.Component {
    componentDidMount(){
        $('select').material_select()
    }

    componentDidUpdate(prevProps, prevState){
        console.dir(arguments)
        if(prevProps.categories !== this.props.categories){
            $('select').material_select()
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

    onEdit = ()=> this.setState({editing:true})
    onCancel = ()=> this.setState({editing:false})
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
    onDelete = _=> this.props.serverDelPost(this.props.id)
    onRate = _=> this.props.serverRatePost(this.props.id)

    render () {
        const { post, editing, isNew} = this.state;
        const {categories} = this.props
        return (editing? 
            <PostEdit post={post} isNew={isNew} categories={categories} onSave={this.onSave} onCancel={this.onCancel} onChange={this.onChange} /> 
            : <Post post={post} onEdit={this.onEdit} onDelete={this.onDelete} onRate={this.onRate} />
        )        
    }
}

const mapStateToProps = ( {posts, categories}, { id }) => ({
    post : posts.find(p=>(p.id === id)) || {},
    categories
})

const mapDispatchToProps = {serverAddPost, serverEditPost, serverDelPost, serverRatePost }

export let AppPost = connect(mapStateToProps, mapDispatchToProps)(MPost)
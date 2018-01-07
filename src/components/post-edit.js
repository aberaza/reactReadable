import  React  from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PostEdit(props){
    const { post, isNew=true, categories, onChange, onSave, onCancel } = props;
    const { title, body, author } = post;

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

PostEdit.propTypes = {
    post : PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    isNew : PropTypes.bool
}
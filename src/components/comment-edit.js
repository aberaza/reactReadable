import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function EditComment(props) {
    const { comment, change, save, cancel, isNew=false } = props;
    const { body="", author="" } = comment;

    return (
        <div className="card grey lighten-2">
            <div className="card-content">
                <div className="row">        
                    <div className="row">
                        <div className="input-field col s5">
                            <i className="material-icons prefix">face</i>
                            <input type="text" value={author} onChange={change} name="author" id="author" disabled={!isNew}/>
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
            <Route path="/:category/:id" render={({match})=>(
                <div className="card-action">
                    <Link to={`/${match.params.category}/${match.params.id}`} onClick={save} className="blue-text">Save</Link>
                    <Link to={`/${match.params.category}/${match.params.id}`} onClick={cancel} className="red-text">Back</Link>
                </div>
            )} />
        </div>
    )
}

EditComment.propTypes = {
    comment: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    isNew: PropTypes.bool

}
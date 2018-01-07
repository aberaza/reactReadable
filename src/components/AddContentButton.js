import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

function HelpOverlay(){
    return (
      <div className="tap-target" data-activates="addBtn">
        <div className="tap-target-content">
          <h5>Add a Post or Comment</h5>
          <p>Don't be shy and share your thoughts. Click here to add a new post or comment an existing one!</p>              
        </div>
      </div>
    )
  }
  
  export default function AddContentButton(){
    return (
    <div className="newContent">
    <div className="fixed-action-btn horizontal">
      <Switch>
        <Route exact path="/:category/:id" render={({location})=>( <Link to={`${location.pathname}/comment`} id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons pink">comment</i></Link>)} />
        <Route exact path="/:category/:id/comment" render={({location})=>( <Link to={`${location.pathname}/comment`} id="addBtn" className="btn-floating btn-large green modal-trigger disabled"><i className="large material-icons pink">comment</i></Link> )} />
        <Route path="/new" render={_=>(<a href="#!" id="addBtn" className="btn-floating btn-large blue modal-trigger disabled"><i className="large material-icons">add</i></a> )} />
        <Route exact path="/" render={_=>(<Link to="/new" id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons">add</i></Link>)} />
        <Route exact path="/:category" render={_=>(<Link to="/new" id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons">add</i></Link>)} />
      </Switch>
    </div>
    <HelpOverlay />
    </div>
    )
  }
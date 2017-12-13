import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import $ from 'jquery'

import { AppHeader } from './components/header';
import { AppPostList } from './components/postList'
import { AppPostDetails } from './components/postDetails'
import { AppPostEdit } from './components/postEdit'


import 'materialize-css/dist/css/materialize.min.css'
//import 'jquery/dist/jquery.min.js'
import 'materialize-css/dist/js/materialize.min.js'

class App extends Component {
  state = {
    sort:""
  }

  componentDidMount(){
    $('.tap-target').tapTarget('open');
  }

  changeSorting = ( sort ) => this.setState( (state) =>( {...state, sort }) );

  render() {
    return (
      <div className="App">
        <AppHeader onChangeSorting={this.changeSorting} />
        <div className="navigation"></div>
        <div className="categoriesList"></div>

        <Route exact path="/" render={()=>(<AppPostList sort={this.state.sort} />)} />
        <Route exact path="/new" render={_=>( <AppPostEdit />)} />
        <Route exact path="/:category" render={({match})=>(<AppPostList category={match.params.category} sort={this.state.sort} />)} />
        <Route path="/:category/:id" render={({match})=>(<AppPostDetails id={match.params.id} sort={this.state.sort} />)} />
        
        <div className="fixed-action-btn horizontal">
          <Switch>
            <Route exact path="/:category/:id" render={({location})=>( <Link to={`${location.pathname}/comment`} id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons pink">comment</i></Link> )} />
            <Route exact path="/:category/:id/comment" render={({location})=>( <Link to={`${location.pathname}/comment`} id="addBtn" className="btn-floating btn-large green modal-trigger disabled"><i className="large material-icons pink">comment</i></Link> )} />
            <Route path="/new" render={_=>(<a href="#!" id="addBtn" className="btn-floating btn-large blue modal-trigger disabled"><i className="large material-icons">add</i></a> )} />
            <Route exact path="/" render={_=>(<Link to="/new" id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons">add</i></Link>)} />
            <Route exact path="/:category" render={_=>(<Link to="/new" id="addBtn" className="btn-floating btn-large green modal-trigger"><i className="large material-icons">add</i></Link>)} />
          </Switch>
        </div>
        <div className="tap-target" data-activates="addBtn">
          <div className="tap-target-content">
            <h5>Add a Post or Comment</h5>
            <p>Don't be shy and share your thoughts. Click here to add a new post or comment an existing one!</p>              </div>
          </div>             
      </div>
    );
  }
}

export default App;

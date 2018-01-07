import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import $ from 'jquery'

import { AppHeader } from './components/header';
import { AppPostList } from './components/postList'
import { AppPostDetails } from './components/postDetails'
import { AppPostEdit } from './components/postEdit'
import { Error404 } from './components/Error404'



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

        <Switch>
          <Route exact path="/404" component={Error404} />
          <Route exact path="/" render={()=>(<AppPostList sort={this.state.sort} />)} />
          <Route exact path="/new" render={_=>( <AppPostEdit />)} />
          <Route exact path="/:category" render={({match})=>(<AppPostList category={match.params.category} sort={this.state.sort} />)} />
          <Route path="/:category/:id" render={({match})=>(<AppPostDetails id={match.params.id} sort={this.state.sort} />)} />                 
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

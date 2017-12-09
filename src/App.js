import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import { AppHeader } from './components/header';
import { AppPostList } from './components/postList'
import { AppPostDetails } from './components/postDetails'
import { AppPostEdit } from './components/postEdit'


import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

class App extends Component {
  state = {
    sort:""
  }

  

  changeSorting = ( sort ) => this.setState( (state) =>( {...state, sort }) );

  render() {
    return (
      <div className="App">
        <AppHeader onChangeSorting={this.changeSorting} />
        <div className="navigation"></div>
        <div className="categoriesList"></div>
        <Route exact path="/" render={()=>(<AppPostList sort={this.state.sort} />)} />
        <Route exact patch="/new" render={_=>( <AppPostEdit />)} />
        <Route exact path="/:category" render={({match})=>(<AppPostList category={match.params.category} sort={this.state.sort} />)} />
        <Route path="/:category/:id" render={({match})=>(<AppPostDetails id={match.params.id} sort={this.state.sort} />)} />
        <div className="fixed-action-btn horizontal">
          <Switch>
            <Route path="/:category/:id" render={_=>( <a href="#modal1" className="btn-floating btn-large green modal-trigger"><i className="large material-icons pink">comment</i></a> )} />
            <Route path="/" render={_=>(<a href="#modal1" className="btn-floating btn-large green modal-trigger"><i className="large material-icons">add</i></a>)} />
          </Switch>
           {/* <ul>
              <li><a href="" className="btn-floating blue"><i className="material-icons">publish</i></a></li>
              <li><a href="" className="btn-floating yellow"><i className="material-icons">publish</i></a></li>
              <li><a href="" className="btn-floating pink"><i className="material-icons">publish</i></a></li>          
            </ul>*/}
        </div>             

      </div>
    );
  }
}



export default App;

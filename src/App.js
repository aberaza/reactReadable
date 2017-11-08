import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { AppHeader } from './components/header';
import { AppPostList } from './components/postList'

import 'materialize-css/dist/css/materialize.min.css'
import 'jquery/dist/jquery.min'
import 'materialize-css/dist/js/materialize.min'

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="navigation"></div>
        <div className="categoriesList"></div>
        <AppPostList posts={this.state.posts}/>
      </div>
    );
  }
}



export default App;

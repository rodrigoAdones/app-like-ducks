import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import PostsArea from './components/PostsArea';

class App extends Component {
  constructor (props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = {};
  }

  loadData(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => Object.keys(response.data).map(index => response.data[index]))
    .then(data => {
      this.setState({
        posts: [].concat(data)
      });
    });
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    const showPosts = (this.state.posts ? <PostsArea {...this.state}/> : null);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Redux-Duck</h2>
        </div>
        <div className="App-intro">
          {showPosts}
        </div>
      </div>
    );
  }
}

export default App;

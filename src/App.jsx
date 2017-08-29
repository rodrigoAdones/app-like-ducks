import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
import api from './utils/api';

import store from './ducks/store';
import { initialLoad, removePost, up, down } from './ducks/modules/posts';

import PostsArea from './components/PostsArea';

class MainApp extends Component {
  constructor (props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.removePost = this.removePost.bind(this);
    this.upCounter = this.upCounter.bind(this);
    this.downCounter = this.downCounter.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  loadData(){
    api.posts.getAll()
    .then(response => Object.keys(response.data).map(index => ({ ...response.data[index], counter: 0 }) ))
    .then(data => {
      this.props.actions.initialLoad(data);
    });
  }

  removePost(index) {
    return () => this.props.actions.removePost(index);
  }

  upCounter(index) {
    return e => {
      e.preventDefault();
      this.props.actions.up(index)
    };
  }

  downCounter(index) {
    return e => {
      e.preventDefault();
      this.props.actions.down(index)
    };
  }

  render() {
    const showPosts = (this.props.posts ? <PostsArea onUp={this.upCounter} onDown={this.downCounter} onDelete={this.removePost} {...this.props}/> : null);
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

function mapStateToProps(state) {
  return {
    posts: state.posts 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ initialLoad, removePost, up, down }, dispatch)
  };
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(MainApp);

const App = () => <Provider store={store}><WrappedApp /></Provider>;

export default App;

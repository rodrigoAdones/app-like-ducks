import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import store from './redux/store';
import actions from './redux/actions';

import PostsArea from './components/PostsArea';

class MainApp extends Component {
  constructor (props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  loadData(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => Object.keys(response.data).map(index => response.data[index]))
    .then(data => {
      this.props.actions.initial(data);
    });
  }

  removePost(index) {
    return () => {this.props.actions.remove(index)};
  }

  render() {
    const showPosts = (this.props.posts ? <PostsArea onDelete={this.removePost} {...this.props}/> : null);
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
    actions: bindActionCreators(actions, dispatch)
  };
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(MainApp);

const App = props => <Provider store={store}><WrappedApp {...props} /></Provider>;

export default App;

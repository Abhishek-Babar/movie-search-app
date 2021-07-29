import logo from './logo.svg';
import './App.css';
import React , { Component, useRef } from 'react';
import axios from 'axios';
import Movie from './components/cards';
import Search from './components/searchBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }  
  }

  render() {
  return (
    <div className="App">
        < Search movieData={(data) => this.setState({data:data})}/>
        <div id="movie-wrap">
          {this.state.data.map(movie => (
        < Movie movieDetails={movie} />
  ))}
        </div>
        
    </div>
  );
  }
}

export default App;

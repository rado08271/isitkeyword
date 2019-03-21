import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import './components/faLib';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends Component {
  render() {
    return (
        <div className={"container"}>
            <div className={"in-center"}>
                <h1>Is it Keyword?</h1>
                <SearchBar/>
            </div>
        </div>
    )
  }
}

export default App;

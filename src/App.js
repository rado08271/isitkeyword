import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import './components/faLib';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './components/faLib'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        this.hoverHandler = this.hoverHandler.bind(this);

    }

    //TODO decide whether onClick or on hover...if on click toggle it through javaScript
    hoverHandler = (event) => {
        this.setState({clicked: !this.state.clicked});
        console.log(this.state);
    };

    render() {
        return (
            <div className={"container"}>
                <div className={"in-center"}>
                    {this.state.clicked ? toolTip : ""}
                    <h1>Is it Keyword<FontAwesomeIcon icon={['fas', 'question']} className={"question-icon"} onClick={this.hoverHandler}/></h1>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

const toolTip =
    <div className={"tooltip"}>
        <p>Write a keyword you think of. If it is a keyword, specific language will be shown.
            In case of case sensitive language, it will be shown in orange otherwise in green...
            Bear in mind it's just development build! Still in progress...feel free to cantact
            me <a className={"contact"} href={"meilto:contact@rafig.eu"}>contact@rafig.eu</a></p>
    </div>

export default App;

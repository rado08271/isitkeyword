import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';
import './SearchBar.css'
import KeyWordList from './KeyWordList'


class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            out: false,
            lang: [""]
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }


    handleInput = (event) => {
        let input = event.target.value;
        this.setState({input, out: false});
    }


    submit = (event) => {
        event.preventDefault();
        console.log("submitted");
    }

    render(){
        return (
            <div className={"container"}>
              <span className={"input-field"}>
                <form className={"form-field"} onSubmit={this.submit}> {/*never call function for doing it once just pass!!!*/}
                    <input className={"input-in"} value={this.state.input} type={"text"} name={"keyword"} placeholder={"for catch,..."} onChange={this.handleInput}/>
                    <button className={"button-fa"} type={"submit"}><FontAwesomeIcon icon={['fas', 'search']} className={"search-icon"}/></button>
                </form>
              </span>
              <KeyWordList input={this.state.input}/>

            </div>
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';
import keyword from './Keyword';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            out: false,
            langs: [""]
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }


    handleInput = (event) => {
        let input = event.target.value;
        this.setState({input, out: false});
        // console.log(input);
    }

    iterateField = (string) => {
        for (let x = 0; x < string.length; x++){
            console.log(string[x] + " and is " + this.state.input)
            if(this.state.input === string[x]){
                this.setState({out:true});
                return true;
            }else {
                // this.setState({out:false});
            }
        }
        return false;
    }

    submit = (event) => {
        // console.log("well you wrote " + this.state.input);
        event.preventDefault();
        var langs = [""];
        if(this.iterateField(keyword.java)){
            langs.push("java ")
        }
        if (this.iterateField(keyword.kotlin)) {
            langs.push("kotlin ");
        }
        if(this.iterateField(keyword.c)) {
            langs.push("c ");
        }

        this.setState({langs});

        console.log(langs);
        console.log(this.state);
    }

    render(){
        return (
            <div className={"container"}>
              <span className={"inputField"}>
                <form className={"formField"} onSubmit={this.submit}> {/*never call function for doing it once just pass!!!*/}
                    <input className={"inputIn"} value={this.state.input} type={"text"} name={"username"} placeholder={"catch,..."} onChange={this.handleInput}/>
                    <button type={"submit"}><FontAwesomeIcon icon={['fas', 'search']} /></button>
                </form>
              </span>
                {this.state.out ? <p>Yes <b>{this.state.input}</b> is a keyword in <i>{this.state.langs}</i></p> : <p>It's not a keyword</p> }
            </div>

        );
    }
}

export default SearchBar;
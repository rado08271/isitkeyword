import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';
import Keyword from './Keyword';
import './SearchBar.css'

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
            // console.log(string[x] + " and is " + this.state.input)
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
        if(this.iterateField(Keyword.c)){
            langs.push("c");
        }
        if(this.iterateField(Keyword.cpp)){
            langs.push("c++");
        }
        if(this.iterateField(Keyword.csharp)){
            langs.push("c#");
        }
        if(this.iterateField(Keyword.dart)){
            langs.push("dart");
        }
        if(this.iterateField(Keyword.erlang)){
            langs.push("erlang");
        }
        if(this.iterateField(Keyword.go)){
            langs.push("go");
        }
        if(this.iterateField(Keyword.java)){
            langs.push("java");
        }
        if(this.iterateField(Keyword.javascript)){
            langs.push("javascript");
        }
        if(this.iterateField(Keyword.kotlin)){
            langs.push("kotiln");
        }
        if(this.iterateField(Keyword.php)){
            langs.push("php");
        }
        if(this.iterateField(Keyword.python)){
            langs.push("python");
        }
        if(this.iterateField(Keyword.ruby)){
            langs.push("ruby");
        }
        if(this.iterateField(Keyword.rust)){
            langs.push("rust");
        }
        if(this.iterateField(Keyword.sql)){
            langs.push("sql");
        }
        if(this.iterateField(Keyword.swift)){
            langs.push("swift");
        }
        if(this.iterateField(Keyword.typescript)){
            langs.push("typescript");
        }

        this.setState({langs});

        // console.log(langs);
        // console.log(this.state);
        // langs.forEach((x) => {console.log(x + "\n");});
    }

    render(){
        return (
            <div className={"container"}>
              <span className={"input-field"}>
                <form className={"form-field"} onSubmit={this.submit}> {/*never call function for doing it once just pass!!!*/}
                    <input className={"input-in"} value={this.state.input} type={"text"} name={"keyword"} placeholder={"for catch,..."} onChange={this.handleInput}/>
                    <button className={"button-fa"} type={"submit"}><FontAwesomeIcon icon={['fas', 'search']} className={"search-icon"} /></button>
                </form>
              </span>

              {this.state.out ? <p>Yes <b>{this.state.input}</b> is a keyword in <i>{this.state.langs}</i></p> : <p>No it' not a keyword</p> }
            </div>
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';

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
        this.setState({input});
        // console.log(input);
    }

    iterateField = (string) => {
        for (let x = 0; x < string.length; x++){
            // console.log(string[x]);
            if(this.state.input === string[x]){
                this.setState({out:true});
                return true;
            }else {
                this.setState({out:false});
            }
        }
        return false;
    }

    submit = (event) => {
        // console.log("well you wrote " + this.state.input);
        event.preventDefault();
        var langs = [""];
        if(this.iterateField(keyword.java)){
            langs.push("java")
        }
        if (this.iterateField(keyword.kotlin)) {
            langs.push("kotlin");
        }
        if(this.iterateField(keyword.c)) {
            langs.push("c");
        }

        this.setState({langs});

        console.log(this.state.langs);
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
                {this.state.out ? <p>Yes <b>{this.state.input}</b> is a keyword in {this.state.langs.forEach((x) => console.log(x))}</p> : <p>It's not a keyword</p> }
            </div>

        );
    }
}

var keyword = {
    java :
        ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "default", "do", "double", "else", "enum", "exports", "extends", "final", "finally", "float", "for", "if", "implements", "import", "instanceof", "int", "interface", "long", "module", "native", "new", "package", "private", "protected", "public", "requires", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while", "true", "null", "false"] ,
    kotlin :
        ["actual", "abstract", "annotation", "companion", "const", "crossline", "data", "enum", "expect", "external", "final", "infix", "inline", "inner", "internal", "lateinit", "noinline", "open", "operator", "out", "override", "private", "protected", "public", "reified", "sealed", "suspend", "tailrec", "vararg"],
    c :
        ["auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else", "enum", "extern", "float", "for", "goto", "if", "inline", "int", "long", "register", "restrict", "return", "short", "signed", "sizeof", "static", "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while"]
}

export default SearchBar;
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';
import './SearchBar.css'
import './CheckBox.css'
import KeyWordList from './KeyWordList'
// import CheckBox from './CheckBox';
import KeywordData from '../data/objects.json';


class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            out: false,
            lang: [""],
            field : [1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }


    handleInput = (event) => {
        let input = event.target.value;
        this.setState({input, out: false});
    };


    submit = (event) => {
        event.preventDefault();
        // console.log("submitted");
    };

    changeValue = (index) => {
        var field = this.state.field;
        if(field[index]){
            field[index] = 0;
        }else {
            field[index] = 1;
        }
        this.setState({field})
    };

    render(){
        return (
            <div className={"container-sb"}>
              <span className={"input-field"}>
                <form className={"form-field"} onSubmit={this.submit}> {/*never call function for doing it once just pass!!!*/}
                    <input className={"input-in"} value={this.state.input} type={"text"} name={"keyword"} placeholder={"for catch,..."} onChange={this.handleInput}/>
                    <button className={"button-fa"} type={"submit"}><FontAwesomeIcon icon={['fas', 'search']} className={"search-icon"}/></button>
                </form>
              </span>
              <KeyWordList input={this.state.input} field={this.state.field}/>
              <div className={"checkBoxes"}>
                {KeywordData.map((value, index) => (
                        <div className={this.state.field[index] ? "shown" : "hidden"}>
                            <label htmlFor={index}>{value.name}</label>
                            <input type={"checkbox"} id={index} onChange={ (e) => (this.changeValue(index)) } checked={this.state.field[index] ? "yes" : ""} className={"pickLang"}/>
                        </div>
                    )
                )}
              </div>
            </div>
        );
    }
}

export default SearchBar;
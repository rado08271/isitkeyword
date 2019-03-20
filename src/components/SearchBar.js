import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            out: false,
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);

    }

    handleInput = (event) => {
        let input = event.target.value;
        this.setState({input});
        console.log(input);
    }

    submit = (event) => {
        console.log("well you wrote " + this.state.input);
        event.preventDefault();
        if(this.state.input === "catch"){
            this.setState({out:true});
        }
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
                {this.state.out ? <p>{this.state.input}</p> : <p>It's not word</p> }
            </div>

        );
    }
}
//
// // const field = () => {
// //     var shit = ['catch', 'try', 'throw'];
// // };


export default SearchBar;
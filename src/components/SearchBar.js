import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './faLib';

class SearchBar extends Component {
    render(){
        return (
          <div className={"container"}>
              <span className={"inputField"}>
                <form className={"formField"} action={"#"}>
                    <input className={"inputIn"} type={"text"} placeholder={"catch,..."}/>
                    <button type={"submit"}><FontAwesomeIcon icon={['fas', 'search']} /></button>
                </form>
              </span>
          </div>

        );
    }
}

export default SearchBar;
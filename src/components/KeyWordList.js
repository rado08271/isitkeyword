import React, {Component} from 'react';
import KeywordData from '../data/objects.json';
import './KeyWordList.css';

const OPTIONS = [0,0,0,0,0,0,0,0,0,0];

class KeyWordList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkboxes : OPTIONS.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            )
        };
    }

    render(){
        return (
            <div className={"keyword-container"}>
                {KeywordData.map((obj, index) => {
                    var x;
                    for (x in obj.keywords){
                        if(obj.keywords[x].toUpperCase() === this.props.input.toUpperCase()){               //ignorecase
                            if(obj.keywords[x] !== this.props.input && obj.sensitive){                      //is casesensitive
                                return <p className={"case-sensitive-error"}>{obj.name}</p>
                            }else {
                                return <p className={"to-output"}>{obj.name}</p>
                            }
                        }
                    }
                    return false;
                })}
            </div>
        )
    }
}

export default KeyWordList;
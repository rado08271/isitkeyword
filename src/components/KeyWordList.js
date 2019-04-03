import React, {Component} from 'react';
import KeywordData from '../data/objects.json';
import './KeyWordList.css';

class KeyWordList extends Component {

    render(){
        return (
            <div className={"keyword-container"}>
                {KeywordData.map((obj, index) => {
                    if(this.props.field[index] === 1){
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
                    }
                })}
            </div>
        )
    }
}

export default KeyWordList;
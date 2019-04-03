import React, { Component } from 'react';
import KeywordData from '../data/objects.json';

//FIXME recreate it to send data through ContextAPI between components
//TODO rearrange project to use OontextAPI for component principles...
//Problem is that i do not want to use it inside SearchBar but inside main App class..
//But that way I won't be able to manipulate state in this class...
class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
                 //  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
            field : [1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
        };
        // this.changeValue = this.changeValue.bind(this);
    }

    changeValue = (index) => {
        var field = this.state.field;
        if(field[index]){
            field[index] = 0;
        }else {
            field[index] = 1;
        }
        this.setState({field})
    };

    //provide field to keyWordList
    render(){
        return (
            <div>
                {KeywordData.map((value, index) => (
                        <div className={this.state.field[index] ? "shown" : "hidden"}>
                            <label htmlFor={index}>{value.name}</label>
                            <input type={"checkbox"} id={index} onChange={ (e) => (this.changeValue(index)) }/>
                            {/*{console.log(this.state.field  + "   " + actualState++)}*/}
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default CheckBox;

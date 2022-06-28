import React, {Component} from "react";

export class RegisterForm extends Component {
    state = {}

    render(){
        return(
            <form>
                <label>
                    Name <input type='text' ></input>
                </label>
                <label>
                    Tell <input type='text'></input>
                </label>
                <p>What your level:</p>
                <label>
                    Junior <input type="radio"></input>
                </label>
                <label>
                    Midle <input type="radio"></input>
                </label>
                <label>
                    Senior <input type="radio"></input>
                </label>
                <label>
                    Licence <input type="checkbox"></input>
                </label>
                <button type="submit">submit</button>
                
            </form>
        )
    }
}
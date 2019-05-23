import React, { Component } from "react";


export default class Mentor extends Component {
    constructor(props) {
        super(props) 
    }

   

    render() {
        return(
            <div>
                <button onClick={() =>this.props.answerQuestion()}>Delete Question</button>
            </div>
        )
    }
}

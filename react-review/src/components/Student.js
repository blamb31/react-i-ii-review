import React, {Component} from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: ''
        }
    }

    handleChange (input) {
        this.setState({
            question: input
        })

    }

    askQuestion() {
        this.props.askQuestion(this.state.question)
        this.setState({
            question: ''
        })
    }

    render() {
        return(
            <div>
                <h3>Student</h3>
                <input value={this.state.question} placeholder="What is your question?" onChange={ (event) => this.handleChange(event.target.value)}></input>
                <button onClick={() => this.askQuestion()}>Ask</button>
            </div>
        )
    }
}
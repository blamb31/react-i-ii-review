import React, { Component } from "react";

import Student from './Student'
import Mentor from './Mentor'

export default class Queue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    this.askQuestion = this.askQuestion.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    

  }
  askQuestion(newQuestion) {
    const questions = [...this.state.questions, newQuestion];
    this.setState({ questions });
  }

  answerQuestion() {
    let questions = this.state.questions
    questions.splice(questions.length-1, 1)
    this.setState({
      questions
    })
  }
  

  render() {
      return(
        <div className="queue-container">
          <h1>The Queue</h1>
          <h3>{this.state.questions.length}</h3>
          <h3>questions need answers</h3>
          <Student askQuestion={this.askQuestion} />
          <Mentor answerQuestion={this.answerQuestion} />
         
        </div>
      )
  }
}
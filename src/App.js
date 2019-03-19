import React, {Component} from 'react';
import './App.css';
import StudentContainer from './components/StudentContainer'
import TeamContainer from './components/TeamContainer'
import Filter from './components/Filter'
import {getGryffindor} from './endpoints'

class App extends Component {
  state = {
    allStudents: [],
    team: [],
    userInput: ""
  }

  // *** Below is the edit form submit handler function!! ***

  // We are creating a new array for both allStudents and team
  // We create each array using if statements
  // We only change the student that we are editing in our edit form
  // We then pass this function aaaaaaaaall the way down to the Card

  handleSubmit = (studentData) => {
    const newStudentArray = [...this.state.allStudents].map(student => {
      if(student._id === studentData._id){
        return studentData
      } else {
        return student
      }
    })

    const newTeamArray = [...this.state.team].map(student => {
      if(student._id === studentData._id){
        return studentData
      } else {
        return student
      }
    })

    this.setState({
      allStudents: newStudentArray,
      team: newTeamArray
    })

    // NOTE: This is one of the places you could do a PATCH request
  }

  componentDidMount(){
    fetch(getGryffindor)
    .then(res => res.json())
    .then(students => this.setState({
      allStudents: students[0].members,
    }))
  }

  handleAdd = (studentData) => {
    const newStudentArray = this.state.allStudents.filter(student => student._id !== studentData._id)
    const newTeamArray = [studentData, ...this.state.team]

    this.setState({
      allStudents: newStudentArray,
      team: newTeamArray
    })
  }

  handleRemove = (studentData) => {
    const newStudentArray = [studentData, ...this.state.allStudents]
    const newTeamArray = this.state.team.filter(student => student._id !== studentData._id)

    this.setState({
      allStudents: newStudentArray,
      team: newTeamArray
    })
  }

  handleOnChange = (event) => {
    const userInput = event.target.value

    this.setState({
      userInput: userInput
    })

    // 1. create copies of our arrays i.e. more keys in state
    // in here we would setState and change the filtered arrays in state
  }

  filterAnArray = (array) => {
    if(this.state.userInput === ""){
      return array
    } else {
      return [...array].filter(student => student.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render(){
    // 2. On render, use filterAnArray helper function to apply a filter to the arrays

    return (
      <div id="character-container">
        <Filter handleOnChange={this.handleOnChange} userInput={this.state.userInput}/>
        <StudentContainer
        handleSubmit={this.handleSubmit} handleToggle={this.handleAdd} students={this.filterAnArray(this.state.allStudents)}/>
        <TeamContainer
        handleSubmit={this.handleSubmit} handleToggle={this.handleRemove} students={this.filterAnArray(this.state.team)}/>
      </div>
    )
  }
}

export default App;

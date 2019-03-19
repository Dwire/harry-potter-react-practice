import React, {Component} from 'react';
import StudentDetail from './StudentDetail'
import EditForm from './EditForm'

class Card extends Component {
  state = {
    showEditForm: false
  }

  handleEditButton = () => {
    this.setState({
      showEditForm: !this.state.showEditForm
    })
  }

  // *** We pass the below function down to EditForm ***

  handleSubmitButtonClick = (newName) => {
    // First create a studentData object
    // We will need the ID in our handleSubmit function in the App component
    // The newName argument is coming from the EditForm - it is the user input from the form

    const newStudentData = {
      _id: this.props.studentData._id,
      name: newName
    }

    // This is where we use the handleSubmit function that we defined in the App component
    this.props.handleSubmit(newStudentData)

    // We toggle back to the StudentDetail view
    this.setState({
      showEditForm: !this.state.showEditForm
    })

    // NOTE: This is one of the places you could do a PATCH request
  }

  render(){
    const studentDetail = <StudentDetail handleEditButton={this.handleEditButton} handleToggle={this.props.handleToggle} studentData={this.props.studentData}/>

    const editForm = <EditForm
    studentData={this.props.studentData}
    handleSubmitButtonClick={this.handleSubmitButtonClick}
    handleSubmit={this.props.handleSubmit}/>

    return (
      <div id="character-card">
        {
          this.state.showEditForm ? editForm : studentDetail
        }
      </div>
    )
  }
}

export default Card;

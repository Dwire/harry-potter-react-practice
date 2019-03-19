import React, {Component} from 'react';

class EditForm extends Component {
  state = {
    newName: ""
  }

  handleEditOnChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  render(){
    return (
      <div>
        <p>Name: <input type="text" value={this.state.newName} onChange={this.handleEditOnChange} /> </p>
        <button onClick={() => this.props.handleSubmitButtonClick(this.state.newName)}>Submit</button>
      </div>
    )
  }
}

export default EditForm

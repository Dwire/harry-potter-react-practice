import React from 'react';
import Card from './Card';

const StudentContainer = (props) => {
  const cardArray = props.students.map(student => <Card key={student._id} handleSubmit={props.handleSubmit} handleToggle={props.handleToggle} studentData={student}/>)

  return (
    <div id="character-list">
      {cardArray}
    </div>
  )
}

export default StudentContainer;

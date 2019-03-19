import React from 'react';
import Card from './Card';

const TeamContainer = (props) => {
  const cardArray = props.students.map(student => <Card key={student._id} handleSubmit={props.handleSubmit} handleToggle={props.handleToggle} studentData={student}/>)

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {cardArray}
    </div>
  )
}

export default TeamContainer;

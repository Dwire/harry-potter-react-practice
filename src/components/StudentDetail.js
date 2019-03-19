import React from 'react';

const StudentDetail = (props) => {
  return (
    <div>
      <p>{props.studentData.name}</p>
      <button onClick={() => props.handleToggle(props.studentData)}>Toggle</button>
      <button onClick={props.handleEditButton}>Edit</button>
    </div>
  )
}

export default StudentDetail

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid' // GROSS
import Form from './Form'
import TeamMember from './TeamMember'

import './App.css';


const initialTeamMembersList = [
  {
    id: uuid(),
    fName: 'Carles',
    lName: 'Puyol',
    position: 'CB',
    height: `6' 0"`,
    number: '5',
    captain: true,
  },
]

const initialFormValues = {
  fName: '',
  lName: '',
  position: '',
  height: ``,
  number: '',
  captain: 'no',
}


const App = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembersList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [memberToEdit, setMemberToEdit] = useState({})

  const onInputChange = evt => {
    // 🔥 STEP 4 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    const inputName = evt.target.name
   // either 'username' or 'email'
    // b) pull the value of the input from the event object
    const inputValue = evt.target.value
 // who knows, the current value
    // c) set a new state for the whole form // ARGH
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newTeamMember = {
      id: uuid(),
      fName: formValues.fName,
      lName: formValues.lName,
      position: formValues.position,
      height: formValues.height,
      captain: formValues.captain === 'no' ? false : true
    }

    setTeamMembers(
      [ ...teamMembers, newTeamMember ]
    )
    setFormValues(initialFormValues)

  }

    const editMember = evt => {
      setMemberToEdit(memberToEdit)
    }


  return (
    <div className='container'>
    <header><h1>Team Members App</h1></header>
 

    <Form
      // 🔥 STEP 2 - THE FORM WANTS ITS FOOD!!!!
      // check implementation of FriendForm
      // to see what props it expects
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      memberToEdit={memberToEdit}
    />
       <div className='playerCard'>
   {
      teamMembers.map(teamMember => {
        return (
          <TeamMember key={teamMember.id} details={teamMember} memberToEdit={memberToEdit} editMember={editMember} setMemberToEdit={setMemberToEdit}/>
        )
      })
    }
    </div>
  </div>
  )
}

export default App;

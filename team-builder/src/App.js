import React, { useState } from 'react';
import { v4 as uuid } from 'uuid' // GROSS
import Form from './Form'
import logo from './logo.svg';
import './App.css';


const initialTeamMembersList = [
  {
    id: uuid(),
    fName: 'First Name',
    lName: 'Last Name',
    position: 'Position',
    height: 'Height',
    number: 'Number',
    allStar: false,
  },
]

const initialFormValues = {
  fName: '',
  lName: '',
  position: '',
  height: '',
  number: '',
  allStar: 'no',
}


const App = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembersList)
  const [formValues, setFormValues] = useState(initialFormValues)

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


  return (
    <div className='container'>
    <header><h1>Team Members App</h1></header>
    {/* {
      teamMembers.map(teamMember => {
        return (
          <TeamMember key={teamMember.id} details={teamMember} />
        )
      })
    } */}

    <Form
      // 🔥 STEP 2 - THE FORM WANTS ITS FOOD!!!!
      // check implementation of FriendForm
      // to see what props it expects
      values={formValues}
      onInputChange={onInputChange}
    />
  </div>
  )
}

export default App;

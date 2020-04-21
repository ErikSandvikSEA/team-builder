import React from 'react'

function Form(props) {
     // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!
     const {
          values,
          onInputChange,
          onSubmit,
     } = props

     return (
          <div>
               <form className='friend container'>
                    <h2>Team Member Form</h2>
                    {/* ////////// TEXT INPUTS ////////// */}
                    <label>First Name:&nbsp;
       <input
                              // 🔥 STEP 3A - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                              // Inputs render what they're told
                              // Their current value ultimately comes from app state
                              // At each keystroke, a change handler should fire
                              value={values.fName}
                              onChange={onInputChange}
                              name='fName'
                              type='text'
                         /></label>

                    <label>Last Name:&nbsp;
       <input
                              // 🔥 STEP 3A - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                              // Inputs render what they're told
                              // Their current value ultimately comes from app state
                              // At each keystroke, a change handler should fire
                              value={values.lName}
                              onChange={onInputChange}
                              name='lName'
                              type='text'
                         /></label>

                    <label>Position:&nbsp;
       <input
                              // 🔥 STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                              value={values.position}
                              onChange={onInputChange}
                              name='position'
                              type='text'
                         /></label>

                    <label>Height:&nbsp;
       <input
                              // 🔥 STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                              value={values.height}
                              onChange={onInputChange}
                              name='height'
                              type='text'
                         /></label>

                    {/* ////////// DROPDOWN ////////// */}
                    <label>Captain&nbsp;
       <select
                              // very similar to inputs of type text
                              value={values.captain}
                              onChange={onInputChange}
                              name='captain'
                         >
                              <option value='no'>Not Voted as a Captain</option>
                              <option value='yes'>Voted as a Captain</option>
                         </select></label>

               <button onClick={onSubmit}>
                         Add Member
               </button>
               </form>
             
          </div>
     )
}

export default Form
import React from 'react'

function TeamMember({ details }) {
  if (!details) {
    return <h3>Working fetching your team member&apos;s details...</h3>
  }
  return (
    <div className='teamMember container'>
      <h2>{details.fName} {details.lName}</h2>
      <p>Position: {details.position}</p>
      <p>Position: {details.height}</p>

      <p>Captain: {details.captain ? 'Yes' : 'No'}</p>

      
    </div>
  )
}

export default TeamMember

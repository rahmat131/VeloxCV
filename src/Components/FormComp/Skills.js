import React from 'react'
import './Skills.css'

function Skills(
 { handleChange,
  technicalSkills,
  languages
}) {
  return (
    <div className='Box'>
     <label id='labelHeading'>Skills</label>
        <div><input type="text" name="technicalSkills" placeholder="Technical Skills" value={technicalSkills} onChange={handleChange} required/></div>
        <div><input type="text" name="languages" placeholder="Languages"value={languages} onChange={handleChange} required/></div>
    </div>
  )
}

export default Skills
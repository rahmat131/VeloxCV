import React from 'react'

function Experience({
  experiences,
  index,
  handleExperienceChange,
  handlePresentCheckboxChange,
  handleDescriptionChange,
  experienceCount,
  handleExperienceCountChange,
  addDescriptionField,
}) {
  return (
    <div className='Box'>
      <label id='labelHeading'>Number of Experiences</label>
      <div><input type="number" name="experienceCount" min="1" placeholder="Number of Experience" value={experienceCount} required onChange={handleExperienceCountChange} /></div>

      {experiences.map((experience, index) => (
      <div key = {index}>

        <label >Experience - {index + 1}</label>
                 <div><input type="text" name="company" placeholder="Comapny Name"value={experience.company} onChange={(e) => handleExperienceChange(index, e)} required/></div>
                 <div><input type="text" name="designation" placeholder="Designation"value={experience.designation} onChange={(e) => handleExperienceChange(index, e)} required/></div>
                 <div><input type="text" name="city" placeholder="City"value={experience.city} onChange={(e) => handleExperienceChange(index, e)} required/></div>
                 <div><input type="text" name="country" placeholder="Country"value={experience.country} onChange={(e) => handleExperienceChange(index, e)} required/></div>
                <div>
                  <label>From: </label>
                  <input type="date" name="from" placeholder="From"value={experience.from} onChange={(e) => handleExperienceChange(index, e)} required />
                </div>

                {/* Till Date or Present */}
                <div >
                  <label>Till: </label>
                  {!experience.isPresent && (
                    <input type="date" name="till" value={experience.till} onChange={(e) => handleExperienceChange(index, e)} required={!experience.isPresent}/>)}
                 <div className='CB'>
                  <label>Present:</label>
                    <input type="checkbox" placeholder="Present"checked={experience.isPresent} onChange={(e) => handlePresentCheckboxChange(index, 'experience', e)}/>
                 </div>
                 
                  
                </div>

                <div>
                  {experience.description.map((desc, descIndex) => (
                    <div key={descIndex}>
                      <input type="text" value={desc} placeholder="Description (ONE LINE)" onChange={(e) => handleDescriptionChange(index, descIndex, 'experience', e)} required/>
                    </div>
                  ))}
                  <button type="button" onClick={() => addDescriptionField(index, 'experience')}>
                    New Line
                  </button>
                </div>
                </div>))}
    </div>
  )
}

export default Experience
import React from 'react'

function Education({
    educations,
  handleEducationChange,
  handlePresentCheckboxChange,
  handleDescriptionChange,
  addDescriptionField,
  handleEducationCountChange,
  educationCount
  }) {
  return (
      <div className='Box'>
        <label id='labelHeading'>Number of Education</label>

    <div><input type="number" name="educationCount" min="1" value={educationCount} onChange={handleEducationCountChange} required/></div>
    {educations.map((education, index) => (
<div key = {index}>
        <label >Education - {index + 1}</label>
                <div><input type="text" name="institute" placeholder="Institute Name"value={education.institute} onChange={(e) => handleEducationChange(index, e)} required/></div>
                <div><input type="text" name="city" placeholder="City"value={education.city} onChange={(e) => handleEducationChange(index, e)} required/></div>
                <div><input type="text" name="country" placeholder="Country" value={education.country} onChange={(e) => handleEducationChange(index, e)} required/></div>
                <div>
                  <label>From: </label>
                  <input type="date" name="from" value={education.from} onChange={(e) => handleEducationChange(index, e)} required/>
                </div>

                {/* Till Date or Present for Education */}
                <div>
                  <label>Till: </label>
                  {!education.isPresent && (<input type="date" name="till" value={education.till} onChange={(e) => handleEducationChange(index, e)} required={!education.isPresent}/>)}
                  <div className='CB'>
                  <label>Present:</label>
                    <input type="checkbox" checked={education.isPresent} onChange={(e) => handlePresentCheckboxChange(index, 'education', e)}/>
                  </div>
                  </div>

                <div>
                  {education.description.map((desc, descIndex) => (
                      <div key={descIndex}>
                      <input type="text" value={desc} placeholder="description (ONE LINE)"onChange={(e) => handleDescriptionChange(index, descIndex, 'education', e)} required/>
                    </div>
                  ))}
                  <button type="button" onClick={() => addDescriptionField(index, 'education')}>
                    Add More Bullet Points
                  </button>
                </div>
   
                </div>
                ))}
    </div>
  )
}

export default Education
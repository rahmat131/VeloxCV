import React from 'react'

function AddSection({
  sections,
  index,
  handleSectionChange,
  handlePresentCheckboxChange,
  handleDescriptionChange,
  sectionCount,
  handleSectionCountChange,
  addDescriptionField,
}) {
return (
  <div className='Box'>
    <label id='labelHeading'>Add New Section</label>
    <div><input type="number" name="sectionCount"  placeholder="Number of Sections" value={sectionCount}  onChange={handleSectionCountChange} /></div>

    {sections.map((section, index) => (
    <div key = {index}>

      <label >Section - {index + 1}</label>
               <div><input type="text" name="title" placeholder="Title"value={section.title} onChange={(e) => handleSectionChange(index, e)}required /></div>
               <div><input type="text" name="heading" placeholder="Heading"value={section.heading} onChange={(e) => handleSectionChange(index, e)} /></div>
               <div><input type="text" name="subheading" placeholder="Sub Heading"value={section.subheading} onChange={(e) => handleSectionChange(index, e)} /></div>
               <div><input type="text" name="city" placeholder="City"value={section.city} onChange={(e) => handleSectionChange(index, e)} /></div>
               <div><input type="text" name="country" placeholder="Country"value={section.country} onChange={(e) => handleSectionChange(index, e)} /></div>
              <div>
                <label>From: </label>
                <input type="date" name="from" placeholder="From"value={section.from} onChange={(e) => handleSectionChange(index, e)}  />
              </div>

              {/* Till Date or Present */}
              <div >
                <label>Till: </label>
                {!section.isPresent && (
                  <input type="date" name="till" value={section.till} onChange={(e) => handleSectionChange(index, e)} 
                  // required={!section.isPresent}
                  />)}
               <div className='CB'>
                <label>Present:</label>
                  <input type="checkbox" placeholder="Present"checked={section.isPresent} onChange={(e) => handlePresentCheckboxChange(index, 'section', e)}/>
               </div>
               
                
              </div>

              <div>
                {section.description.map((desc, descIndex) => (
                  <div key={descIndex}>
                    <input type="text" value={desc} placeholder="Description (ONE LINE)" onChange={(e) => handleDescriptionChange(index, descIndex, 'section', e)} />
                  </div>
                ))}
                <button type="button" onClick={() => addDescriptionField(index, 'section')}>
                  New Line
                </button>
              </div>
              </div>))}
  </div>
)
}

export default AddSection
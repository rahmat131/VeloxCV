import React from 'react'

function PersonalInfo({ formData, handleChange }) {
  return (
    <div className='Box'>
        <label id='labelHeading'>Personal Information</label>
            <div><input type="text" name="firstName" placeholder="First Name" value={formData.firstName} required onChange={handleChange} /></div>
            <div><input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} required onChange={handleChange} /></div>
            <div><input type="email" name="email" placeholder="E-Mail" value={formData.email} required onChange={handleChange} /></div>
            <div><input type="phone" name="phone" placeholder="Phone" value={formData.phone} required onChange={handleChange} /></div>
            <div className='cc'><input type="text" name="city" placeholder="City" value={formData.city} required onChange={handleChange} /></div>
            <div className='cc'><input type="text" name="country" placeholder="Country" value={formData.country} required onChange={handleChange} /></div>
      </div>
  )
}

export default PersonalInfo
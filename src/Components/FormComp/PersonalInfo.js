// import React from 'react'
// import './PersonalInfo.css'

// function PersonalInfo({ formData, handleChange }) {
//   return (
//     <div className='Box'>
//         <label id='labelHeading'>Personal Information</label>
//             <div><input type="text" name="firstName" placeholder="First Name" value={formData.firstName} required onChange={handleChange} /></div>
//             <div><input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} required onChange={handleChange} /></div>
//             <div><input type="email" name="email" placeholder="E-Mail" value={formData.email} required onChange={handleChange} /></div>
//             <div><input type="phone" name="phone" placeholder="Phone" value={formData.phone} required onChange={handleChange} /></div>
//             <div className='cc'><input type="text" name="city" placeholder="City" value={formData.city} required onChange={handleChange} /></div>
//             <div className='cc'><input type="text" name="country" placeholder="Country" value={formData.country} required onChange={handleChange} /></div>
//       </div>
//   )
// }

// export default PersonalInfo

// import React, { useState } from 'react';
// import './PersonalInfo.css';

// function PersonalInfo({ formData, handleChange }) {
//   // State to handle links
//   const [links, setLinks] = useState([]);

//   // Function to add a new link input field
//   const addLink = () => {
//     setLinks([...links, '']); // Add an empty string for each new link
//   };

//   // Function to handle link changes
//   const handleLinkChange = (index, event) => {
//     const updatedLinks = [...links];
//     updatedLinks[index] = event.target.value;
//     setLinks(updatedLinks);
//   };

//   return (
//     <div className="Box">
//       <label id="labelHeading">Personal Information</label>

//       <div>
//         <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} required onChange={handleChange} />
//       </div>
//       <div>
//         <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} required onChange={handleChange} />
//       </div>
//       <div>
//         <input type="email" name="email" placeholder="E-Mail" value={formData.email} required onChange={handleChange} />
//       </div>
//       <div>
//         <input type="phone" name="phone" placeholder="Phone" value={formData.phone} required onChange={handleChange} />
//       </div>
//       <div className="cc">
//         <input type="text" name="city" placeholder="City" value={formData.city} required onChange={handleChange} />
//       </div>
//       <div className="cc">
//         <input type="text" name="country" placeholder="Country" value={formData.country} required onChange={handleChange} />
//       </div>

//       <div>
//         <label>Links</label>
//         {links.map((link, index) => (
//           <div key={index} className="link-input">
//             <input
//               type="url"
//               placeholder="Add a link (e.g., https://example.com)"
//               value={link}
//               onChange={(event) => handleLinkChange(index, event)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addLink} className="add-link-button">
//           + Add Link
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PersonalInfo;
import React from 'react';
import './PersonalInfo.css';

function PersonalInfo({ formData, handleChange, links, addLink, handleLinkChange }) {
  return (
    <div className='Box'>
        <label id='labelHeading'>Personal Information</label>
        <div><input type="text" name="firstName" placeholder="First Name" value={formData.firstName} required onChange={handleChange} /></div>
        <div><input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} required onChange={handleChange} /></div>
        <div><input type="email" name="email" placeholder="E-Mail" value={formData.email} required onChange={handleChange} /></div>
        <div><input type="phone" name="phone" placeholder="Phone" value={formData.phone} required onChange={handleChange} /></div>
        <div className='cc'><input type="text" name="city" placeholder="City" value={formData.city} required onChange={handleChange} /></div>
        <div className='cc'><input type="text" name="country" placeholder="Country" value={formData.country} required onChange={handleChange} /></div>

        {/* Links Section */}
        <label id="labelHeading">Links</label>
        {links.map((link, index) => (
          <div key={index} className='cc'>
            <input
              type="url"
              name={`link${index}`}
              placeholder="Link URL"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addLink} className="add-link-button">+ Add Link</button>
    </div>
  );
}

export default PersonalInfo;

import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import EXP from "./FormComp/Experience"
import PerInf from "./FormComp/PersonalInfo"
import EDU from "./FormComp/Education"
import Skills from "./FormComp/Skills"
import generatePDF from './FormComp/generatePDF';


function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    experiences: [{ company: '', designation: '', city: '', country: '', from: '', till: '', isPresent: false, description: [''] }],
    educations: [{ institute: '', city: '', country: '', from: '', till: '', isPresent: false, description: [''] }],
    technicalSkills: '',
    languages: ''
  });

  const [experienceCount, setExperienceCount] = useState(1);
  const [educationCount, setEducationCount] = useState(1);
  const [isPreview, setIsPreview] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(''); // State to hold PDF URL for preview
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission


  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Set form submitted to true
    // setIsPreview(true);
    // console.log(formData);
    // alert('Form submitted successfully!');
  };


  const handlePreview = () => {
    const pdfBlob = generatePDF(formData);
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url); // Set the PDF URL for preview
    setIsPreview(true); // Show preview
  };

  const handleClosePreview = () => {
    setIsPreview(false);
    setFormSubmitted(false);
    setPdfUrl(''); // Clear the PDF URL
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = formData.experiences.map((exp, i) => i === index ? { ...exp, [name]: value } : exp);
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = formData.educations.map((edu, i) => i === index ? { ...edu, [name]: value } : edu);
    setFormData({ ...formData, educations: newEducations });
  };

  const handlePresentCheckboxChange = (index, section, e) => {
    const checked = e.target.checked;
    if (section === 'experience') {
      const newExperiences = formData.experiences.map((exp, i) => i === index ? { ...exp, isPresent: checked, till: checked ? 'Present' : '' } : exp);
      setFormData({ ...formData, experiences: newExperiences });
    } else {
      const newEducations = formData.educations.map((edu, i) => i === index ? { ...edu, isPresent: checked, till: checked ? 'Present' : '' } : edu);
      setFormData({ ...formData, educations: newEducations });
    }
  };

  const handleDescriptionChange = (index, descIndex, section, e) => {
    const { value } = e.target;
    if (section === 'experience') {
      const newExperiences = formData.experiences.map((exp, i) => i === index ? { ...exp, description: exp.description.map((desc, j) => j === descIndex ? value : desc) } : exp);
      setFormData({ ...formData, experiences: newExperiences });
    } else {
      const newEducations = formData.educations.map((edu, i) => i === index ? { ...edu, description: edu.description.map((desc, j) => j === descIndex ? value : desc) } : edu);
      setFormData({ ...formData, educations: newEducations });
    }
  };

  const addDescriptionField = (index, section) => {
    if (section === 'experience') {
      const newExperiences = formData.experiences.map((exp, i) => i === index ? { ...exp, description: [...exp.description, ''] } : exp);
      setFormData({ ...formData, experiences: newExperiences });
    } else {
      const newEducations = formData.educations.map((edu, i) => i === index ? { ...edu, description: [...edu.description, ''] } : edu);
      setFormData({ ...formData, educations: newEducations });
    }
  };

  const handleExperienceCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setExperienceCount(count);
    const newExperiences = Array.from({ length: count }, (_, i) => formData.experiences[i] || { company: '', designation: '', from: '', till: '', isPresent: false, description: [''] });
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleEducationCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setEducationCount(count);
    const newEducations = Array.from({ length: count }, (_, i) => formData.educations[i] || { institute: '', city: '', country: '', from: '', till: '', isPresent: false, description: [''] });
    setFormData({ ...formData, educations: newEducations });
  };




  return (
    <div >
      <div className='Title'>
      {/* <h2>CV Entry Form</h2> */}
      </div>
      <form onSubmit={handleSubmit}>


            {/* Personal Info Section */}
            <PerInf formData={formData} handleChange={handleChange} />



            {/* Experience Section */}
         
             <EXP
             experiences={formData.experiences}
             experienceCount = {experienceCount}
             handleExperienceCountChange = {handleExperienceCountChange}
             handleExperienceChange={handleExperienceChange}
             handlePresentCheckboxChange={handlePresentCheckboxChange}
             handleDescriptionChange={handleDescriptionChange}
             addDescriptionField={addDescriptionField}
           />

            {/*Education Section */}

                 <EDU
            educations={formData.educations}
            educationCount = {educationCount}
            handleEducationCountChange = {handleEducationCountChange}
            handleEducationChange={handleEducationChange}
            handlePresentCheckboxChange={handlePresentCheckboxChange}
            handleDescriptionChange={handleDescriptionChange}
            addDescriptionField={addDescriptionField}
          />


            {/* Skills Section */}
            <Skills
            handleChange = {handleChange}
            technicalSkills = {formData.technicalSkills}
            languages = {formData.languages}
            />
     <div>
{isPreview && (
            <div>
              <iframe
                title="CV Preview"
                src={pdfUrl}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
              <div className='btn' style={{ marginTop: '10px' }}>
                <button onClick={handleClosePreview}>Close Preview</button>
                  </div>
                <div className='btn'>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = 'CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}>
                  Download
                </button>
                  </div>
            </div>
          )}


          {!isPreview && (
            <div className='btn'>

            <button onClick={handlePreview}>Preview</button>
            </div>

          )}

            {/* Submit Button */}
            {!formSubmitted && (
              <div className='btn'>
            <button type="submit">Submit</button>
              </div>
            )}
    </div>


          </form>
        </div>
      );
    }

export default Form
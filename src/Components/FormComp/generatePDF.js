import { jsPDF } from 'jspdf';

function getMonthYear(date) {
    if (typeof date === 'string' || typeof date === 'number') date = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function alignRight(fd, td, pw, m) {
    const tl = fd.length + td.length + 4;
    const gap = (pw - (m + tl));
    return gap - tl;
  }

  export default function generatePDF(formData) {

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 10;
    const usableWidth = pageWidth - margin * 2;
    let y = 20;

    pdf.setLineWidth(0.6)
    pdf.setFont('helvetica','normal');
    pdf.setFontSize(25);
    pdf.setFont('helvetica','bold');
    pdf.text(`${formData.firstName.toUpperCase()} ${formData.lastName.toUpperCase()}`, pageWidth / 2, y, { align: 'center' });
    y += 7;
    pdf.setFont('helvetica','normal');
    pdf.setFontSize(12);
    pdf.text(`${formData.city} | ${formData.country} | ${formData.phone}`, pageWidth / 2, y, { align: 'center' });
    y += 5;
    // pdf.textWithLink(`${formData.email}`,pageWidth / 2, y, { align: 'center' }, { url: `mailto:${formData.email}` }); // Make the email clickable
    //---Email
    const email = formData.email;
  const emailWidth = pdf.getTextWidth(email); // Get the width of the email text
  const centerX = (pageWidth - emailWidth) / 2; // Calculate the center position
  pdf.textWithLink(email, centerX, y, { url: `mailto:${email}` }); // Make the email clickable
  // y += 10; // Move down after the email link
    //------
    // Links
    // if (formData.links && formData.links.length > 0) {
      
    //   formData.links.forEach((link, index) => {
        
    //     if (link.trim()) {
          
    //       pdf.textWithLink(link, 20, y, { url: link });
    //     }
    //   });
    // }
    if (formData.links && formData.links.length > 0) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica','normal');
      // pdf.text('Links:', margin, y);  // Section Title for Links
      y += 5;
      formData.links.forEach((link, index) => {
        const linkY = y + (index * 5); // Space between each link
        if (link.trim()) {
          // Calculate the center position for each link
          const linkWidth = pdf.getTextWidth(link); // Get the width of the link text
          const centerX = (pdf.internal.pageSize.width - linkWidth) / 2; // Center the link on the page
  
          // Use textWithLink to make the link clickable
          pdf.textWithLink(link, centerX, linkY, { url: link });
        }
      });
      y += formData.links.length * 4; // Adjust Y position after links
    }
    ///----
   
    // pdf.text(`${formData.city} | ${formData.country} | ${formData.email} | ${formData.phone}`, pageWidth / 2, y, { align: 'center' });
    //Experience
    y += 10;
    pdf.setFontSize(15);
    pdf.setTextColor('#156082')
    pdf.setFont('helvetica','bold');
    pdf.text('EXPERIENCE', margin, y);
    pdf.setFont('helvetica','normal');
    pdf.setTextColor('Black')
    y += 2
    // pdf.setLineWidth(0.5);
    pdf.setDrawColor('#156082')
    pdf.line(margin, y, pageWidth - margin, y);
    // pdf.line(margin, y, pageWidth - margin, y);
    pdf.setTextColor('Black')
    
    y += 6;
    formData.experiences.forEach((exp, index) => {
        y += 2;
    pdf.setFontSize(12);
    pdf.setFont('helvetica','bold');
    pdf.text(`${exp.company} - ${exp.city}, ${exp.country}`, margin, y);
    pdf.setFont('helvetica','italic');
    const fdate = getMonthYear(exp.from);
    const tdate = exp.till==='Present' ? 'Present' : getMonthYear(exp.till);
    const moff = alignRight(fdate,tdate, pageWidth, margin)
    y += 6;
    pdf.text(`${exp.designation}`, margin, y);
    pdf.setFontSize(10);
    pdf.text(`${fdate} - ${exp.isPresent ?  'Present' : tdate}`,  moff, y);
    pdf.setFontSize(12);
    pdf.setFont('helvetica','normal');
    y += 6;
    exp.description.forEach((desc) => {
      let wrappedText = pdf.splitTextToSize(`  • ${desc}`, usableWidth);
      pdf.text(wrappedText, margin, y);
      y += wrappedText.length * 6;
    });
  });
  //---------------------------
  // Education
  y += 4
  pdf.setFontSize(15);
  pdf.setFont('helvetica','bold');
  pdf.setTextColor('#156082')
  pdf.text('EDUCATION', margin, y);
  pdf.setTextColor('Black')
  pdf.setFont('helvetica','normal');
  y += 2
  pdf.line(margin, y, pageWidth - margin, y);
  y += 7;
  formData.educations.forEach((edu, index) => {
    pdf.setFontSize(12);
    pdf.setFont('helvetica','bold');
    pdf.text(`${edu.institute}, ${edu.city}, ${edu.country}`, margin, y);
    pdf.setFont('helvetica','italic');
    const fdate = getMonthYear(edu.from);
    const tdate = edu.till==='Present' ? 'Present' : getMonthYear(edu.till);
    const moff = alignRight(fdate,tdate, pageWidth, margin)
    pdf.setFontSize(10);
    pdf.text(`${fdate} - ${edu.isPresent ?  'Present' : tdate}`,  moff, y);
    pdf.setFont('helvetica','normal');
    pdf.setFontSize(12);
    y += 6;
    edu.description.forEach((desc) => {
      let wrappedText = pdf.splitTextToSize(`  • ${desc}`, usableWidth);
          pdf.text(wrappedText, margin, y);
          y += wrappedText.length * 5;
    });
    // y += 7;
    //--------------------------------------
    // Add Section
    //---------Title-----------------
 

   
    //------------------------
    if (formData.sections && formData.sections.length > 0) {
    formData.sections.forEach((sec, index) => {
       //---------Title-----------------
    y += 4;
    pdf.setFontSize(15);
    pdf.setFont('helvetica','bold');
    pdf.setTextColor('#156082')
    const txt = sec.title;
    pdf.text(txt.toUpperCase(), margin, y);
    pdf.setTextColor('Black')
    // pdf.text("HELLOOOO", margin, y);
    pdf.setFont('helvetica','normal');
    y += 2
    pdf.line(margin, y, pageWidth - margin, y);
    y += 6;
    //------------------------
        // y += 2;
    pdf.setFontSize(12);
    pdf.setFont('helvetica','bold');

    if(sec.city!=='' || sec.country!== ''){
      pdf.setFont('helvetica','bold');
      pdf.text(`${sec.heading} - ${sec.city}, ${sec.country}`, margin, y);
      y += 6;
    }else{
      pdf.setFont('helvetica','bold');
      pdf.text(`${sec.heading}`, margin, y);
      y += 6;
    }
//-----Dates From - Till
if(sec.from && sec.till){
    pdf.setFont('helvetica','italic');
    const fdate = getMonthYear(sec.from);
    const tdate = sec.till==='Present' ? 'Present' : getMonthYear(sec.till);
    const moff = alignRight(fdate,tdate, pageWidth, margin)
    // y += 6;
    pdf.setFont('helvetica','bold');
    pdf.text(`${sec.subheading}`, margin, y);
    pdf.setFontSize(10);
    pdf.setFont('helvetica','italic');
    pdf.text(`${fdate} - ${sec.isPresent ?  'Present' : tdate}`,  moff, y);
    pdf.setFontSize(12);
    pdf.setFont('helvetica','normal');
    y += 6;
}
//------
    sec.description.forEach((desc) => {
      pdf.setFont('helvetica','normal');
          let wrappedText = pdf.splitTextToSize(`  • ${desc}`, usableWidth);
          pdf.text(wrappedText, margin, y);
          y += wrappedText.length * 6;
    });

  });
    }
    // Skills
    y += 4;
    pdf.setFontSize(15);
    pdf.setFont('helvetica','bold');
    pdf.setTextColor('#156082')
    pdf.text('SKILLS', margin, y);
    pdf.setTextColor('Black')
    pdf.setFont('helvetica','normal');
    y += 2
    pdf.line(margin, y, pageWidth - margin, y);
    y += 7;
    pdf.setFontSize(12);
    pdf.text(`Technical: ${formData.technicalSkills}`, margin, y);
    y += 7;
    pdf.setFontSize(12);
    pdf.text(`Languages: ${formData.languages}`, margin, y);
  });


//   pdf.save('CV.pdf'); // Download the PDF
return pdf.output('blob'); // Return the Blob for further use
  };

// export default GenPDF
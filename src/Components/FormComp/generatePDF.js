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

    pdf.setFont('helvetica','normal');
    pdf.setFontSize(25);
    pdf.setFont('helvetica','bold');
    pdf.text(`${formData.firstName.toUpperCase()} ${formData.lastName.toUpperCase()}`, pageWidth / 2, y, { align: 'center' });
    y += 7;
    pdf.setFont('helvetica','normal');
    pdf.setFontSize(12);
    pdf.text(`${formData.city} | ${formData.country} | ${formData.email} | ${formData.phone}`, pageWidth / 2, y, { align: 'center' });
    //Experience
    y += 10;
    pdf.setFontSize(15);
    pdf.setFont('helvetica','bold');
    pdf.text('EXPERIENCE', margin, y);
    pdf.setFont('helvetica','normal');
    y += 2
    pdf.line(margin, y, pageWidth - margin, y);
    y += 6;
    formData.experiences.forEach((exp, index) => {
        y += 2;
    pdf.setFontSize(12);
    pdf.setFont('helvetica','bold');
    pdf.text(`${exp.company} - ${exp.city}, ${exp.country}`, margin, y);
    pdf.setFont('helvetica','italic');
    const fdate = getMonthYear(exp.from);
    const tdate = exp.till=='Present' ? 'Present' : getMonthYear(exp.till);
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
  pdf.text('EDUCATION', margin, y);
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
    const tdate = edu.till=='Present' ? 'Present' : getMonthYear(edu.till);
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
    //Section
    //---------Title-----------------
 

   
    //------------------------
    if (formData.sections && formData.sections.length > 0) {
    formData.sections.forEach((sec, index) => {
       //---------Title-----------------
    y += 4;
    pdf.setFontSize(15);
    pdf.setFont('helvetica','bold');
    pdf.text(`${sec.title}`, margin, y);
    // pdf.text("HELLOOOO", margin, y);
    pdf.setFont('helvetica','normal');
    y += 2
    pdf.line(margin, y, pageWidth - margin, y);
    y += 6;
    //------------------------
        // y += 2;
    pdf.setFontSize(12);
    pdf.setFont('helvetica','bold');

    if(sec.city!='' || sec.country!= ''){
      pdf.text(`${sec.heading} - ${sec.city}, ${sec.country}`, margin, y);
    }else{
      pdf.text(`${sec.heading}`, margin, y);
    }

    pdf.setFont('helvetica','italic');
    const fdate = getMonthYear(sec.from);
    const tdate = sec.till=='Present' ? 'Present' : getMonthYear(sec.till);
    const moff = alignRight(fdate,tdate, pageWidth, margin)
    y += 6;
    pdf.text(`${sec.subheading}`, margin, y);
    pdf.setFontSize(10);
    pdf.text(`${fdate} - ${sec.isPresent ?  'Present' : tdate}`,  moff, y);
    pdf.setFontSize(12);
    pdf.setFont('helvetica','normal');
    y += 6;
    sec.description.forEach((desc) => {
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
    pdf.text('SKILLS', margin, y);
    pdf.setFont('helvetica','normal');
    y += 2
    pdf.line(margin, y, pageWidth - margin, y);
    y += 7;
    pdf.setFontSize(12);
    pdf.text(`Languages: ${formData.languages}`, margin, y);
  });


//   pdf.save('CV.pdf'); // Download the PDF
return pdf.output('blob'); // Return the Blob for further use
  };

// export default GenPDF
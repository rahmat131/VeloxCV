import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About CV Builder</h1>
        <p>Quickly and easily create a professional CV that stands out.</p>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower job seekers with a simple and efficient tool to create
            high-quality CVs. We believe that everyone deserves a chance to showcase their
            talents and experience in a professional and visually appealing way.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Easy-to-use CV builder for users of all experience levels</li>
            <li>Customizable templates to match different industries and roles</li>
            <li>Instant PDF download with professional formatting</li>
            <li>Responsive design that works well on both desktop and mobile</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>How It Works</h2>
          <p>
            Our CV Builder simplifies the process of creating a CV:
          </p>
          <ol>
            <li>Enter your personal and professional information in a few guided steps.</li>
            <li>Customize sections such as Education, Experience, and Skills.</li>
            <li>Download your CV as a professionally formatted PDF.</li>
          </ol>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Feel free to reach out to our team. We’re here to help
            and constantly improve our tool to meet your needs.
          </p>
          <p>Email: support@cvbuilder.com</p>
        </div>
      </section>
    </div>
  );
}

export default About;

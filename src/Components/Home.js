import React from 'react'
import { Link } from 'react-router-dom'; // Corrected the import
import './Home.css'

function Home() {
  return ( <div className="landing-page">
    {/* Hero Section */}
    <section className="hero">
      <h1>Build Your Professional CV</h1>
      <p>Create a stunning CV that stands out in just a few minutes.</p>
      <Link to="/get-your-cv" className="cta-button">Get Started</Link>
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>Why Choose Our CV Builder?</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Easy to Use</h3>
          <p>Our user-friendly interface allows you to create a professional CV quickly and easily.</p>
        </div>
        <div className="feature-item">
          <h3>Customizable Templates</h3>
          <p>Choose from a variety of templates that suit your style and career goals.</p>
        </div>
        <div className="feature-item">
          <h3>Free and Fast</h3>
          <p>Download your CV for free, with no hidden charges or long waiting times.</p>
        </div>
      </div>
    </section>

    {/* Testimonials or Benefits Section */}
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <p>"I created my CV in minutes, and it helped me land my dream job!" - Jane Doe</p>
      <p>"This CV builder is incredibly easy to use and produces great results." - John Smith</p>
    </section>

    {/* Footer Section */}
    
  </div>
);
}

export default Home
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './About.css';
import ME from '../../assets/me.jpg'; // Correct the path to assets
import { BiMedal, BiUser, BiFolder } from 'react-icons/bi';

const About = () => {
  const navigate = useNavigate(); // Use useNavigate hook here

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="A headshot of Lucas" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* Your card components here */}
          </div>
          <p>
            Hello! I'm a passionate frontend developer specializing in HTML5, CSS3,
            JavaScript, and React.js. I thrive on creating visually appealing and intuitive web
            interfaces. Currently seeking entry-level opportunities, I bring a blend of creativity
            and technical proficiency to the table. Let's collaborate
            to build innovative and user-centric digital experiences!💻✨
          </p>

          <button className='btn btn-primary' style={{ marginLeft: '13rem' }} onClick={handleNavigate}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

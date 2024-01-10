import React from 'react';
import './About.css';
import ME from '../../assests/me.jpg';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const About = () => {
const navigate = useNavigate();
    const letsTalk = () => {
     navigate("/contact");
    }
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Lucas"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>apprenticeship</h5>
                        <small>Full stack web developement <br/> Acciojob</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>SGBAU University <br/>BSC-CS</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling, Cooking & Coding</small>
                    </article>
                </div>
                <p>
                Hello! I'm a passionate frontend developer specializing in HTML5, CSS3, 
                JavaScript, and React.js. I thrive on creating visually appealing and intuitive web 
                interfaces. Currently seeking entry-level opportunities, I bring a blend of creativity 
                and technical proficiency to the table. Let's collaborate 
                to build innovative and user-centric digital experiences!💻✨
                </p>

                <button className='btn btn-primary' style={{marginLeft:'13rem'}} onClick={letsTalk}>Let's Talk</button>
            </div>
        </div>
    </section>
  );
}

export default About;

import React from 'react';
import "./Experience.css";
import {FaReact, FaHtml5, FaGitAlt, FaGithub, FaCode,} from 'react-icons/fa';
import {SiJavascript, SiCss3,SiRedux, SiFirebase} from 'react-icons/si';
import {MdHttp} from 'react-icons/md';
import {TbBrandNextjs} from 'react-icons/tb';


const Experience = () => {
  return (
    <section id='experience'>
        <h5>Skills</h5>
        <h2>Technology Stack</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
               
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>React.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaHtml5 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>HTML</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiCss3 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>CSS</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiRedux className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Redux</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiFirebase className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Firebase</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaGitAlt className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Git</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaGithub className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Github</h4>
                        </div>
                    </article>
                    
                    <article className='experience__details'>
                        <FaCode className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>VS code</h4>
                        </div>
                    </article>
                   
                </div>
            </div>


          
        </div>
    </section>
  );
}

export default Experience;
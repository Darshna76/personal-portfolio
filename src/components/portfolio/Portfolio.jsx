import React from 'react';
import './Portfolio.css';
import podcast from '../../assests/1.png';
import shop from '../../assests/2.png';
import social from '../../assests/4.png';
import portfolio from '../../assests/8.png';
import keep from '../../assests/7.png'
import nasa from '../../assests/3.png'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";

const projects = [
{ 
    id: 1,
    image: podcast,
    title: 'Podcast Application',
    githubLink: 'https://github.com/Darshna76/podcast-application-react',
    DeployedLink: 'https://podcast-react-webapp.netlify.app/',
    description: `Developed a podcast platform for creating, managing, and listening to episodes.
Implemented user-friendly sign-up and login using Firebase for authentication.
Built a responsive and interactive front-end with React and efficient state management using Redux Toolkit. Integrated Firebase for data storage and retrieval.`
},
{ 
    id: 2,
    image: shop,
        title: 'E-Commerce Website',
    githubLink: 'https://github.com/Darshna76/ShoppingCartApp',
    DeployedLink: 'https://darshna76.github.io/ShoppingCartApp/',
    description: 'Build an interactive but desktop-adaptive Shopping Application using HTML, CSS and JavaScript.Used Local Storage for making Sign-Up, and Login functionality and Storing data for Cart Items.Razor pay for dummy payment gateway.'
},

{ 
    id: 3,
    image: portfolio,
    title: 'Social media app',
    githubLink: 'https://github.com/Darshna76/SocialMediaApp',
    DeployedLink: 'module-test-f4-kappa.vercel.app',
    description: 'Discover my world through my React.js portfolio—a creative showcase of skills, projects, and my web development journey. Explore seamlessly and witness the passion and commitment behind each project. Welcome to my virtual space where innovation meets code.'
},
{ 
    id: 4,
    image: keep,
        title: 'Keepify',
    githubLink: 'https://github.com/Darshna76/GoogleKeepClone',
    DeployedLink: 'https://google-keep-clone-weld.vercel.app/',
    description: 'React.js and Material-UI-based Keepify lets users create, edit, and delete notes. Customize each note with a title, content, and color, and easily organize thoughts with a range of color options. Simplify note management with a sleek and intuitive interface.'
},
{ 
    id: 5,
    image: social,
    title: 'Social media app',
    githubLink: 'https://github.com/Darshna76/SocialMediaApp',
    DeployedLink: 'https://module-test-f4-kappa.vercel.app/',
    description: 'This React.js and Redux-powered social media app allows users to easily engage with posts. The HomePage displays a concise list of posts for quick browsing. Clicking on a post takes users to the DetailsPage, offering a comprehensive view. The app emphasizes efficiency and engagement with Redux for streamlined state management.'
},
{ 
    id: 6,
    image: nasa,
    title: 'NASA Picture Explorer',
    githubLink: 'https://github.com/Darshna76/NASAPictureExplorer',
    DeployedLink: 'https://darshna76.github.io/NASAPictureExplorer/',
    description: 'Introducing NASA Picture Explorer, a project skillfully crafted with HTML, CSS, and JavaScript. Dive into a captivating journey as the website fetches the Picture Of The Day and corresponding details from the API. Effortlessly explore specific dates, all while benefiting from the convenience of Local Storage to keep track of your discoveries.'
},

];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                     <div className='links'>
                    <a href={project.githubLink}  target='_blank'><FaGithub size={30} /></a>
                    <a href={project.DeployedLink}  target='_blank'><CgWebsite  size={30} /></a>
                    </div>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;
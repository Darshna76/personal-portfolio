import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/darshna-khatri-3490b9278" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/Darshna76" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;
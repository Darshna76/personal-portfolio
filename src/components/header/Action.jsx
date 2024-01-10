import React from 'react';
import Resume from '../../assests/Darshna_Khatri.pdf';
import { useNavigate } from 'react-router-dom';

const Action = () => {
  const navigate = useNavigate();
  const contactMe = () => {
    navigate("/contact")
  }
  return (
    <div className='action'>
        <a className='btn' href={Resume} download>Download Resume</a>
        <button className='btn btn-primary' onClick={contactMe}>Contact me!</button>
    </div>
  )
}

export default Action;
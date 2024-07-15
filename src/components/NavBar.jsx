import logo from '../assets/gp.jpg'
import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FaSquareXTwitter } from 'react-icons/fa6'

function NavBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-12' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/gaurav-pandey-7801ba191/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
           
            <a href="https://github.com/GauravPandey2307" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
           
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  );
};

export default NavBar;
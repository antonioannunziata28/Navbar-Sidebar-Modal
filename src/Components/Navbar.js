import React from 'react'
import {FaBars} from "react-icons/fa";
import {links, SocialBar} from "../Links.js"
import { useGlobalContext } from '../context.js';

const Navbar = () => {
  const {openSideBar} = useGlobalContext();
  return (
    <nav className='nav'>
      <header className='nav-header'>
        <div className='nav-brand'>
          <h4>MPS Engineering</h4>
        </div>
        <button className='btn nav-toggler' onClick={openSideBar}>
          <FaBars className='nav-icon' />
        </button>
      </header>
      <div className='links-container'>
        <ul className='nav-links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='social-links'>
        <SocialBar />
      </div>
    </nav>
  )
}

export default Navbar;
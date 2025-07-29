import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {

  const {theme} = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }


  return (
    <>
      
      <div className={` ${theme === "light" ? 'bg-slate-900 text-white' : 'bg-black text-white'}   desktop-navbar flex justify-between p-3 items-center`}>
          <div id='navbar-logo' className='text-xl'>
              <i className="ri-behance-fill"></i>
          </div>
          <div id='navbar-items'>
            <ul className='md:flex hidden gap-5'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div id='navbar-toggle' className='md:invisible visible' onClick={handleToggle}>
            <i className="ri-menu-line"></i>
          </div>

          <div>
            <ThemeSwitcher/>
          </div>
      </div>

      <div className={` ${toggle ? "block" : "hidden"}  mobile-navbar bg-slate-900 text-white text-center leading-10 md:hidden`}>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contact">Contact</Link></p>
      </div>

    </>
  )
}

export default Navbar

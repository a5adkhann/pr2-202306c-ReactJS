import React from 'react'

const Navbar = () => {
  return (
    <>
      
      <div className='desktop-navbar bg-slate-900 text-white flex justify-between p-3 items-center'>
          <div id='navbar-logo' className='text-xl'>
              <i className="ri-behance-fill"></i>
          </div>
          <div id='navbar-items'>
            <ul className='md:flex hidden gap-5'>
              <li>Home</li>
              <li>Categories</li>
              <li>Products</li>
            </ul>
          </div>
          <div id='navbar-toggle' className='md:invisible visible'>
            <i className="ri-menu-line"></i>
          </div>
      </div>

    </>
  )
}

export default Navbar

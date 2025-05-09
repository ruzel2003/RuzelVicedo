import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('transparent'); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('navy'); 
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .bg-transparent {
            background-color: transparent !important; /* Transparent background */
            transition: background-color 0.3s ease-in-out; /* Smooth transition */
          }

          .bg-navy {
            background-color:rgb(4, 23, 43) !important; /* Navy blue background */
            transition: background-color 0.3s ease-in-out; /* Smooth transition */
          }
        `}
      </style>

      <nav
        className={`navbar navbar-expand-md fixed-top ${bgColor === 'navy' ? 'bg-navy' : 'bg-transparent'}`}
        id="navbar"
        data-navbar-soft-on-scroll="data-navbar-soft-on-scroll"
      >
        <div className="container-fluid px-0">
          <a href="/">
            <img className="navbar-brand w-75 d-md-none" src="src/assets/img/logos/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand fw-bold d-none d-md-block" href="/">Brainwave.io</a>
          <a className="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto" href="#">
            Get Started Now
          </a>
          <button
            className="navbar-toggler border-0 pe-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end" id="navbar-content" data-navbar-collapse="data-navbar-collapse">
            <ul className="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0" data-navbar-nav="data-navbar-nav">
              <li className="nav-item">
                <a className="nav-link lh-xl" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lh-xl" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lh-xl" href="#service">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lh-xl" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lh-xl" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

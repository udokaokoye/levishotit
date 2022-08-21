import {useEffect} from 'react'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Router from "next/router";
import bgg from '../Assets/Images/bgg.jpg';
import pricingImg from '../Assets/Images/protrait.jpeg'
import portfolioImg from '../Assets/Images/porfo_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Socialmedias from './socialmedias';
const Nav = ({color}) => {
  const [navStatus, setnavStatus] = useState([false, bgg.src]);
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  }, [])
  const toogleNav = () => {
    // console.log(Router.pathname)
    if (Router.pathname == '/pricing') {
      setnavStatus([!navStatus[0], pricingImg.src]);
    } else if (Router.pathname == '/portfolio') {
      setnavStatus([!navStatus[0], portfolioImg.src]);
    } else {
      setnavStatus([!navStatus[0], bgg.src]);
    }
  };
  return (
    <div id="nav" className="nav_container">
      <div style={{color: color ? color : 'white'}} className="nav_wrapper">
        <div className="logo">
          <span data-aos="fade" data-aos-duration="600" data-aos-delay="100"> <a href="/">Levi <span className="logo_odd">Shotit</span></a></span>
        </div>

        <div className="links">
          <span>
            {" "}
            <a href="/">Home</a>{" "}
          </span>
          <span>
            {" "}
            <a href="/pricing">Pricing</a>{" "}
          </span>
          <span>
            {" "}
            <a href="/portfolio">Portfolio</a>{" "}
          </span>
          <span>
            {" "}
            <a href="/about">About</a>
          </span>
          <span>
            {" "}
            <a href="/contact">Contact </a>
          </span>
        </div>

        <div onClick={() => toogleNav()} className="menu_bar">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div style={{ display: navStatus[0] ? "block" : "none" }} className="sidenav">
        <div className="sidenav_wrapper">
          <div className="header">
            <h3>
              Levi <span>Shotit</span>
            </h3>
            <FontAwesomeIcon onClick={() => toogleNav()} icon={faTimes} />
          </div>

          <div className="links">
            <span>
              {" "}
              <a href="/"> Home </a>
            </span>
            <span>
              {" "}
              <a href="/pricing"> Pricing </a>
            </span>
            <span>
              {" "}
              <a href="/portfolio"> Portfolio </a>
            </span>
            <span onClick={() => toogleNav()}>
              {" "}
              <a href="/about"> About </a>
            </span>
            <span onClick={() => toogleNav()}>
              {" "}
              <a href="/contact"> Contact </a>
            </span>
          </div>
        <Socialmedias />
        </div>
      </div>
    </div>
  );
};

export default Nav;

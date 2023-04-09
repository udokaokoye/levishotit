import React from 'react'
import { faArrowRight, faArrowUp, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className='footer_cont'>
      <div className="socialtag">Follow on Instagram | @levishotit_</div>
      <div className="ft_links">
        <a href="#nav">Back to top</a>
        <a href="/pricing">pricing</a>
        <a href="/portfolio">portfolio</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </div>
        {/* <a href="#nav"><div className="bt">
            <FontAwesomeIcon icon={faArrowUp} />
            <span>Back To Top</span>
        </div>
        </a> */}

        <span className='cprgth'><FontAwesomeIcon style={{marginRight: 14}} icon={faCopyright} />2022 Levi Okoye www.levishotit.com</span>
        <span className='cprgth'>Developed By <a href="http://udokaokoye.com" target="_blank" style={{textDecoration: 'underline'}}> Levi Okoye</a></span>
    </div>
  )
}

export default Footer
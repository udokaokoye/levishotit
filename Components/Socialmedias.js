import React from 'react'
import {
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import {faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Socialmedias = () => {
  return (
    <div className="socialmedia">
          <hr />
          <div className="social_links">
            <a href="https://www.instagram.com/levishotit_/" target='_blank'><FontAwesomeIcon className="social_icn" icon={faInstagram} /></a>
            <a href="https://twitter.com/levi_dev_" target='_blank'><FontAwesomeIcon className="social_icn" icon={faTwitter} /></a>
            <a href="https://www.facebook.com/Levi-Okoye-100249229462723" target='_blank'><FontAwesomeIcon className="social_icn" icon={faFacebook} /></a>
            <a href="mailto:levi@levishotit.com" target='_blank'><FontAwesomeIcon className="social_icn" icon={faEnvelope} /></a>
          </div>
        </div>
  )
}

export default Socialmedias
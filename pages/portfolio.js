import { faArrowDown, faLocationArrow, faMapMarker, faMapMarkerAlt, faMapPin, faMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Socialmedias from '../Components/socialmedias'

const portfolio = () => {
  return (
    <React.Fragment>
    <div className='portfolio_show'>
    <title>Levi's Portfolio</title>
      <div className="overlay">

      <Nav />

      <div className="show_content">
        <h3 className='showcase_head_text'>Welcome To Levi's <br /> Portfolio</h3>
        <p className='showcase_subtext'>. Creative . Quality . Professional . Perfection .</p>

       <a href="#portfolio_sec"><button> <FontAwesomeIcon icon={faArrowDown} /> View Portfoliio</button></a> 
      </div>
      </div>
    </div>

    <div id='portfolio_sec' className="portfolio_section">
      <div className="portfolio_wrapper">
      <div className="portfolio portfolio_4">
            <div className="port_overlay">
              <h3 className="portfolio_title">Alex's Grad Party</h3>
              <p className="portfolio_date">08 / 05 / 2023</p>
              <p className="portfolio_location"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Cincinati, Ohio</p>
              <a href="https://levishotit.pixieset.com/alexokoyesgraduationparty/" target="_blank"><button>View Gallery</button></a>
            </div>
        </div>
        <div className="portfolio portfolio_1">
            <div className="port_overlay">
              <h3 className="portfolio_title">Boat Cruise</h3>
              <p className="portfolio_date">04 / 21 / 2022</p>
              <p className="portfolio_location"> <FontAwesomeIcon icon={faMapMarkerAlt} /> San Juan, Puerto Rico</p>
              <a href="https://levishotit.pixieset.com/weddingphotography/" target="_blank"><button>View Gallery</button></a>
            </div>
        </div>

        <div className="portfolio portfolio_2">
            <div className="port_overlay">
              <h3 className="portfolio_title"> Jaqueline & Stephen </h3>
              <p className="portfolio_date">04 / 23 / 2022</p>
              <p className="portfolio_location"> <FontAwesomeIcon icon={faMapMarkerAlt} /> San Juan, Puerto Rico</p>
              <button>View Gallery</button>
            </div>
        </div>

        <div className="portfolio portfolio_3">
            <div className="port_overlay">
              <h3 className="portfolio_title"> Wedding Reception</h3>
              <p className="portfolio_date">04 / 23 / 2022</p>
              <p className="portfolio_location"> <FontAwesomeIcon icon={faMapMarkerAlt} /> San Juan, Puerto Rico</p>
              <button>View Gallery</button>
            </div>
        </div>

        
      </div>
    </div>
    <Socialmedias />
    <Footer />
    </React.Fragment>
  )
}

export default portfolio
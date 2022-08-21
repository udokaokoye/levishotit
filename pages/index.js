import react, { useState, useEffect } from "react";
import {
  faBehance,
  faDribbble,
  faDribbbleSquare,
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Socialmedias from "../Components/socialmedias";
// import video from '../Assets/Videos/vid.mov'
// import igg from '../Assets/Images/bd1.jpeg'
export default function Home() {

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
    setInterval(changeBg, 10000);
    // changeBg()
  }, [])
  





  const changeBg = () => {
    const imagesbg = [
      "url('https://images.unsplash.com/photo-1660528682175-656268db1a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      "url('https://images.unsplash.com/photo-1660528682184-19548cd543e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      "url('https://images.unsplash.com/photo-1660528682201-6bc3b7173654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      "url('https://images.unsplash.com/photo-1660528682188-1622cdac5896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      "url('https://images.unsplash.com/photo-1660528682209-cf7d403c2613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
    ]
      const show = document.getElementById('showcase')
      const bg = imagesbg[Math.floor(Math.random() * imagesbg.length)]
      show.style.background = bg;
  } 

  return (
    <div className="main_container">
      <title>Levi Shotit</title>
      <meta
        name="viewport"
        content="initial-scale=1, viewport-fit=cover"
      ></meta>

      <div id="showcase" className="showcase_container">
        {/* <video autoPlay >
          <source src={require('../Assets/Images/vid.mov')} />
        </video> */}
        <Nav />

        <div className="showcase_main">
          {/* <div className="left">
            <img src={require('../Assets/Images/IMG_3000.jpg').default.src} alt="" />
          </div>
          <div className="center"></div>
          <div className="right"></div> */}

          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="bold_text">JUST OPEN</h1>
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1100" className="bold_text">YOUR</h1>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2100" className="bold_text">EYES</h1>
        </div>
      </div>

      <div className="mini_portfolio">
       <a href="https://levishotit.pixieset.com/weddingphotography/" target="_blank"><div className="mini_port">
          <div className="mini_cover mini_cover1"></div>
          <span className="mini_decs">Boat Cruise, San Juan . Puerto Rico</span>
        </div>
        </a> 

        <a href="https://levishotit.pixieset.com/jaqulineandstephene/" target="_blank"><div className="mini_port">
          <div className="mini_cover mini_cover2"></div>
          <span className="mini_decs">Jaqueline & Stephen . San Juan, Puerto Rico</span>
        </div>
        </a>

       <a href="https://levishotit.pixieset.com/jaqulineandstephene/" target="_blank" ><div className="mini_port">
          <div className="mini_cover mini_cover3"></div>
          <span className="mini_decs">Wedding Reception . San Juan, Puerto Rico</span>
        </div>
        </a> 

        <div className="mini_port">
          <div className="mini_cover mini_cover4"></div>
          <span className="mini_decs">Milena & Lanier's Madison Hotel Wedding</span>
        </div>

        <div className="mini_port">
          <div className="mini_cover mini_cover5"></div>
          <span className="mini_decs">Milena & Lanier's Madison Hotel Wedding</span>
        </div>

        <div className="mini_port">
          <div className="mini_cover mini_cover6"></div>
          <span className="mini_decs">Milena & Lanier's Madison Hotel Wedding</span>
        </div>

      </div>
      
      <div className="view_more_gallery">
     <a href="/portfolio"><button className="">View More Gallery</button></a>
     </div>

      {/* <div class='lr_embed' style={{position: 'relative', paddingBottom: '50%', height:0, overflow: 'hidden' }}><iframe id='iframe' 
        src='https://www.behance.net/gallery/145256853/Photography' frameborder='0'style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}} ></iframe></div> */}


        <div className="mod_card">
          <div className="text_area">
            <h1>Let Us Capture Those Memories That Will Last Forever</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quod incidunt sapiente nihil excepturi cum illo ullam earum dolores repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt debitis. Ullam asperiores harum facilis at vitae veniam vel atque sequi. Veniam ipsum voluptas quia recusandae. Ullam possimus et accusamus assumenda quas autem? Sit debitis assumenda cum, veniam velit sapiente similique error architecto deleniti omnis inventore et soluta, nulla cumque.</p>

            <a href="/contact"><button>I'm Ready!</button></a>
          </div>
          <div className="card_cover"></div>
        </div>


        <Socialmedias />

      <div className="services">
        <div data-aos="fade-down" data-aos-duration="500" className="services_intro">SERVICES</div>

        <div className="services_inner">
          <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" className="service1 service">
            <div className="overlay">
              <h3>
                Portrait <br /> Photography{" "}
              </h3>
              <a href="/#contact"><button>Book This Service</button></a>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500" className="service2 service">
            <div className="overlay">
              <h3>
                Wedding <br /> Photography{" "}
              </h3>
              <a href="#contact"><button>Book This Service</button></a>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000" className="service3 service">
            <div className="overlay">
              <h3>
                Casual <br /> Photography{" "}
              </h3>
              <a href="#contact"><button>Book This Service</button></a>
            </div>
          </div>
        </div>

        <div className="other_ser">
          {" "}
          <FontAwesomeIcon icon={faArrowRight} /> <span>Other Services</span>
        </div>
      </div>

      <div id="about" className="about_me">
        <div className="about_intro">About Me</div>

        <div className="about_inner">
          <div className="about_prot"></div>
          <div className="social_links_mid">
            <a target="_blank" href="https://www.instagram.com/levishotit_/"><FontAwesomeIcon className="icn" icon={faInstagram} /></a> 
            <a target="_blank" href="https://www.instagram.com/levishotit_/"><FontAwesomeIcon className="icn" icon={faFacebook} /></a>
            <a target="_blank" href="https://twitter.com/levi_dev_"><FontAwesomeIcon className="icn" icon={faTwitterSquare} /></a>
            <a target="_blank" href="https://dribbble.com/okoyeudoka"><FontAwesomeIcon className="icn" icon={faDribbble} /></a>
            <a target="_blank" href="https://www.behance.net/udokaokoye"><FontAwesomeIcon className="icn" icon={faBehance} /></a>
          </div>
          <div className="about_txt">
            <div className="about_respons_img"></div>
            <p>
              Thank you very much. You have indeed smelled it often! No, to do
              this from the nat us of the present just results in the most
              worthy of things harsher to provide for them further but to
              obtain, for anyone to endure, the accusers greater times of pain.
              He will rebuke the discoverer himself, but he will reprove the
              acquirer, for the trouble of his pleasure is not to be paid for by
              reason of them, and the pleasure of him, when I open the door,
              will follow what is rat. She was born! The customer himself, the
              customer is a lot of money. To do, therefore, in time to come. And
              with a wise free man, none more harsh than those who repulse his
              accusers, he succeeds in solving the truth in every way. Whatever
              times I open to the inventor, let her be freed for the services
              that we can do, and she repels the most worthy of her
              consequences, no one knows how to please the architect of
              sufferings. For there are those who praise the mind of those who
              receive the troubles of the present, and hinders those who are
              worthy to flee from those pleasures, but repels them. Do they not
              know the consequences of refusing them? What is their pleasure! By
              labor itself, when it is accomplished, it is brought forth whence
              that which is not so. Or we can, he criticizes the harshness of
              the clear desert will happen, we lead the resilience often blinded
              as if they provide! The pleasure of refusing to endure nothing is
            </p>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}

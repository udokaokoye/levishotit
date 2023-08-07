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

        <div className="mini_port">
       <a href="https://levishotit.pixieset.com/alexokoyesgraduationparty/" target="_blank">
          <div className="mini_cover mini_cover7"></div>
          <span className="mini_decs">Alex's Grad Party, Cincinnati . Ohio</span>
        </a> 
        </div>

        <div className="mini_port">
       <a href="https://levishotit.pixieset.com/weddingphotography/" target="_blank">
          <div className="mini_cover mini_cover1"></div>
          <span className="mini_decs">Boat Cruise, San Juan . Puerto Rico</span>
        </a> 
        </div>

          <div className="mini_port">
        <a href="https://levishotit.pixieset.com/jaqulineandstephene/" target="_blank">
          <div className="mini_cover mini_cover2"></div>
          <span className="mini_decs">Jaqueline & Stephen . San Juan, Puerto Rico</span>
        </a>
        </div>


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
            <p>Because of you. I have leamed to love deeper than I thought possible.
I find myself daydreaming of you when we are apart. When we are together, I just want to be with you, holding your hand, snuggling on the
couch, or even just watching you sleep. I never thought a love like this was possible, until now.
All because of you.
 -Brad Tumbull

</p>
<p>Are you ready for your special moment?</p>

            <a href="/contact"><button>I'm Ready!</button></a>
          </div>
          <div className="card_cover"></div>
        </div>


        <Socialmedias />




      <Footer />
    </div>
  );
}

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Socialmedias from "../Components/socialmedias";

const pricing = () => {
  return (
    <div>
            <title>Levi | Pricing</title>
      <div className="pricing_show">
        <Nav />
        {/* <h1>Ready to capture your memorable moment?</h1> */}
        {/* <p> <a href="#pricing"><FontAwesomeIcon icon={faArrowDown} /> Select a package that best suits your needs </a></p> */}

      </div>

      <h1 id="pricing" className="page_header">Change your lens, change your story.</h1>
      <p className="pricing_quote">Your special moments happen just once, and having the right photo at a particular moment can mean a lot. We take care of that for you by capturing those memories that will last forever. Below are plans arranged to suit your needs for your special events. Feel free to request additional services; that's why we are here - to cater to your preferences and make your experience truly memorable. Don't hesitate to reach out!</p>


      <div className="pricing_main">
        <div className="plan_section plan1">
          <div className="plan_cover"></div>

          <h3>Weddings</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum quas illum assumenda. Cupiditate saepe voluptatibus amet hic? Cum, quibusdam.</p> */}

          <span className="plan_price"> starts from $1200</span>
        </div>

        <div className="plan_section plan2">
          <div className="plan_cover"></div>

          <h3>Graduations</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum quas illum assumenda. Cupiditate saepe voluptatibus amet hic? Cum, quibusdam.</p> */}

          <span className="plan_price"> starts from $300</span>
        </div>

        <div className="plan_section plan3">
          <div className="plan_cover"></div>

          <h3>Portraits</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum quas illum assumenda. Cupiditate saepe voluptatibus amet hic? Cum, quibusdam.</p> */}

          <span className="plan_price">starts from $500</span>
        </div>
      </div>

     <a href="/contact"><button className="getintouch">Get In Touch!</button></a>

      <div className="otherServices">
        <h1>Other Services</h1>
        <ul>
          <li>Engagements</li>
          <li>Headshots</li>
          <li>Casual Shoots</li>
          <li>Birthday Shoots</li>
          <li>Video Coverage</li>
          <li>And Many More!</li>
          {/* <li>Item</li> */}
        </ul>
      </div>

      <Socialmedias />
      <Footer />
      {/* <div className="pricing_container">
        <div className="selections selection1">
        <h3 className="plan_title">Basic</h3>
            <span className="use_case">Mostly for: Personal Shoots, Family Shoots</span>
          <h3 className="serv_price">$300.00</h3>
            <span className="no_hid_fees">* No hidden fees / cost</span>
          <ul className="plan_details_container">

            <li className="plan_det">  Up to 2 hours of shooting</li>
            <li className="plan_det">  Up to 5 persons</li>
            <li className="plan_det">  maximum of 30 pictures</li>
            <li className="plan_det">  Physical delivery only / no online viewing access</li>
            <li className="plan_det">  Only one location</li>
            <li className="plan_det">  Additional Features / Servcies available at extra cost</li>

          </ul>
          <div className="button_container"><button>Book Service</button></div>
        </div>
        <div className="selections selection2">
            <h3 className="plan_title">Standard</h3>
            <span className="use_case">Mostly for: Bithdays, Graduation Pictures, Engagment Ceremony</span>
          <h3 className="serv_price">$500.00</h3>
            <span className="no_hid_fees">* No hidden fees / cost</span>
          <ul className="plan_details_container">

            <li className="plan_det">  Up to 3 hours of shooting</li>
            <li className="plan_det">  Up to 10 persons</li>
            <li className="plan_det">  unlimited amout of photos</li>
            <li className="plan_det">  Free 1 month online viewing access</li>
            <li className="plan_det">  Up to 2 locations *within 5 miles of first location*</li>
            <li className="plan_det">  Additional Features / Servcies available at extra cost</li>

          </ul>
          <div className="button_container"><button>Book Service</button></div>
        </div>
        <div className="selections selection3">
        <h3 className="plan_title">Ultimate</h3>
            <span className="use_case">Mostly for: Large Event Coverage, Company event coverage</span>
          <h3 className="serv_price">$900.00</h3>
            <span className="no_hid_fees">* No hidden fees / cost</span>
          <ul className="plan_details_container">

            <li className="plan_det">  Up to 5 hours of shooting</li>
            <li className="plan_det">  Advanced image editing</li>
            <li className="plan_det">  Unlimited number of people</li>
            <li className="plan_det">  Hard Page Photobook available on request - <b> + $500 - Max of 50 picture per Photobook</b> </li>
            <li className="plan_det">  Unlimited amout of photos</li>
            <li className="plan_det">  Free 1 year online viewing access</li>
            <li className="plan_det">  Up to 3 locations *within 5 miles of first location*</li>
            <li className="plan_det">  Additional Features / Servcies available at extra cost</li>

          </ul>
          <div className="button_container"><button>Book Service</button></div>
        </div>

        <div className="selections selection3">
        <h3 className="plan_title">Wedding Coverage</h3>
            <span className="use_case">Mostly for: Large Event Coverage, Company event coverage</span>
          <h3 className="serv_price">CALL FOR QUOTE</h3>
            <span className="no_hid_fees">* No hidden fees / cost</span>
          <ul className="plan_details_container">

            <li className="plan_det">  Full event coverage</li>
            <li className="plan_det">  Engagment coverage - <b>Extra Cost</b></li>
            <li className="plan_det">  Bridal Shower - <b>Extra Cost</b></li>
            <li className="plan_det">  Advanced image editing</li>
            <li className="plan_det">  Hard Page Photobook available on request - <b> Extra Cost - Max of 50 picture per Photobook</b> </li>
            <li className="plan_det">  Unlimited amout of photos</li>
            <li className="plan_det">  Free 1 year online viewing access</li>
            <li className="plan_det">  Additional Features / Servcies available at extra cost</li>

          </ul>
          <div className="button_container"><button>Call Now</button></div>
        </div>
      </div> */}

      {/* <div className="pricing_container">
        <div className="selections off_select"></div>
      </div> */}
    </div>
  );
};

export default pricing;

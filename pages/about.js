import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Socialmedias from '../Components/socialmedias'

const about = () => {
  return (
    <div>
        <Nav color='black' />

        <div className="about_main">
        <title>About Levi</title>
            <div className="show_image">

            </div>

            <h1>Know Your Photographer</h1>

            <p> Hey there! Ever wondered who's behind the camera? My name is Levi, and I've been passionate about photography for almost 3 years now. When I'm not capturing beautiful moments through my lens, I work as a Pharmacy Technician, but my heart truly belongs to freelance photography and software engineering.

Currently, I'm a sophomore at The University of Cincinnati, majoring in IT (Information Technology). My dream is to become a software engineer for Google or Microsoft, and I'm determined to work hard to achieve that goal. Along the way, I discovered my love for photography, and ever since, my camera and lenses have become my constant companions.

In person, I'm a chill and laid-back individual who enjoys being around people who light up the environment. I can't wait to meet you and capture some amazing moments together! Feel free to reach out to me, whether it's about photography, tech, or just to say hello. Let's create something wonderful! 😊 
 </p>

            <a href="/contact"><button>Send Me A Message!</button> </a>

            <Socialmedias />
            <Footer />
        </div>
    </div>
  )
}

export default about
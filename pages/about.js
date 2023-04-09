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

            <p> Hey there,  Ever wonder who’s behind the camera? my name is Levi. I have almost 3 years experience in photography. My occupation I’m a Pharmacy Technician and a  freelance photographer and software engineer 

I’m currently a freshman at The University Of Cincinnati In a Major of IT (Information Technology).  I’ve alway has the dream of becoming a software engineer for gaogle or Microsoft, I’m still working towards that dream, along the way I realized I had passion for photography and ever since I fell in love with my camera and lenses.

In person I’m kinda chill and love people who light up the environment. Can’t wait to meet you! 
 </p>

            <a href="/contact"><button>Send Me A Message!</button> </a>

            <Socialmedias />
            <Footer />
        </div>
    </div>
  )
}

export default about
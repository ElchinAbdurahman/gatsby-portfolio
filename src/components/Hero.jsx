import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {


  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2>i'm Elchin Abdurahman </h2>
            <h4>Front-End Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
           
          </div>
        </article>
        <StaticImage
        placeholder="blurred"
        layout="fixed"
        width={500}
        height={500}
         src="../assets/hero-img.png" 
         alt="no" />
      </div>
    </header>
  )
}

export default Hero

import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Team_1 from "../images/team1.png"



const Banner = ({children}) => {
  return(
    <div className="title">
      <center className="tagline">Build Valuable Product with Us</center>
    <center className="weare">
        We are Pexel Digital Product Agency
        <br/>
        <button className="contact-us">Contact Us <i class="fa fa-chevron-right fa-fw"></i> </button>
      </center>
      <div className="box1">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            
          </div>
          {/* <div className="col-md-auto">
            <img className="team1" src={Team_1}></img>
          </div> */}
          <div className="col col-lg-2">

          </div>
        </div>
      </div>
      </div>
      </div>
)
  
}

export default Banner;
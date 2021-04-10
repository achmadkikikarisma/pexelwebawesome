import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo_img from "../images/logopexel.png"

const Nav = ({ siteTitle }) => (

  <section className="navigation">
    <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link class="nav-link " href="#">Services</Link>
        </li>
        <li className="nav-item">
        <Link class="nav-link " href="https://www.behance.net/pexeldesign">Our Work</Link>
        </li>
        <Link><img className="logo"src={logo_img} alt="" width="100" height="100"/></Link>
        <li className="nav-item">
        <Link class="nav-link " href="#">Team</Link>
        </li>
        <li className="nav-item">
        <Link class="nav-link " href="#">Contact</Link>
        </li>
      </ul>
      
  </section>
     
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

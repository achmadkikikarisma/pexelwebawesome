import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo_img from "../images/logopexel.png"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div class="row-footer row">
      <ol className="footer-bg">
        <div className="col-footer col">
          <center>
            <Link className="footer-text"href="mailto:pexelid@gmail.com"><i class="fa fa-envelope fa-fw"></i>pexelid@gmail.com</Link>
          </center>
        </div>
        <div className="col-footer col">
          <center>
            <Link className="footer-text"><i class="fa fa-map-marker fa-fw"></i>68432 Banyuwangi,Indonesia</Link>
          </center>
        </div>
        <div className="col-footer col">
          <center>
            <Link className="footer-text"href="https://www.instagram.com/pexel.design"><i class="fa fa-instagram fa-fw"></i>Pexel Design</Link>
          </center>
        </div>
        <div className="col-footer col col-footer-mobile">
          <center>
            <Link className="copy-right"href="https://www.pexel.design">©Pexel Design 2021</Link>
          </center>
        </div>
      </ol>
      <ol className="col-footer-copy-right">
        <div className="col col-footer-desktop">
          <center>
            <Link className="copy-right"href="https://www.pexel.design">©Pexel Design 2021</Link>
          </center>
        </div>
      </ol>
</div>
</div>

     
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

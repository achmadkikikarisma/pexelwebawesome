import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "../components/nav"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import PreHeader from './pre-header'
import Header from './header'
import './layout.css'

const LayoutWrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  max-width: 960px;
  /* max-width: 1840px; */
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;

  h4 {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
    text-align: center;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <PreHeader />   
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          {children}
          
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

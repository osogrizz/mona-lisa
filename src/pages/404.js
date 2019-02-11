import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  text-align: center;
  h1 {
    margin-top: 120px;
    font-size: 5rem;
    font-weight: 300;
  }

`

const NotFoundPage = () => (
  <Wrapper>
    <Layout style={{ textAlign: 'center !important' }}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Wrapper>   
)

export default NotFoundPage

/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

const Title = styled.h1`
  text-align: center;
  /* font-family: 'Sacramento', cursive; */
  font-size: 62px;
  font-weight: 200;
  color: darkred;
`

const CardContainer = styled.div`
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;

    margin: 0 auto;
  }
`

const Card = styled.div`
  width: 250px;
  margin: 20px auto;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-height: 304px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);

  Image {
    margin-bottom: 0.8rem;
  }

  h1 {
    padding: 0.8rem;
  }
  h3 {
    margin-top: 0.4rem;
    font-weight: 400;
  }

  p {
    /* padding: 0.2rem; */
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  
  button {
    margin: 20px;
    border: 1px solid #fff;
    background: #7df442;
    width: 90px;
    /* padding: 5px; */
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    &:hover {
      cursor: pointer;
      color: #7df442;
      background: #fff;
      border: 1px solid #7df442;
    }
  }

  @media only screen and (max-width: 1082px) and (min-width: 426px) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
    p {
      font-size: 0.8rem;
    }
  }
`

const FooterStyles = styled.footer`
  margin: 0 auto;
  max-width: 950px;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    color: #444;
    font-weight: 100;
  }
`

class IndexPage extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title>Mona Lisa's Books</Title>
      </Link>
        <div style={{ paddingTop: `5px`, margin: `0 auto`, maxWidth: `330px`, marginBottom: `2.45rem` }}>
          <Image />
        </div>
      <h4>So many books so little time...</h4>

        <CardContainer>
          {data.allMarkdownRemark.edges.map( ({node}) => (
            <Card key={node.id} item={node} >
              {/* <Image fluid={node.frontmatter.thumbnail} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} /> */}
              {/* <Img fluid={node.frontmatter.thumbnail} /> */}
                <img src={node.frontmatter.thumbnail} style={{ width: '100%', margin: '0 auto' }} alt={node.frontmatter.title}/>
                <h3>{node.frontmatter.title}</h3>
                <p>Author: {node.frontmatter.author}</p>
                <p>Price: ${node.frontmatter.price}</p>
                <p style={{ fontSize: '11px' }}>desc: {node.frontmatter.desc_}</p>
                <button
                  type="submit"
                  className="snipcart-add-item"
                  data-item-id={node.id}
                  data-item-name={node.frontmatter.title}
                  data-item-price={node.frontmatter.price}
                  data-item-weight="2.5"
                  data-item-url="https://mona-lisas.netlify.com/"
                  data-item-description={node.frontmatter.desc_}
                >
              Add
              </button>
            </Card> 
          ))}
        </CardContainer>

      <hr style={{ marginTop: '40px'}} />

      <FooterStyles>
        <div>
                Copyright © 
          {' '}
          {new Date().getFullYear()}
          ,  Mona Lisa's Books - All Rights Reserved
        </div>

        <div style={{ textAlign: 'right', }}>
          <a href="https://leo-torres.tech" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
        </div>
      </FooterStyles>
    </Layout>
    )
  }
}

export default IndexPage

export const PageQuery = graphql`
  query ItemListQuery {
    allMarkdownRemark{
    edges {
      node {
        id
        frontmatter {
          thumbnail 
          title
          author
          desc_
          price
          imdb
        }
      }
    }
  }
  }
`
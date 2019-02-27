    // import React from 'react'
    // import { graphql } from 'gatsby'

    // import Layout from '../components/layout'


    // export default function Template({ data }) {
    //     const { markdownRemark: bookitem } = data

    //     return (
    //         <Layout>
    //             <h1>{bookitem.frontmatter.title}</h1>
    //             <p>{bookitem.frontmatter.author}</p>
    //             <p>{bookitem.frontmatter.price}</p>
    //             <div  dangerouslySetInnerHTML={{__html: bookitem.html}}/>
    //         </Layout>    
    //     )
    // }

    // export const itemQuery = graphql`
    //     query ItemByPath($path: String!) {
    //         markdownRemark(frontmatter: { path: {eq: $path} }) {
    //             html
    //             frontmatter {
    //                 path
    //                 title
    //                 author
    //                 price
    //                 IMDB
    //             }
    //         }
    //     }
    // `
import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { BlogTitle } from '../styled-elements/header';

const BlogLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h2>How many posts in this blog?</h2>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <p>{ node.excerpt }</p> 
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default IndexPage

// if u make a `graphql` query, the gatesby smart enough to know apply the query return to the default export
export const query = graphql`
  query  {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
            }
            fields {
              slug
            }
            excerpt
          }
        }
        totalCount
      }
    }
`
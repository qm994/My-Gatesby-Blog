import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Qingyuan's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <span>
                {node.frontmatter.title} - {node.frontmatter.date}
              </span>
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
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
            }
            excerpt
          }
        }
        totalCount
      }
    }
`
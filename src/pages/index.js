import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import { removeSlashes } from '../utils';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { BlogTitle, PageHeader } from '../styled-elements/header';
import { StyledParagraph } from '../styled-elements/text';

const BlogLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = ({ data }) => {
  console.log(data)
  const { allMarkdownRemark, allSitePage } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {/* <PageHeader>Go to different pages in this post</PageHeader> */}
        {/* <ul>
          {
            allSitePage.edges
              .filter(edge => edge.node.isCreatedByStatefulCreatePages)
              .map(({ node }) => (
                <div key={node.id}>
                  <BlogLink to={node.path}>{removeSlashes(node.path)}</BlogLink>
                </div>
              ))
          }

          {
            allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <BlogLink to={node.fields.slug}>
                  {removeSlashes(node.fields.slug)}
                </BlogLink>
                
              </div>
            ))
          }
        </ul>
        <br /> */}
        <PageHeader>How many posts in this blog?</PageHeader>
        <h4>{allMarkdownRemark.totalCount}</h4>
        {
          allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <StyledParagraph>{ node.excerpt }</StyledParagraph> 
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

      allSitePage(filter: {pluginCreator: {name: {glob: "gatsby-plugin-page-creator"}}}) {
        edges {
          node {
            id
            isCreatedByStatefulCreatePages
            path
          }
        }
      }
    }
`
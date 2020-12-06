/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    console.log(node.internal.type)
    if(node.internal.type === `MarkdownRemark`) {
        // slug is just a route
        const slug = createFilePath({ node, getNode })
        console.log(slug)
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    return graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                // use the default component to create the page
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // create the slug
                    slug: node.fields.slug
                }
            })
        })
    })
}
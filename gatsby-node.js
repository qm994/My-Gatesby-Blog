/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)

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
}
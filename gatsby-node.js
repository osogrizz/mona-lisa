const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const itemTemplate = path.resolve(`src/templates/items.js`)


return graphql(`
        {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
            node {
                frontmatter {
                path
                }
            }
            }
        }
    }`
).then(result => {
    if (result.errors) {
        return Promise.reject(result.errors)
    }
  })
}
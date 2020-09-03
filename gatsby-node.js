const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        contentfulSettings(id: { eq: "b8d8f736-cc45-55eb-bdf0-5fdeadcff30c" }) {
          workList {
            slug
            title
          }
        }
        allShopifyProduct(sort: { fields: [title] }) {
          nodes {
            id
            handle
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.contentfulSettings.workList

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    createPage({
      path: `/${post.slug}`,
      component: blogPost,
      context: {
        slug: post.slug,
        previous,
        next,
      },
    })
  })

  // Create Product page
  result.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: node.id,
      },
    })
  })
}

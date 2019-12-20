const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js')
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }

            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulPage.edges
        pages.forEach((page, index) => {
          createPage({
            path: `${page.node.slug}`,
            component: pageTemplate,
            context: {
              slug: page.node.slug,
            },
          })
        })

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPostTemplate,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}

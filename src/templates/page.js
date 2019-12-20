import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/layout'

class PageTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const page = get(this.props, 'data.contentfulPage')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${page.title} | ${siteTitle}`} />

          <div
            className="wrapper"
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

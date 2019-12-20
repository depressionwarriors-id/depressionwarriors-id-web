import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import styles from './navigation.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query Query {
      allContentfulPage(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const pages = data.allContentfulPage.edges

  return (
    <nav role="navigation">
      <ul className={styles.navigation}>
        {pages.map((page, index) => {
          return (
            <li key={index} className={styles.navigationItem}>
              <Link to={page.node.slug}>{page.node.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

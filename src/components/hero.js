import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <Img
          className={styles.heroImage}
          alt={data.title}
          fixed={data.image.fixed}
        />
      </div>
    </div>
  )
}

import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroImageContainer}>
      <Img
        className={styles.heroImage}
        alt={data.title}
        fixed={data.image.fixed}
      />
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>Depression Warriors Indonesia</h3>
    </div>
  </div>
)

import styles from './Chart.module.scss'

import React from 'react'
import Avatar from './Avatar'
import Lines from './ChartComponents/Line'

const Chart = () => {

  return (
    <div className={styles.container}>
      <Lines></Lines>
      <div className={styles.userInfo}>
        <Avatar></Avatar>
      </div>
    </div>
  )
}


export default Chart
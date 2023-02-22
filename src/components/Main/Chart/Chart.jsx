import styles from './Chart.module.scss'

import chart from '../../../assets/avatar/grap.png'

import React from 'react'
import Avatar from './Avatar'

const Chart = () => {
  return (
    <div className={styles.container}>
        <img src={chart}></img>
        <div className={styles.userInfo}>
          <Avatar></Avatar>
        </div>
    </div>
  )
}


export default Chart
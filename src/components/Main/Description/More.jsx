import React from 'react'
import styles from './Description.module.scss'

const More = ({children}) => {
  return (
    <div className={styles.addMore}>
      {children}
    </div>
  )
}

export default More

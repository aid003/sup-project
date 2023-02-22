import React from 'react'
import styles from './Statistic.module.scss'
import data from './statistic.data'

const Statistic = () => {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>Лучшие коины</p>
      <div className={styles.content}>
        {data.map((item) => (
            <div className={styles.item} key={item.id} >
                <span>{item.name}</span>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Statistic

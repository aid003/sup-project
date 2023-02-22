import React from 'react'
import data from './friends.data'
import styles from './Friends.module.scss'

const Friends = () => {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>Друзья</p>
      <div className={styles.content}>
        {data.map((item) => (
            <div className={styles.item} key={item.id} >
                <img src={item.img}></img>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Friends

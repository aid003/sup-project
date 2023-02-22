import React from 'react'
import Arrow from './Arrow/Arrow'
import styles from './Profile.module.scss'

import avatar from '../../../assets/avatar/example.svg'

const Profile = () => {
  return (
    <div className={styles.container}>
        <div className={styles.avatar}>
            <img src={avatar} />
        </div>
       <Arrow /> 
    </div>
  )
}

export default Profile

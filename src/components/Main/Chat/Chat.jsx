import React from 'react'
import chat from '../../../assets/avatar/Frame.png'
import styles from './Chat.module.scss'

const Chat = () => {
  return (
    <div className={styles.container}>
      <img src={chat}></img>
    </div>
  )
}

export default Chat

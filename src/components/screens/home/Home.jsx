import styles from './Home.module.scss'
import Chart from '../../Main/Chart/Chart'
import { useNavigate } from 'react-router-dom'

import Layout from '../../Layout/Header'
import React from 'react'
import Description from '../../Main/Description/Description'
import Blog from '../../Main/Blog/Blog'
import Chat from '../../Main/Chat/Chat'
import Card from '../../Main/Card/Card'
import Statistic from '../../Main/Statistic/Statistic'
import Friends from '../../Main/Friends/Friends'

const Home = () => {

  return (
    <div>
      <Layout>
        <div className={styles.wraper}>
          <div className={styles.container}>
            <Chart></Chart>
            <Description></Description>
            <Blog></Blog>
          </div>
          <div className={styles.middle}></div>
          <div className={styles.content}>
            <Chat></Chat>
            <Card></Card>
            <Statistic></Statistic>
            <Friends></Friends>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home

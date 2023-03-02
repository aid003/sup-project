import styles from './Home.module.scss'
import Chart from '../../Main/Chart/Chart'
import { useNavigate } from 'react-router-dom'

import Layout from '../../Layout/Layout'
import React from 'react'
import Description from '../../Main/Description/Description'
import Blog from '../../Main/Blog/Blog'
import Chat from '../../Main/Chat/Chat'
import Card from '../../Main/Card/Card'
import Statistic from '../../Main/Statistic/Statistic'
import Friends from '../../Main/Friends/Friends'
import Header from '../../Layout/Header'

const Home = () => {

  return (
    <Layout>
      <Header>
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
      </Header>
    </Layout>
  )
}

export default Home

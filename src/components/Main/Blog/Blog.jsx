import React from 'react'
import styles from './Blog.module.scss'
import blog from './blog.data'

const Blog = () => {
  return (
    <div className={styles.container}>
      <p>{blog.header}</p>
      <p>{blog.text}</p>
      <img src={blog.img} />
    </div>
  )
}

export default Blog

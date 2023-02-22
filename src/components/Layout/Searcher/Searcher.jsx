import styles from './Searcher.module.scss'

import { AiOutlineSearch } from 'react-icons/ai'

import React from 'react'

const Searcher = () => {
  return (
    <form className={styles.container}>
        <label htmlFor='input'><AiOutlineSearch /></label>
        <input id='input' type='text' defaultValue='Поиск...' />
    </form>
  )
}

export default Searcher

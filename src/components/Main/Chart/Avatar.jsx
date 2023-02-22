import React, { useState } from 'react'
import styles from './Chart.module.scss'
import path from '../../../assets/avatar/example.svg'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'


const Avatar = () => {
	const [like, setLike] = useState(0)
	const [dislike, setDisLike] = useState(0)

	const addLikeHandler = () => {
		setLike(like + 1)
	}
	const addDislikeHandler = () => {
		setDisLike(dislike + 1)
	}

	return (
		<section className={styles.content}>
			<div className={styles.avatar}>
				<img src={path} />
				<p>Муса</p>
			</div>
			<button className={styles.buyButton}>Купить</button>
			<a className={styles.telegramIcon}><FaTelegramPlane /></a>
			<a className={styles.telegramIcon}><AiOutlineStar /></a>
			<div className={styles.buttonHolder}>
				<button onClick={addLikeHandler} id='like'><BiLike /></button>
				<label>{like}</label>
				<button onClick={addDislikeHandler} id='disLike'><BiDislike /></button>
				<label>{dislike}</label>
			</div>
		</section>
	)
}

export default Avatar

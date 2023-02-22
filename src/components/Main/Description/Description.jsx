import React, { useState } from 'react'
import description from './Description.data'
import styles from './Description.module.scss'
import More from './More'


const Description = () => {

	const [isOpenMore, setIsOpenMore] = useState(false)

	const OpenMoreHandler = () => {
		setIsOpenMore(!isOpenMore)
	}

	return (
		<section className={styles.container}>
			<p className={styles.date}>{description.date}</p>
			<p className={styles.text}>{description.text}</p>
			{isOpenMore && <More><p>something</p></More>}
			<button onClick={OpenMoreHandler} className={styles.buttonMore}>Ещё</button>
		</section>
	)
}

export default Description

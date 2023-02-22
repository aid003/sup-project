import React from 'react'
import styles from './Card.module.scss'

import group from '../../../assets/icons/Group.svg'
import stars from '../../../assets/icons/Outline.svg'
import lins from '../../../assets/icons/lins.svg'
import arrow from '../../../assets/icons/arrow.svg'
import coins from '../../../assets/icons/coins.svg'
import up from '../../../assets/icons/up.svg'

import data from './card.data'

const Card = () => {
	return (
		<section className={styles.container}>
			<div className={styles.leftColumn}>
				<div>
					<img id='group' src={group}></img>
					<label htmlFor="#group">{data.group}</label>
				</div>
				<div>
					<img id='stars' src={stars}></img>
					<label htmlFor="#stars">{data.stars}</label>
				</div>
				<div>
					<img id='lins' src={lins}></img>
					<label htmlFor="#lins">{data.lins}</label>
				</div>
			</div>
			<div className={styles.rightColumn}>
				<div>
					<img id='up' src={up}></img>
					<label htmlFor="#up">{data.up}</label>
				</div>
				<div>
					<img id='coins' src={coins}></img>
					<label htmlFor="#coins">{data.coin}</label>
				</div>
				<div>
					<img id='arrow' src={arrow}></img>
					<label htmlFor="#arrow">{data.arrow}</label>
				</div>
			</div>
		</section>
	)
}

export default Card

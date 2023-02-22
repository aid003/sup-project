import styles from './Field.module.scss'

const Field = ({ name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input {...rest} className={styles.input} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Field
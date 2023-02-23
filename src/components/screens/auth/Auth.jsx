import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Field from '../../UI/Field/Field'
import Loader from '../../UI/Loader'
import styles from './Auth.module.scss'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {
	const [type, setType] = useState('auth')
	
	/* 
	TODO:

	[] - Auth context
	[] - Axios
	[] - React Query

*/

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	
	const onSubmit = data => {
		// type
		console.log(data)
	}

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.heading}>Форма регистрации на площадке</h1>
				{isLoading || isLoadingAuth && <Loader />}
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required',
						}}
						type='text'
						placeholder='Enter Email'>
					</Field>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required',
						}}
						type='password'
						placeholder='Enter Password'>
					</Field>
					<div className={styles.wrapperButtons}>
						<button className={styles.button} onClick={() => setType('auth')}>Sign in</button>
						<button className={styles.button} onClick={() => setType('reg')}>Sign up</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth

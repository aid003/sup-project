import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import AuthService from '../../../services/auth.service'
import Layout from '../../Layout/Layout'


import Field from '../../UI/Field/Field'
import Loader from '../../UI/Loader'
import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'




const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } = useAuthPage()
	return (
		<Layout>
			<div className={styles.container}>
				<h1 className={styles.heading}>Форма регистрации на площадке</h1>
				{isLoading && <Loader />}
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
						<button className={styles.button} onClick={() => setType('login')}>Sign in</button>
						<button className={styles.button} onClick={() => setType('register')}>Sign up</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Auth

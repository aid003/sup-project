import React from 'react'

import { menu } from './arrow-menu'
import cn from 'clsx'

import styles from './Arrow.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'

const ArrowMenu = ({ isShow, setIsShow }) => {

    const { isAuth } = useAuth()

    const navigate = useNavigate()

    const logoutHandler = () => {
        setIsShow(false)
        navigate('/auth')
        // is Auth = false
    }
    return (
        <nav
            className={cn(styles.menu, {
                [styles.show]: isShow
            })}
        >
            <ul>
                {menu.map((item, index) => (
                    <li key={`_menu_${index}`}>
                        <div to={item.link}>{item.title}</div>
                    </li>
                ))}
                <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default ArrowMenu

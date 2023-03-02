import React from 'react'

import { menu } from './arrow-menu'
import cn from 'clsx'

import styles from './Arrow.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../../app.constants'

const ArrowMenu = ({ isShow, setIsShow }) => {
    const { setIsAuth } = useAuth()

    const navigate = useNavigate()

    const logoutHandler = () => {
        Cookies.remove(TOKEN)
        setIsShow(false)
        setIsAuth(false)
        navigate('/auth')
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

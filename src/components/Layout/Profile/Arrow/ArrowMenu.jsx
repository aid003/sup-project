import React from 'react'

import { menu } from './arrow-menu'
import cn from 'clsx'

import styles from './Arrow.module.scss'

const ArrowMenu = ({ isShow, setIsShow }) => {
    const logoutHandler = () => {
        setIsShow(false)
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
                    <button onClick={logoutHandler}>out</button>
                </li>
            </ul>
        </nav>
    )
}

export default ArrowMenu

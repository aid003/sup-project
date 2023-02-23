import cn from 'clsx'

import { Link } from 'react-router-dom'

import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

import React from 'react'

const Menu = ({ isShow, setIsShow }) => {

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
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                <li>
                    <button onClick={logoutHandler}>Out</button>
                </li>
            </ul>
        </nav>
    )
}

export default Menu

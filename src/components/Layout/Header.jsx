import styles from './Header.module.scss'

import React from 'react'
import Hamburger from './Hamburber/Hamburger'
import Se from './SE/Se'
import Searcher from './Searcher/Searcher'
import Wallet from './Wallet/Wallet'
import Profile from './Profile/Profile'
import { useCheckToken } from '../../hooks/useCheckToken'

const Header = ({ children }) => {
    useCheckToken()
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Hamburger />
                <Se />
                <Searcher />
                <Wallet />
                <Profile />
            </div>
            <section className={styles.main__content}>
                {children}
            </section>
        </div>
    )
}

export default Header

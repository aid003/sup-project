import styles from './Hamburger.module.scss'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import Menu from './Menu'

import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'

import React from 'react'

const Hamburger = () => {
    const { isShow, ref, setIsShow } = useOnClickOutside(false)

    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)} aria-label='Open menu'>
                {isShow ? <IoClose /> : <RxHamburgerMenu />}
            </button>
            <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    )
}

export default Hamburger

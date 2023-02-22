import styles from './Arrow.module.scss'
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside'

import React from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import ArrowMenu from './ArrowMenu'

const Arrow = () => {
    const { isShow, ref, setIsShow } = useOnClickOutside(false)

    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)} aria-label='Open menu'>
                {isShow ? <IoClose /> : <IoIosArrowDown />}
            </button>
            <ArrowMenu isShow={isShow} setIsShow={setIsShow} />
        </div>
    )
}

export default Arrow

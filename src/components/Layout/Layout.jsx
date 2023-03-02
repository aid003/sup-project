import React from 'react'
import { useCheckToken } from '../../hooks/useCheckToken'

const Layout = ({children}) => {
    useCheckToken()
    return (
        <div>
           {children} 
        </div>
    )
}

export default Layout

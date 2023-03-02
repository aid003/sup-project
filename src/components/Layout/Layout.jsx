import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useCheckToken } from '../../hooks/useCheckToken'

const Layout = ({ children }) => {
    useCheckToken()

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout

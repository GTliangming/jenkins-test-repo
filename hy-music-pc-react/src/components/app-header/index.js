import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function HYAppHeader() {
    return (
        <div>
            <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friends">好友音乐</NavLink>
        </div>
    ) 
})

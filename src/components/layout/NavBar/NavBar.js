import React from 'react'
import "./NavBar.scss"
const NavBar = () => {
    return (
        <nav className='nav__container'>
            <div className='nav__logo'>Logo</div>
            <ul className='nav__list'>
                <li className='nav__item nav__item--active'>Home</li>
                <li className='nav__item'>Explore</li>
                <li className='nav__item'>Messages</li>
                <li className='nav__item'>Notifications</li>
                <li className='nav__item'>Bookmarks</li>
                <li className='nav__item'>Profile</li>
            </ul>
            <div>
                Tweet
            </div>
        </nav>
    )
}

export default NavBar

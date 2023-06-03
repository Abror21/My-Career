import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from './Company.module.scss'
import classesNav from './Navigation.module.scss'
import { Link } from 'react-router-dom'
import Logo from './assets/logo.png'
import ProfilePhoto from './assets/profilePhoto.png'
import { FiChevronDown } from 'react-icons/fi'


const Nav = (props) => {

    const [activePage, setActivePage] = useState('jobs');
    const [userDropdown, setUserDropdown] = useState(false)
    const [languageDropdown, setLanguageDropdown] = useState(false)

    useEffect(() => {
        setUserDropdown(false)
        setLanguageDropdown(false)
      }, [activePage]);

    const len = useSelector(state => state.lenguage.lenguage)

    const handleLinkClick = (value) => {
        setActivePage(value)
        props.handleStateChange(value)
    }

    return (
        <div className={classes.background}>
            <div className={classesNav.menu}>
                <Link to={`/${len}/`}><img src={Logo} alt="" /></Link>
                <div className={classesNav.right__side}>
                    <ul className={classesNav.menu__links}>
                        <li className={activePage === 'jobs' ? classesNav.active : classesNav.menu__link} onClick={() => handleLinkClick('jobs')}>
                            Jobs
                        </li>
                        <li className={activePage === 'talents' ? classesNav.active : classesNav.menu__link} onClick={() => handleLinkClick('talents')}>
                            Talents
                        </li>
                        <li className={activePage === 'about' ? classesNav.active : classesNav.menu__link} onClick={() => handleLinkClick('about')}>
                            About us
                        </li>
                        <li className={activePage === 'contact' ? classesNav.active : classesNav.menu__link} onClick={() => handleLinkClick('contact')}>
                            Contact us
                        </li>
                    </ul>
                    <div className={classesNav.menu__buttons}>
                        <div className={userDropdown ? classesNav.dropdown : `${classesNav.dropdown} ${classesNav.boxShadow}`}>
                            <button className={classesNav.DropdownMenu} onClick={() => setUserDropdown(!userDropdown)}>
                                <img src={ProfilePhoto} alt="" />
                                Umid A
                                <FiChevronDown size={15}/>
                            </button>
                            {userDropdown &&
                            <ul>
                                <li onClick={() => handleLinkClick('company')}>Profile</li>
                                <li>Notifications</li>
                                <li>Contracts</li>
                                <li onClick={() => handleLinkClick('myPostings')}>My Jobs</li>
                                <li>Chats</li>
                                <li>Log out</li>
                            </ul>}
                        </div>
                        <div className={languageDropdown ? classesNav.dropdown : `${classesNav.dropdown} ${classesNav.boxShadow}`}>
                            <button className={classesNav.DropdownMenu} onClick={() => setLanguageDropdown(!languageDropdown)}>
                                En
                                <FiChevronDown size={15}/>
                            </button>
                            {languageDropdown &&
                            <ul>
                                <li>En</li>
                                <li>Ru</li>
                                <li>Uz</li>
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Talents.module.scss'
import ProfilePhoto from './assets/profilePhoto.png'
import Video from './assets/vid.png'
import FreelancerProfile from './assets/freelancerProfilePhoto.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { FiHeart } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Freelancer from './components/cards/Freelancer'
import Filter from './components/filter/Filter'

const Talents = (props) => {

    const [clientJobs, setClientJobs] = useState('best')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.jobAdContainer}>
                <div className={classes.jobAd}>
                    <div className={classes.search}>
                        <input type="text" placeholder='Title, keywords'/>
                        <button><HiOutlineSearch size={18}/></button>
                    </div>
                    <div className={classes.sort}>
                        <ul className={classes.menu__links}>
                            <li className={clientJobs === 'best' ? classes.active : classes.menu__link} onClick={() => setClientJobs('best')}>
                                Best matches
                            </li>
                            <li className={clientJobs === 'recent' ? classes.active : classes.menu__link} onClick={() => setClientJobs('recent')}>
                                Recent
                            </li>
                            <li className={clientJobs === 'saved' ? classes.active : classes.menu__link} onClick={() => setClientJobs('saved')}>
                                Saved
                            </li>
                        </ul>
                    </div>
                    <div className={classes.jobAdProposals}>
                        <Freelancer handleStateChange={props.handleStateChange} initialState={props.initialState}/>
                    </div>
                </div>
                <Filter />
            </div>
        </>
    )
}

export default Talents
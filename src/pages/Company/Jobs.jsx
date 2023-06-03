import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Jobs.module.scss'
import CompanyLogo from './assets/compLogo.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { FiHeart } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Filter from './components/filter/Filter'
import Job from './components/cards/Job'

const Jobs = (props) => {

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
                    <div className={classes.companyClientJobs}>
                        <Job handleStateChange={props.handleStateChange} initialState={props.initialState}/>
                    </div>
                </div>
                <Filter />
            </div>
        </>
    )
}

export default Jobs
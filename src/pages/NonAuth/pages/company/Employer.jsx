import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Company.module.scss'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import Company from './Company'
import Jobs from './Jobs'
import Talents from './Talents'
import JobAd from './JobAd'
import Freelancer from './Freelancer'
import MyPostings from './MyPostings'
import { CgClose } from 'react-icons/cg'

const Employer = () => {

    const [activePage, setActivePage] = useState('jobs')
    const [openModal, setOpenModal] = useState({open : false, modal: '', id: ''})
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    const handleStateChange = (newValue) => {
        setActivePage(newValue)
    }
    const handleOpenModal = ({open, modal, id}) => {
        setOpenModal({open : open, modal : modal, id: id})
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={classes.container}>
            <div className={classes.circleBg}>
                <img src={Circle} alt="" />
            </div>
            <Nav handleStateChange={handleStateChange}/>
            {activePage === 'company' && <Company />}
            {activePage === 'jobs' && <Jobs handleStateChange={handleOpenModal} initialState={openModal}/>}
            {activePage === 'talents' && <Talents handleStateChange={handleOpenModal} initialState={openModal}/>}
            {activePage === 'jobAd' && <JobAd />}
            {activePage === 'freelancer' && <Freelancer />}
            {activePage === 'myPostings' && <MyPostings />}
            {openModal.open && <div className={classes.modal} >
                <div className={classes.closeButton} onClick={() => setOpenModal({open : false, modal : '', id: ''})}><CgClose size={20}/></div>
                <div onClick={() => {setActivePage(openModal.modal); setOpenModal({open : false, modal : '', id: ''})}}>{openModal.modal === "jobAd" && <JobAd />}</div>
                <div onClick={() => {setActivePage(openModal.modal); setOpenModal({open : false, modal : '', id: ''})}}>{openModal.modal === "freelancer" && <Freelancer />}</div>
            </div>}
        </div>
    )
}

export default Employer
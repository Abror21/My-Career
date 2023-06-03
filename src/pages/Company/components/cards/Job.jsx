import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Cards.module.scss'
import CompanyLogo from '../../assets/compLogo.png'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'

const Job = (props) => {

    const [clientJobs, setClientJobs] = useState('best')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    const openModal = () => {
        props.handleStateChange({open: !props.initialState.open, modal: 'jobAd', id: ''})
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.companyClientJob}>
                    <div className={classes.companyClientJobRow}>
                        <div className={classes.companyClientJobLeft}>
                            <h3 className={classes.companyClientJobName} onClick={openModal}>Business Card Design</h3>
                            <div className={classes.verticalLineBreak} />
                            <h3 className={classes.companyClientJobCost}>$10</h3>
                            <div className={classes.verticalLineBreak} />
                            <h3 className={classes.companyClientJobDays}>3 days</h3>
                            <div className={classes.verticalLineBreak} />
                            <p>Required level: <b>Middle</b></p>    
                        </div>
                    </div>
                    <div className={classes.companyClientJobDescription}>
                        <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                        <BsChevronDown size={30}/>
                    </div>
                    <div className={classes.companyClientJobRequiredSkills}>
                        <p>Figma</p> | 
                        <p>Adobe Photoshop</p> | 
                        <p>Adobe Illustrator</p>
                    </div>
                    <div className={classes.companyClientJobRow}>
                        <div className={classes.companyClientJobLeft}>
                            <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                            <div className={classes.companyName}>
                                <h4>Napa Automotive</h4>
                                <div className={classes.verified}>
                                    <MdVerified color='#1F57C3'/><p>Verified</p>
                                </div>
                            </div>
                            <div className={classes.verticalLineBreak} />
                            <div className={classes.yearsInService}>
                                <h4>3 years</h4>
                                <p>In service</p>
                            </div>
                            <div className={classes.verticalLineBreak} />
                            <div className={classes.paid}>
                                <h4>24</h4>
                                <p>Completed Jobs</p>
                            </div>
                            <div className={classes.verticalLineBreak} />
                            <div className={classes.paid}>
                                <h4>$1530</h4>
                                <p>Paid</p>
                            </div>
                            <div className={classes.verticalLineBreak} />
                        </div>
                        <p className={classes.postedDate}>Posted 5 days ago</p>
                    </div>
                </div>  
        </>
    )
}

export default Job
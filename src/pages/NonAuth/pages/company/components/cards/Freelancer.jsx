import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Cards.module.scss'
import FreelancerProfile from '../../assets/freelancerProfilePhoto.png'
import { FiHeart } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Freelancer = (props) => {

    const [clientJobs, setClientJobs] = useState('best')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    const openModal = () => {
        props.handleStateChange({open: !props.initialState.open, modal: 'freelancer', id: ''})
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.proposal}>
                <div className={classes.proposalRow}>
                    <div className={classes.proposalLeft}>
                        <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                            <div className={classes.freelancerInfo} onClick={openModal}>
                                <div className={classes.verified}>
                                    <h4>Michel R</h4>
                                    <MdVerified color='#1F57C3'/>
                                </div>
                                <p>Web Design UI/UX</p>
                            </div>
                    </div>
                    <div className={classes.proposalLeft}>
                    <div className={classes.verticalLineBreak} />
                    <div className={classes.freelancerStats}>
                            <h4>80%</h4>
                            <div className={classes.successRate}>
                                <div className={classes.rateBar}></div>
                            </div>
                            <p>Job success</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                        <div className={classes.freelancerStats}>
                            <h4>5$</h4>
                            <p>Hourly</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                        <div className={classes.freelancerStats}>
                            <h4>2</h4>
                            <p>days</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                    </div>
                    <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                </div>
                <div className={classes.proposalLetter}>
                    <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                    <BsChevronDown size={30}/>
                </div>
                <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                    <div className={classes.freelancerKeySkills}>
                        <p>Figma</p>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Illustrator</p>
                    </div>
                    <p>Level: <b>Middle</b></p>
                </div>
                <div className={classes.proposalRow}>
                    <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                    <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                </div>
            </div>
        </>
    )
}

export default Freelancer
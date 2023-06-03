import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './JobAd.module.scss'
import ProfilePhoto from './assets/profilePhoto.png'
import Video from './assets/vid.png'
import FreelancerProfile from './assets/freelancerProfilePhoto.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const JobAd = () => {

    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.jobAdContainer}>
                <div className={classes.jobAd}>
                    <div className={classes.jobTitle}>
                        <h3>Business Card Design</h3>
                        <button className={classes.editJobAdButton}><HiOutlinePencil size={18} className={classes.centeredItem}/></button>
                    </div>
                    <div className={classes.jobDescription}>
                        <p>Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
                    </div>
                    <div className={classes.jobAdPhoto}>
                        <img src={Video} alt="" className={classes.photo}/>
                    </div>
                    <div className={classes.jobAdProposals}>
                        <h3>Proposals (27)</h3>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
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
                                </div>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerKeySkills}>
                                <p>Figma</p>
                                <p>Adobe Photoshop</p>
                                <p>Adobe Illustrator</p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <div className={classes.freelancerInfo}>
                                        <div className={classes.verified}>
                                            <h4>Michel R</h4>
                                            <MdVerified color='#1F57C3'/>
                                        </div>
                                        <p>Web Design UI/UX</p>
                                    </div>
                                </div>
                                <div className={classes.proposalLeft}>
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
                                </div>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerKeySkills}>
                                <p>Figma</p>
                                <p>Adobe Photoshop</p>
                                <p>Adobe Illustrator</p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <div className={classes.freelancerInfo}>
                                        <div className={classes.verified}>
                                            <h4>Michel R</h4>
                                            <MdVerified color='#1F57C3'/>
                                        </div>
                                        <p>Web Design UI/UX</p>
                                    </div>
                                </div>
                                <div className={classes.proposalLeft}>
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
                                </div>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerKeySkills}>
                                <p>Figma</p>
                                <p>Adobe Photoshop</p>
                                <p>Adobe Illustrator</p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.seeMore}><a href="">See more...</a></div>
                    </div>
                </div>
                <div className={classes.verticalLineBreak} />
                <div className={classes.companyInfo}>
                    <div className={classes.companyRep}>
                        <div className={classes.repPhoto}>
                            <img src={ProfilePhoto} alt="" />
                            <MdVerified size={18} color={'#1F57C3'} className={classes.verificationBadge}/>
                        </div>
                        <div className={classes.repInfo}>
                            <h3>Umid Abdusattorov</h3>
                            <p>CEO</p>
                            <Link to={`/${len}/company`}>Napa Automotive</Link>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.jobAdDetails}>
                        <h3>Price</h3>
                        <p>$5</p>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.jobAdDetails}>
                        <h3>Deadline</h3>
                        <p>3days</p>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.jobAdDetails}>
                        <h3>Required level</h3>
                        <p>Middle</p>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.jobAdDetails}>
                        <h3>Required Skills</h3>
                        <p>Figma | Adobe Photoshop | Adobe Illustrator</p>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                </div>
            </div>
        </>
    )
}

export default JobAd
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Freelancer.module.scss'
import ProfilePhoto from './assets/freelancerProfilePhoto.png'
import Video from './assets/vid.png'
import PortfolioItemImg1 from './assets/portfolio1.png'
import PortfolioItemImg2 from './assets/portfolio2.png'
import CompanyLogo from './assets/compLogo.png'
import Playbutton from './assets/playButton.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown, } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiStar, HiOutlineLocationMarker} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Freelancer = () => {

    const [clientJobs, setClientJobs] = useState('completed')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.freelancerContainer}>
                <div className={classes.freelancerIntro}>
                    <div className={classes.freelancer}>
                        <div className={classes.freelancerProfile}>
                            <div className={classes.freelancerPhoto}>
                                <img src={ProfilePhoto} alt="" />
                            </div>
                            <div className={classes.freelancerNameTitle}>
                                <h3>Michel R <MdVerified size={20} color={'#1F57C3'}/></h3>
                                <p>Web-design UI/UX<span>Middle</span></p>
                            </div>
                        </div>
                        <div className={classes.freelancerRating}>
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
                        </div>
                        <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                    </div>
                    <div className={classes.companyAboutText}>
                        <p>I have been in the IT business for more than 11 years.
                        <br/><br/>
                        With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.</p>
                    </div>
                    <div className={classes.freelancerVideo}>
                        <img src={Playbutton} alt="" className={classes.play}/>
                        <img src={Video} alt="" className={classes.video}/>
                    </div>
                    <button className={classes.sendMessageButton}>Send a message</button>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.freelancerPortfolio}>
                        <h3>Portfolio (14)</h3>
                        <div className={classes.portfolioItems}>
                            <div className={classes.portfolioItem}>
                                <img src={PortfolioItemImg1} alt="" />
                                <h4>Mobile App My Career</h4>
                                <p>6 days ago</p>
                            </div>
                            <div className={classes.portfolioItem}>
                                <img src={PortfolioItemImg2} alt="" />
                                <h4>Mobile App My Career</h4>
                                <p>6 days ago</p>
                            </div>
                            <div className={classes.portfolioItem}>
                                <img src={PortfolioItemImg2} alt="" />
                                <h4>Mobile App My Career</h4>
                                <p>6 days ago</p>
                            </div>
                            <div className={classes.portfolioItem}>
                                <img src={PortfolioItemImg1} alt="" />
                                <h4>Mobile App My Career</h4>
                                <p>6 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak}/>
                    <div className={classes.freelancerWorks}>
                        <h3>Work History (27)</h3>
                        <ul className={classes.menu__links}>
                            <li className={clientJobs === 'completed' ? classes.active : classes.menu__link} onClick={() => setClientJobs('completed')}>
                                Completed (324)
                            </li>
                            <li className={clientJobs === 'inProgress' ? classes.active : classes.menu__link} onClick={() => setClientJobs('inProgress')}>
                                In progress (3)
                            </li>
                        </ul>
                        <div className={classes.freelancerWork}>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <h3 className={classes.freelancerWorkName}>Odoo 13.0 Implementation Support</h3>
                                </div>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <div className={classes.stars}>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#CDCDCD' size={18}/>
                                    </div>
                                    <h4>4.00</h4>
                                </div>
                                <p>Aug 5, 2021 - Oct 21, 2021</p>
                            </div>
                            <div className={classes.clientReviewText}>
                                <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                    <div className={classes.companyName}>
                                        <h4>Napa Automotive</h4>
                                        <div className={classes.verified}>
                                            <MdVerified color='#1F57C3'/><p>Verified</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.workHoursCost}>
                                    <div className={classes.hourlyRate}>
                                        <h4>$5</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.hoursWorked}>
                                        <h4>10</h4>
                                        <p>hours</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.totalPaid}>
                                        <h4>$50</h4>
                                        <p>Paid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.freelancerWork}>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <h3 className={classes.freelancerWorkName}>Odoo 13.0 Implementation Support</h3>
                                </div>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <div className={classes.stars}>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#CDCDCD' size={18}/>
                                    </div>
                                    <h4>4.00</h4>
                                </div>
                                <p>Aug 5, 2021 - Oct 21, 2021</p>
                            </div>
                            <div className={classes.clientReviewText}>
                                <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                    <div className={classes.companyName}>
                                        <h4>Napa Automotive</h4>
                                        <div className={classes.verified}>
                                            <MdVerified color='#1F57C3'/><p>Verified</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.workHoursCost}>
                                    <div className={classes.hourlyRate}>
                                        <h4>$5</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.hoursWorked}>
                                        <h4>10</h4>
                                        <p>hours</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.totalPaid}>
                                        <h4>$50</h4>
                                        <p>Paid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.freelancerWork}>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <h3 className={classes.freelancerWorkName}>Odoo 13.0 Implementation Support</h3>
                                </div>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <div className={classes.stars}>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#1D71B8' size={18}/>
                                        <HiStar color='#CDCDCD' size={18}/>
                                    </div>
                                    <h4>4.00</h4>
                                </div>
                                <p>Aug 5, 2021 - Oct 21, 2021</p>
                            </div>
                            <div className={classes.clientReviewText}>
                                <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={classes.freelancerWorkRow}>
                                <div className={classes.freelancerWorkLeft}>
                                    <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                    <div className={classes.companyName}>
                                        <h4>Napa Automotive</h4>
                                        <div className={classes.verified}>
                                            <MdVerified color='#1F57C3'/><p>Verified</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.workHoursCost}>
                                    <div className={classes.hourlyRate}>
                                        <h4>$5</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.hoursWorked}>
                                        <h4>10</h4>
                                        <p>hours</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.totalPaid}>
                                        <h4>$50</h4>
                                        <p>Paid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.seeMore}><a href="">See more...</a></div>
                    </div>
                </div>
                <div className={classes.verticalLineBreak} />
                <div className={classes.companyInfo}>
                    <div className={classes.companyStats}>
                        <div className={classes.companyStat}>
                            <h3>$5936</h3>
                            <p>Totally earnings</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                        <div className={classes.companyStat}>
                            <h3>324</h3>
                            <p>Total Jobs</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                        <div className={classes.companyStat}>
                            <h3>1027</h3>
                            <p>Total Hours</p>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyEmployees}>
                        <h3>Available</h3>
                        <p>More than 40 hours/week</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.languages}>
                        <h3>Languages</h3>
                        <div className={classes.language}>
                            <p>English: <span>C2 -</span> Native Speaker</p>
                        </div>
                        <div className={classes.language}>
                            <p>Russian: <span>B2 -</span> Upper Intermediate</p>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyVerifications}>
                        <h3>Verifications</h3>
                        <div className={classes.verified}>ID: Verified<MdVerified color='#1F57C3'/></div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.education}>
                        <h3>About Company</h3>
                        <div className={classes.school}>
                            <p>Skans School of Accountancy Other, ACCA (Association of Chartered Certified Accountant)</p>
                            <p>2012-2018</p>
                        </div>
                        <div className={classes.school}>
                            <p>Aptech Computer Education Other, Software and Website Development (ASP.NET C#)</p>
                            <p>2010-2011</p>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.freelancerExperience}>
                        <h3>Experience</h3>
                        <p>NAPA Automotive: UX UI Designer</p>
                        <p>March 2022 - Now</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.freelancerSkills}>
                        <h3>Skills</h3>
                        <div className={classes.freelancerKeySkills}>
                                <p>Figma</p>
                                <p>html</p>
                                <p>Adobe Photoshop</p>
                            </div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.livingAdress}>
                        <h3>Living Adress</h3>
                        <p><HiOutlineLocationMarker size={18} className={classes.blueIcon}/> Tashkent, Uzbekistan</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyEstabilished}>
                        <h3>Member Since</h3>
                        <p>June 9, 2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Freelancer
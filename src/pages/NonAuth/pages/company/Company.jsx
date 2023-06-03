import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Company.module.scss'
import ProfilePhoto from './assets/profilePhoto.png'
import Video from './assets/vid.png'
import CompanyLogo from './assets/compLogo.png'
import Playbutton from './assets/playButton.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown, BsFacebook, BsTelegram, BsWhatsapp, BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs'
import { FiMail, FiPhone } from 'react-icons/fi'
import { GrLocation} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Company = () => {

    const [clientJobs, setClientJobs] = useState('active')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.companyContainer}>
                <div className={classes.companyAbout}>
                    <div className={classes.companyRep}>
                        <div className={classes.repPhoto}>
                            <img src={ProfilePhoto} alt="" />
                        </div>
                        <div className={classes.repInfo}>
                            <h3>Umid Abdusattorov <MdVerified size={20} color={'#1F57C3'}/></h3>
                            <p>CEO<a href="">Napa Automotive</a></p>
                        </div>
                    </div>
                    <div className={classes.companyAboutText}>
                        <p>The company offers services to improve the efficiency of other companies. With the help of our highly qualified specialists and modern technologies, we integrate our knowledge and skills to increase efficiency.
                        <br/><br/>
                        Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
                    </div>
                    <div className={classes.companyAboutVideo}>
                        <img src={Playbutton} alt="" className={classes.play}/>
                        <img src={Video} alt="" className={classes.video}/>
                    </div>
                    <div className={classes.companyClientJobs}>
                        <h3>Client Jobs (27)</h3>
                        <ul className={classes.menu__links}>
                            <li className={clientJobs === 'active' ? classes.active : classes.menu__link} onClick={() => setClientJobs('active')}>
                                Active (4)
                            </li>
                            <li className={clientJobs === 'completed' ? classes.active : classes.menu__link} onClick={() => setClientJobs('completed')}>
                                Completed (20)
                            </li>
                            <li className={clientJobs === 'inProgress' ? classes.active : classes.menu__link} onClick={() => setClientJobs('inProgress')}>
                                In progress (3)
                            </li>
                        </ul>
                        <div className={classes.companyClientJob}>
                            <div className={classes.companyClientJobRow}>
                                <div className={classes.companyClientJobLeft}>
                                    <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobCost}>$10</h3>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobDays}>3 days</h3>
                                </div>
                                <p>Required level: <b>Middle</b></p>
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
                                        <h4>$1530</h4>
                                        <p>Paid</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <p className={classes.postedDate}>Posted 5 days ago</p>
                            </div>
                        </div>
                        <div className={classes.companyClientJob}>
                            <div className={classes.companyClientJobRow}>
                                <div className={classes.companyClientJobLeft}>
                                    <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobCost}>$10</h3>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobDays}>3 days</h3>
                                </div>
                                <p>Required level: <b>Middle</b></p>
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
                                        <h4>$1530</h4>
                                        <p>Paid</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <p className={classes.postedDate}>Posted 5 days ago</p>
                            </div>
                        </div>
                        <div className={classes.companyClientJob}>
                            <div className={classes.companyClientJobRow}>
                                <div className={classes.companyClientJobLeft}>
                                    <Link to={`/${len}/jobAd`}><h3 className={classes.companyClientJobName}>Business Card Design</h3></Link>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobCost}>$10</h3>
                                    <div className={classes.verticalLineBreak} />
                                    <h3 className={classes.companyClientJobDays}>3 days</h3>
                                </div>
                                <p>Required level: <b>Middle</b></p>
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
                                        <h4>$1530</h4>
                                        <p>Paid</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <p className={classes.postedDate}>Posted 5 days ago</p>
                            </div>
                        </div>
                        <div className={classes.seeMore}><a href="">See more...</a></div>
                    </div>
                </div>
                <div className={classes.verticalLineBreak} />
                <div className={classes.companyInfo}>
                    <div className={classes.companyStats}>
                        <div className={classes.companyStatsPaid}>
                            <h3>$5936</h3>
                            <p>Totally paid</p>
                        </div>
                        <div className={classes.verticalLineBreak} />
                        <div className={classes.companyStatsJobs}>
                            <h3>324</h3>
                            <p>Posted Jobs</p>
                        </div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyContactInfo}>
                        <ul>
                            <li><FiMail />user@name.com</li>
                            <li><FiPhone />+998 90 005 00 34</li>
                            <li><GrLocation/>17, Little Ring Road street, Tashkent, Uzbekistan</li>
                        </ul>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyVerifications}>
                        <h3>Verifications</h3>
                        <div className={classes.verified}>ID: Verified<MdVerified color='#1F57C3'/></div>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.aboutCompany}>
                        <h3>About Company</h3>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyEmployees}>
                        <h3>The number of employees</h3>
                        <p>37</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyLinks}>
                        <h3>Website Links</h3>
                        <p>https://www.behance.net/mjurayev676ba95</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companySocials}>
                        <ul>
                            <li><BsTelegram color='#40B3E0'/>t.me/Murphy_design_2001</li>
                            <li><BsWhatsapp color='#39AE41'/>t.me/Murphy_design_2001</li>
                            <li><BsFacebook color='#004F9D'/>t.me/Murphy_design_2001</li>
                            <li><BsGithub color='#323232'/>t.me/Murphy_design_2001</li>
                            <li><BsInstagram color='#FF0111'/>t.me/Murphy_design_2001</li>
                            <li><BsTwitter color='#55ACEE'/>t.me/Murphy_design_2001</li>
                        </ul>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                    <div className={classes.companyEstabilished}>
                        <h3>Estabilished Year</h3>
                        <p>June 9, 2022</p>
                    </div>
                    <div className={classes.horizontalLineBreak} />
                </div>
            </div>
        </>
    )
}

export default Company
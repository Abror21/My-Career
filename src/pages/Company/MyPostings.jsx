import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './MyPostings.module.scss'
import FreelancerProfile from './assets/freelancerProfilePhoto.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { MdVerified } from 'react-icons/md'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Talents = () => {

    const [activePostings, setActivePostings] = useState('active')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.myPostings}>
                    <h2>My Postings</h2>
                    <div className={classes.sort}>
                        <ul className={classes.sortList}>
                            <li className={activePostings === 'active' ? classes.active : classes.sortListItem} onClick={() => setActivePostings('active')}>
                                Active
                            </li>
                            <li className={activePostings === 'draft' ? classes.active : classes.sortListItem} onClick={() => setActivePostings('draft')}>
                                Draft
                            </li>
                            <li className={activePostings === 'inProgress' ? classes.active : classes.sortListItem} onClick={() => setActivePostings('inProgress')}>
                                In progress
                            </li>
                        </ul>
                    </div>
                    {activePostings === "active" && <div className={classes.postings}>
                        <div className={classes.posting}>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <h3>Job in Angular | Typescript</h3>                 
                                </div>
                                <div className={classes.column}>
                                    <div className={classes.timeStamp}>Created: <span> Oct 21, 10:17</span></div>
                                    <div className={classes.viewCount}><BsEyeFill size={15} color={'#1D71B8'}/>104</div>
                                </div>
                            </div>
                            <div className={classes.description}>
                                <p className={classes.proposalLetterText}>Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <div className={classes.stats}>
                                        <h4>$50</h4>
                                        <p>Price</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.stats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.stats}>
                                        <h4>55 <span>+3</span></h4>
                                        <p>Proposals</p>
                                    </div>
                                </div>
                                <div className={classes.column}>
                                    <div className={classes.postingButtons}>
                                        <button className={classes.editButton}>Edit</button>
                                        <button className={classes.button}>Deactivate</button>
                                        <button className={classes.button}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activePostings === "draft" && 
                    <div className={classes.postings}>
                        <div className={classes.posting}>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <h3>Job in Angular | Typescript</h3>                 
                                </div>
                            </div>
                            <div className={classes.description}>
                                <p>Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <div className={classes.timeStamp}>Created: <span> Oct 21, 10:17</span></div>
                                </div>
                                <div className={classes.column}>
                                    <div className={classes.postingButtons}>
                                        <button className={classes.editButton}>Edit</button>
                                        <button className={classes.button}>Activate</button>
                                        <button className={classes.button}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activePostings === "inProgress" && 
                    <div className={classes.postings}>
                        <div className={classes.posting}>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <h3>Oddo 13.0 Implementation Support</h3>                 
                                </div>
                                <div className={classes.column}>
                                    <div className={classes.timeStamp}>Duration: <span> Aug 21, 2022</span>-<span> Oct 21, 2023</span></div>
                                </div>
                            </div>
                            <div className={classes.description}>
                                <p>Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.column}>
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
                                <div className={classes.column}>
                                    <div className={classes.stats}>
                                        <h4>$5</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.stats}>
                                        <h4>10</h4>
                                        <p>hours</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.stats}>
                                        <h4>$50</h4>
                                        <p>Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Talents

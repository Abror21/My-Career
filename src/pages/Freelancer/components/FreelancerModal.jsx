import React from 'react';
import './FreelancerModal.scss'
import { ReactComponent as Minus } from '../../../assets/images/Freelancer/x.svg'
import user_img from '../../../assets/images/Freelancer/girl_img.svg'
import link from '../../../assets/images/Freelancer/link.svg'
import ticked from '../../../assets/images/Freelancer/ticked.svg'
import Fvideo from './Fvideo';

import location from '../../../assets/images/Freelancer/location.svg'
import PortfolioCard from './PortfolioCard';
import CompanyCard from 'pages/Company/components/CompanyCard';
// import { useContext } from 'react';
// import Context from 'components/Context/Context';




const FreelancerModal = () => {

    // const { isActive, setIsActive } = useContext(Context)

    //     const cursorHandle = () => {
    //     setIsActive(!isActive)
    // }


    const path = window.location.pathname.split('/')[1] // uz or ru or en



    return (
        <div className='freelancermodal' >
            <div  className="freelancermodal_img">
                <Minus />
            </div>

            <div className="freelancermodal_left">
                <ul className="freelancermodal_left_list">
                    <li className="freelancermodal_left_list_item freelancermodal_left_list_item1">
                        <img className='freelancermodal_left_list_item1_img' src={user_img} alt="" />
                        <div>
                            <h4>Michel Rodriges <img src={ticked} alt="" /> </h4>
                            <p> Web-design UI/UX <span>Middle</span> </p>
                        </div>
                    </li>
                    <li className="freelancermodal_left_list_item freelancermodal_left_list_item2">
                    <h4 className='freelancermodal_left_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="freelancermodal_left_list_item_info"> Job Success </p>
                    </li>
                    <li className="freelancermodal_left_list_item">
                        <h4 className='freelancermodal_left_list_item_title' > 5$ </h4>
                        <p className="freelancermodal_left_list_item_info"> Hourly </p>
                    </li>
                </ul>

                <p className="freelancermodal_left_info">
                    I have been in the IT business for more than 11 years.
                <br />
                <br />
                With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.
                </p>
                <Fvideo />

                <h3 className='freelancermodal_left_title' >Portfolio (13)</h3>
                
                <PortfolioCard />

                <h3 className='freelancermodal_left_title' >Work History</h3>

                <ul className="freelancermodal_left_wrapper">
                    <li className="freelancermodal_left_wrapper_item">
                        Completed (<span>324</span>)
                    </li>
                    <li className="freelancermodal_left_wrapper_item">
                        In progress (<span>3</span>)
                    </li>
                    <span className='freelancermodal_left_wrapper_span'></span>
                </ul>

                

                <CompanyCard />

    
    
       </div>


            <div className="freelancermodal_right">
                <a href={`${path}/freelancer-user`} target='_blank' rel='noreferrer' className='freelancermodal_right_link'> 
                    <img className='freelancermodal_right_img' src={link} alt="" />
                    Open in a new window</a>

                   < ul className="freelancermodal_right_list">
                        <li  className='freelancermodal_right_list_item freelancermodal_right_list_item1' >
                            <h4>$5936</h4>
                            <p>Total earnings</p>
                        </li>
                        <li  className='freelancermodal_right_list_item freelancermodal_right_list_item1' >
                            <h4>324</h4>
                            <p>Total jobs</p>
                        </li>
                        <li  className='freelancermodal_right_list_item ' >
                            <h4>1027</h4>
                            <p>Total hours</p>
                        </li>
                    </ul>

                    <ul className="freelancermodal_right_mainlist">
                        <li className="freelancermodal_right_mainlist_item">
                            <h4> Available</h4>
                            <span>More than 40 hrs/week</span>
                        </li>

                        <li className="freelancermodal_right_mainlist_item">
                            <h4> Verifications</h4>
                            <h5>ID: <span>More than 40 hrs/week</span> <img src={ticked} alt="" /></h5>
                        </li>

                        <li className="freelancermodal_right_mainlist_item">
                            <h4> Languages</h4>
                            <div>
                                <h5>English: <h6>C2 -</h6> <span>Native Speaker</span></h5>
                                <h5 className='freelancermodal_right_mainlist_item_h5'>Russian: <h6>B1 -</h6> <span>Upper intermedite</span></h5>
                            </div>
                        </li>
                        <li className="freelancermodal_right_mainlist_item">
                            <h4> Educations</h4>
                           <div>
                             <h5>Skans School of Accountancy Other, ACCA (Association of Chartered Certified Accountant) </h5>
                            <h6>2012-2018</h6>
                           </div>

                            <div>
                                <h5>Aptech Computer Education
                            Other, Software and Website Development (ASP.NET C#)
                            </h5>
                            <h6>2010-2011</h6>
                            </div>
                        </li>

                        <li className="freelancermodal_right_mainlist_item">
                            <h4> Experience</h4>
                            <div>
                                <h5>NAPA Automotive: <span>UX UI Designer</span></h5>
                                <h6>March 2022 - Now</h6>
                            </div>
                        </li>
                        <li className="freelancermodal_right_mainlist_item">
                            <h4>Skills</h4>
                            <div style={{"display":"flex", "gap":"10px"}} >
                            <b>Figma</b>
                            <b>html</b>
                            <b>Adobe PhotoShop</b>
                            </div>
                        </li>

                        <li className="freelancermodal_right_mainlist_item">
                            <h4>Living address</h4>
                            <h5><img src={location} alt="" /> <h6 style={{'margin-left':"10px"}} >Tashkent, Uzbekistan</h6> </h5>
                        </li>

                        <li className="freelancermodal_right_mainlist_item">
                            <h4>Member since</h4>
                            <span>June 9, 2022</span>
                        </li>

                    </ul>
            </div>
            
        </div>
    );
};

export default FreelancerModal;
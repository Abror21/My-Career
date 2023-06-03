import CompanyCard from 'pages/Company/components/CompanyCard';
import Fvideo from 'pages/Freelancer/components/Fvideo';
import PortfolioCard from 'pages/Freelancer/components/PortfolioCard';
import location from '../../assets/images/Freelancer/location.svg'
import ticked from '../../assets/images/Freelancer/ticked.svg'
import { useEffect } from 'react'
import { ReactComponent as Telegram } from '../../assets/images/FreelancerPortfolio/telegram.svg'
import { ReactComponent as Instagram } from '../../assets/images/FreelancerPortfolio/instagramm.svg'
import { ReactComponent as Twitter } from '../../assets/images/FreelancerPortfolio/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/images/FreelancerPortfolio/facebook.svg'
import { ReactComponent as Github } from '../../assets/images/FreelancerPortfolio/github.svg'
import { ReactComponent as Whatsapp } from '../../assets/images/FreelancerPortfolio/whatsapp.svg'
import React from 'react';
import './Profile.scss'
import { useSelector, useDispatch } from 'react-redux';

import { getFreelancer } from 'reduxToolkit/extraReducers';
import { useTranslation } from "react-i18next";
import { UserCircle } from 'tabler-icons-react';


const Profile = () => {
  	const { t } = useTranslation()

    const dispatch = useDispatch();

    const { data } = useSelector( state => state.freelance)

    useEffect(()=> {
		 dispatch(getFreelancer())
		 console.log(data?.data?.firstName);
		 console.log(data?.data?.freelancerImage);
	},[])

    const info = JSON.parse(localStorage.getItem("info"))
    // const { isAvialable, setIsAvialable, isPortfolio, setIsPortfolio , isAddPortfolio, setAddIsPortfolio,
    // isAddLanguage, setAddIsLanguage , isAddEducation, setAddIsEducation
    // } = useContext(Context)

    // const AviableFunc = (bol) => {
    //     setIsAvialable(bol)
    // }

    // const PortfolioFunc = (bol) => {
    //     setIsPortfolio(bol)
    // }

    // const AddPortfolioFunc = (bol) => { 
    //     setAddIsPortfolio(bol)
    // }

    // const AddIsLanguageFunc = (bol) => {
    //     setAddIsLanguage(bol)
    // }

    // const AddIsEducationFunc = (bol) => {
    //     setAddIsEducation(bol)
    // }



    return (
<>
{
    info ? 
    
    
   <div className="freelancer_container">
        <div className='userfreelancermodal' >
            <div className="userfreelancermodal_left">
                <ul className="userfreelancermodal_left_list">
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item1">
                    { info?.freelancerImage ? <img src={`http://localhost:5000/staticfiles/${info?.freelancerImage}`} className='userfreelancermodal_left_list_item1_img'  style={{"border-radius":"50%"}} alt="user photos" /> : <UserCircle  className='userfreelancermodal_left_list_item1_img' /> }
                        <div>
                            <h4>{info?.firstName} <img src={ticked} alt="" /> </h4>
                            <p  style={{'font-size':'22px'}}>{info?.freelancerPosition?.name}<span>Middle</span> </p>
                        </div>
                    </li>
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item2">
                    <h4 className='userfreelancermodal_left_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="userfreelancermodal_left_list_item_info">{t("job_success")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <h4 className='userfreelancermodal_left_list_item_title' > 5$ </h4>
                        <p className="userfreelancermodal_left_list_item_info"> {t("hourly")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <div className="userfreelancermodal_left_list_item_wrapper"  >

                        </div>
                    </li>
                </ul>

                <p className="userfreelancermodal_left_info">
                    {info?.description}
                </p>
                <Fvideo />

                <h3 className='userfreelancermodal_left_title' >{t("portfolio")} (13)
                 <div className="userfreelancermodal_left_title_wrapper"  ></div> </h3>
                <PortfolioCard />
                <h3 className='userfreelancermodal_left_title' >{t("work_history")}</h3>
                <ul className="userfreelancermodal_left_wrapper">
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("completed")} (<span>324</span>)
                    </li>
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("in_progress")}(<span>3</span>)
                    </li>
                </ul>
                <CompanyCard />
       </div>
            <div className="userfreelancermodal_right">
                   <ul className="userfreelancermodal_right_list">
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>$5936</h4>
                            <p>{t("total_earnings")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>324</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item ' >
                            <h4>1027</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                    </ul>

                    <ul className="userfreelancermodal_right_mainlist">
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("available")} <div className="userfreelancermodal_right_mainlist_item_wrapper" ></div> </h4>
                            <span>{t("more_than")} 10 {t("hrs/week")} </span>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("verifications")}</h4>
                            <h5>ID: <span>Verified</span> <img src={ticked} alt="" /></h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("language")} <div className="userfreelancermodal_right_mainlist_item_wrapper"  ></div> </h4>
                            <div>
                                { info?.userLanguages.map( e => (
                                <>
                                <h5 className='userfreelancermodal_right_mainlist_item_h5'>   {e.name}: <span>{e.level}  </span> </h5></> 
                                ) ) }
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("educations")} <div className="userfreelancermodal_right_mainlist_item_wrapper"  > </div> </h4>
                           <div>
                            { info?.educations.map(e => (
                                <>
                                 <h5>{e.schoolName} ({e.educationDegree}) {e.typeStudy} </h5>
                                 <h5>{t("location")}: <h6>{e.location}</h6></h5>
                                </>
                            )) }
                           </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("experience")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div>
                                {info?.experiences.map(e => (
                                    <>
                                    <h5>{e.companyName}: <span>{e.job}</span></h5>
                                    </>
                                ))}
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("skills")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "gap":"10px", 'max-width':'350px', 'flex-wrap':'wrap'}} >
                            {
                                info?.freelancerPosition?.freelancerSkills.map((skill) => (
                                    <b key={skill.id}>{skill.name}</b>
                                ))
                            }
                            </div>
                        </li>

                          <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("contacts")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "flex-direction": "column" , "gap":"20px"}} >
                            
                                {info?.freelancerContact?.instagram  === null ? null : <a href={`${info?.freelancerContact?.instagram }`} target='_blank' rel='noreferrer'> <h5><Instagram /> Instagram</h5></a>    }
                                {info?.freelancerContact?.telegram   === null ? null : <a href={`${info?.freelancerContact?.telegram}`} rel='noreferrer' target='_blank' ><h5><Telegram/> Telegram</h5></a> }
                                {info?.freelancerContact?.facebook   === null ? null : <a href={`${info?.freelancerContact?.facebook}`} target='_blank' rel='noreferrer'> <h5><Facebook /> Facebook</h5></a> }
                                {info?.freelancerContact?.gitHub     === null ? null : <a href={`${info?.freelancerContact?.gitHub}`} target='_blank' rel='noreferrer'> <h5><Github /> Github</h5> </a> }
                                {info?.freelancerContact?.watsApp    === null ? null : <a href={`${info?.freelancerContact?.watsApp }`} target='_blank' rel='noreferrer' > <h5><Whatsapp /> WhatsApp</h5>  </a>  }
                                {info?.freelancerContact?.twitter    === null ? null :  <a href={`${info?.freelancerContact?.twitter}`} target='_blank' rel='noreferrer'> <h5><Twitter/> Twitter</h5> </a> }
                            </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("living_address")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <h5><img src={location} alt="" /> <h6 style={{'margin-left':"10px"}} >{info?.address?.regionName}, {info?.address?.countryName}</h6> </h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("member_since")}</h4>
                            <span>{localStorage.getItem('member_since')}</span>
                            <button className='userfreelancermodal_right_mainlist_item_btn' >Resume</button>
                        </li>

                    </ul>
            </div>
            
        </div>
    </div>
     :
   <div className="freelancer_container">
        <div className='userfreelancermodal' >
            <div className="userfreelancermodal_left">
                <ul className="userfreelancermodal_left_list">
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item1">
                    { data?.data?.freelancerImage ? <img src={`http://localhost:5000/staticfiles/${data?.data?.freelancerImage}`} className='userfreelancermodal_left_list_item1_img'  style={{"border-radius":"50%"}} alt="user photos" /> : <UserCircle  className='userfreelancermodal_left_list_item1_img' /> }
                        <div>
                            <h4>{data?.data?.firstName} <img src={ticked} alt="" /> </h4>
                            <p  style={{'font-size':'22px'}}>{data?.data?.freelancerPosition?.name}<span>Middle</span> </p>
                        </div>
                    </li>
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item2">
                    <h4 className='userfreelancermodal_left_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="userfreelancermodal_left_list_item_info">{t("job_success")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <h4 className='userfreelancermodal_left_list_item_title' > 5$ </h4>
                        <p className="userfreelancermodal_left_list_item_info"> {t("hourly")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <div className="userfreelancermodal_left_list_item_wrapper"  >

                        </div>
                    </li>
                </ul>

                <p className="userfreelancermodal_left_info">
                    {data?.data?.description}
                </p>
                <Fvideo />

                <h3 className='userfreelancermodal_left_title' >{t("portfolio")} (13)
                 <div className="userfreelancermodal_left_title_wrapper"  ></div> </h3>
                <PortfolioCard />
                <h3 className='userfreelancermodal_left_title' >{t("work_history")}</h3>
                <ul className="userfreelancermodal_left_wrapper">
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("completed")} (<span>324</span>)
                    </li>
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("in_progress")}(<span>3</span>)
                    </li>
                </ul>
                <CompanyCard />
       </div>
            <div className="userfreelancermodal_right">
                   <ul className="userfreelancermodal_right_list">
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>$5936</h4>
                            <p>{t("total_earnings")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>324</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item ' >
                            <h4>1027</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                    </ul>

                    <ul className="userfreelancermodal_right_mainlist">
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("available")} <div className="userfreelancermodal_right_mainlist_item_wrapper" ></div> </h4>
                            <span>{t("more_than")} 10 {t("hrs/week")} </span>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("verifications")}</h4>
                            <h5>ID: <span>Verified</span> <img src={ticked} alt="" /></h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("language")} <div className="userfreelancermodal_right_mainlist_item_wrapper"  ></div> </h4>
                            <div>
                                { data?.data?.userLanguages.map( e => (
                                <>
                                <h5 className='userfreelancermodal_right_mainlist_item_h5'>   {e.name}: <span>{e.level}  </span> </h5></> 
                                ) ) }
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("educations")} <div className="userfreelancermodal_right_mainlist_item_wrapper"  > </div> </h4>
                           <div>
                            { data?.data?.educations.map(e => (
                                <>
                                 <h5>{e.schoolName} ({e.educationDegree}) {e.typeStudy} </h5>
                                 <h5>{t("location")}: <h6>{e.location}</h6></h5>
                                </>
                            )) }
                           </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("experience")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div>
                                {data?.data?.experiences.map(e => (
                                    <>
                                    <h5>{e.companyName}: <span>{e.job}</span></h5>
                                    </>
                                ))}
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("skills")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "gap":"10px", 'max-width':'350px', 'flex-wrap':'wrap'}} >
                            {
                                data?.data?.freelancerPosition?.freelancerSkills.map((skill) => (
                                    <b key={skill.id}>{skill.name}</b>
                                ))
                            }
                            </div>
                        </li>

                          <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("contacts")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "flex-direction": "column" , "gap":"20px"}} >
                            
                                {data?.data?.freelancerContact?.instagram  === null ? null : <a href={`${data?.data?.freelancerContact?.instagram }`} target='_blank' rel='noreferrer'> <h5><Instagram /> Instagram</h5></a>    }
                                {data?.data?.freelancerContact?.telegram   === null ? null : <a href={`${data?.data?.freelancerContact?.telegram}`} rel='noreferrer' target='_blank' ><h5><Telegram/> Telegram</h5></a> }
                                {data?.data?.freelancerContact?.facebook   === null ? null : <a href={`${data?.data?.freelancerContact?.facebook}`} target='_blank' rel='noreferrer'> <h5><Facebook /> Facebook</h5></a> }
                                {data?.data?.freelancerContact?.gitHub     === null ? null : <a href={`${data?.data?.freelancerContact?.gitHub}`} target='_blank' rel='noreferrer'> <h5><Github /> Github</h5> </a> }
                                {data?.data?.freelancerContact?.watsApp    === null ? null : <a href={`${data?.data?.freelancerContact?.watsApp }`} target='_blank' rel='noreferrer' > <h5><Whatsapp /> WhatsApp</h5>  </a>  }
                                {data?.data?.freelancerContact?.twitter    === null ? null :  <a href={`${data?.data?.freelancerContact?.twitter}`} target='_blank' rel='noreferrer'> <h5><Twitter/> Twitter</h5> </a> }
                            </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("living_address")} <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <h5><img src={location} alt="" /> <h6 style={{'margin-left':"10px"}} >{data?.data?.address?.regionName}, {data?.data?.address?.countryName}</h6> </h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>{t("member_since")}</h4>
                            <span>{localStorage.getItem('member_since')}</span>
                            <button className='userfreelancermodal_right_mainlist_item_btn' >Resume</button>
                        </li>

                    </ul>
            </div>
            
        </div>
    </div>
}
    </>
    );
};

export default Profile;
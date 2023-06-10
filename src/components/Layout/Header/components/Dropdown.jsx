import React, { useLayoutEffect } from 'react';
import './Dropdown.scss'
// import user_img from '../../../../assets/images/header/user.svg'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { profilLogout } from '../../../../reduxToolkit/loginSlice/LoginSlice';
import { getFreelancer } from '../../../../reduxToolkit/extraReducers';
import { UserCircle } from 'tabler-icons-react';
import { useTranslation } from "react-i18next";

const Dropdown = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const len = useSelector(state => state.lenguage.lenguage)
  const {data} = useSelector( state => state.freelance )

  const handleClick = () => {
    dispatch(profilLogout())
    navigate(`/${len}/`)
  }
  const info = JSON.parse(localStorage.getItem("info"))
  
  useLayoutEffect(()=> {
    dispatch(getFreelancer())
    console.log(info , 'qwertyuiop');
    console.log(data?.data?.firstName);
    console.log(data?.data?.freelancerImage);
  },[dispatch])
    

  return (
    <>{
      info ? <>

      <div className="dropdown">
        <button className="dropbtn">
          { info?.freelancerImage ? <img src={`http://localhost:5000/staticfiles/${info?.freelancerImage}`} style={{'width':"36px", "border-radius":"50%"}} alt="user photos" /> : <UserCircle  size={36} strokeWidth={1.5} color={'#86332d'} /> }
          <h4 className='dropdown_title' >{info?.firstName}</h4>
          <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />

        </button>
        <div className="dropdown-content">
          <Link to={`/${len}/profile`}>{t("profile")}</Link>
          <Link to={`/${len}/notification`}>{t("notification")} <span>○</span></Link>
          <Link to={`/${len}/contracts`}>{t("contracts")}</Link>
          <Link to={`/${len}/chat`}>{t("chats")}</Link>
          <Link to={`/${len}/resume`}>{t("resume")}</Link>
          <button onClick={handleClick}>{t("log_out")}</button>
        </div>
      </div>

      </> :
      <div className="dropdown">
        <button className="dropbtn">
          { data?.data?.freelancerImage ? <img src={`http://localhost:5000/staticfiles/${data?.data?.freelancerImage}`} style={{'width':"36px", "border-radius":"50%"}} alt="user photos" /> : <UserCircle  size={36} strokeWidth={1.5} color={'#86332d'} /> }
          <h4 className='dropdown_title' >{data?.data?.firstName}</h4>
          <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />

        </button>
        <div className="dropdown-content">
          <Link to={`/${len}/profile`}>{t("profile")}</Link>
          <Link to={`/${len}/notification`}>{t("notification")} <span>○</span></Link>
          <Link to={`/${len}/contracts`}>{t("contracts")}</Link>
          <Link to={`/${len}/chat`}>{t("chats")}</Link>
          <Link to={`/${len}/resume`}>{t("resume")}</Link>
          <button onClick={handleClick}>{t("log_out")}</button>
        </div>
      </div>
    }
    </>
  );
};

export default Dropdown;
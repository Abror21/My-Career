import React from 'react';
import email from '../../../assets/images/Sign/email.png'

import './Checkemail.scss'
import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCheckEmail } from 'reduxToolkit/loginSlice/LoginSlice';

const Checkemal = () => {

    const auth_path = window.location.pathname.split("/")[1];
    console.log(auth_path, 'Checkemail');
    console.log("12345678909876");
    const len = useSelector(state => state.lenguage.lenguage)
    const dispatch = useDispatch()

    const changeEmailCheck = () => {
        dispatch(removeCheckEmail())
    }

    return (
        <>
            <div className="check_email">
                <h2 className="check_email_title">Check your email</h2>
                <img src={email} alt="check email images" />
                <p className='check_email_info' >Check your qwerty123@gmail.com inbox for instructions from us on how to verify your account.</p>
                <Link to={`/${len}/login`} className='check_email_link' onClick={changeEmailCheck}>Go to login screen</Link>
            </div>
        </>
    );
};

export default Checkemal;
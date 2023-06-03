import React, { useState } from "react";
import "./Signup.scss";
import sign_logo from "../../../assets/images/Sign/sign_logo.svg";
// import login_circle from '../../../assets/images/Sign/login_circle.png'
import login_ellipse from "../../../assets/images/Sign/Ellipse-6.png";
import apple from "../../../assets/images/Sign/apple.svg";
import google from "../../../assets/images/Sign/google.svg";
import github from "../../../assets/images/Sign/github.svg";
import facebook from "../../../assets/images/Sign/facebook.svg";
import Checkemal from "../component/Checkemail";
import Carusel from "../component/Carusel";
import { useSelector } from "react-redux";
import { Eye, EyeOff } from 'tabler-icons-react';
import { registerRequest } from "reduxToolkit/extraReducers";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Signup = () => {
	const { t } = useTranslation()

	const [passwordEye, setPasswordEye] = useState('password')
	const [passwordEye1, setPasswordEye1] = useState('password')

	const PasswordFunc = () => {
		setPasswordEye(passwordEye === 'password' ? 'text' : 'password')
	}


	const PasswordFunc1 = () => {
		setPasswordEye1(passwordEye1 === 'password' ? 'text' : 'password')
	}
	const [data, setData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	})
	const len = useSelector(state => state.lenguage.lenguage)
	const { checkEmail, bodyErrors } = useSelector(state => state.login)
	const dispatch = useDispatch()

	console.log(checkEmail)
	const handlerSubmit = (e) => {
		e.preventDefault()
		dispatch(registerRequest(data))
		var dateObj = new Date();
		const monthNames = ["January", "February", "March", "April", "May", "June",
  		"July", "August", "September", "October", "November", "December"];
		var month = dateObj.getUTCMonth(); //months from 1-12
		var day = dateObj.getUTCDate();
		var year = dateObj.getUTCFullYear();
		localStorage.setItem('member_since', `${monthNames[month]} ${day}, ${year}`)
	}

	return (
		<section className="login">
			<div className="login_container">
				<Carusel />
				<img className="login_bg_img" src={login_ellipse} alt="login background images" />
				<div className="login_container_wrapper">
					<img src={sign_logo} className="login_container_wrapper_logo" alt="" />
					{!checkEmail ? (    
						<form className="login_form" onSubmit={handlerSubmit}>
							<h3 className="login_form_title">{t("signup")}</h3>

							<p className="login_form_info">
								Do you have an account? <Link to={`/${len}/login`}>Log in </Link>now!
							</p>


							<input
								required
								className={`login_form_inp ${bodyErrors?.EmailError?.length ? "register-danger-input " : bodyErrors ? "register-success" : ""}`}
								type="email"
								placeholder="Email"
								name="email"
								value={data.email}
								onChange={e => setData(prev => ({ ...prev, email: e.target.value }))}
								autoComplete="off"
							/>
							{
								bodyErrors?.EmailError
								&&
								<p className="register-danger-text">{bodyErrors?.EmailError}</p>
							}

							<div style={{ 'position': "relative" }} >
								<input
									required
									className={`login_form_inp login_form_inp2 ${bodyErrors?.PasswordError?.length ? "register-danger-input" : bodyErrors ? "register-success" : ""}`}
									type={passwordEye1}
									placeholder="Password"
									name="password"
									value={data.password}
									onChange={e => setData(prev => ({ ...prev, password: e.target.value }))}
									autoComplete="off"
								/>
								<span className="password_span" onClick={() => PasswordFunc1()} >
									{
										passwordEye1 === 'password' ? <EyeOff /> : <Eye />
									}
								</span>
							</div>
							{
								bodyErrors?.PasswordError
								&&
								bodyErrors?.PasswordError?.map((el, i) => (
									<p className="register-danger-text" key={i + 1}>{i + 1}. {el}</p>
								))
							}

							<div style={{ 'position': "relative" }} >
								<input
									requiredx
									className={`login_form_inp login_form_inp2 ${bodyErrors?.PasswordConfirmError?.length ? "register-danger-input" : bodyErrors ? "register-success" : ""}`}
									type={passwordEye}
									placeholder="Confirm password"
									name="confirm_password"
									value={data.confirmPassword}
									onChange={e => setData(prev => ({ ...prev, confirmPassword: e.target.value }))}
									autoComplete="off"
								/>
								<span className="password_span" onClick={() => PasswordFunc()} >
									{
										passwordEye === 'password' ? <EyeOff /> : <Eye />
									}
								</span>
							</div>
							{
								bodyErrors?.PasswordConfirmError
								&&
								bodyErrors?.PasswordConfirmError?.map((el, i) => (
									<p className="register-danger-text" key={i + 1}>{i + 1}. {el}</p>
								))
							}

							<button className="login_form_btn" type="submit">Continue</button>

							<div className="login_form_wrapper">
								<p className="login_form_wrapper_info">Or continue with</p>

								<div className="login_form_wrapper_socials">
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={facebook} alt="social media icon facebook" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={github} alt="social media icon github" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={google} alt="social media google" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={apple} alt="social media apple" />
									</a>
								</div>
							</div>
						</form>
					) : (
						<>
							<Checkemal />
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Signup;

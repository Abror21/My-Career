import React, { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import Header from "components/Layout/Header/Header";
import { createCompany, freelancerResume, freelancerRouter } from "routes";
import jwt_decode from "jwt-decode";
import Login from "pages/Sign/Login/Login";
import Signup from "pages/Sign/Signup/Signup";
import PageBackground from './pages/NonAuth/Background';

function App() {
	const auth = useSelector(state => state.login.loggedIn);
	const lang = useSelector(state => state.language.language);
	const freelancerOrCompony = useSelector(state => state.login.freelancerOrCompony);
	const loginOnSuccess = useSelector(state => state.login.loginOnSuccess);
	const contactsIsSuccess = useSelector(state => state.companyRegister.contactsIsSuccess);
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const { pathname } = useLocation();
	const freelancer = localStorage.getItem("isResume") ? localStorage.getItem("isResume") : "welcome";

	let freelanceOrCompany;

	if (auth) {
		let decode = jwt_decode(auth);
		freelanceOrCompany = Object.values(decode).includes("Company")
			? "Company"
			: (freelanceOrCompany = Object.values(decode).includes("Freelancer") ? "Freelancer" : "None");
	}

	// useLayoutEffect(() => {
	// 	navigate(`/${lang}/`)
	// }, [lang, navigate])

	// useEffect(() => {
	// 	if (loginOnSuccess || contactsIsSuccess) {
	// 		dispatch(userRoles())
	// 	}
	// }, [loginOnSuccess, contactsIsSuccess, dispatch])

	return (
		<div className="App">
			{
				auth === false &&
				<Routes>
					<Route path={`/${lang}/`} element={<PageBackground />} />
					<Route path={`/${lang}/login`} element={<Login />} />
					<Route path={`/${lang}/sign-up`} element={<Signup />} />
					<Route path="*" element={<Navigate to={`/${lang}/`} />} />
				</Routes>
			}
			{
				freelanceOrCompany !== "Company" && freelanceOrCompany !== "Freelancer" ?
					(
						freelancer === "freelancer" ?
							<Routes>
								{freelancerResume.map(route => <Route path={`/${lang}${route.path}`} element={route.element} key={route.id} />)}
								<Route path="*" element={<Navigate to={`/${lang}/welcome/create-profile`} />} />
							</Routes>
							:
							(
								freelancer === "company" ?
									<Routes>
										{createCompany.map(route => <Route path={`/${lang}${route.path}`} element={route.element} key={route.id} />)}
										<Route path="*" element={<Navigate to={`/${lang}/register-company`} />} />
									</Routes>
									:
									<Routes>
										<Route path={`/${lang}/`} element={<PageBackground />} />
										<Route path={`/${lang}/login`} element={<Login />} />
										<Route path={`/${lang}/sign-up`} element={<Signup />} />
										<Route path="*" element={<Navigate to={`/${lang}/`} />} />
									</Routes>
							)
					) : (
						<div className={`freelanser-box  ${pathname.slice(4) === "contact" || pathname.slice(4) === "about" ? "freelanser-box-bg1" : "freelanser-box-bg2"}`}>
							<Header />
							{freelanceOrCompany === true && (
								<Routes>
									{freelancerRouter.map(route => <Route path={`/${lang}${route.path}`} element={route.element} key={route.id} />)}
									<Route path={pathname.slice(0, 4)} element={<Navigate to={`/${lang}/jobs`} />} />
									<Route path={`/${lang}/login`} element={<Navigate to={`/${lang}/jobs`} />} />
									<Route path={`/${lang}/welcome`} element={<Navigate to={`/${lang}/jobs`} />} />
									<Route path={`/${lang}/welcome/create-profile/:resumeId`} element={<Navigate to={`/${lang}/jobs`} />} />
								</Routes>
							)}
							{freelanceOrCompany === false && (
								<Routes>
									{freelancerRouter.slice(0, 4).map(route => <Route path={`/${lang}${route.path}`} element={route.element} key={route.id} />)}
									<Route path={pathname.slice(0, 4)} element={<Navigate to={`/${lang}/talants`} />} />
									<Route path={`/${lang}/login`} element={<Navigate to={`/${lang}/talants`} />} />
									<Route path={`/${lang}/welcome`} element={<Navigate to={`/${lang}/talants`} />} />
									<Route path={`/${lang}/welcome/create-profile/:resumeId`} element={<Navigate to={`/${lang}/talants`} />} />
								</Routes>
							)}
						</div>
					)
			}
		</div>
	);
}

export default App;

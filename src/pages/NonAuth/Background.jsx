import { Link, Outlet, NavLink } from 'react-router-dom';
import classes from "./Background.module.scss";
import logo from "../../assets/images/text.png";
import classesNav from "./Navigation.module.scss";
import { useSelector } from "react-redux";
import backgroundImg from "../../assets//images/home-header-bg.png";

function Background() {
	const lang = useSelector(state => state.language.language);

	return (
		<div className={classes.background}>
			<div className={classes.background__container}>
				<div className={classesNav.menu}>
					<div className={classesNav.menu__container}>
						<img className={classesNav.backgroundImg} src={backgroundImg} alt="blue circle" />
						<div className={classesNav.menu__inner}>
							<img className={classesNav.automative} src={logo} alt="Automative logo" />
							<ul className={classesNav.menu__links}>
								<li>
									<NavLink to="home" className={({ isActive }) => isActive ? classesNav.active : ''}>Home</NavLink>
								</li>
								<li>
									<NavLink to="talents" className={({ isActive }) => isActive ? classesNav.active : ''}>Talents</NavLink>
								</li>
								<li>
									<NavLink to="jobs" className={({ isActive }) => isActive ? classesNav.active : ''}>Jobs</NavLink>
								</li>
								<li>
									<NavLink to="about-us" className={({ isActive }) => isActive ? classesNav.active : ''}>About us</NavLink>
								</li>
								<li>
									<NavLink to="contact-us" className={({ isActive }) => isActive ? classesNav.active : ''}>Contact us</NavLink>
								</li>
							</ul>
							<div className={classesNav.menu__buttons}>
								<Link to={`/${lang}/login`}>
									<button className={classesNav.menu__login}>Log in</button>
								</Link>
								<Link to={`/${lang}/sign-up`}>
									<button className={classesNav.menu__signup}>Sign up</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
}

export default Background;

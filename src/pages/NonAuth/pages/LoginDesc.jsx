import React from "react";
import { Link } from "react-router-dom";
import classes from "./LoginDesc.module.scss";
import google from "../../../assets/images/google.png";
import facebook from "../../../assets/images/facebook.png";
import github from "../../../assets/images/github.png";
import macplay from "../../../assets/images/mac.png";
function LoginDesc(props) {
	return (
		<div className={classes.loginDesc}>
			<div className={classes.loginDescContent}>
				<div className={classes.loginTitleSubtitle}>
					<h3 className={classes.login}>Log in</h3>
					<p className={classes.subtitle}>Still don't have an account?</p>
					<Link className={classes.signupLink} to="/signup">
						Sign up now!
					</Link>
				</div>
				<form action="/signup" className={classes.formSubmit}>
					<input type="text" name="email" placeholder="Email" required className={classes.formSubmitName} />
					<input
						style={{ WebkitTextSecurity: "disc" }}
						type="text"
						name="password"
						placeholder="Password"
						required
						className={classes.formSubmitPassword}
					/>
					<div className={classes.continue}>
						<button type="submit">Continue</button>
					</div>
				</form>
				<div className={classes.bySocialApp}>
					<h3 className={classes.socialAppTitle}>Or continue with</h3>
					<div className={classes.socialLinks}>
						<Link to="/facebook">
							<img src={facebook} alt="Facebook Icon" />
						</Link>
						<Link to="/github">
							<img src={github} alt="Github Icon" />
						</Link>
						<Link to="/google">
							<img src={google} alt="Google Icon" />
						</Link>
						<Link to="/mac">
							<img src={macplay} alt="Mac Playmarket" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginDesc;

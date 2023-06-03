import Aboutus from "pages/NonAuth/Aboutus";
import Talants from "pages/talants/Talants";
import Signup from "pages/Sign/Signup/Signup";
import Login from "pages/Sign/Login/Login";
import NotFound from "pages/404";
import PageBackground from "pages/NonAuth/Background";
import Background from "pages/Resume/Background/Background";
import ResumeFinish from "pages/Resume/ResumeFinish";
import Contract from "pages/contract";
import Contactus from "pages/NonAuth/Contactus";
import Freelancer from "pages/Freelancer/Freelancer";
import Profile from "pages/FreelancerProfile/Profile";
import UserFreelancer from "pages/Freelancer/UserFreelancer";
import { RegisterCompany } from "pages/Sign/RegisterCompany/RegisterCompany";
import Jobs from "pages/Company/Jobs";
import Talents from "pages/Company/MyPostings";

export const publicRoute = [
	{ id: 1, path: "/", element: <PageBackground /> },
	{ id: 2, path: "/login", element: <Login /> },
	{ id: 3, path: "/sign-up", element: <Signup /> }
];

export const createProfileRoute = [
	// { id: 1, path: "/", element: <PageBackground /> },
	{ id: 1, path: "/welcome", element: <Login /> },
	{ id: 2, path: "/sign-up", element: <Signup /> }
];

export const freelancerResume = [
	{ id: 2, path: "/welcome/create-profile", element: <Background /> },
	{ id: 3, path: "/welcome/create-profile/:resumeId", element: <ResumeFinish /> }
];

export const createCompany = [{ id: 2, path: "/welcome/register-company", element: <RegisterCompany /> }];

export const freelancerRouter = [
	{ id: 1, path: "/jobs", element: <Freelancer /> },
	{ id: 2, path: "/talants", element: <Talants /> },
	{ id: 3, path: "/about", element: <Aboutus /> },
	{ id: 4, path: "/contact", element: <Contactus /> },
	{ id: 5, path: "/contracts", element: <Contract /> },
	{ id: 6, path: "/freelancer", element: <Freelancer /> },
	{ id: 7, path: "/profile", element: <Profile /> },
	{ id: 8, path: "/freelancer-user", element: <UserFreelancer /> },
	{ id: 9, path: "/*", element: <NotFound /> }
];

export const companyRouter = [
	{ id: 1, path: "/talants", element: <Talants /> },
	{ id: 2, path: "/jobs", element: <Freelancer /> },
	{ id: 3, path: "/about", element: <Aboutus /> },
	{ id: 4, path: "/contact", element: <Contactus /> },
	{ id: 5, path: "/contracts", element: <Contract /> },
	{ id: 6, path: "/freelancer", element: <Freelancer /> },
	{ id: 7, path: "/profile", element: <Profile /> },
	{ id: 8, path: "/freelancer-user", element: <UserFreelancer /> },
	{ id: 9, path: "/*", element: <NotFound /> }
];

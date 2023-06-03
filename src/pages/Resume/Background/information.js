import Photo from "../cards/Photo.jsx";
import Yourself from "../cards/Yourself";
import Language from "../cards/Language";
import Country from "../cards/Country";
import SocialMedia from "../cards/SocialMedia";
import SelectResume from "../cards/SelectResume";
import Educations from "../cards/Educations/Educations/Educations";
import WorkExperience from "../cards/WorkExperience/WorkExperience/WorkExperience";

export let dot = [
    { id: 1, label: "Personal information" },
    { id: 2, label: "Address" },
    { id: 3, label: "About yourself and skills" },
    { id: 4, label: "Language" },
    { id: 5, label: "Experience" },
    { id: 6, label: "Educations" },
    { id: 7, label: "Contacts" },
    { id: 8, label: "Resume" },
]

export const cards = [
    { id: 1, label: <Photo />, type: "photo" },
    { id: 2, label: <Country />, type: "country" },
    { id: 3, label: <Yourself />, type: "yourself" },
    { id: 4, label: <Language />, type: "lenguage" },
    { id: 5, label: <WorkExperience />, type: "workexperience" },
    { id: 6, label: <Educations />, type: "education" },
    { id: 7, label: <SocialMedia />, type: "media" },
    { id: 8, label: <SelectResume />, type: "resume" }
];
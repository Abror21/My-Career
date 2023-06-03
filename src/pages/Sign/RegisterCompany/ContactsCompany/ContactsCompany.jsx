import React, { useEffect, useState } from 'react'
import classes from './ContactsCompany.module.scss'
import { useDispatch, useSelector } from 'react-redux';

import telegramIcon from "../../../../assets/images/Resume/telegramIcon.png";
import whatsappIcon from "../../../../assets/images/Resume/whatsUppIcon.png";
import twitterIcon from "../../../../assets/images/Resume/twitterIcon.png";
import facebookIcon from "../../../../assets/images/Resume/faceBookIcon.png";
import instagramIcon from "../../../../assets/images/Resume/instagramIcon.png";
import gitHubIcon from "../../../../assets/images/Resume/githubIcon.png";
import cancel from "../../../../assets/images/Resume/cancel.png";
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import { useTranslation } from 'react-i18next';
import { registerCompany } from 'reduxToolkit/extraReducers';

export const ContactsCompany = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.companyRegister)
    const userData = useSelector(state => state.companyRegister.userData)
    const contactsIsSuccess = useSelector(state => state.companyRegister.contactsIsSuccess)
    useEffect(() => {
        if (contactsIsSuccess) {
            // dispatch(
            //     activeDoteAction([
            //         { id: 1, label: "Company Information" },
            //         { id: 1, label: "Information" }
            //     ])
            // );
        }
    }, [contactsIsSuccess, dispatch])

    const [data, setData] = useState({
        "webSite": "",
        "watsApp": "",
        "facebook": "",
        "instagram": "",
        "telegram": "",
        "gitHub": "",
        "twitter": ""
    });
    const [icons, setIcons] = useState([]);
    const [socials, setSocials] = useState([
        { icon: whatsappIcon, name: "watsApp" },
        { icon: facebookIcon, name: "facebook" },
        { icon: instagramIcon, name: "instagram" },
        { icon: telegramIcon, name: "telegram" },
        { icon: gitHubIcon, name: "gitHub" },
        { icon: twitterIcon, name: "twitter" }
    ]);

    const { t } = useTranslation()

    const addInputContact = (i, n) => {
        setIcons([...icons, { icon: i, name: n }]);
        let filteredSocial = [];
        for (let i = 0; i < socials.length; i++) {
            if (socials[i].name !== n) {
                filteredSocial.push(socials[i]);
            }
        }
        setSocials(filteredSocial);
    };

    const handleSubmitting = event => {
        event.preventDefault();
    };

    const removeInput = (name, icon) => {
        let filteredIcons = [];
        for (let i = 0; i < icons.length; i++) {
            if (icons[i].name !== name) {
                filteredIcons.push(icons[i]);
            }
        }
        setIcons(filteredIcons);
        setSocials([...socials, { icon: icon, name: name }]);
    };

    const handleChangeInput = ({ label, value }) => {
        setData(prev => ({ ...prev, [label]: value }))
    };

    const handleSubmit = event => {
        event.preventDefault();
        let formData = new FormData()
        formData.append("FirstName", userData.firstName)
        formData.append("LastName", userData.lastName)
        formData.append("PhoneNumber", userData.phoneNumber)
        formData.append("Email", userData.email)
        formData.append("CompanyInformation.Name", userData.companyInformationName)
        formData.append("CompanyInformation.PhoneNumber", userData.companyInformationPhoneNumber)
        formData.append("CompanyInformation.Locations", userData.locations)
        formData.append("CompanyInformation.Description", userData.description)
        formData.append("CompanyInformation.Contact.WhatsApp", data.watsApp)
        formData.append("CompanyInformation.Contact.Facebook", data.facebook)
        formData.append("CompanyInformation.Contact.Twitter", data.twitter)
        formData.append("CompanyInformation.Contact.Instagram", data.instagram)
        formData.append("CompanyInformation.Contact.Telegram", data.telegram)
        formData.append("CompanyInformation.Contact.Github", data.gitHub)
        formData.append("CompanyInformation.Contact.Website", data.webSite)
        formData.append("FormFile", userData.formFile)
        dispatch(registerCompany(formData))
    };

    const prevPage = event => {
        event.preventDefault();
        dispatch(
            activeDoteAction([
                { id: 3, label: "About company" },
                { id: 3, type: "About" }
            ])
        );
    };


    return (
        <>
            {loading
                ? <h2>{t("loading")}</h2>
                : <div className={classes.socialMedia}>
                    <h2>{t("contactsCompany")}</h2>
                    <form action="submit" className={classes.socialForm} onSubmit={handleSubmit}>
                        <div className={classes.forim_content}>
                            <input
                                className={classes.webSite_input}
                                type="text" placeholder={t("contactsCompanyInput")}
                                value={data.webSite}
                                onChange={(e) => setData(prev => ({ ...prev, webSite: e.target.value }))}
                            />
                            {icons &&
                                icons.map(item => (
                                    <div key={item.name} className={classes.socialInput}>
                                        <div className={classes.socialInputIn}>
                                            <input
                                                type="url"
                                                placeholder={`${t("contactsCompanyInput2")} ${item.name} ${t("account")}`}
                                                value={data[item.name]}
                                                onChange={(e) => handleChangeInput({ value: e.target.value, label: item.name })}
                                            />
                                            <img className={classes.insideIconImage} src={item.icon} alt="Whats app icon" />
                                        </div>
                                        <button
                                            className={classes.cancelButton}
                                            onClick={event => {
                                                removeInput(item.name, item.icon);
                                                handleSubmitting(event);
                                            }}>
                                            <img className={classes.cancelButton_img} src={cancel} alt="cancel icon" />
                                        </button>
                                    </div>
                                ))}
                            <p>{t("contactsCompanyDescription")}</p>
                            <div className={classes.socialContainers}>
                                {socials.map(item => (
                                    <div key={item.name} style={{ cursor: "pointer" }} className={classes.socialCard} onClick={() => addInputContact(item.icon, item.name)}>
                                        <img style={{ width: "40px" }} src={item.icon} alt={item.name} />
                                        <h4 className={classes.cart_text}>{item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={classes.button_group}>
                            <button className={classes.backButton} type="button" onClick={prevPage}>
                                {t("back")}
                            </button>
                            <button type="submit" className={classes.nextButton}>{t("next")}</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

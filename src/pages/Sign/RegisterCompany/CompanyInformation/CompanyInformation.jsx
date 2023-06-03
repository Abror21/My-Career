import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import './CompanyInformation.scss'
import { useTranslation } from 'react-i18next';
import { addUser } from 'reduxToolkit/companyRegister/companyRegisterActions';

export const CompanyInformation = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '' })
    const { t } = useTranslation()

    const dispatch = useDispatch();

    const handleValues = ({ type, value }) => {
        setUser(prev => ({ ...prev, [type]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            activeDoteAction([
                { id: 2, label: "Company" },
                { id: 2, type: "Company" }
            ])
        )
        dispatch(addUser(user))
    };

    return (
        <>

            <div className="photoCard">
                <div className='companyInformation__top'>
                    <h2>{t("welcome")}</h2>
                    <p>
                        {t("companyRegisterTitle")}
                    </p>
                </div>
                <form onSubmit={handleSubmit} method="post">
                    <div className="inputBox">
                        <div>
                            <h5>{t("firstName")}</h5>
                            <input
                                type="text"
                                value={user.firstName}
                                onChange={(e) => handleValues({ type: "firstName", value: e.target.value })}
                                placeholder={t("firstNameInput")}
                                required
                            />
                        </div>
                        <div>
                            <h5>{t("lastName")}</h5>
                            <input
                                value={user.lastName}
                                onChange={(e) => handleValues({ type: "lastName", value: e.target.value })}
                                type="text"
                                placeholder={t("lastNameInput")}
                                required
                            />
                        </div>
                        <div>
                            <h5>{t("email")}</h5>
                            <input
                                value={user.email}
                                onChange={(e) => handleValues({ type: "email", value: e.target.value })}
                                type="email"
                                placeholder="YourCompany@inbox.com"
                                required
                            />
                        </div>
                        <div>
                            <h5>{t("phoneNumber")}</h5>
                            <input
                                value={user.phoneNumber}
                                onChange={(e) => handleValues({ type: "phoneNumber", value: e.target.value })}
                                type="number"
                                placeholder="+XXX (XX) XXX-XX-XX"
                                required
                            />
                        </div>
                    </div>
                    <button className="next_btn_photoCart">{t("next")}</button>
                </form>
            </div>
        </>

    );
}

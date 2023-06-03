import React from 'react'
import classes from "./contract.module.scss"
import employerProfil from "../../assets/images/emloyer_img.svg"
import employeeProfil from "../../assets/images/employee-img.svg"
import { useFormik } from 'formik'
import { validate } from './validateMatch'
import { useDispatch,useSelector } from 'react-redux'
import { contractCreate } from 'reduxToolkit/extraReducers'

const initialValues = {
    pasportSeriyaNumber: "",
    cardNumber: "",
    inn: "",
    inps: "",
    bankName: "",
    bankINN: "",
    tranzitAccount: "",
    mfo: "",
}

const Contract = () => {
    const {contractCreateList,loading} = useSelector(state => state.contract)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            dispatch(contractCreate(values))
            console.log(contractCreateList);
        },
        validate,
    })

  return (
    loading
    ?(
        <p className="loading">Loading...</p>
    )
    :(
        <div className={classes.contract}>
            <div className={classes.contract__container}>
                <div className={classes.contract__inner}>
                    <button className={classes.contract__clouse_btn}>
                        <svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5" stroke="#1D71B8" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <h3 className={`${classes.contract__title} ${classes.contract__root_title}`}>Contract</h3>
                    <div className={`${classes.contract__employer} ${classes.employer}`}>
                        <h3 className={classes.contract__title}>Employer</h3>
                        <div className={classes.employer__profil}>
                            <div className={classes.employer__profil_start}>
                                <img src={employerProfil} alt="" className={classes.employer__img} />

                                <div className={classes.employer__about}>
                                    <h4 className={classes.employer__company}>ООО “NAPA AUTOMOTIVE”</h4>
                                    <span className={classes.employer__job}>CEO</span>
                                    <p className={classes.employer__name}>Umid Abdusattarov</p>
                                </div>
                            </div>

                            <ul className={`${classes.employer__end} ${classes.employer__adress_list}`}>
                                <li className={classes.employer__adress_item}>+998 90 005 00 34</li>
                                <li className={classes.employer__adress_item}>user@name.com</li>
                                <li className={classes.employer__adress_item}>17, Little Ring Road street, Tashkent Uzbekistan</li>
                            </ul>
                        </div>

                        <p className={classes.about__desc}>
                            The company offers services to improve the efficiency of other companies. With the help of our highly qualified specialists and modern technologies, we integrate our knowledge and skills to increase efficiency.
                            Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
                        </p>
                    </div>

                    <div className={`${classes.contract__employee} ${classes.employer}`}>
                        <h3 className={classes.contract__title}>Employee</h3>
                        <div className={classes.employee__profil}>
                            <div className={classes.employee__profil_start}>
                                <img src={employeeProfil} alt="" className={classes.employee__img} />

                                <div className={classes.employee__about}>
                                    <p className={classes.employee__name}>Michel Rodriges</p>
                                    <span className={classes.employee__job}>Web-designer</span>
                                </div>
                            </div>

                            <ul className={`${classes.employee__end} ${classes.employee__adress_list}`}>
                                <li className={classes.employee__adress_item}>+998 90 005 00 34</li>
                                <li className={classes.employee__adress_item}>user@name.com</li>
                                <li className={classes.employee__adress_item}>17, Little Ring Road street, Tashkent Uzbekistan</li>
                            </ul>
                        </div>

                        <p className={classes.about__desc}>
                            I have been in the IT business for more than 11 years.
                            With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.
                        </p>

                        <ul className={classes.employee__info_list}>
                            <li className={classes.employee__info_item}>
                                <strong className={classes.employee__info_title}>Price</strong>
                                <span className={classes.employee__info_text}>$5 hourly</span>
                            </li>

                            <li className={classes.employee__info_item}>
                                <strong className={classes.employee__info_title}>Level</strong>
                                <span className={classes.employee__info_text}>Middle</span>
                            </li>

                            <li className={classes.employee__info_item}>
                                <strong className={classes.employee__info_title}>Skills</strong>
                                <span className={classes.employee__info_text}>Figma | Adobe Photoshop | Adobe Illustrator</span>
                            </li>
                        </ul>


                    </div>

                    <div className={`${classes.contract__about} ${classes.about}`}>
                        <h3 className={classes.contract__title}>About job</h3>
                        <h4 className={classes.about__title}>Business Card Design</h4>
                        <p className={classes.about__desc}>
                            Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
                        </p>

                        <ul className={classes.about__info_list}>
                            <li className={classes.about__info_item}>
                                <strong className={classes.about__info_title}>Price</strong>
                                <span className={classes.about__info_text}>$60 by project</span>
                            </li>

                            <li className={classes.about__info_item}>
                                <strong className={classes.about__info_title}>Required level</strong>
                                <span className={classes.about__info_text}>Middle</span>
                            </li>

                            <li className={classes.employee__info_item}>
                                <strong className={classes.about__info_title}>Deadline</strong>
                                <span className={classes.about__info_text}>3 days (22.10.2022-24.10.2022)</span>
                            </li>

                            <li className={classes.about__info_item}>
                                <strong className={classes.about__info_title}>Required skills</strong>
                                <span className={classes.about__info_text}>Figma | Adobe Photoshop | Adobe Illustrator</span>
                            </li>
                        </ul>
                    </div>

                    {
                        !contractCreateList 
                        ?(
                            <>
                                <div className={`${classes.contract__details} ${classes.details}`}>
                                    <h3 className={classes.contract__title}>About job</h3>

                                    <form id='form' className={classes.details__form} onSubmit={formik.handleSubmit}>
                                        <ul className={classes.details__form_box}>
                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="pasportSeriyaNumber">Серия паспорта</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.pasportSeriyaNumber && formik.errors.pasportSeriyaNumber ? classes.danger_input :formik.touched.pasportSeriyaNumber && !formik.errors.pasportSeriyaNumber ? classes.succes_input : ""}`} 
                                                type="text" 
                                                id='pasportSeriyaNumber' 
                                                name="pasportSeriyaNumber" placeholder='AA 0000005'
                                                value={formik.values.pasportSeriyaNumber}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                maxLength={9}
                                                />
                                                {
                                                formik.touched.pasportSeriyaNumber && formik.errors.pasportSeriyaNumber ? <p className={classes.danger}>{formik.errors.pasportSeriyaNumber}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="cardNumber">Номер карты</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.cardNumber && formik.errors.cardNumber ? classes.danger_input :formik.touched.cardNumber && !formik.errors.cardNumber ? classes.succes_input : ""}`}  
                                                type="number" 
                                                id='cardNumber' 
                                                namer="cardNumber" 
                                                placeholder='0000 0000 0000 0000'
                                                value={formik.values.cardNumber}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}                                           
                                                />
                                                {
                                                formik.touched.cardNumber && formik.errors.cardNumber ? <p className={classes.danger}>{formik.errors.cardNumber}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="inn">ИНН</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.inn && formik.errors.inn ? classes.danger_input :formik.touched.inn && !formik.errors.inn ? classes.succes_input : ""}`} 
                                                type="number" id='inn' 
                                                name="inn" 
                                                placeholder='000 000 000'
                                                value={formik.values.inn}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                />
                                                {
                                                formik.touched.inn && formik.errors.inn ? <p className={classes.danger}>{formik.errors.inn}</p> : null
                                                }
                                            </li>

                                            <li className={classes.contract__form_item}>
                                                <label className={classes.details__form_label} htmlFor="inps">ИНПС</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.inps && formik.errors.inps ? classes.danger_input :formik.touched.inps && !formik.errors.inps ? classes.succes_input : ""}`} 
                                                type="text" 
                                                id='inps' 
                                                name="inps" 
                                                placeholder='0000 0000 0000 00'
                                                value={formik.values.inps}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                maxLength={18}
                                                />
                                                {
                                                formik.touched.inps && formik.errors.inps ? <p className={classes.danger}>{formik.errors.inps}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="bankName">Наименование банка</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.bankName && formik.errors.bankName ? classes.danger_input :formik.touched.bankName && !formik.errors.bankName ? classes.succes_input : ""}`} 
                                                type="text" 
                                                id='bankName' 
                                                namer="bankName" 
                                                placeholder='Bank name'
                                                value={formik.values.bankName}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                />
                                                {
                                                formik.touched.bankName && formik.errors.bankName ? <p className={classes.danger}>{formik.errors.bankName}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="bankINN">ИНН банка</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.bankINN && formik.errors.bankINN ? classes.danger_input :formik.touched.bankINN && !formik.errors.bankINN ? classes.succes_input : ""}`}  
                                                type="number" 
                                                id='bankINN' 
                                                name="bankINN" 
                                                placeholder='000 000 000'
                                                value={formik.values.bankINN}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                maxLength={10}
                                                />
                                                {
                                                formik.touched.bankINN && formik.errors.bankINN ? <p className={classes.danger}>{formik.errors.bankINN}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="tranzitAccount">Транзит счёт</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.tranzitAccount && formik.errors.tranzitAccount ? classes.danger_input :formik.touched.tranzitAccount && !formik.errors.tranzitAccount ? classes.succes_input : ""}`} 
                                                type="number" 
                                                id='tranzitAccount' 
                                                name="tranzitAccount" placeholder='000 000 000'
                                                value={formik.values.tranzitAccount}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                maxLength={10}
                                                />
                                                {
                                                formik.touched.tranzitAccount && formik.errors.tranzitAccount ? <p className={classes.danger}>{formik.errors.tranzitAccount}</p> : null
                                                }
                                            </li>

                                            <li className={classes.details__form_item}>
                                                <label className={classes.details__form_label} htmlFor="mfo">МФО</label>
                                                <input 
                                                className={`${classes.details__form_input} ${formik.touched.mfo && formik.errors.mfo ? classes.danger_input :formik.touched.mfo && !formik.errors.mfo ? classes.succes_input : ""}`}  
                                                type="text" 
                                                id='mfo' 
                                                name="mfo" 
                                                placeholder='00000'
                                                value={formik.values.mfo}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                maxLength={10}
                                                />
                                                {
                                                formik.touched.mfo && formik.errors.mfo ? <p className={classes.danger}>{formik.errors.mfo}</p> : null
                                                }
                                            </li>
                                        </ul>
                                    </form>
                                </div>

                                <div className={classes.contract__apply}>
                                    <p className={classes.contract__apply_desc}>
                                        Убедитесь в правильности вышеуказанной информации. Нажимая "подписать" вы даёте своё согласие на заключение договора с данным работадателем.
                                    </p>

                                    <div className={classes.apply__btns}>
                                        <button className={classes.contract__apply_btn}  form='form' type='submit'>Apply</button>
                                    </div>
                                </div>
                            </>
                        )
                        :(
                            <div className={`${classes.contract__details_info} ${classes.requisites}`}>
                                <div className={classes.requisites__box}>
                                    <div className={classes.requisites__details}>
                                        <h3 className={classes.contract__title}>Реквизиты исполнителя</h3>
            
                                        <ul className={classes.requisites__list}>
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Номер карты
                                                </strong>
            
                                                <span className={classes.requisites__item_span}>Middle</span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНПС
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    Figma | Adobe Photoshop | Adobe Illustrator
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНН банка
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    Figma | Adobe Photoshop | Adobe Illustrator
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    МФО
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    Figma | Adobe Photoshop | Adobe Illustrator
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Серия паспорта
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    $60 by project
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНН
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    3 days (22.10.2022-24.10.2022)
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Наименование банка
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    3 days (22.10.2022-24.10.2022)
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Транзит счёт
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    3 days (22.10.2022-24.10.2022)
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className={classes.requisites__details}>
                                        <h3 className={classes.contract__title}>Реквизиты заказчика</h3>
            
                                        <ul className={classes.requisites__list}>
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Номер карты
                                                </strong>
            
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.cardNumber}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНПС
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                {contractCreateList?.cardNumber}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНН банка
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                {contractCreateList?.bankINN}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    МФО
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.mfo}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Серия паспорта
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.pasportSeriyaNumber}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    ИНН
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.inn}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Наименование банка
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.bankName}
                                                </span>
                                            </li>
            
                                            <li className={classes.requisites__item}>
                                                <strong className={classes.requisites__item_strong}>
                                                    Транзит счёт
                                                </strong>
                                                
                                                <span className={classes.requisites__item_span}>
                                                    {contractCreateList?.tranzitAccount}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }


                
                </div>
            </div>
        </div>
    )
  )
}

export default Contract
import React from 'react';
import './Cart.scss'

import user_img from '../../../assets/images/Freelancer/girl_img.svg'
import ticked from '../../../assets/images/Freelancer/ticked.svg'
import location from '../../../assets/images/Freelancer/location.svg'
import { ReactComponent as Heart } from '../../../assets/images/Freelancer/hheart.svg'
import Colasible from './Colasible';
import { useContext } from 'react';
import Context from 'components/Context/Context';
import { useLocation } from "react-router-dom";

const Cart = () => {
    const { pathname } = useLocation()

    // const { isActive, setIsActive , heartClick, setHeartClick } = useContext(Context)

    // const HeartClickFunc = () => {
    //     setHeartClick(!heartClick)
    // }

    // const cursorHandle = () => {
    //     setIsActive(!isActive)
    // }

    return (
        <div className='freelancer_cart' >
            <ul className="freelancer_cart_list">
                <li className="freelancer_cart_list_item freelancer_cart_list_item1">
                    <img src={user_img} alt="" />
                    <div>
                        <h4 className='freelancer_cart_list_item_title' >
                            <span>Michel R</span>
                            <img src={ticked} alt="" />
                        </h4>
                        <p className="freelancer_cart_list_item_info">
                            Web-design UI/UX
                        </p>
                    </div>
                </li>

                <li className="freelancer_cart_list_item ">
                    <div>
                        <h4 className='freelancer_cart_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="freelancer_cart_list_item_info"> Job Success </p>
                    </div>
                </li>

                <li className="freelancer_cart_list_item ">
                    <div>
                        <h4 className='freelancer_cart_list_item_title' > 5$ </h4>
                        <p className="freelancer_cart_list_item_info"> Hourly </p>
                    </div>
                </li>

                <li className="freelancer_cart_list_item ">
                    <div>
                        <h4 className='freelancer_cart_list_item_title' > 324 </h4>
                        <p className="freelancer_cart_list_item_info"> Completed jobs </p>
                    </div>
                </li>
            </ul>
            {
                (pathname.slice(4) === "jobs")
                &&
                <div className='freelancer_cart_list_wrapper' >
                    <Heart className={`${''}`} />
                </div>
            }

            <Colasible text={'qwertyuioplkjhgfdsazxcvbnm'} />

            <div className="freelancer_cart_skill">
                <div className="freelancer_cart_skill_skills">
                    <h4>Figma</h4>
                    <h4>html</h4>
                    <h4>Adobe PhotoShop</h4>
                </div>

                <div className="freelancer_cart_skill_level">
                    <p>Level: <span>Middle</span> </p>
                </div>
            </div>

            <div className="freelancer_cart_location">
                <h4><span>3 years </span>   of experience</h4>
                <h4> <img src={location} alt="" /> Tashkent, Uzbekistan</h4>
            </div>
        </div>
    );
};

export default Cart;
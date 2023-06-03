import React from "react";
import { Video } from "../../components";
import classes from "./Aboutus.module.scss";
import { TbBrandTelegram } from 'react-icons/tb';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

function Aboutus(props) {
	return (
		<div className={classes.aboutus}>
			<div className="container">
				<div className={classes.about__container}>
					<Video />
					<div className={classes.about__container__border}></div>
					<div className={classes.TextsMain}>
						<div className={classes.IconsMain}>
							<p>About us</p>
							<div className={classes.iconsBlock}>
								<TbBrandTelegram />
								<FiFacebook />
								<AiOutlineInstagram />
							</div>
						</div>
						<p className={classes.text}>
							Habitant mi varius consectetur eget. Neque, arcu, egestas pellentesque vitae vitae ut. Est malesuada consectetur quam netus sollicitudin
							tellus. Amet, euismod suspendisse cras tortor cursus at habitasse malesuada. Ut ac lectus arcu arcu, ultricies netus.
							<br />
							<br />
							At maecenas metus pellentesque turpis egestas mattis neque. Tempor amet tortor phasellus hac quisque. Molestie sollicitudin lorem
							habitasse erat velit, donec elit habitant. habitasse erat velit, donec elit habitant.
							<br />
							<br />
							Eu hendrerit tellus at felis, mi, imperdiet. Porta risus odio tortor, etiam. Eu hendrerit tellus at felis, mi, imperdiet. Porta risus
							odio tortor, etiam.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nemo culpa dolorum fugiat consequuntur id quibusdam minima, dolorem asperiores maiores aspernatur consequatur nulla quia accusantium! Ut unde ad minus obcaecati saepe dolore hic, consectetur adipisci tempore? Odit explicabo recusandae est repudiandae tenetur vero mollitia aspernatur nostrum vel error. Hic amet nulla ratione exercitationem laborum excepturi ut, saepe, vero consequuntur tempore quis, non eveniet. Nobis id provident nam placeat quidem quibusdam autem tempore ex asperiores dolore sequi odit, quo nulla maxime voluptate quaerat nostrum deserunt. In iure cum laborum, molestias nihil excepturi architecto sint est fugiat dicta iste veritatis officia numquam?
						</p>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Aboutus;

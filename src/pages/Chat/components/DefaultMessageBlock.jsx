import React, { useState } from "react";

import { useRef } from "react";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
function DefaultMessageBlock(props) {
	const hiddenFileInput = useRef(null);
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState("");
	const inputReset = useRef(null);
	const inputReset2 = useRef(null);

	const [picture, setPicture] = useState(null);
	const [imgData, setImgData] = useState(null);
	const onChangePicture = e => {
		if (e.target.files[0]) {
			console.log("picture: ", e.target.files);
			setPicture(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImgData(reader.result);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};
	const submitValue = e => {
		const userMessage = {
			message: value
		};
		setArr(prevArr => [...prevArr, userMessage]);
		inputReset.current.value = "";
	};

	return (
		<div className={classes.modalMessageAndWrite}>
			<div className={classes.box}>
				<div className={classes.messageContainer}>
					<div className={classes.message}>
						{arr.map(({ message, index }) => (
							<span key={index} className={classes.sentMessage}>
								{message}
							</span>
						))}
					</div>
				</div>
				<div className={classes.writeAndSendMessage}>
					<input
						className={classes.writeMessage}
						ref={inputReset}
						onChange={e => setValue(e.target.value)}
						required
						type="text"
						placeholder="Text message..."
					/>
					<button onClick={submitValue}>Send</button>
					<div className={classes.fileAttach} onChange={onChangePicture}>
						<input type="file" ref={hiddenFileInput} multiple accept="image/*" />
						<img type="file" src={fileAttachImg} alt="File Attach Img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DefaultMessageBlock;

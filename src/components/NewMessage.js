import React from "react";
import NewMessage from "../assets/newmessage.svg";
const NewMessageOverview = () => {
	return (
		<div>
			<img
				src={NewMessage}
				alt="new__message"
				className="new__message__image"
			/>
			<input type="text" />
		</div>
	);
};

export default NewMessageOverview;

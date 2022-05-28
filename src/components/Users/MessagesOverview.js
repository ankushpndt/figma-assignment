import React from "react";
import Message from "../../assets/message.svg";
import "./MessageOverview.css";
const MessagesOverview = () => {
	return (
		<div className="message__overview__container">
			<div className="message__overview">
				<img src={Message} alt="message" className="message__image" />
				<p style={{ color: "gray" }}>Head over to the conversations</p>
				<p style={{ color: "gray" }}>pane on the left to get started.</p>
			</div>
		</div>
	);
};

export default MessagesOverview;

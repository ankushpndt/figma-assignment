import React from "react";
import { useSelector } from "react-redux";

const NewMessage = () => {
	const messages = useSelector((state) => state.Chat.user.messages);
	console.log(messages);
	return (
		<div className="new__message__container">
			<ul>
				{messages?.map((msg) => {
					return <li style={{ listStyle: "none" }}>{msg}</li>;
				})}
			</ul>
		</div>
	);
};

export default NewMessage;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import NewMessage from "./NewMessage";
import "./StarredMessage.css";
const StarredMessage = ({ starredMessages }) => {
	useSelector((state) => console.log(state));
	console.log({ starredMessages });
	return (
		<div className="starred__message__container">
			{starredMessages?.map((message) => (
				<Fragment key={v4()}>
					<NewMessage message={message} />
				</Fragment>
			))}
		</div>
	);
};

export default StarredMessage;

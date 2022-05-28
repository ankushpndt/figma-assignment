import React, { Fragment } from "react";
import { v4 } from "uuid";
import NewMessage from "./NewMessage";
import "./StarredMessage.css";
const StarredMessage = ({ starredMessages }) => {
	console.log(starredMessages);
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

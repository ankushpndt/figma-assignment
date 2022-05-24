import React from "react";
import "./User.css";
const User = ({ user }) => {
	const userDetails = {
		icon: "",
		name: "",
		text: "Start a new chat...",
	};
	let res = user.split("");
	let first = res[0];
	let second = "";
	for (let i = 0; i < res.length; i++) {
		if (res[i] === " ") {
			second = res[i + 1];
		}
	}
	userDetails.icon = first + second;
	userDetails.name = user;

	return (
		<div className="user__container">
			<p className="user__icon">
				{userDetails.icon} <span className="status__icon"></span>
			</p>
			<div className="user__details">
				<p className="user__name">{userDetails.name}</p>
				<p className="user__text">{userDetails.text}</p>
			</div>
		</div>
	);
};

export default User;

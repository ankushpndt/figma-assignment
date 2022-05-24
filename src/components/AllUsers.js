import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { singleUser } from "../features/NewChat/chatSlice";
const AllUsers = ({ specificUser }) => {
	const dispatch = useDispatch();
	return (
		<div className="all__users__container">
			<ul>
				<div
					key={v4()}
					className="user__container"
					onClick={() => {
						dispatch(singleUser(specificUser));
					}}
				>
					<p className="user__icon">
						{specificUser.icon} <span className="status__icon"></span>
					</p>
					<div className="user__details">
						<p className="user__name">{specificUser.name}</p>
						<p className="user__text">{specificUser.text}</p>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default AllUsers;

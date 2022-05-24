import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
import { v4 } from "uuid";
const AllUsers = () => {
	const allUsers = useSelector((state) => state.Chat.users);

	return (
		<div className="all__users__container">
			<ul>
				{allUsers.map((user) => {
					return (
						<>
							<User key={v4()} user={user} />
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default AllUsers;

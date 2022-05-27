import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { singleUser } from "../features/NewChat/chatSlice";

const AllUsers = ({ specificUser }) => {
	const dispatch = useDispatch();

	return (
		<div className="all__users__container">
			<ul>
				<NavLink
					to={`/newmessageoverview/${specificUser?.id}`}
					className="user__container"
					style={{ textDecoration: "none", color: "black" }}
					onClick={() => {
						dispatch(singleUser(specificUser));
					}}
				>
					<p className="user__icon">
						{specificUser?.icon} <span className="status__icon"></span>
					</p>
					<div className="user__details">
						<p className="user__name">{specificUser?.name}</p>
						<p className="user__text">{specificUser?.text}</p>
					</div>
				</NavLink>
			</ul>
		</div>
	);
};

export default AllUsers;

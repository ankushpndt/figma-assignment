import "./Users.css";

import { useSelector } from "react-redux";
import InputList from "./InputList";
import MessagesOverview from "./MessagesOverview";
const Users = () => {
	const allUsers = useSelector((state) => state.Chat.users);

	return (
		<div style={{ display: "flex" }}>
			{/* <InputList /> */}
			{/* {allUsers.length === 0 && <MessagesOverview />} */}
		</div>
	);
};

export default Users;

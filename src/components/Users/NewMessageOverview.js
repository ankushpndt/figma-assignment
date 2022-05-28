import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MessagesOverview from "./MessagesOverview";
import SingleUserScreen from "./SingleUserScreen";
const NewMessageOverview = () => {
	const userDetails = useSelector((state) => state.Chat.user.userDetails);
	const allUsers = useSelector((state) => state.Chat.users);
	const { userId } = useParams();
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				minHeight: "93vh",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				backgroundColor: "#f1f5f9",
			}}
		>
			{allUsers.length === 0 ? (
				<MessagesOverview />
			) : (
				userDetails.id === userId && <SingleUserScreen userId={userId} />
			)}
		</div>
	);
};

export default NewMessageOverview;

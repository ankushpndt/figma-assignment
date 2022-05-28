import React from "react";
import "./NewMessage.css";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import {
	addStarredMessage,
	deleteFromMessage,
	deleteFromStarredMessage,
} from "../../features/NewChat/chatSlice";
const NewMessage = ({ message }) => {
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.Chat.users);
	const newArr = [];
	allUsers.forEach((user) => {
		if (user.id === message.id) {
			const { starredMessages } = user;
			newArr.push(...starredMessages);
		}
	});

	return (
		<div className="new__message__container">
			<div
				style={{ backgroundColor: "#bae6fd", padding: "0.5rem" }}
				className="dropdown"
			>
				<div className="btn__header">
					<small
						style={{
							fontSize: "10px",
						}}
					>
						{message?.time}
					</small>{" "}
					<button
						onClick={() => {
							dispatch(
								deleteFromStarredMessage({ messageId: message.messageId })
							);
						}}
						style={{
							backgroundColor: "transparent",
							border: "none",
							cursor: "pointer",
						}}
					>
						{newArr.find((item) => item.messageId === message.messageId) && (
							<StarIcon
								style={{
									fontSize: "1rem",
									cursor: "pointer",
									color: "#0284c7",
								}}
							/>
						)}
					</button>
				</div>
				<div style={{ fontSize: "1rem" }} className="message__value">
					<div
						className={
							newArr.find((item) => item.messageId === message.messageId)
								? "dropdown-content-starred"
								: "dropdown-content"
						}
					>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								cursor: "pointer",
							}}
							onClick={() => {
								dispatch(addStarredMessage({ message }));
							}}
							disabled={
								newArr.find((item) => item.messageId === message.messageId)
									? true
									: false
							}
						>
							<StarBorderIcon />
						</button>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								cursor: "pointer",
							}}
							onClick={() => {
								dispatch(deleteFromMessage({ messageId: message.messageId }));
							}}
						>
							<DeleteIcon />
						</button>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								cursor: "pointer",
							}}
						>
							<ShareIcon />
						</button>
					</div>
					{message?.messageValue}
				</div>
			</div>
		</div>
	);
};

export default NewMessage;

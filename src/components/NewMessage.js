import React, { useState } from "react";
import "./NewMessage.css";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import {
	addStarredMessage,
	deleteFromMessage,
	deleteFromStarredMessage,
} from "../features/NewChat/chatSlice";
const NewMessage = ({ message }) => {
	const dispatch = useDispatch();
	const [toggleStar, setToggleStar] = useState(false);
	console.log(toggleStar);
	return (
		<div className="new__message__container">
			<div
				style={{ backgroundColor: "#bae6fd", padding: "0.5rem" }}
				className="dropdown"
			>
				<small
					style={{
						fontSize: "10px",
					}}
				>
					{message?.time}
				</small>{" "}
				<button
					onClick={() => dispatch(deleteFromStarredMessage({ id: message.id }))}
					style={{
						backgroundColor: "transparent",
						border: "none",
						cursor: "pointer",
					}}
				>
					<StarIcon style={{ fontSize: "1rem", cursor: "pointer" }} />
				</button>
				<div style={{ fontSize: "1rem" }} className="message__value">
					<div className="dropdown-content">
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								cursor: "pointer",
							}}
							onClick={() => {
								dispatch(addStarredMessage({ message }));
								setToggleStar((toggleStar) => !toggleStar);
							}}
						>
							{toggleStar ? <StarIcon /> : <StarBorderIcon />}
						</button>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								cursor: "pointer",
							}}
							onClick={() => dispatch(deleteFromMessage({ id: message.id }))}
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

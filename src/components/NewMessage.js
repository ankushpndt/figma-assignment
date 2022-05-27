import React from "react";
import "./NewMessage.css";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import {
	addStarredMessage,
	deleteFromStarredMessage,
} from "../features/NewChat/chatSlice";
import { v4 } from "uuid";
const NewMessage = ({ message }) => {
	const dispatch = useDispatch();
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
					onClick={() => dispatch(deleteFromStarredMessage(message.messageId))}
				>
					<StarIcon style={{ fontSize: "1rem", cursor: "pointer" }} />
				</button>
				<div style={{ fontSize: "1rem" }} className="message__value">
					<div className="dropdown-content">
						<a
							href="#"
							onClick={() => dispatch(addStarredMessage({ message }))}
						>
							<StarIcon />
						</a>
						<a href="#">
							<DeleteIcon />
						</a>
						<a href="#">
							<ShareIcon />
						</a>
					</div>
					{message?.messageValue}
				</div>
			</div>
		</div>
	);
};

export default NewMessage;

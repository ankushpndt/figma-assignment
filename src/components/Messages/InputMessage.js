import React, { useState } from "react";
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import { GrAttachment, GrEmoji } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
	addMessage,
	updateUserDetails,
} from "../../features/NewChat/chatSlice";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { v4 } from "uuid";
import moment from "moment";
const InputMessage = ({ userId }) => {
	const allUsers = useSelector((state) => state.Chat.users);
	const singleUser = allUsers.find((item) => item.id === userId);
	const [messageInput, setMessageInput] = useState("");
	const dispatch = useDispatch();

	return (
		<div className="input__btn__container">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					messageInput.length > 0 &&
						dispatch(
							addMessage({
								messageValue: messageInput,
								time: moment().format("LT"),
								messageId: v4(),
								id: singleUser.id,
							})
						);
					dispatch(
						updateUserDetails({
							time: moment().format("LT"),
							text: messageInput,
						})
					);
					setMessageInput("");
				}}
			>
				<input
					type="text"
					placeholder="Enter your message here..."
					style={{
						margin: "1rem 1rem 1rem 7rem",
						padding: "0.5rem",
						width: "80%",
						outlineColor: "#3b82f6",
					}}
					onChange={(e) => setMessageInput(e.target.value)}
					value={messageInput}
				/>
			</form>
			<div className="input__btn">
				<div className="input__btn__grp">
					<BorderColorOutlinedIcon sx={{ fontSize: "1rem" }} />
					<AiOutlineStar style={{ fontSize: "1rem" }} />
					<GrAttachment style={{ fontSize: "0.8rem" }} />
					<GrEmoji style={{ fontSize: "1rem" }} />
				</div>
				<div className="input__btn__send">
					<button
						disabled={messageInput.length === 0 ? true : false}
						onClick={() => {
							dispatch(
								addMessage({
									messageValue: messageInput,
									time: moment().format("LT"),
									id: singleUser?.id,
									messageId: v4(),
								})
							);
							setMessageInput("");
						}}
						style={{
							border: "none",
							backgroundColor: "transparent",
							cursor: "pointer",
						}}
					>
						<AiOutlineSend style={{ fontSize: "1rem" }} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default InputMessage;

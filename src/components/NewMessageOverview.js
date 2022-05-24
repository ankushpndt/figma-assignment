import React, { useState } from "react";
import Cover from "../assets/cover.svg";
import { BiPencil } from "react-icons/bi";
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import { GrAttachment, GrEmoji } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/NewChat/chatSlice";
import NewMessage from "./NewMessage";

const NewMessageOverview = () => {
	const messages = useSelector((state) => state.Chat.user.messages);
	const user = useSelector((state) => state.Chat.user.userDetails);
	useSelector((state) => console.log(state));

	const [messageInput, setMessageInput] = useState("");
	const dispatch = useDispatch();
	const [active, setActive] = useState(false);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				backgroundColor: "#e2e8f0",
			}}
		>
			<div className="header">
				<>
					<p className="header__user__icon">
						{user.icon} <span className="header__status__icon"></span>
					</p>
					<div className="header__user__details">
						<p className="header__user__name">{user.name}</p>
					</div>
				</>

				<button
					id={"chat"}
					onClick={() => setActive(false)}
					style={{ borderBottom: `${active === false && "#3b82f6"}` }}
				>
					Chat
				</button>
				<button
					id="starred"
					onClick={() => setActive(true)}
					style={{ borderBottom: `${active === true && "#3b82f6"} ` }}
				>
					Starred
				</button>
			</div>

			{messages?.length === 0 && (
				<div className="new__message__overview__container">
					<img src={Cover} alt="new__message" className="new__message__image" />
					<p>Start a new conversation</p>
				</div>
			)}
			{messages?.length > 0 && <NewMessage />}
			<div className="input__btn__container">
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
				/>
				<div className="input__btn">
					<div className="input__btn__grp">
						<BiPencil />
						<AiOutlineStar />
						<GrAttachment />
						<GrEmoji />
					</div>
					<div className="input__btn__send">
						<AiOutlineSend onClick={() => dispatch(addMessage(messageInput))} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewMessageOverview;

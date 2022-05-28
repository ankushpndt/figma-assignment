import React, { useState, useRef, useEffect } from "react";

import { useSelector } from "react-redux";

import NewMessageContainer from "../Messages/NewMessageContainer";
import "./SingleUserScreen.css";
import Cover from "../../assets/cover.svg";
import StarredMessage from "../Messages/StarredMessage";
import InputMessage from "../Messages/InputMessage";
const SingleUserScreen = ({ userId }) => {
	const allUsers = useSelector((state) => state.Chat.users);
	const singleUser = allUsers.find((item) => item.id === userId);

	const [showChat, setShowChat] = useState(false);
	const [showStarred, setShowStarred] = useState(false);
	const chatButton = useRef(null);
	useEffect(() => chatButton?.current?.click(), [chatButton]);
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				alignItems: "flex-end",
				minHeight: "93vh",
			}}
		>
			<div className="header">
				<>
					<p className="header__user__icon">
						{singleUser?.icon} <span className="header__status__icon"></span>
					</p>
					<div className="header__user__details">
						<p
							className="header__user__name"
							style={{ paddingBottom: "0.3rem" }}
						>
							{singleUser?.name}
						</p>
					</div>
				</>
				<div className="buttons">
					<button
						ref={chatButton}
						id="chat"
						onClick={() => {
							setShowChat(true);
							setShowStarred(false);
						}}
						style={{
							borderBottom: `${
								showChat === true
									? "3px solid #3b82f6"
									: "3px solid transparent"
							}`,
							padding: "0.7rem 0",
						}}
					>
						Chat
					</button>
					<button
						id="starred"
						onClick={() => {
							setShowChat(false);
							setShowStarred(true);
						}}
						style={{
							borderBottom: `${
								showStarred === true
									? "3px solid #3b82f6"
									: "3px solid transparent"
							}`,
							padding: "0.7rem 0",
						}}
					>
						Starred
					</button>
				</div>
			</div>
			<div className="NewMessageSingleUser">
				{singleUser.messages?.length === 0 && (
					<div className="new__message__overview__container">
						<img
							src={Cover}
							alt="new__message"
							className="new__message__image"
						/>
						<p>Start a new conversation</p>
					</div>
				)}
				{singleUser.messages.length !== 0 && (
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							paddingTop: "2rem",
							borderBottom: "1px solid #d5d2d2",
							lineHeight: "0.1rem",
						}}
					>
						<h5>
							<span
								style={{
									background: "rgb(241, 245, 249)",
									padding: "1px 10px 0 10px",
									color: "gray",
								}}
							>
								Today
							</span>
						</h5>
					</div>
				)}

				{showStarred && (
					<StarredMessage starredMessages={singleUser.starredMessages} />
				)}

				{showChat && <NewMessageContainer messages={singleUser.messages} />}
			</div>

			{showChat && <InputMessage userId={userId} />}
		</div>
	);
};

export default SingleUserScreen;

import React, { useEffect, useState } from "react";
import "../Users.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/NewChat/chatSlice";
import AllUsers from "./AllUsers";
import { BsChatDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

const InputList = () => {
	const [show, setShow] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [userIcon, setUserIcon] = useState("");
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.Chat.users);
	useEffect(() => {
		let res = inputValue.split("");
		let first = res[0];
		let second = "";
		for (let i = 0; i < res.length; i++) {
			if (res[i] === " ") {
				second = res[i + 1];
			}
		}
		setUserIcon(first + second);
	}, [inputValue]);
	return (
		<div className="users">
			<div className="all__chats">
				<div className="select__btn__container">
					<select id="select__btn">
						<option defaultValue="All chats">All Chats</option>
					</select>
				</div>
				<div className="toggle__btn">
					<button onClick={() => setShow(!show)} id="toggle__chat__btn">
						<BsChatDots style={{ stroke: "white" }} /> New Chat
					</button>
				</div>
			</div>
			{show && (
				<div className="new__user">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							dispatch(
								addUser({
									icon: userIcon,
									name: inputValue,
									text: "Start a new chat...",
									time: "",
									messages: [],
									starredMessages: [],
									id: v4(),
								})
							);
							setInputValue("");
							setShow(false);
						}}
					>
						<input
							type="search"
							placeholder="Enter a contact name to get started..."
							id="user__input"
							onChange={(e) => setInputValue(e.target.value)}
						/>
					</form>
				</div>
			)}
			{allUsers.map((user, i) => (
				<div key={i}>
					<AllUsers key={i} specificUser={user} />
				</div>
			))}
		</div>
	);
};

export default InputList;

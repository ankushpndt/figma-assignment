import React, { useState } from "react";
import "./Users.css";
import { useDispatch } from "react-redux";
import { addMessage } from "../features/NewChat/chatSlice";
import AllUsers from "./AllUsers";
import { BsChatDots } from "react-icons/bs";
const Users = () => {
	const [show, setShow] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

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
							dispatch(addMessage(inputValue));
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
			<AllUsers />
		</div>
	);
};

export default Users;

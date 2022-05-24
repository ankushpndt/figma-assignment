import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MessagesOverview from "./components/MessagesOverview";
import NewMessageOverview from "./components/NewMessageOverview";

import Users from "./components/Users";

const App = () => {
	const allUsers = useSelector((state) => state.Chat.users);
	return (
		<div className="App">
			<nav className="navbar">Smarter.Codes</nav>
			<div className="components">
				<Users />
				{allUsers.length === 0 && <MessagesOverview />}
				{allUsers.length > 0 && <NewMessageOverview />}
			</div>
		</div>
	);
};

export default App;

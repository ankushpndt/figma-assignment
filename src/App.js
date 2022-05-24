import React from "react";
import "./App.css";
import MessagesOverview from "./components/MessagesOverview";
import NewMessageOverview from "./components/NewMessage";

import Users from "./components/Users";

function App() {
	return (
		<div className="App">
			<nav className="navbar">Smarter.Codes</nav>
			<div className="components">
				<Users />
				<MessagesOverview />
				{/* <NewMessageOverview /> */}
			</div>
		</div>
	);
}

export default App;

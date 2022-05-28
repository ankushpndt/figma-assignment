import React from "react";
import "./App.css";
import InputList from "./components/Users/InputList";
import NewMessageOverview from "./components/Users/NewMessageOverview";
import { Routes, Route, Link } from "react-router-dom";
import MessagesOverview from "./components/Users/MessagesOverview";
const App = () => {
	return (
		<div className="App">
			<nav className="navbar">
				<Link to="/" style={{ color: "white", textDecoration: "none" }}>
					Smarter.Codes
				</Link>
			</nav>
			<div style={{ display: "flex" }}>
				<div className="components">
					<InputList />
				</div>

				<Routes>
					<Route path="/" element={<MessagesOverview />} />
					<Route path="/inputlist" element={<InputList />} />
					<Route
						path="/newmessageoverview/:userId"
						element={<NewMessageOverview />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;

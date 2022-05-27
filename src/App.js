import React from "react";
import "./App.css";
import InputList from "./components/InputList";
import NewMessageOverview from "./components/NewMessageOverview";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";

const App = () => {
	return (
		<div className="App">
			<nav className="navbar">Smarter.Codes</nav>
			<div style={{ display: "flex" }}>
				<div className="components">
					<InputList />
				</div>

				<Routes>
					<Route path="/" element={<Users />} />
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

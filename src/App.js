import React from "react";
import "./App.css";
import InputList from "./components/Users/InputList";
import NewMessageOverview from "./components/Users/NewMessageOverview";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<nav className="navbar">Smarter.Codes</nav>
			<div style={{ display: "flex" }}>
				<div className="components">
					<InputList />
				</div>

				<Routes>
					<Route path="/" element={<InputList />} />
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

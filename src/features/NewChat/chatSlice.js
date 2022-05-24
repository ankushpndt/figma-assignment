import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
	name: "Chat",
	initialState: {
		// messages: [],
		users: [],
		starredMessage: [],
		user: {
			messages: [],
			userDetails: {},
		},
	},
	reducers: {
		addUser: (state, action) => {
			state.users = state.users.concat(action.payload);
		},
		singleUser: (state, action) => {
			state.user.userDetails = action.payload;
		},
		addMessage: (state, action) => {
			console.log(action.payload);
			state.user.messages = state.user.messages.concat(action.payload);
		},
		addStarredMessage: () => {},
	},
});
export const { addUser, singleUser, addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;

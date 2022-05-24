import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
	name: "Chat",
	initialState: {
		messages: [],
		users: [],
		starredMessage: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.users = state.users.concat(action.payload);
		},
		addUser: () => {},
		addStarredMessage: () => {},
	},
});
export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;

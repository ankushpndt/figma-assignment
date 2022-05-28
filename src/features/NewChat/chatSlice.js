import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
	name: "Chat",
	initialState: {
		// messages: [],
		users: [],
		// starredMessage: [],
		user: {
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
			return {
				...state,
				users: state.users.map((item) => {
					if (item?.id === action.payload?.id) {
						return {
							...item,
							messages: [...item.messages, action.payload],
						};
					} else {
						return item;
					}
				}),
			};
		},
		deleteFromMessage: (state, action) => {
			return {
				...state,
				users: state.users.map((item) => {
					return {
						...item,
						messages: item.messages.filter((el) => el.id !== action.payload.id),
					};
				}),
			};
		},
		addStarredMessage: (state, action) => {
			return {
				...state,
				users: state.users.map((item) => {
					return {
						...item,
						starredMessages: [...item.starredMessages, action.payload.message],
					};
				}),
			};
		},
		deleteFromStarredMessage: (state, action) => {
			console.log({ action });
			return {
				...state,
				users: state.users.map((item) => {
					return {
						...item,
						starredMessages: item.starredMessages.filter(
							(el) => el.id !== action.payload.id
						),
					};
				}),
			};
		},
	},
});
export const {
	addUser,
	singleUser,
	addMessage,
	addStarredMessage,
	deleteFromStarredMessage,
	deleteFromMessage,
} = ChatSlice.actions;
export default ChatSlice.reducer;

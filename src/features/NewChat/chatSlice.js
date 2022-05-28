import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
	name: "Chat",
	initialState: {
		users: [],
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
						messages: item.messages.filter(
							(el) => el.messageId !== action.payload.messageId
						),
					};
				}),
			};
		},
		addStarredMessage: (state, action) => {
			let test = {
				...state,
				users: state.users.map((item) => {
					if (item?.id === action.payload?.message?.id) {
						return {
							...item,
							starredMessages: [
								...item.starredMessages,
								action.payload.message,
							],
						};
					} else {
						return item;
					}
				}),
			};
			console.log(test);
			return test;
		},
		deleteFromStarredMessage: (state, action) => {
			return {
				...state,
				users: state.users.map((item) => {
					return {
						...item,
						starredMessages: item.starredMessages.filter(
							(el) => el.messageId !== action.payload.messageId
						),
					};
				}),
			};
		},
		updateUserDetails: (state, action) => {
			return {
				...state,
				users: state.users.map((item) => {
					if (item.id === action.payload.id) {
						return {
							...item,
							time: action.payload.time,
							text: action.payload.text,
						};
					} else {
						return item;
					}
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
	updateUserDetails,
} = ChatSlice.actions;
export default ChatSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "../features/NewChat/chatSlice";
export const store = configureStore({
	reducer: {
		Chat: ChatReducer,
	},
});

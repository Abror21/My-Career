import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	error: "",
	data: [],
	sidePage: false
};

const FreelanceSlice = createSlice({
	name: "resume",
	initialState,
	reducers: {
		sidePage: state => {
			state.sidePage = true;
		}
	}
});
export const { sidePage } = FreelanceSlice.actions; /*resumeSlice.actions*/
export default FreelanceSlice.reducer;

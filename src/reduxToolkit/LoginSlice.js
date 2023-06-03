import {createSlice } from "@reduxjs/toolkit";
import { logInRequest, registerRequest, resumeFinishPost } from "./extraReducers";

const initialState = {
	loading: false,
	error: "",
	loggedIn: window.localStorage.getItem("token"),
	resume: JSON.parse(localStorage.getItem("resume")) ? JSON.parse(localStorage.getItem("resume")) : false,
	checkEmail: false,
	bodyErrors: "",
	loginResponseError: null
};

const logInSlice = createSlice({
	name: "image",
	initialState,
	reducers: {
		removeToken: (state, {type,payload}) => {
			localStorage.removeItem("token")
			state.loggedIn = null
		},
		resumeFinish: (state,{type,payload}) => {
			localStorage.setItem("resume",payload)
			state.resume = payload
		},
		removeCheckEmail: (state) => {
			state.checkEmail = null
		},
		profilLogout: (state) => {
			localStorage.clear()
			state.resume = null
			state.loggedIn = null
			state.loginResponseError = null
			state.bodyErrors = null
		}
	},

	extraReducers: builder => {
		builder.addCase(logInRequest.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(logInRequest.fulfilled, (state, action) => {
			window.localStorage.setItem("token", action.payload.token);
			state.loggedIn = true;
			state.loading = false;
		});
		builder.addCase(logInRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.loginResponseError = "Email or password incorrect"
		});

		///////////////////REGISTER REDUCER/////////////////
		builder.addCase(registerRequest.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(registerRequest.fulfilled, (state, {payload}) => {
			state.checkEmail = payload.succeded;
			state.bodyErrors = payload.errors
		});
		builder.addCase(registerRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		///////////////////RESUMEFINISH REDUCER/////////////////
		builder.addCase(resumeFinishPost.pending, (state, {type,payload}) => {
			state.loading = true
		});
		builder.addCase(resumeFinishPost.fulfilled, (state, {type,payload}) => {
			localStorage.setItem("resume", payload.data.finish)
			state.resume = payload.data.finish
			state.loading = false;
			console.log(payload.data.finish);
		});
		builder.addCase(resumeFinishPost.rejected, (state,{payload}) => {
			state.loading = false;
		})
	}
});

export const {removeToken,resumeFinish,removeCheckEmail,profilLogout} = logInSlice.actions
export default logInSlice.reducer;

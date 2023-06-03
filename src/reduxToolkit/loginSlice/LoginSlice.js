import { addToCompany, addToFreelancer, claimsGet, logInRequest, registerRequest, resumeFinishPost, userRoles } from "reduxToolkit/extraReducers";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	loading: false,
	error: "",
	loginOnSuccess: "",
	loggedIn: localStorage.getItem("token"),
	freelancerOrCompony: localStorage.getItem("type") ? localStorage.getItem("type") : false,
	checkEmail: false,
	bodyErrors: "",
	loginResponseError: null,
	resumeOnSuccess: ""
};

/////////erlan\\\\\\\\\\

const logInSlice = createSlice({
	name: "loginRegister",
	initialState,
	reducers: {
		removeToken: (state, { type, payload }) => {
			localStorage.removeItem("token");
			state.loggedIn = null;
		},
		resumeFinish: (state, { type, payload }) => {
			localStorage.setItem("resume", payload);
			state.resume = payload;
		},
		removeCheckEmail: state => {
			state.checkEmail = null;
		},
		profilLogout: state => {
			localStorage.clear();
			state.resume = null;
			state.loggedIn = null;
			state.loginResponseError = null;
			state.bodyErrors = null;
		}
	},

	extraReducers: builder => {
		///////////////////CLAIMS REDUCER/////////////////
		// builder.addCase(claimsGet.pending, (state, action) => {
		// 	state.loading = true;
		// });
		// builder.addCase(claimsGet.fulfilled, (state, action) => {
		// 	state.loading = false;
		// });
		// builder.addCase(claimsGet.rejected, (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.error.message;
		// });

		///////////////////LOG_IN REDUCER/////////////////
		builder.addCase(logInRequest.pending, (state, action) => {
			state.loginOnSuccess = false;
			state.loading = true;
		});
		builder.addCase(logInRequest.fulfilled, (state, action) => {
			localStorage.setItem("token", action.payload.token);
			state.loggedIn = action.payload.token;
			state.loading = false;
			state.loginOnSuccess = true;
		});
		builder.addCase(logInRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.loginResponseError = "Email or password incorrect";
		});

		///////////////////REGISTER REDUCER/////////////////
		builder.addCase(registerRequest.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(registerRequest.fulfilled, (state, { payload }) => {
			state.checkEmail = payload
			state.bodyErrors = payload.errors
			console.log(payload)
		});
		builder.addCase(registerRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		///////////////////USERROLES REDUCER/////////////////
		// builder.addCase(userRoles.pending, (state, action) => {
		// 	state.loading = true;
		// });
		// builder.addCase(userRoles.fulfilled, (state, action) => {
		// 	if (action.payload.cLaims.length === 4) {
		// 		const userType = action.payload.cLaims[3].value;
		// 		localStorage.setItem("type", userType);
		// 		state.freelancerOrCompony = userType
		// 	} else {
		// 		const userType = action.payload.cLaims[2].value;
		// 		localStorage.setItem("type", userType);
		// 		state.freelancerOrCompony = userType;
		// 		console.log(userType);
		// 	}
		// 	console.log(action);
		// 	state.loading = false;
		// });
		// builder.addCase(userRoles.rejected, (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.error.message;
		// 	console.log(action);
		// });

		///////////////////ADDTOFREELANCER REDUCER/////////////////
		// builder.addCase(addToFreelancer.pending, (state, action) => {
		// 	state.loading = true;
		// });
		// builder.addCase(addToFreelancer.fulfilled, (state, action) => {
		// 	state.loading = false;
		// });
		// builder.addCase(addToFreelancer.rejected, (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.error.message;
		// });

		///////////////////ADDTOCOMPANY REDUCER/////////////////
		// builder.addCase(addToCompany.pending, (state, action) => {
		// 	state.loading = true;
		// });
		// builder.addCase(addToCompany.fulfilled, (state, action) => {
		// 	state.loading = false;
		// });
		// builder.addCase(addToCompany.rejected, (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.error.message;
		// 	console.log(action);
		// });

		///////////////////RESUMEFINISH REDUCER/////////////////
		builder.addCase(resumeFinishPost.pending, (state, { type, payload }) => {
			state.loading = true;
			state.resumeOnSuccess = false;
		});
		builder.addCase(resumeFinishPost.fulfilled, (state, action) => {
			state.loading = false;
			state.resumeOnSuccess = action.payload.isSuccess;
		});
		builder.addCase(resumeFinishPost.rejected, (state, action) => {
			state.loading = false;
		});
	}
});

export const { removeToken, resumeFinish, removeCheckEmail, profilLogout } = logInSlice.actions;
export default logInSlice.reducer;

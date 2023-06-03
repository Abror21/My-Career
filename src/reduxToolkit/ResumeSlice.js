 import {
 	createAsyncThunk,
 	createSlice
 } from "@reduxjs/toolkit";
 import axios from "axios";
 import {
 	LANGUAGESUPLOAD,
 	CONTACTSUPLOAD,
 	PHOTO,
 	COUNTRYLIST,
 	COUNTRY_LIST_UPLOAD,
 	POSITIONS,
 	HOBBIES,
 	POSITION_POST,
 	LANGUAGES,
 	EXPERIENCE,
 	EXPERIENCEDELETE,
 	EDUCATION,
 	EDUCATIONDELETE
 } from "./URLS";



 import {
 	resumeSelect
 } from "./extraReducers";

 const initialState = {
 	loading: false,
 	error: "",
 	data: [],
 	countryList: [],
 	positionList: [],
 	hobbiesList: [],
 	languageList: [],
 	experienceList: [],
	experiencePostData:"",
	educationPostData:"",
 	educationList: [],
 	resumeDetails: "",
	isExperienceModal: false,
	isEducationModal: false,
 };

 export const photoUpload = createAsyncThunk("token/photoUpload", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "post",
 		url: PHOTO,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data;`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 export const countryList = createAsyncThunk("get/countryList", async () => {
 	return axios.get(COUNTRYLIST).then(response => {
 		return response.data;
 	});
 });

 export const countryUpload = createAsyncThunk("token/countryUpload", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "post",
 		url: COUNTRY_LIST_UPLOAD,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data;`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 export const positions = createAsyncThunk("get/positions", async () => {
 	return axios.get(POSITIONS).then(response => {
 		return response.data;
 	});
 });

 export const hobbies = createAsyncThunk("get/hobbies", async () => {
 	return axios.get(HOBBIES).then(response => {
 		return response.data;
 	});
 });

 // export const positionUpload = createAsyncThunk("token/positionUpload", async payload => {
 // 	const token = window.localStorage.getItem("token");
 // 	return axios({
 // 		method: "post",
 // 		url: POSITION_POST,
 // 		// data: {
 // 		// 	description: payload.description,
 // 		// 	positionId: payload.positionId,
 // 		// 	freelancerHobbies: payload.freelancerHobbies,
 // 		// 	freelancerSkills: payload.freelancerSkills
 // 		// },
 // 		data: {
 // 			description: "test",
 // 			positionId: 1,
 // 			freelancerHobbies: [0],
 // 			freelancerSkills: [0]
 // 		},
 // 		headers: {
 // 			Authorization: `bearer ${token}`
 // 		}
 // 	}).then(response => {
 // 		return response.data;
 // 	});
 // });

 export const languages = createAsyncThunk("get/languages", async () => {
 	return axios.get(LANGUAGES).then(response => {
 		return response.data;
 	});
 });

 export const languageUpload = createAsyncThunk("token/languageUpload", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "post",
 		url: LANGUAGESUPLOAD,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data;`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 export const contactUpload = createAsyncThunk("token/contactUpload", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "put",
 		url: CONTACTSUPLOAD,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data;`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ///////////////////////////Experience post//////////

 export const exsperiencePost = createAsyncThunk("post/exsperiencePost", async payload => {
 	const token = window.localStorage.getItem("token");

 	return axios({
 		method: "POST",
 		url: EXPERIENCE,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data;`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ////////////////////////////Experience get//////////

 export const exsperienceGet = createAsyncThunk("post/exsperienceGet", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "GET",
 		url: EXPERIENCE,
 		headers: {
 			"Content-Type": `application/json`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ////////////////////////////Experience Delete//////////

 export const exsperienceDelete = createAsyncThunk("post/exsperienceDelete", async payload => {
 	const token = window.localStorage.getItem("token");

 	console.log(payload);
 	return axios({
 		method: "DELETE",
 		url: EXPERIENCEDELETE + payload,
 		headers: {
 			"Content-Type": `application/json`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ///////////////////////////EDUCATION POST//////////

 export const educationPost = createAsyncThunk("freelancer/educationPost", async payload => {
 	const token = window.localStorage.getItem("token");

 	return axios({
 		method: "POST",
 		url: EDUCATION,
 		data: payload,
 		headers: {
 			"Content-Type": `multipart/form-data`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ///////////////////////////EDUCATION GET//////////

 export const educationGet = createAsyncThunk("freelancer/educationGet", async payload => {
 	const token = window.localStorage.getItem("token");
 	return axios({
 		method: "GET",
 		url: EDUCATION,
 		headers: {
 			"Content-Type": `application/json`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 ///////////////////////////EDUCATION DELETE//////////

 export const educationDelete = createAsyncThunk("freelancer/educationDelete", async payload => {
 	const token = window.localStorage.getItem("token");

 	return axios({
 		method: "Delete",
 		url: EDUCATIONDELETE + payload,
 		data: payload,
 		headers: {
 			"Content-Type": `application/json`,
 			Authorization: `bearer ${token}`
 		}
 	}).then(response => {
 		return response.data;
 	});
 });

 const resumeSlice = createSlice({
 	name: "resume",
 	initialState,
 	reducers: {
		changeExperienceModal: (state, {payload}) => {
			state.isExperienceModal = payload
		},
		changeEducationModal: (state, {payload}) => {
			state.isEducationModal = payload
		}
 	},
 	extraReducers: builder => {
 		builder.addCase(photoUpload.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(photoUpload.fulfilled, (state, action) => {
 		});
 		builder.addCase(photoUpload.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//CoutryList reducer
 		builder.addCase(countryList.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(countryList.fulfilled, (state, action) => {
 			state.countryList = action.payload.data;
 		});
 		builder.addCase(countryList.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//CoutryList Upload reducer
 		builder.addCase(countryUpload.fulfilled, (state, action) => {
 		});

 		//Positions List reducer
 		builder.addCase(positions.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(positions.fulfilled, (state, action) => {
 			state.positionList = action.payload.data;
 		});
 		builder.addCase(positions.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//Positions List reducer
 		builder.addCase(hobbies.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(hobbies.fulfilled, (state, action) => {
 			state.hobbiesList = action.payload.data;
 		});
 		builder.addCase(hobbies.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//Positions Upload List reducer
 		// builder.addCase(positionUpload.pending, (state, action) => {
 		// 	state.loading = true;
 		// });
 		// builder.addCase(positionUpload.fulfilled, (state, action) => {});
 		// builder.addCase(positionUpload.rejected, (state, action) => {
 		// 	state.loading = false;
 		// 	state.error = action.error.message;
 		// });

 		//Languages List reducer
 		builder.addCase(languages.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(languages.fulfilled, (state, action) => {
 			state.languageList = action.payload.data;
 		});
 		builder.addCase(languages.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//Languages upload reducer
 		builder.addCase(languageUpload.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(languageUpload.fulfilled, (state, action) => {
 		});
 		builder.addCase(languageUpload.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//Experiens post reducer
 		builder.addCase(exsperiencePost.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(exsperiencePost.fulfilled, (state, {
 			type,
 			payload
 		}) => {
			state.experiencePostData = payload.data.id
 		});
 		builder.addCase(exsperiencePost.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		//Experiens get reducer
 		builder.addCase(exsperienceGet.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(exsperienceGet.fulfilled, (state, {
 			type,
 			payload
 		}) => {
 			state.experienceList = payload.data
 			state.loading = false;
 		});
 		builder.addCase(exsperienceGet.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 			state.experienceList = [];
 		});

 		//Experiens delete reducer
 		builder.addCase(exsperienceDelete.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(exsperienceDelete.fulfilled, (state, {
 			type,
 			payload
 		}) => {
 			state.loading = false;
 		});
 		builder.addCase(exsperienceDelete.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});

 		////////////////////////////////////EDUCATION POST REDUCER//////////////////////
 		builder.addCase(educationPost.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(educationPost.fulfilled, (state, {
 			type,
 			payload
 		}) => {
			state.educationPostData = payload.data
			console.log(payload);
 		});
 		builder.addCase(educationPost.rejected, (state, action) => {
 			state.loading = false;
			 console.log(action);
 			state.error = action.error.message;
 			console.log(action.error.message);
 		});

 		////////////////////////////////////EDUCATION GET REDUCER//////////////////////
 		builder.addCase(educationGet.pending, (state, action) => {
 			state.loading = true;
 		});

 		builder.addCase(educationGet.fulfilled, (state, {
 			type,
 			payload
 		}) => {
 			state.educationList = payload.data;
 		});
 		builder.addCase(educationGet.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 			state.educationList = [];
 		});

 		////////////////////////////////////EDUCATION DELETE REDUCER//////////////////////

 		builder.addCase(educationDelete.pending, (state, action) => {
 			state.loading = true;
 		});
 		builder.addCase(educationDelete.fulfilled, (state, {
 			type,
 			payload
 		}) => {
 			state.loading = false;
 		});
 		builder.addCase(educationDelete.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});


 		///////////////////////////RESUMESELECT POST REDUCER//////////
 		builder.addCase(resumeSelect.pending, (state, action) => {
 			state.loading = true;
 		});

 		builder.addCase(resumeSelect.fulfilled, (state, {
 			type,
 			payload
 		}) => {
 			state.loading = false;
 			state.resumeDetails = payload.data;
 		});

 		builder.addCase(resumeSelect.rejected, (state, action) => {
 			state.loading = false;
 			state.error = action.error.message;
 		});
 	}
 });
 export const {changeExperienceModal,changeEducationModal} = resumeSlice.actions;
 export default resumeSlice.reducer;
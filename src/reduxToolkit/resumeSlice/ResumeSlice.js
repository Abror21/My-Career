import { createSlice } from "@reduxjs/toolkit";
import {
	contactUpload,
	getCountryList,
	countryUpload,
	educationDelete,
	educationEdit,
	educationGet,
	educationPost,
	experienceDelete,
	experienceEdit,
	experienceGet,
	experiencePost,
	hobbies,
	languageUpload,
	languages,
	photoUpload,
	positions,
	positionsUpload,
	resumeSelect,
	getRegionsList,
	getLanguages,
	getPositionsSkillsWithId,
	postFreelancerInfo,
	Freelancerpost
} from "../extraReducers";

const initialState = {
	loading: false,
	error: "",
	data: [],
	regionsList: [],
	countryList: [],
	positionList: [{ name: "Web Designer", id: 0 }, { name: "FrontEnd", id: 1 }, { name: "Backend", id: 2 }],
	hobbiesList: [],
	HobbysGetLoading: null,
	languageList: [],
	experienceList: [],
	experiencePostIsSuccess: "",
	educationList: [],
	skillsData: [],
	educationPostIsSuccess: "",
	resumeDetails: "",
	skillsLoading: false,
	status: "idle",
	positionGetLoading: false,
	userID: null,
	freelancerId:0,
	testData: []
};

const resumeSlice = createSlice({
	name: "resume",
	initialState,
	reducers: {
		changeExperienceModal: (state, { payload }) => {
			state.isExperienceModal = payload;
		},
		changeEducationModal: (state, { payload }) => {
			state.isEducationModal = payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(photoUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(photoUpload.fulfilled, (state, action) => {});
		builder.addCase(photoUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
		/////////post Freelancer//////
		builder.addCase(Freelancerpost.pending, (state)=>{
			state.loading = true
		})
		builder.addCase(Freelancerpost.fulfilled, (state, action)=>{
			state.loading = false
			state.freelancerId = action.payload.id
			console.log(action.payload)
		})
		builder.addCase(Freelancerpost.rejected, (state, action)=>{
			state.error = action.error.message
		})
		//CoutryList reducer
		builder.addCase(getCountryList.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getCountryList.fulfilled, (state, action) => {
			state.countryList = action.payload;
		});
		//Regions List
		builder.addCase(getCountryList.rejected, (state, action) => {
			state.loading = false;
			console.log("erorr");
			state.error = action.error.message;
		});

		builder.addCase(getRegionsList.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getRegionsList.fulfilled, (state, action) => {
			state.regionsList = action.payload.regions;
		});
		builder.addCase(getRegionsList.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
		//CoutryList Upload reducer
		builder.addCase(countryUpload.fulfilled, (state, action) => {});

		//Positions List reducer
		builder.addCase(positions.pending, (state, action) => {
			state.positionGetLoading = true;
		});

		builder.addCase(positions.fulfilled, (state, action) => {
			state.positionList = action.payload.data;
			state.positionGetLoading = false;
		});

		builder.addCase(positions.rejected, (state, action) => {
			// state.positionGetLoading = false;
			state.error = action.error.message;
		});
		///////////////////////getPositionsSkillsWithId//////////////////////
		builder.addCase(getPositionsSkillsWithId.pending, (state, action) => {
			// state.loading = true;

		});
		builder.addCase(getPositionsSkillsWithId.fulfilled, (state, action) => {
			state.skillsData = action.payload;
			state.loading = false;

		});
		builder.addCase(getPositionsSkillsWithId.rejected, (state, action) => {
			state.error = action.error.message;
		});

		//Positions List reducer
		builder.addCase(hobbies.pending, (state, action) => {
			state.loading = true;
			state.HobbysGetLoading = "pending Xobbys";
		});
		builder.addCase(hobbies.fulfilled, (state, action) => {
			state.hobbiesList = action.payload;

			state.HobbysGetLoading = "getXobbys";
		});
		builder.addCase(hobbies.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// Positions Upload List reducer

		builder.addCase(positionsUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(positionsUpload.fulfilled, (state, { payload }) => {});
		builder.addCase(positionsUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Languages List reducer
		builder.addCase(languages.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(languages.fulfilled, (state, action) => {
			state.languageList = action.payload;
			state.loading = false;
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
			state.loading = false;
		});
		builder.addCase(languageUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//EXPERIENCE POST REDUCER
		builder.addCase(experiencePost.pending, (state, action) => {
			state.loading = true;
			state.experiencePostIsSuccess = "pending";
		});
		builder.addCase(experiencePost.fulfilled, (state, action) => {
			state.loading = false;
			state.userID = action.payload.userId;
			state.experiencePostIsSuccess = "changed";
		});
		builder.addCase(experiencePost.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		////////////////////////////////////EXPERIENCE EDIT REDUCER//////////////////////
		builder.addCase(experienceEdit.pending, (state, action) => {
			state.loading = true;
			state.experiencePostIsSuccess = "pending";
		});
		builder.addCase(experienceEdit.fulfilled, (state, { type, payload }) => {
			state.experiencePostIsSuccess = "succsess";
			state.loading = false;
		});
		builder.addCase(experienceEdit.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		/////////////////////////////////EXPERIENCE GET REDUCER//////////////////////
		builder.addCase(experienceGet.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(experienceGet.fulfilled, (state, action) => {
			state.experienceList = action.payload;

			state.loading = false;
		});
		builder.addCase(experienceGet.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.experienceList = [];
		});

		////////////////////////////////////EXPERIENCE DELETE REDUCER ////////////////
		builder.addCase(experienceDelete.pending, (state, action) => {
			state.experiencePostIsSuccess = "pendign deleting";
			state.loading = true;
		});
		builder.addCase(experienceDelete.fulfilled, (state, { type, payload }) => {
			state.loading = false;
			state.experiencePostIsSuccess = "success deledet";
		});
		builder.addCase(experienceDelete.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		////////////////////////////////////EDUCATION POST REDUCER//////////////////////
		builder.addCase(educationPost.pending, (state, action) => {
			state.loading = true;
			state.educationPostIsSuccess = null;
		});
		builder.addCase(educationPost.fulfilled, (state, action) => {
			state.educationPostIsSuccess = action.payload;
			state.loading = false;
		});
		builder.addCase(educationPost.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		////////////////////////////////////EDUCATION EDIT REDUCER//////////////////////
		builder.addCase(educationEdit.pending, (state, action) => {
			state.loading = true;
			state.educationPostIsSuccess = null;
		});
		builder.addCase(educationEdit.fulfilled, (state, { type, payload }) => {
			state.educationPostIsSuccess = payload.isSuccess;
			state.loading = false;
		});
		builder.addCase(educationEdit.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		////////////////////////////////////EDUCATION GET REDUCER//////////////////////
		builder.addCase(educationGet.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(educationGet.fulfilled, (state, action) => {
			state.educationList = action.payload;
			state.loading = false;
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
		builder.addCase(educationDelete.fulfilled, (state, { type, payload }) => {
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

		builder.addCase(resumeSelect.fulfilled, (state, { type, payload }) => {
			state.loading = false;
			state.resumeDetails = payload.data;
		});

		builder.addCase(resumeSelect.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		/////////////////////////CONTACT UPLOAD REDUCER/////////////////
		builder.addCase(contactUpload.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(contactUpload.fulfilled, (state, action) => {
			// console.log(action.payload);
		});

		builder.addCase(contactUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});
export const { changeExperienceModal, changeEducationModal } = resumeSlice.actions;
export default resumeSlice.reducer;

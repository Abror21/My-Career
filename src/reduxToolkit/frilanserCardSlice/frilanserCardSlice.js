import { createSlice } from "@reduxjs/toolkit";
import { getFreelancer } from "../extraReducers";
const initialState = {
	loading: "",
	freelancerData: [],
	skillsData: [],
	hobbiesData: [],
	error: null,
	freelancerId:0,
	freelancer: {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		DateOfBirthString: "",
		address: {
			countryId: 1,
			country: "afganistan",
			street: "",
		},
		position: 0,
		bio: " ",
		contacts: {
			whatsApp: "",
			facebook: "",
			twitter: "",
			instagram: "",
			telegram: "",
			github: "",
			webSite: ""
		}
	}
};

const freelancerSlice = createSlice({
	name: "freelancer",
	initialState,
	reducers: {
		firstStep: (state, action) => {
			state.freelancer.firstName = action.payload.firstName;
			state.freelancer.lastName = action.payload.lastName;
			state.freelancer.email = action.payload.email;
			state.freelancer.phoneNumber = action.payload.phoneNumber;
		},
		secondStep: (state, action) => {
			state.freelancer.address.street = action.payload;
		},
		yourSelfStep: (state, action) => {
			state.freelancer.position = action.payload.position;
			state.freelancer.DateOfBirthString = action.payload.DateOfBirthString;
			state.freelancer.bio = action.payload.bio;
		},
		socialStep: (state, action) => {
			// state.freelancer.contacts = { ...action.payload };
		},
		getSkills: (state, action) => {
			state.skillsData = action.payload;
		},
		getHobbies: (state, { payload }) => {
			state.hobbiesData = payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getFreelancer.pending, state => {
				state.loading = true;
			})
			.addCase(getFreelancer.fulfilled, (state, action) => {
				state.loading = false;
				state.freelancerData = action.payload;
			})
			.addCase(getFreelancer.rejected, (state, action) => {
				state.error = action.error.message;
			});
	}
});

export const { firstStep, secondStep, yourSelfStep, socialStep, getSkills, getHobbies } = freelancerSlice.actions;
export default freelancerSlice.reducer;

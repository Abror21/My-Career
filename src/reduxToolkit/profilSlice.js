import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_FREELANCER } from "./URLS";

const initialState = {  
   loading: false,
   error:'',
   data:[],
   allFreelancers: [],
   sidePage: false,
   isActive: false 
};

export const allFreelancerData = createAsyncThunk('allFreelancerData', async payload => {
	const token = window.localStorage.getItem("token");
    	return axios({
		method:"GET",
		url:GET_ALL_FREELANCER,
		headers:{
			Authorization: "Bearer " + token
		}
	}).then(res => res.data)
})

const AllFreelancerSlice = createSlice({
    name: 'allFreelancer',
    initialState,
    reducers: {
    		sidePage: state => {
			state.sidePage = true;
		},
		modalIsActive: state => {
			state.isActive = !state.isActive;
		}
    },
    extraReducers: builder => {
        builder.addCase(allFreelancerData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(allFreelancerData.fulfilled, (state, {payload}) => {
            state.allFreelancers = payload.data
        })
        builder.addCase(allFreelancerData.rejected, (state, action)=> {
            state.loading = true
            console.log(action);
        })
    }
})

export const { sidePage, modalIsActive } = AllFreelancerSlice.actions
export default AllFreelancerSlice.reducer;
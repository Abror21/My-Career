import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    language: localStorage.getItem("language") ? localStorage.getItem("language") : "en"
}

const languageSlice = createSlice({
	name: "language",
	initialState,
    reducers:{
        languageChange: (state, {type,payload}) => {
            localStorage.setItem("language", payload)
            state.language = payload
        }
    }
});

export const {languageChange} = languageSlice.actions

export default languageSlice.reducer
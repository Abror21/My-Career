const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    lenguage: localStorage.getItem("lenguage") ? localStorage.getItem("lenguage") : "en"
}

const lenguageSlice = createSlice({
	name: "Lenguage",
	initialState,
    reducers:{
        lenguageChange: (state, {type,payload}) => {
            localStorage.setItem("lenguage", payload)
            state.lenguage = payload
        }
    }
});

export const {lenguageChange} = lenguageSlice.actions

export default lenguageSlice.reducer
import { contractCreate, dagavorItem } from "reduxToolkit/extraReducers";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    loading: false,
    errors: "",
    contractCreateList: "",
    davagorItem: {},
    dagavor: "",
}



const contractSlice = createSlice({
    name: "contractSlice",
    initialState,
    reducers: {

    },
    extraReducers: build => {
        //////////////////////////////CONTRACT CREATE REDUCER/////////////////////////////
        build.addCase(contractCreate.pending, (state,{payload}) => {
            state.loading = true
        });
        build.addCase(contractCreate.fulfilled, (state,{payload}) => {
            state.contractCreateList = payload
            state.loading = false
            console.log(payload);
        });
        build.addCase(contractCreate.rejected, (state,action) => {
            state.loading = false
            state.errors = action.error.message;
        })

        //////////////////////////////DAGAVOR ITEM REDUCER/////////////////////////////
        build.addCase(dagavorItem.pending, (state) => {
            state.loading = true;
        });
        build.addCase(dagavorItem.fulfilled, (state, {payload}) => {
            state.davagorItem = payload;
        });
        build.addCase(dagavorItem.rejected, (state,action) => {})
    },
})

export default contractSlice.reducer

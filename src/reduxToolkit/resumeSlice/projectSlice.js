const { createSlice } = require("@reduxjs/toolkit");
const { projectPost } = require("reduxToolkit/extraReducers");

const initialState = {
  loading: false,
  error: "",
  data: [],
  filteredData: [],
  response: null
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(projectPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(projectPost.fulfilled, (state, { type, payload }) => {
      state.loading = false;
      state.response = payload.data
    });
    builder.addCase(projectPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    });
  }
})

export default projectSlice.reducer;


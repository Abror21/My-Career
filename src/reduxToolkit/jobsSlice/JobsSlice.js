// const { createSlice } = require("@reduxjs/toolkit");
// const { getAllJobs } = require("reduxToolkit/extraReducers");
import { createSlice } from '@reduxjs/toolkit'
import { getAllJobs } from '../extraReducers'

const initialState = {
  loading: false,
  error: "",
  data: [],
  filteredData: []
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      console.log(payload);
      const { priceFrom, priceTo } = payload;
      if (priceFrom || priceTo) {
        state.filteredData = state.data.filter(({ job }) => {
          console.log(job.price, job.priceRate);
          if (!priceTo) return +priceFrom <= job.price;
          else return +priceFrom <= job.price && +priceTo >= job.priceRate
        })
      }


    }
  },
  extraReducers: builder => {
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (state, { type, payload }) => {
      state.loading = false;
      state.data = payload.jobs;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    });
  }
})

export const { filterData } = jobsSlice.actions;
export default jobsSlice.reducer;
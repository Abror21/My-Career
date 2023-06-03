import {
    createSlice
} from "@reduxjs/toolkit"


const initialState = {
    activeDote: {
        id: 1,
        label: "Personal information"
    },
    activeCard: {
        id: 1,
        label: "photo"
    }
}


const resumeControls = createSlice({
    name: "resume-contole",
    initialState,
    reducers: {
        activeDoteAction: (state, {
            payload
        }) => {
            state.activeDote = payload[0]
            state.activeCard = payload[1]
        },
    }
})

export const {
    activeDoteAction,
    activeCardAction
} = resumeControls.actions

export default resumeControls.reducer
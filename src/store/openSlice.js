import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
    name: "openProjectDetails",
    initialState: {
        data: false,
    },
    reducers: {
        toogle: (state) => {
            state.data = !state.data;
        },
    },
});
export default openSlice.reducer;
export const { toogle } = openSlice.actions;

import { createSlice, createAction, isAnyOf } from "@reduxjs/toolkit";
import { createProject, selectProject, deleteProject } from "./index";

const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        showDetails: "landing", // 'form', 'landing', 'default'
        title: "",
        description: "",
        date: "",
    },
    reducers: {
        // este se debe implementar en extra reducers combinado con select project
        showDetailScreen: (state) => {
            state.showDetails = "details";
        },

        showFormScreen: (state) => {
            state.showDetails = "form";
        },

        setTitle: (state, action) => {
            state.title = action.payload;
        },

        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        cancelForm: (state) => {
            state.showDetails = "landing";
            state.description = "";
            state.date = "";
            state.title = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createProject, (state) => {
            state.title = "";
            state.description = "";
            state.date = "";
            state.showDetails = "details";
        });
        builder.addCase(selectProject, (state) => {
            state.showDetails = "details";
        });
        builder.addCase(deleteProject, (state) => {
            state.showDetails = "landing";
        });
    },
});
export default formSlice.reducer;
export const {
    showDefaultScreen,
    showDetailScreen,
    showFormScreen,
    setTitle,
    setDescription,
    setDate,
    cancelForm,
} = formSlice.actions;

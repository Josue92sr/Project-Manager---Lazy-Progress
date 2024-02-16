import { configureStore } from "@reduxjs/toolkit";
import openSlice from "./openSlice";
import { toogle } from "./openSlice";
import formSlice from "./formSlice";
import {
    showDefaultScreen,
    showDetailScreen,
    showFormScreen,
    setTitle,
    setDescription,
    setDate,
    cancelForm,
} from "./formSlice";
import projectSlice from "./projectSlice";
import {
    createProject,
    selectProject,
    createTask,
    deleteProject,
    deleteTask,
} from "./projectSlice";
const store = configureStore({
    reducer: {
        isOpen: openSlice,
        openForm: formSlice,
        project: projectSlice,
    },
});
export default store;
export {
    toogle,
    showDefaultScreen,
    showDetailScreen,
    showFormScreen,
    setTitle,
    setDescription,
    setDate,
    cancelForm,
    createProject,
    selectProject,
    createTask,
    deleteProject,
    deleteTask,
};

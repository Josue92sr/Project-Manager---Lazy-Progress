import { configureStore } from "@reduxjs/toolkit"
import formSlice from "./formSlice"
import {
  showDetailScreen,
  showFormScreen,
  setTitle,
  setDescription,
  setDate,
  cancelForm,
} from "./formSlice"
import projectSlice from "./projectSlice"
import {
  createProject,
  selectProject,
  createTask,
  deleteProject,
  deleteTask,
} from "./projectSlice"
const store = configureStore({
  reducer: {
    openForm: formSlice,
    project: projectSlice,
  },
})
export default store
export {
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
}

// to use a better dispatch and selector in components
export type dispatchStore = typeof store.dispatch
export type selectorStore = ReturnType<typeof store.getState>

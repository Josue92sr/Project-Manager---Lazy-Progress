import {
  createSlice,
  createAction,
  isAnyOf,
  type PayloadAction,
} from "@reduxjs/toolkit"
import { createProject, selectProject, deleteProject } from "./index"

//types

type showDetailType = "landing" | "form" | "details"

type stateSlice = {
  showDetails: showDetailType
  title: string
  description: string
  date: string
}

const initialState: stateSlice = {
  showDetails: "landing", // 'form', 'landing', 'details'
  title: "",
  description: "",
  date: "",
}
const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    // este se debe implementar en extra reducers combinado con select project
    showDetailScreen: (state: stateSlice) => {
      state.showDetails = "details"
    },

    showFormScreen: (state: stateSlice) => {
      state.showDetails = "form"
    },

    setTitle: (state: stateSlice, action: PayloadAction<string>) => {
      state.title = action.payload
    },

    setDescription: (state: stateSlice, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    setDate: (state: stateSlice, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    cancelForm: state => {
      state.showDetails = "landing"
      state.description = ""
      state.date = ""
      state.title = ""
    },
  },
  extraReducers: builder => {
    builder.addCase(createProject, state => {
      state.title = ""
      state.description = ""
      state.date = ""
      state.showDetails = "details"
    })
    builder.addCase(selectProject, state => {
      state.showDetails = "details"
    })
    builder.addCase(deleteProject, state => {
      state.showDetails = "landing"
    })
  },
})
export default formSlice.reducer
export const {
  showDetailScreen,
  showFormScreen,
  setTitle,
  setDescription,
  setDate,
  cancelForm,
} = formSlice.actions

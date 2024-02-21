import { combineReducers, createSlice } from "@reduxjs/toolkit"
import {
  cancelForm,
  createProject,
  selectProject,
  deleteProject,
} from "./index"
type showDetailType = "landing" | "form" | "details"
type initialStateType = {
  showDetails: showDetailType
  isListOpen: boolean
}
const initialState: initialStateType = {
  showDetails: "landing",
  isListOpen: false,
}
const screenSlice = createSlice({
  name: "screenSlice",
  initialState,
  reducers: {
    openDetails: state => {
      state.isListOpen = false
    },
    openListProject: state => {
      state.isListOpen = true
    },
    showDetailScreen: state => {
      state.showDetails = "details"
    },

    showFormScreen: state => {
      state.showDetails = "form"
      state.isListOpen = false
    },
  },
  extraReducers: builder => {
    builder.addCase(cancelForm, state => {
      state.showDetails = "landing"
    })

    builder.addCase(createProject, state => {
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
export const {
  openDetails,
  openListProject,
  showDetailScreen,
  showFormScreen,
} = screenSlice.actions
export default screenSlice.reducer

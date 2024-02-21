import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { createProject, selectProject, deleteProject } from "./index"

//types

type stateSlice = {
  title: string
  description: string
  date: string
}

const initialState: stateSlice = {
  // showDetails: "landing", // 'form', 'landing', 'details'
  title: "",
  description: "",
  date: "",
}
const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    // este se debe implementar en extra reducers combinado con select project

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
    })
  },
})
export default formSlice.reducer
export const { setTitle, setDescription, setDate, cancelForm } =
  formSlice.actions

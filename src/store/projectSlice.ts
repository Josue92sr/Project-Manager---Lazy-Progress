import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit"

type projectType = {
  id: string
  title: string
  description: string
  date: string
  tasks: Array<string>
}
type sliceState = { data: projectType[]; selectedId: string }
const initialState: sliceState = {
  data: [], // [{proyect1},{proyect2}]
  selectedId: "", // id='1' and so on...
}
const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    createProject: (
      state: sliceState,
      action: PayloadAction<{
        title: string
        description: string
        date: string
      }>,
    ) => {
      //asuming a payload {title, description, date}
      state.data.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
        tasks: [],
      })
      state.selectedId = state.data[state.data.length - 1].id // the last position is always the new project
    },

    createTask: (state: sliceState, action: PayloadAction<string>) => {
      const selectedProject = state.data.find(project => {
        return project.id === state.selectedId
      })
      if (selectedProject) selectedProject.tasks.push(action.payload)
    },

    deleteTask: (state: sliceState, action: PayloadAction<number>) => {
      // asuming action.payload= idTask: // idTask: 3

      state.data = state.data.map(project => {
        if (project.id === state.selectedId) {
          project.tasks.splice(action.payload, 1)
        }
        return project
      })
    },

    selectProject: (state: sliceState, action: PayloadAction<string>) => {
      state.selectedId = action.payload // where in the payload is required and id number
    },

    deleteProject: (state: sliceState, action: PayloadAction<string>) => {
      // asuming action.payload === project Id

      state.data = state.data.filter(project => {
        return project.id !== action.payload
      })
    },
  },
})
export default projectSlice.reducer
export const {
  createProject,
  selectProject,
  deleteProject,
  createTask,
  deleteTask,
} = projectSlice.actions

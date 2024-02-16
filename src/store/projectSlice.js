import { createSlice, nanoid } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: {
        data: [], // [{proyect1},{proyect2}]
        selectedId: "", // id='1' and so on...
    },
    reducers: {
        createProject: (state, action) => {
            //asuming a payload {title, description, date}
            state.data.push({
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                date: action.payload.date,
                tasks: [],
            });
            state.selectedId = state.data[state.data.length - 1].id; // the last position is always the new project
        },
        createTask: (state, action) => {
            const selectedProject = state.data.find((project) => {
                return project.id === state.selectedId;
            });

            selectedProject.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            // asuming action.payload= idTask: // idTask: 3

            state.data = state.data.map((project) => {
                if (project.id === state.selectedId) {
                    project.tasks.splice(action.payload, 1);
                }
                return project;
            });
        },
        selectProject: (state, action) => {
            state.selectedId = action.payload; // where in the payload is required and id number
        },
        deleteProject: (state, action) => {
            // asuming action.payload === project Id

            state.data = state.data.filter((project) => {
                return project.id !== action.payload;
            });
        },
    },
});
export default projectSlice.reducer;
export const {
    createProject,
    selectProject,
    deleteProject,
    createTask,
    deleteTask,
} = projectSlice.actions;

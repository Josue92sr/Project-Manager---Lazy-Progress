import { type ReactNode, createContext, useContext, useReducer } from "react"

// types
type task = {
  id?: number | string
  description: string
}
type projectType = {
  id?: number | string
  title: string
  description: string
  date: string
  tasks?: task[]
}
export type projectState = {
  project: projectType[]
  form: {
    title: string
    description: string
    date: string
  }
  pageToShow: "default" | "form" | "project"
}
export type projectPropsType = {
  project: projectType[]
  form: {
    title: string
    description: string
    date: string
  }
  pageToShow: "default" | "form" | "project"
  addProject: () => void
  changeTitle: (param: string) => void
  changeDescription: (param: string) => void
  changeDate: (param: string) => void
  startForm: () => void
  cancelForm: () => void
}
type addProject = {
  type: "addProject"
  payload: projectType
}
type deleteProject = {
  type: "deleteProject"
  payload: number | string
}
type addTask = {
  type: "addTask"
  payload: {
    description: string
    id: number
  }
}
type startForm = { type: "startForm" }
type cancelForm = { type: "cancelForm" }
type formChange = {
  type: "titleChange" | "descriptionChange" | "dateChange"
  payload: string
}
type actionType =
  | addProject
  | deleteProject
  | addTask
  | formChange
  | startForm
  | cancelForm

// context
const contextProvider = createContext<projectPropsType | null>(null)
type ProviderProp = {
  children: ReactNode
}
const inicialState: projectState = {
  project: [],
  form: {
    title: "",
    description: "",
    date: "",
  },
  pageToShow: "default",
}

const reducer = (state: projectState, action: actionType): projectState => {
  switch (action.type) {
    case "addProject":
      return {
        ...state,
        project: [
          ...state.project,
          {
            id: Math.random(),
            title: state.form.title,
            description: state.form.description,
            date: state.form.date,
          },
        ],
        pageToShow: "project",
      }
      break
    case "titleChange":
      return {
        ...state,
        form: {
          ...state.form,
          title: action.payload,
        },
      }
      break

    case "descriptionChange":
      return {
        ...state,
        form: {
          ...state.form,
          description: action.payload,
        },
      }
      break

    case "dateChange":
      return {
        ...state,
        form: {
          ...state.form,
          date: action.payload,
        },
      }
      break
    case "startForm":
      return {
        ...state,
        pageToShow: "form",
      }
      break
    case "cancelForm":
      return {
        ...state,
        pageToShow: "default",
      }
      break
    default:
      return state
      break
  }
}
const ProjectStateProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(reducer, inicialState)
  const valueOb: projectPropsType = {
    project: state.project,
    form: {
      title: state.form.title,
      description: state.form.description,
      date: state.form.date,
    },

    pageToShow: state.pageToShow,

    addProject(project: projectType) {
      dispatch({ type: "addProject" })
    },
    changeTitle(title: string) {
      dispatch({ type: "titleChange", payload: title })
    },
    changeDescription(description: string) {
      dispatch({ type: "descriptionChange", payload: description })
    },
    changeDate(date: string) {
      dispatch({ type: "dateChange", payload: date })
    },
    startForm() {
      dispatch({ type: "startForm" })
    },
    cancelForm() {
      dispatch({ type: "cancelForm" })
    },
  }

  return (
    <contextProvider.Provider value={valueOb}>
      {children}
    </contextProvider.Provider>
  )
}

export default contextProvider
export { ProjectStateProvider }

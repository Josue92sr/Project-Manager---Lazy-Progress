import { FiXCircle } from "react-icons/fi"
import { dispatchApp, selectorApp } from "../hooks/useDispatchSelector"
// import { useRef } from "react"
import { selectProject, showFormScreen } from "../store/index"

export type propsType = {
  onShow: (a: boolean) => void
  open: boolean
  firstRender?: number
}
let renderChecker = 0
function ProjectDetails({ onShow, open }: propsType) {
  const dispatch = dispatchApp()
  const projectItemOb = selectorApp(state => {
    return state.project.data
  })
  const { selectedId } = selectorApp(state => {
    return state.project
  })

  // const refProject = useRef(null)
  const handleHide = () => {
    onShow(false)
  }

  const handleShowForm = () => {
    dispatch(showFormScreen())
  }

  const handleSelectProject = (id: string) => {
    dispatch(selectProject(id))
  }
  let classes: string | undefined
  if (renderChecker < 2) {
    console.log(renderChecker)
    classes = "hidden"
  } else if (renderChecker >= 2) {
    classes = ""
  }

  renderChecker++
  const projectLists = projectItemOb.map(project => {
    let selectedStyles = ""
    if (selectedId === project.id) selectedStyles = "bg-stone-600  "
    else selectedStyles = " bg-stone-900 "
    return (
      <div
        // ref={refProject}
        key={project.id}
        onClick={e => handleSelectProject(project.id)}
        className={`py-2 px-3 hover:cursor-pointer text-stone-200 min-w-[80vw] max-w-[80vw] sm:min-w-[35vw] sm:max-w-[35vw] ${selectedStyles}`}
      >
        {project.title}
      </div>
    )
  })

  //max-sm:animate-fade
  return (
    <div
      className={` m-0 bg-stone-900 text-white w-full z-10 max-sm:absolute h-screen  p-5 sm:w-1/3 ${classes} ${open ? "w-full max-sm:animate-show  " : " max-sm:animate-fade  sm:block sm:static "}`}
    >
      <FiXCircle
        onClick={handleHide}
        className="sm:hidden hover:cursor-pointer hover:animate-pulse mb-3 absolute right-5 "
      />

      <h1 className="text-3xl  font-semibold sm:mt-10 text-stone-200 ">
        Your Projects
      </h1>
      <button
        onClick={handleShowForm}
        className="mt-10 border border-stone-200 p-3 rounded-xl bg-stone-600 hover:bg-stone-700 text-stone-300 mb-5"
      >
        Add a Project
      </button>
      {projectLists}
    </div>
  )
}

export default ProjectDetails

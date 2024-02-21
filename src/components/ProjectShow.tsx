import { propsType } from "./ProjectList"
import { FiMenu } from "react-icons/fi"
import { selectorApp } from "../hooks/useDispatchSelector"

import ProjectDetails from "./ProjectDetails"
import DefaultShow from "./DefaultShow"
import ProjectForm from "./ProjectForm"

function ProjectList({ onShow, open }: propsType) {
  const pageToShow = selectorApp(state => {
    return state.openForm.showDetails
  })

  let renderPage: React.JSX.Element | undefined
  if (pageToShow === "form") renderPage = <ProjectForm />
  if (pageToShow === "details") renderPage = <ProjectDetails />
  if (pageToShow === "landing") renderPage = <DefaultShow />

  const handleShow = () => {
    onShow(true)
  }
  return (
    <div
      className={`bg-stone-100  text-stone-700 items-center max-sm:absolute h-screen w-full sm:w-2/3  p-5 m-0 ${
        open ? "w-full max-sm:block" : "sm:block sm:static"
      }`}
    >
      <FiMenu
        onClick={handleShow}
        className="sm:hidden hover:animate-pulse hover:cursor-pointer absolute right-5 "
      />
      {renderPage}
    </div>
  )
}

export default ProjectList

import { propsType } from "./ProjectList"
import { FiXCircle } from "react-icons/fi"

function ProjectList({ onShow, open }: propsType) {
  const handleShow = () => {
    onShow(true)
  }

  return (
    <div
      className={`bg-red-600 text-white max-sm:absolute h-screen w-full z-10 sm:w-2/3  p-5 m-0 ${
        open
          ? " max-sm:animate-fade  sm:block sm:static"
          : "w-full max-sm:animate-show"
      }`}
    >
      <FiXCircle
        onClick={handleShow}
        className="sm:hidden hover:animate-pulse hover:cursor-pointer absolute right-5 "
      />
      ProjectList
    </div>
  )
}

export default ProjectList

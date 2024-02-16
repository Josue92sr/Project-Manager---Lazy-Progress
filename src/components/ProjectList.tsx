import { FiMenu } from "react-icons/fi"

export type propsType = {
  onShow: (a: boolean) => void
  open: boolean
  firstRender?: number
}

function ProjectDetails({ onShow, open }: propsType) {
  const handleHide = () => {
    onShow(false)
  }

  //max-sm:animate-fade
  return (
    <div
      className={` m-0 bg-black text-white w-full max-sm:absolute h-screen  p-5 sm:w-1/3 ${open ? "w-full max-sm:block" : " z-0 sm:block sm:static"}`}
    >
      <FiMenu
        onClick={handleHide}
        className="sm:hidden hover:cursor-pointer hover:animate-pulse mb-3 absolute right-5 "
      />
      Project Details
    </div>
  )
}

export default ProjectDetails
